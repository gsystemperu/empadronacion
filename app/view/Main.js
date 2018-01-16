Ext.define('ExtMVC.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    xtype: 'app-main',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: "north",
            xtype: "panel",
            margins: "5 5 0 5",
            title: "GESTION DE EMPADRONAMIENTO"

        },
        {
            region: 'west',
            margins: '5 0 0 5',
            xtype: 'panel',
            title: 'Menu',
            width: "20%",
            collapsible: true,
            split: true,
            layout: {
                type: "fit"
            },
            items: [
                {
                    xtype: "arbolpanel"
                }
            ]
        }, {
            region: 'center',
            xtype: 'panel',
            margins: '5 5 0 0',
           // title: ".",
            layout: {
                type: "fit"
            },
            defaults: {
                hidden: false
            }
            ,
            items: [
                {
                    xtype: "tabpanel",
                    itemId: "tbpnlMantenimiento"
                }
            ]

        }
       /* ,
        {
            region: "south",
            xtype: "panel",
            height: 20,
            title: '',
            margins: '5 5 5 5',
            html: '<div style="text-align:center;color:black;font-Size:11px;">WEB DEVELOPER -  arturolopez15@hotmail.com 959369835</div>',
            style: {
                fontWeight: "bold"

          }

        }*/
    ]
});