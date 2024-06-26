import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import serve from 'rollup-plugin-serve';
import rollupSvelte from 'rollup-plugin-svelte';
import rollupSwc from 'rollup-plugin-swc3';
import rollupCleanup from 'rollup-plugin-cleanup';

import { less } from 'svelte-preprocess-less';
import sveltePreprocess from 'svelte-preprocess';

import { transformCodeToESMPlugin, keyPEM, certificatePEM } from '@windycom/plugin-devtools';

import geojson from 'rollup-plugin-geojson';

const useSourceMaps = true;

const buildConfigurations = {
    src: {
        input: 'src/plugin.svelte',
        out: 'plugin',
    },
    example05: {
        input: 'examples/05-airspace-map/plugin.svelte',
        out: 'example05/plugin',
    },
};

const requiredConfig = process.env.CONFIG || 'src';
const { input, out } = buildConfigurations[requiredConfig];

export default [
{
    input,
    output: [
        {
            file: `dist/${out}.js`,
            format: 'module',
            sourcemap: true,
        },
        {
            file: `dist/${out}.min.js`,
            format: 'module',
            plugins: [rollupCleanup({ comments: 'none', extensions: ['ts'] }), terser()],
        },
    ],

    onwarn: () => {
        /* We disable all warning messages */
    },
    external: id => id.startsWith('@windy/'),
    watch: {
        include: ['src/**', 'examples/**'],
        exclude: 'node_modules/**',
        clearScreen: false,
    },
    plugins: [
        typescript({
            sourceMap: useSourceMaps,
            inlineSources: false,
        }),
        rollupSwc({
            include: ['**/*.ts', '**/*.svelte'],
            sourceMaps: useSourceMaps,
        }),
        rollupSvelte({
            emitCss: false,
            preprocess: {
                style: less({
                    sourceMap: false,
                    math: 'always',
                }),
                script: data => {
                    const preprocessed = sveltePreprocess({ sourceMap: useSourceMaps });
                    return preprocessed.script(data);
                },
            },
        }),

        resolve({
            browser: true,
            mainFields: ['module', 'jsnext:main', 'main'],
            preferBuiltins: false,
            dedupe: ['svelte'],
        }),
        commonjs(),
        transformCodeToESMPlugin(),
        process.env.SERVE !== 'false' &&
            serve({
                contentBase: 'dist',
                host: '0.0.0.0',
                port: 9999,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                https: {
                    key: keyPEM,
                    cert: certificatePEM,
                },
            }),
        geojson(),
    ],
},
//{
//input: 'src/plugin.svelte',
//    output: {
//        dir: 'output',
//        format: 'cjs'
//    },
//    plugins: [geojson()]
//}
];
