<div class="plugin__mobile-header">
    { title }
</div>
<section class="plugin__content">
    <div
        class="plugin__title plugin__title--chevron-back"
        on:click={ () => bcast.emit('rqstOpen', 'menu') }
    >
    { title }
    </div>
    Put your plugin code here
</section>
<script lang="ts">
    import { pmsr } from "./pmsr.geojson.json";
    import { map } from '@windy/map'
    import { onDestroy } from 'svelte';

    const geoJsonData = pmsr;

    layer = new L.GeoJSON(geoJsonData, {
        style: {
            color: '#76f5f7',
            weight: 1,
            opacity: 0.7,
            fillOpacity: 0.2,
            fillColor: 'transparent',
         },
    });

    map.addLayer(layer)

    onDestroy(() => {
        if(layer) {
            layer.remove();
        }
    });
</script>

<style lang="less">
    // Put any LESS of CSS styles here
</style>

