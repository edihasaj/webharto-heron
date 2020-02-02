
Ext.namespace("Heron.options");
OpenLayers.Util.onImageLoadErrorColor = "transparent";

// All Map settings
Heron.options.settings = {
	projection: 'EPSG:7392',
    units: 'm',
    maxExtent: '7416000, 4632000, 7568000, 4796000',
    resolutions: [559.9999, 280, 140, 55.99999999999999, 27.999999999999996, 13.999999999999998, 6.999999999999999, 2.8, 1.4, 0.7, 0.27999999999999997, 0.13999999999999999, 0.07],
    center: '7458470,4737938',
	zoom: '3',
	
	};

Ext.namespace("Heron.options.wfs");
Heron.options.wfs.downloadFormats = [
    {
        name: 'CSV',
        outputFormat: 'csv',
        fileExt: '.csv'
    },
    {
        name: 'GML (version 2.1.2)',
        outputFormat: 'text/xml; subtype=gml/2.1.2',
        fileExt: '.gml'
    },
    {
        name: 'ESRI Shapefile (zipped)',
        outputFormat: 'SHAPE-ZIP',
        fileExt: '.zip'
    },
    {
        name: 'GeoJSON',
        outputFormat: 'json',
        fileExt: '.json'
    }
];

Ext.namespace("Heron.options.worklayers");
Heron.options.worklayers = {
    editor: new OpenLayers.Layer.Vector('Editor', {
        displayInLayerSwitcher: false, visibility: false}),
};

Heron.options.layers = [
	/*
     * ==================================
     *            Overlays
     * ==================================
     */

	
	new OpenLayers.Layer.WMS(
	"Ndërtesat",
	'http://localhost:8080/geoserver/webharto/wms?',
	{layers: "webharto:buildings", transparent: true,},
	{singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
		featureInfoFormat: 'application/jpeg',
	 }
	),
  
	new OpenLayers.Layer.WMS(
    "Rrugët",
    'http://localhost:8080/geoserver/webharto/wms?', 
    {layers: "webharto:roads", transparent: true,}, 
    {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
        featureInfoFormat: 'application/jpeg', 
     }
  ),
  
  	new OpenLayers.Layer.WMS(
    "Mbulueshmëria",
    'http://localhost:8080/geoserver/webharto/wms?',
    {layers: "webharto:landcover", transparent: true,},
    {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
        featureInfoFormat: 'application/jpeg',
     }
  ), 
       
  	new OpenLayers.Layer.WMS(
    "Urë",
    'http://localhost:8080/geoserver/webharto/wms?',
    {layers: "webharto:bridges", transparent: true,},
    {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
        featureInfoFormat: 'application/jpeg',
     }
  ),
  
  	new OpenLayers.Layer.WMS(
    "Pyjet",
    'http://localhost:8080/geoserver/webharto/wms?',
    {layers: "webharto:forests", transparent: true,},
    {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
        featureInfoFormat: 'application/jpeg',
     }
  ),
            
  	new OpenLayers.Layer.WMS(
    "Tunelet",
    'http://localhost:8080/geoserver/webharto/wms?',
    {layers: "webharto:tunnels", transparent: true,},
    {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
        featureInfoFormat: 'application/jpeg',
     }
  ),
              
  	new OpenLayers.Layer.WMS(
    "Sip. me ujë",
    'http://localhost:8080/geoserver/webharto/wms?',
    {layers: "webharto:water_areas", transparent: true,},
    {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
        featureInfoFormat: 'application/jpeg',
     }
  ),
                
  	new OpenLayers.Layer.WMS(
    "Vijat ujore",
    'http://localhost:8080/geoserver/webharto/wms?',
    {layers: "webharto:water_lines", transparent: true,},
    {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false,
        featureInfoFormat: 'application/jpeg',
     }
  ),
  
  new OpenLayers.Layer.WMS(
	"Orthophoto_2018_Urban",
   'http://geoportal.rks-gov.net/wmts?',
	{layers: "Orthophoto2018Urban", format: "image/png", transparent: true},
	{isBaseLayer: false, singleTile: false, visibility: true, alpha: true,
		attribution: "copyright AKK 2018: <a target='_blank' href='http://geoportal.rks-gov.net'>Orthophoto 2018 Urban</a>",
		transitionEffect: 'resize'
	}
    ),
		new OpenLayers.Layer.WMS(
	"Kufiri",
	'http://localhost:8080/geoserver/webharto/wms?',
	{layers: "webharto:Kufiri", transparent: true,},
	{singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: true,
		featureInfoFormat: 'application/jpeg',
	 }
	),
	
  	/*
     * ==================================
     *            Layeri baze OSM
     * ==================================
     */
 
	new OpenLayers.Layer.WMS(
        "Orthophoto2018Rural",
       'http://geoportal.rks-gov.net/wmts?',
        {layers: "Orthophoto2018Rural", format: "image/png", transparent: true},
        {isBaseLayer: true, singleTile: false, visibility: true, alpha: true,
            attribution: "copyright AKK 2018: <a target='_blank' href='http://geoportal.rks-gov.net'>Orthophoto 2018 Rural</a>",
            transitionEffect: 'resize'
        }
    ),
	
	
];

