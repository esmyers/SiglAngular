var configuration = {}
configuration.projectName = "Groundwater Watch";
configuration.baseurls =
{   
    'NWISurl': 'http://waterservices.usgs.gov/nwis',
    'SearchAPI': 'http://txpub.usgs.gov/DSS/search_api/1.1/dataService/dataService.ashx',
    'NationalMapRasterServices': 'http://raster.nationalmap.gov/arcgis/rest/services'
}

//override GroundWaterWatch services URL if on production
if (window.location.origin == 'http://GroundWaterWatchags.cr.usgs.gov') configuration.baseurls.GroundWaterWatchServices = 'http://GroundWaterWatchags.cr.usgs.gov';

configuration.queryparams =
{
    "NWISsite": '/site/?format=mapper,1.0&stateCd={0}&siteType=GL,OC,OC-CO,ES,LK,ST,ST-CA,ST-DCH,ST-TS&hasDataTypeCd=iv',
    'NLCDQueryService': '/LandCover/USGS_EROS_LandCover_NLCD/MapServer/4'
}

configuration.basemaps =
{
    national: {
        name: "National Geographic",
        type: "agsBase",
        layer: "NationalGeographic",
        visible: true
    },
    "tnmBaseMap": {
        "name": "USGS National Map",
        "visible": false,
        "type": 'group',
        "layerOptions": {
            "layers": [
                {
                    "name": "tiles",
                    "url": "http://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer",
                    "type": 'agsTiled',
                    "layerOptions": {
                        "opacity": 0.8,
                        "minZoom": 0,
                        "maxZoom": 15,
                        "attribution": "<a href='http://www.doi.gov'>U.S. Department of the Interior</a> | <a href='http://www.usgs.gov'>U.S. Geological Survey</a> | <a href='http://www.usgs.gov/laws/policies_notices.html'>Policies</a>"
                    }
                },
                {
                    "name": "dynamic",
                    "url": "http://services.nationalmap.gov/arcgis/rest/services/USGSTopoLarge/MapServer",
                    "type": 'agsDynamic',
                    "layerOptions": {
                        "format": "png8",
                        "f": "image",
                        "position": "back",
                        "opacity": 0.7,
                        "zIndex": -100,
                        "minZoom": 16,
                        "maxZoom": 20,
                        "attribution": "<a href='http://www.doi.gov'>U.S. Department of the Interior</a> | <a href='http://www.usgs.gov'>U.S. Geological Survey</a> | <a href='http://www.usgs.gov/laws/policies_notices.html'>Policies</a>"
                    }
                }
            ]
        }
    },
    streets: {
        name: "ESRI Streets",
        type: "agsBase",
        layer: "Streets",
        visible: true
    },
    topo: {
        name: "ESRI World Topographic",
        type: "agsBase",
        layer: "Topographic",
        visible: false
    },
    oceans: {
        name: "ESRI Oceans",
        type: "agsBase",
        layer: "Oceans",
        visible: false
    },
    gray: {
        name: "ESRI Gray",
        type: "agsBase",
        layer: "Gray",
        visible: false
    },
    imagery: {
        name: "ESRI Imagery",
        type: "agsBase",
        layer: "Imagery",
        visible: false
    },
    "MapquestOAM": {
        "name": "Mapquest Areal",
        "url": "http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png",
        "visible": false,
        "type": 'xyz',
        "layerOptions": {
            "maxZoom": 19,
            "subdomains": ['oatile1', 'oatile2', 'oatile3', 'oatile4'],
            "attribution": 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
        }
    },
    "MapquestHYB": {
        "name": "Mapquest Hybrid",
        "type": 'group',
        "visible": false,
        "layerOptions": {
            "maxZoom": 19,
            "layers": [
                {
                    "name": "tiles",
                    "url": "http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg",
                    "type": 'xyz',
                    "layerOptions": {
                        "maxZoom": 19,
                        "subdomains": ['oatile1', 'oatile2', 'oatile3', 'oatile4']
                    }
                },
                {
                    "name": "roads",
                    "url": "http://{s}.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png",
                    "type": 'xyz',
                    "layerOptions": {
                        "maxZoom": 19,
                        "subdomains": ['oatile1', 'oatile2', 'oatile3', 'oatile4'],
                        "attribution": 'Labels courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
                    }
                }
            ],
        }
    },
    "mapquestOSM": {
        "name": "Mapquest Streets",
        "url": "http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png",
        "visible": false,
        "type": 'xyz',
        "layerOptions": {
            "maxZoom": 19,
            "subdomains": ['otile1', 'otile2', 'otile3', 'otile4'],
            "attribution": "Tiles courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'>. Map data (c) <a href='http://www.openstreetmap.org/' target='_blank'>OpenStreetMap</a> contributors, CC-BY-SA."
        }
    }
}// end baselayer

configuration.overlayedLayers = {
    states: {
        name: 'States',
        type: 'agsDynamic',
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer',
        visible: true,
        layerOptions: {
            layers: [3],
            opacity: 1
        }
    },
    nwis: {
        name: "USGS real-time streamgages",
        type: "agsFeature",
        url: "https://stnmapservices.wim.usgs.gov:6443/arcgis/rest/services/STN/STN_nwis_rt/MapServer/0",
        visible: false,
        layerOptions: {}
    },
    gww: {
        name: 'Groundwater Sites',
        type: 'wms',
        visible: true,
        url: 'http://cida-test.er.usgs.gov/ngwmn-geoserver/ngwmn/wms',
        layerParams: {
            layers: 'ngwmn:Latest_WL_Percentile',
            format: 'image/png',
            transparent: true,
            version:'1.1.0'
            }
    }
    //http://cida-test.er.usgs.gov/ngwmn-geoserver/ngwmn/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image%2Fpng&TRANSPARENT=true&QUERY_LAYERS=ngwmn%3ALatest_WL_Percentile&STYLES&LAYERS=ngwmn%3ALatest_WL_Percentile&INFO_FORMAT=application/json&FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG%3A4269&WIDTH=101&HEIGHT=101&BBOX=-114.0380859375,28.3447265625,-105.1611328125,37.2216796875
    //http://docs.geoserver.org/stable/en/user/services/wms/reference.html#wms-getmap
}//end overlayedLayers