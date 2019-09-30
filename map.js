var initMap = function (containerId) {
    var map = L.map(containerId
        // {preferCanvas:true}
    ).setView([37, 120], 4);

    var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'});
    baseLayer.addTo(map);
    var vector = new L.WindTilelayer();
    vector.addTo(map);

    //弹出面板
    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    //添加click时间
    map.on('click', onMapClick);

    // 111.83558331994357, 21.56955553816798

    // L.marker([21.56955553816798, 111.83558331994357]).addTo(map)
    //     .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    var myStyle = {
        "color": "#00f",
        "weight": 3,
        "opacity": 0.5,

    };
//geojson数据
    var someFeatures = [{
        "type": "Feature",
        "properties": {
            "name": "Coors Field",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [22.56955553816798, 111.83558331994357]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Busch Field",
            "show_on_map": false
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-104.98404, 39.74621]
        }
    }];
//渲染方法
//     var layerGeo = L.geoJSON(someFeatures, {
//         style:myStyle
//     }).addTo(map);


}