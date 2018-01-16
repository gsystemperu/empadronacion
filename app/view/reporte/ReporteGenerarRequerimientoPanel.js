Ext.define("ExtMVC.view.reporte.ReporteGenerarRequerimientoPanel", {
    extend: "Ext.panel.Panel",
    alias: "widget.reportegenerarrequerimientopanel",
    layout: {
        type: "fit"
    },
    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            height: 65,
            layout: "hbox",
            items: [
                {
                    xtype: "combobox",
                    name: "centralid",
                    itemId: "centralid",
                    fieldLabel: "Central",
                    labelAlign: "right",
                    mode: "remote",
                    store: "ExtMVC.store.central.Central",
                    valueField: "centralid",
                    displayField: "descripcion",
                    editable: false,
                    allowBlank: false,
                    width: 400
                },
                {
                    xtype: "button",
                    itemId: "btnimprimir",
                    text: "Imprimir",
                    margin: "0 0 0 5"
                }
            ]
        }

    ]


});