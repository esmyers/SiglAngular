var configuration = {}
configuration.projectName = "SIGL Mapper";
configuration.baseurls =
{   
    'NWISurl': 'http://waterservices.usgs.gov/nwis',
    'SearchAPI': 'http://txpub.usgs.gov/DSS/search_api/1.1/dataService/dataService.ashx',
    'NationalMapRasterServices': 'http://raster.nationalmap.gov/arcgis/rest/services',
    'SIGLServices': 'https://sigldev.wim.usgs.gov/'
    
}

configuration.queryparams =
{
    "NWISsite": '/site/?format=mapper,1.0&stateCd={0}&siteType=GL,OC,OC-CO,ES,LK,ST,ST-CA,ST-DCH,ST-TS&hasDataTypeCd=iv',
    'NLCDQueryService': '/LandCover/USGS_EROS_LandCover_NLCD/MapServer/4'
}

configuration.basemaps =
{

    gray: {
        name: "ESRI Gray",
        type: "agsBase",
        layer: "Gray",
        visible: true
    },
    "national": {
        name: "National Geographic",
        type: "agsBase",
        layer: "NationalGeographic",
        visible: false
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
        visible: false
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
   
    //tribalReservations: {
    //    name: 'Tribal Reservation Boundaries',
    //    type: 'agsDynamic',
    //    url: 'http://gis.wim.usgs.gov/arcgis/rest/services/SIGL/SIGLMapper/MapServer/',
    //    visible: true,
    //    layerOptions: {
    //        layers: [4],
    //        opacity: .5
    //    }
    //},
    //cededTribalBoundaries: {
    //    name: 'Ceded Tribal Boundaries',
    //    type: 'agsDynamic',
    //    url: 'http://gis.wim.usgs.gov/arcgis/rest/services/SIGL/SIGLMapper/MapServer/',
    //    visible: true,
    //    layerOptions: {
    //        layers: [5],
    //        opacity: .5
    //    }
    //},
    //GLRI: {
    //    name: 'USGS GLRI Nutrient Monitoring Basins',
    //    type: 'agsDynamic',
    //    url: 'http://gis.wim.usgs.gov/arcgis/rest/services/SIGL/SIGLMapper/MapServer/',
    //    visible: true,
    //    layerOptions: {
    //        layers: [2],
    //        opacity: .5
    //    }
    //},

    //basins: {
    //    name: 'Great Lakes Basins',
    //    type: 'agsDynamic',
    //    url: 'http://gis.wim.usgs.gov/arcgis/rest/services/SIGL/SIGLMapper/MapServer/',
    //    visible: true,
    //    layerOptions: {
    //        layers: [3],
    //        opacity: .5
    //    }
    //},
    AAsiglSites: {
        name: 'SIGL Sites',
        type: 'wms',
        visible: true,
        url: 'http://gs29.wim.usgs.gov:8080/geoserver/wms/',
        layerParams: {
            layers: 'usgs:site',
            format: 'image/png',
            transparent: true,
            version: '1.1.0',
            zIndex: '10'

        }
    },
    AOC: {
        name: 'EPA Areas of Concern',
        type: 'agsDynamic',
        url: 'http://gis.wim.usgs.gov/arcgis/rest/services/SIGL/SIGLMapper/MapServer/',
        visible: true,
        layerOptions: {
            layers: [1],
            opacity: .5
        }
    }

    //http://docs.geoserver.org/stable/en/user/services/wms/reference.html#wms-getmap
}//end overlayedLayers