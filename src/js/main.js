const ol = require('js/ol.js');
require('css/ol.css');


        // Open Street Map 地图层
        var openStreetMapLayer = new ol.layer.Tile({
            source: new ol.source.XYZ({
                /* openstreet 地图 */
                // url: 'http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                /* 高德地图 */
                // url:'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
                /* yahoo地图 */
                // url:'https://{0-3}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/512/png8?lg=ENG&ppi=250&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B'
                /* google地图 */
                url:'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
            })
        });

        // 创建地图
      var map = new ol.Map({
            layers: [
                openStreetMapLayer
            ],
            view: new ol.View({
                // 设置成都为地图中心
                center: [104.06, 30.67],
                projection: 'EPSG:4326',
                zoom: 10
            }),
            target: 'map'
      });
