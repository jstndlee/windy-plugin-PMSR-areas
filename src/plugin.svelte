<div class="size-s mb-5">PMSR areas</div>

<script lang="ts">
    import { map } from '@windy/map';
    import { onDestroy } from 'svelte';

    let layer: L.GeoJSON | null = null;

    var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
                [-119.22, 34.08],
                [-119.07, 34.03],
                [-119.05, 34.07],
                [-119.10, 34.10],
                [-119.12, 34.12],
                [-119.15, 34.12],
                [-119.18, 34.08],
                [-119.22, 34.08]
            ]
          ]
        },
        "properties": {
          "name": "R2519",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -119.4,
                34.05,
                0
              ],
              [
                -119.1,
                33.9,
                0
              ],
              [
                -119.07,
                34.03,
                0
              ],
              [
                -119.22,
                34.08,
                0
              ],
              [
                -119.4,
                34.05,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "W289E",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -119.78,
                34,
                0
              ],
              [
                -119.12,
                33.65,
                0
              ],
              [
                -119.12,
                33.87,
                0
              ],
              [
                -119.1,
                33.9,
                0
              ],
              [
                -119.4,
                34.05,
                0
              ],
              [
                -119.62,
                34,
                0
              ],
              [
                -119.78,
                34,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "W289W",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -119.2750379,
                33.7327917,
                0
              ],
              [
                -119.68,
                33.5,
                0
              ],
              [
                -119.42,
                33.25,
                0
              ],
              [
                -119.12,
                33.47,
                0
              ],
              [
                -119.12,
                33.65,
                0
              ],
              [
                -119.2750379,
                33.7327917,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "3A",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.12,
                33.88,
                0
              ],
              [
                -119.68,
                33.5,
                0
              ],
              [
                -119.2750379,
                33.7327917,
                0
              ],
              [
                -119.7251023,
                33.9711256,
                0
              ],
              [
                -120.12,
                33.88,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "3B",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.22,
                33.37,
                0
              ],
              [
                -119.7492061,
                32.6488076,
                0
              ],
              [
                -119.4199021,
                32.9280031,
                0
              ],
              [
                -119.42,
                33.25,
                0
              ],
              [
                -119.68,
                33.5,
                0
              ],
              [
                -120.22,
                33.37,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "4A",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.32,
                32.98,
                0
              ],
              [
                -120.7172092,
                32.0733772,
                0
              ],
              [
                -120.33,
                32.15,
                0
              ],
              [
                -120.1734225,
                32.285279,
                0
              ],
              [
                -120.77,
                33.18,
                0
              ],
              [
                -121.32,
                32.98,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "6A",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.32,
                32.98,
                0
              ],
              [
                -122.020869,
                32.7296728,
                0
              ],
              [
                -121.72,
                32.22,
                0
              ],
              [
                -121.57,
                31.9,
                0
              ],
              [
                -120.7172092,
                32.0733772,
                0
              ],
              [
                -121.32,
                32.98,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "7A",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.682654,
                33.5326115,
                0
              ],
              [
                -122.32,
                33.23,
                0
              ],
              [
                -122.020869,
                32.7296728,
                0
              ],
              [
                -121.32,
                32.98,
                0
              ],
              [
                -121.682654,
                33.5326115,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "7B",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.1508047,
                33.7810523,
                0
              ],
              [
                -121.682654,
                33.5326115,
                0
              ],
              [
                -121.32,
                32.98,
                0
              ],
              [
                -120.77,
                33.18,
                0
              ],
              [
                -121.1508047,
                33.7810523,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "6B",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.77,
                33.18,
                0
              ],
              [
                -120.22,
                33.37,
                0
              ],
              [
                -120.5,
                33.82,
                0
              ],
              [
                -120.5,
                34,
                0
              ],
              [
                -120.5,
                34.08,
                0
              ],
              [
                -121.1508047,
                33.7810523,
                0
              ],
              [
                -120.77,
                33.18,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "5B",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.5,
                33.82,
                0
              ],
              [
                -120.27,
                33.82,
                0
              ],
              [
                -120.27,
                34,
                0
              ],
              [
                -120.5,
                34,
                0
              ],
              [
                -120.5,
                33.82,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "3F",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.22,
                33.37,
                0
              ],
              [
                -119.68,
                33.5,
                0
              ],
              [
                -120.12,
                33.88,
                0
              ],
              [
                -120.27,
                33.82,
                0
              ],
              [
                -120.5,
                33.82,
                0
              ],
              [
                -120.22,
                33.37,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "4B",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -119.12,
                33.47,
                0
              ],
              [
                -119.42,
                33.25,
                0
              ],
              [
                -119.4199021,
                32.9280031,
                0
              ],
              [
                -119.12,
                33.18,
                0
              ],
              [
                -119.12,
                33.47,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "M5",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.655064,
                35.5631973,
                0
              ],
              [
                -121.323562,
                35.074285,
                0
              ],
              [
                -121.03,
                35.2,
                0
              ],
              [
                -121.53,
                35.62,
                0
              ],
              [
                -121.655064,
                35.5631973,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "4D",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.655064,
                35.5631973,
                0
              ],
              [
                -122.1730041,
                35.3252347,
                0
              ],
              [
                -121.8704211,
                34.8507396,
                0
              ],
              [
                -121.68,
                34.92,
                0
              ],
              [
                -121.323562,
                35.074285,
                0
              ],
              [
                -121.655064,
                35.5631973,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "5D",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.4297425,
                34.6448455,
                0
              ],
              [
                -121.8704211,
                34.8507396,
                0
              ],
              [
                -122.1730041,
                35.3252347,
                0
              ],
              [
                -122.72,
                35.07,
                0
              ],
              [
                -122.4297425,
                34.6448455,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "6D",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.4297425,
                34.6448455,
                0
              ],
              [
                -122.72,
                35.07,
                0
              ],
              [
                -123,
                35.48,
                0
              ],
              [
                -123.57,
                35.22,
                0
              ],
              [
                -123.03,
                34.42,
                0
              ],
              [
                -122.4297425,
                34.6448455,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "7D",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.03,
                35.2,
                0
              ],
              [
                -121.323562,
                35.074285,
                0
              ],
              [
                -121.2286053,
                34.9446531,
                0
              ],
              [
                -120.92,
                35.08,
                0
              ],
              [
                -121.03,
                35.2,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "4E",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.2286053,
                34.9446531,
                0
              ],
              [
                -121.323562,
                35.074285,
                0
              ],
              [
                -121.68,
                34.92,
                0
              ],
              [
                -121.8704211,
                34.8507396,
                0
              ],
              [
                -121.7648502,
                34.6904026,
                0
              ],
              [
                -121.6,
                34.78,
                0
              ],
              [
                -121.2286053,
                34.9446531,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "5E",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.7648502,
                34.6904026,
                0
              ],
              [
                -121.8704211,
                34.8507396,
                0
              ],
              [
                -122.4297425,
                34.6448455,
                0
              ],
              [
                -122.2670388,
                34.4142647,
                0
              ],
              [
                -121.7648502,
                34.6904026,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "6E",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.2670388,
                34.4142647,
                0
              ],
              [
                -122.4297425,
                34.6448455,
                0
              ],
              [
                -123.03,
                34.42,
                0
              ],
              [
                -122.83,
                34.1,
                0
              ],
              [
                -122.2670388,
                34.4142647,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "7E",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.27,
                34,
                0
              ],
              [
                -120.27,
                33.82,
                0
              ],
              [
                -120.12,
                33.88,
                0
              ],
              [
                -119.7251023,
                33.9711256,
                0
              ],
              [
                -119.78,
                34,
                0
              ],
              [
                -120.27,
                34,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "3E",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.2286053,
                34.9446531,
                0
              ],
              [
                -121.08,
                34.7,
                0
              ],
              [
                -120.6726087,
                34.700965,
                0
              ],
              [
                -120.7083606,
                34.7580146,
                0
              ],
              [
                -120.6892859,
                34.8457412,
                0
              ],
              [
                -120.7259211,
                34.8935037,
                0
              ],
              [
                -120.72,
                34.93,
                0
              ],
              [
                -120.92,
                35.08,
                0
              ],
              [
                -121.2286053,
                34.9446531,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "M1",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.8661376,
                34.2801425,
                0
              ],
              [
                -120.5,
                34.38,
                0
              ],
              [
                -120.6023719,
                34.4933459,
                0
              ],
              [
                -120.6629818,
                34.5143712,
                0
              ],
              [
                -120.7011987,
                34.5620736,
                0
              ],
              [
                -120.6953163,
                34.6230447,
                0
              ],
              [
                -120.6726087,
                34.700965,
                0
              ],
              [
                -121.08,
                34.7,
                0
              ],
              [
                -120.8661376,
                34.2801425,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "M2",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.4007188,
                34.1317984,
                0
              ],
              [
                -120.8661376,
                34.2801425,
                0
              ],
              [
                -121.08,
                34.7,
                0
              ],
              [
                -121.2286053,
                34.9446531,
                0
              ],
              [
                -121.6,
                34.78,
                0
              ],
              [
                -121.7648502,
                34.6904026,
                0
              ],
              [
                -121.4007188,
                34.1317984,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "5C",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.4007188,
                34.1317984,
                0
              ],
              [
                -121.7648502,
                34.6904026,
                0
              ],
              [
                -122.2670388,
                34.4142647,
                0
              ],
              [
                -121.9791336,
                33.9681559,
                0
              ],
              [
                -121.4007188,
                34.1317984,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "6C",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.9791336,
                33.9681559,
                0
              ],
              [
                -122.2670388,
                34.4142647,
                0
              ],
              [
                -122.83,
                34.1,
                0
              ],
              [
                -122.63,
                33.78,
                0
              ],
              [
                -121.9791336,
                33.9681559,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "7C",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.4999785,
                34.38,
                0
              ],
              [
                -122.7302789,
                33.7506423,
                0
              ],
              [
                -122.3805391,
                33.2009797,
                0
              ],
              [
                -120.4999785,
                34.08,
                0
              ],
              [
                -120.4999785,
                34.38,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "W537",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.77,
                33.18,
                0
              ],
              [
                -120.17,
                32.28,
                0
              ],
              [
                -119.75,
                32.65,
                0
              ],
              [
                -120.22,
                33.37,
                0
              ],
              [
                -120.77,
                33.18,
                0
              ]
            ]
          ]
        },
        "properties": {
          "name": "5A",
          "fill-opacity": 0,
          "stroke-opacity": 1,
          "stroke": 0,
          "stroke-width": 1.2
        }
      }
    ]
  };

    layer = new L.GeoJSON(geojson, {
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

