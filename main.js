let lat = 45.873466;
let lng = 11.799173;
let zoom = 9

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale({ imperial: false }).addTo(map);

let jsondata = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-19.511292, 63.5321038]
            },
            "properties": {
                "user": "danielwebmap",
                "name": "Skógafoss Wasserfall",
                "wikipedia": "https://de.wikipedia.org/wiki/Sk%C3%B3gafoss"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [175.679722, -37.8575]
            },
            "properties": {
                "user": "madeleinehll",
                "name": "Auckland",
                "wikipedia": "https://en.wikipedia.org/wiki/Hobbiton_Movie_Set"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.799173, 45.873466]
            },
            "properties": {
                "user": "laurauniibk",
                "name": "Monte Grappa",
                "wikipedia": "https://de.wikipedia.org/wiki/Monte_Grappa "
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-124.636604, 47.908683]
            },
            "properties": {
                "user": "webmapping",
                "name": "La Push",
                "wikipedia": "https://de.wikipedia.org/wiki/La_Push_(Washington)"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.616667, 52.133333]
            },
            "properties": {
                "user": "ernstanton",
                "name": "Magdeburg",
                "wikipedia": "https://de.wikipedia.org/wiki/Magdeburg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.433611, 47.776389]
            },
            "properties": {
                "user": "annagruber263",
                "name": "Salzkammergut",
                "wikipedia": "https://de.wikipedia.org/wiki/Salzkammergut"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.574444, 48.139722]
            },
            "properties": {
                "user": "kreiselinho",
                "name": "München",
                "wikipedia": "https://de.wikipedia.org/wiki/M%C3%BCnchen"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.4216666666671771, 47.426944444444]
            },
            "properties": {
                "user": "amjusi",
                "name": "Karwendel",
                "wikipedia": "https://www.wikiwand.com/de/Karwendel"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-16.64235, 28.27273]
            },
            "properties": {
                "user": "marcfk",
                "name": "Nationalpark Teide",
                "wikipedia": "https://de.wikipedia.org/wiki/Teide"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.250278, 46.816944]
            },
            "properties": {
                "user": "sebspr",
                "name": "Das Passeiertal",
                "wikipedia": "https://de.wikipedia.org/wiki/Passeier"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [77.516667, 34.15]
            },
            "properties": {
                "user": "marcelboehm",
                "name": "Ladakh",
                "wikipedia": "https://de.wikipedia.org/wiki/Ladakh"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [7.86675, 45.9369]
            },
            "properties": {
                "user": "sophiest01",
                "name": "Dufourspitze",
                "wikipedia": "https://de.wikipedia.org/wiki/Dufourspitze"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [11.286111, 47.32]
            },
            "properties": {
                "user": "johanna135",
                "name": "Gipfelstürmernadel",
                "wikipedia": "https://de.wikipedia.org/wiki/Gipfelstürmernadel"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [8.271111, 50]
            },
            "properties": {
                "user": "czackl",
                "name": "Mainz",
                "wikipedia": "https://de.wikipedia.org/wiki/Mainz"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-19.063889, 63.988611]
            },
            "properties": {
                "user": "meritkoch",
                "name": "Landmannalaugar",
                "wikipedia": "https://de.wikipedia.org/wiki/Landmannalaugar"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [10.979589, 47.416604]
            },
            "properties": {
                "user": "niklasschw",
                "name": "Schneefernerhaus",
                "wikipedia": "https://de.wikipedia.org/wiki/Schneefernerhaus"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [12.970926, 67.8802837]
            },
            "properties": {
                "user": "bendai98",
                "name": "Lofoten",
                "wikipedia": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [12.566667, 43.35]
            },
            "properties": {
                "user": "yle5",
                "name": "Gubbio",
                "wikipedia": "https://de.wikipedia.org/wiki/Gubbio"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [6.363708, 49.469972]
            },
            "properties": {
                "user": "laurent2997",
                "name": "Schengen ",
                "wikipedia": "https://de.wikipedia.org/wiki/Schengen "
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [10.891667, 49.891667]
            },
            "properties": {
                "user": "lealucia",
                "name": "Bamberg",
                "wikipedia": "https://de.wikipedia.org/wiki/Bamberg "
            }
        }
    ]
};

L.geoJSON(jsondata, {
}).bindPopup(function (layer) {
    console.log(layer.feature.properties)
    return `
    <h2>This is ${layer.feature.properties.name}</h2>
    <ul>
        <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)}</li>
        <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)}</li>
        <li><a href="https://${layer.feature.properties.user}.github.io/top">Topseite</a></li>
        <li><a href= "${layer.feature.properties.wikipedia}">Wikipedia</a></li>
    </ul>
`;
}).addTo(map);