/** Create a config for the search panel. This panel may be embedded into the accordion
 * or bound to the "find" button in the toolbar. Here we use the toolbar button.
 */
Heron.options.searchPanelConfig = {
    xtype: 'hr_multisearchcenterpanel',
    height: 600,
    hropts: [
        {
            searchPanel: {
                xtype: 'hr_searchbydrawpanel',
                name: __('Search by Drawing'),
                header: false,
                downloadFormats: [
                    {
                        name: 'CSV',
                        outputFormat: 'csv',
                        fileExt: '.csv'
                    },
                    {
                        name: 'GML (version 2.1.2)',
                        outputFormat: 'text/xml; subtype=gml/2.1.2',
                        fileExt: '.gml'
                    },
                    {
                        name: 'ESRI Shapefile (zipped)',
                        outputFormat: 'SHAPE-ZIP',
                        fileExt: '.zip'
                    },
                    {
                        name: 'GeoJSON',
                        outputFormat: 'json',
                        fileExt: '.json'
                    }
                ]
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                autoConfig: true,
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: false
                }
            }
        },
        {
            searchPanel: {
                xtype: 'hr_gxpquerypanel',
                name: 'Maak eigen zoekopdrachten',
                description: 'Zoek objecten binnen kaart-extent en/of eigen zoek-criteria',
                header: false,
                border: false,
                caseInsensitiveMatch: true,
                autoWildCardAttach: true,
                downloadFormats: [
                    {
                        name: 'CSV',
                        outputFormat: 'csv',
                        fileExt: '.csv'
                    },
                    {
                        name: 'GML (version 2.1.2)',
                        outputFormat: 'text/xml; subtype=gml/2.1.2',
                        fileExt: '.gml'
                    },
                    {
                        name: 'ESRI Shapefile (zipped)',
                        outputFormat: 'SHAPE-ZIP',
                        fileExt: '.zip'
                    },
                    {
                        name: 'GeoJSON',
                        outputFormat: 'json',
                        fileExt: '.json'
                    }
                ]
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                border: false,
                autoConfig: true,
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: true
                }
            }
        },
        {
            searchPanel: {
                xtype: 'hr_searchbyfeaturepanel',
                name: 'Zoeken via object-selectie',
                description: 'Selecteer objecten uit een laag en gebruik hun geometrieën om in een andere laag te zoeken',
                header: false,
                border: false,
                bodyStyle: 'padding: 6px',
                style: {
                    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                    fontSize: '12px'
                },
                downloadFormats: [
                    {
                        name: 'CSV',
                        outputFormat: 'csv',
                        fileExt: '.csv'
                    },
                    {
                        name: 'GML (version 2.1.2)',
                        outputFormat: 'text/xml; subtype=gml/2.1.2',
                        fileExt: '.gml'
                    },
                    {
                        name: 'ESRI Shapefile (zipped)',
                        outputFormat: 'SHAPE-ZIP',
                        fileExt: '.zip'
                    },
                    {
                        name: 'GeoJSON',
                        outputFormat: 'json',
                        fileExt: '.json'
                    }
                ]
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                border: false,
                autoConfig: true,
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: false
                }
            }
        }
    ]
};


