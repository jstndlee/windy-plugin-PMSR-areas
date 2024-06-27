<div class="size-s mb-5"> "PMSR areas" </div>
<script lang="ts">
//    import { pmsr } from "./pmsr.geojson";
    import { map } from '@windy/map'
    import { onDestroy } from 'svelte';

    const geoJsonData = "./pmsr.geojson";

    layer = new L.GeoJSON(geoJsonData, {
        style: {
            color: '#76f5f7',
            weight: 1,
            opacity: 0.7,
            fillOpacity:  0,
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

