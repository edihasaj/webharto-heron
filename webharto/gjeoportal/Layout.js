Ext.namespace("Heron");

Heron.layout = {
  id: 'hr-container-main',
  layout: 'border',
  border: false,

  items: [
      {
          xtype: 'panel',
          id: 'hr-menu-left-container',
          layout: 'accordion',
          region: "west",
          width: 240,
          collapsible: true,
          border: false,
          items: [
              {
                  xtype: 'hr_layertreepanel',
                  border: true,
                  layerIcons : 'bylayertype',
                  // Allow moving layers
                  enableDD: true,
                  // Popup menu via right-mouse button
                  contextMenu: [
                    {
                          xtype: 'hr_layernodemenulayerinfo'
                      },
                      {
                          xtype: 'hr_layernodemenuzoomextent'
                      },
                      {
                          xtype: 'hr_layernodemenustyle'
                      },
                      {
                          xtype: 'hr_layernodemenuopacityslider'
                  }
              ],
              // Optional, use internal default if not set
              hropts: Heron.options.layertree
              },

              {
                  xtype: 'hr_layerlegendpanel',
                  id: 'hr-layerlegend-panel',
                  defaults: {
                      useScaleParameter: true,
                      baseParams: {
                          FORMAT: 'image/png'
                      }
                  },
                  hropts: {
                      prefetchLegends: false
                  }
              },

              {
                    xtype: 'hr_activethemespanel',
                    height: 300,
                    flex: 3,
                     // Popup menu via right-mouse button
                    contextMenu: [
                        {
                            xtype: 'hr_layernodemenulayerinfo'
                        },
                        {
                            xtype: 'hr_layernodemenuzoomextent'
                        },
                        {
                            xtype: 'hr_layernodemenuopacityslider'
                        }
                    ],
                    hropts: {
                        // Defines the custom components added with the standard layer node.
                        showOpacity: true, // true - layer opacity icon / function
                        showTools: false, // true - layer tools icon / function (not jet completed)
                        showRemove: false        // true - layer remove icon / function
                    }
                },
                {
                      xtype: 'hr_bookmarkspanel',
                      id: 'hr-bookmarks',
                      border: true,
                      /** The map contexts to show links for in the BookmarksPanel. */
                      hropts: Heron.options.bookmarks
                },


          ]
      },
      {
          xtype: 'panel',
          layout: 'border',
          region: 'center',
          width: '100%',
          collapsible: false,
          split: true,
          border: false,
          items: [
              {
                  xtype: 'hr_mappanel',
                  id: 'hr-map',
                  region: 'center',
                  collapsible: false,
                  border: false,
                  hropts: Heron.options.map
              }
          ]
      }
  ]

};