Heron.options.toolbar = [
    {type: "scale"},
    /* Leave out: see https://github.com/heron-mc/heron-mc/issues/116 */
    {type: "featureinfo", options: {
        popupWindow: {
            width: 360,
            height: 200,
            featureInfoPanel: {
                showTopToolbar: true,
                displayPanels: ['Table'],

                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                // exportFormats: ['CSV', 'XLS'],
                maxFeatures: 10,

                // In case that the same layer would be requested more than once: discard the styles
                discardStylesForDups: true
            }
        }
    }},
    {type: "-"} ,
    {type: "pan"},
//    {type: "pan", options: {iconCls: "icon-hand"}},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
/** Use "geodesic: true" for non-linear/Mercator projections like Google, Bing etc */
    {type: "measurelength", options: {geodesic: false}},
    {type: "measurearea", options: {geodesic: false}},
    {type: "-"},
    {type: "printdialog", options: {url: 'http://kademo.nl/print/pdf28992.kadviewer'}},
    {type: "-"},
    {type: "oleditor", options: {
        pressed: false,

        // Options for OLEditor
        olEditorOptions: {
            editLayer: Heron.options.worklayers.editor,
            activeControls: ['UploadFeature', 'DownloadFeature', 'Separator', 'Navigation', 'DeleteAllFeatures', 'DeleteFeature', 'DragFeature', 'SelectFeature', 'Separator', 'ModifyFeature', 'Separator'],
            featureTypes: ['text', 'polygon', 'path', 'point'],
            language: 'en',
            DownloadFeature: {
                url: Heron.globals.serviceUrl,
                formats: [
                    {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
                    {name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: new OpenLayers.Format.GML.v2({featureType: 'oledit', featureNS: 'http://geops.de'})},
                    {name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                    {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:32634')},
                    {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:32634')}
                ],
                // For custom projections use Proj4.js
                fileProjection: new OpenLayers.Projection('EPSG:32634')
            },
            UploadFeature: {
                url: Heron.globals.serviceUrl,
                formats: [
                    {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
                    {name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML'},
                    {name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                    {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:32634')},
                    {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:32634')},
                    {name: 'CSV (alleen RD-punten, moet X,Y kolom hebben)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:32634')},
                    {name: 'CSV (idem, punten in WGS84)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:32634')},
                    {name: 'ESRI Shapefile (1 laag, gezipped in RD)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                    {name: 'ESRI Shapefile (1 laag, gezipped in WGS84)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:32634')}
                ],
                // For custom projections use Proj4.js
                fileProjection: new OpenLayers.Projection('EPSG:28992')
            }
        }
    }
    },
    
    {type: "-"},
    {type: "coordinatesearch"},
    {
        type: "searchcenter",
        // Options for SearchPanel window
        options: {
            show: false,

            searchWindow: {
                title: null, //__('Multiple Searches'),
                x: 100,
                y: undefined,
                width: 360,
                height: 440,
                items: [
                    Heron.options.searchPanelConfig
                ]
            }
        }
    },
    {
        type: "namesearch",
        // Optional options, see OpenLSSearchCombo.js
        options: {
            xtype: 'hr_geocodercombo',
            id: "kerkosipasemrit",
            width: 240,
            listWidth: 400,
            minChars: 4,
            queryDelay: 200,
            zoom: 11,
            emptyText: 'Kerko adresen sipas emrit',
            tooltip: 'Kerko adresen sipas emrit',
        }
    },
    {type: "addbookmark"}
];


 /** Values for BookmarksPanel (bookmarks to jump to specific layers/zoom/center on map. */
 Ext.namespace("Heron.options.bookmarks");
 Heron.options.bookmarks =
         [
		              {
                 id: 'Qendra e qytetit',
                 name: 'Qendra e qytetit',
                 desc: 'Qendra e qytetit të Istogut',
                 layers: ['Cilido'],
                 x: 7457965.00,
                 y: 4738243.60,
                 zoom: 7
             },
             {
                 id: 'Burimi',
                 name: 'Burimi i Istogut',
                 desc: 'Burimi i Istogut',
                 layers: ['Cilido'],
                 x: 7457566.774,
                 y: 4738930.291,
                 zoom: 9
             },
             {
                 id: 'Trofta',
                 name: 'Restaurant Trofta',
                 desc: 'Restaurant Trofta në Istog',
                 layers: ['Cilido'],
                 x: 7457593.204,
                 y: 4738003.994,
                 zoom: 10
             }
         ];

 // All Map settings bundled
 Heron.options.map = {
     settings: Heron.options.settings,
     layers: Heron.options.layers,
     toolbar: Heron.options.toolbar
 };
