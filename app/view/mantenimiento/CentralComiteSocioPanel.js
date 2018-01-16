Ext.define("ExtMVC.view.mantenimiento.CentralComiteSocioPanel", {
    extend: "Ext.panel.Panel",
    alias: "widget.centralcomitesociopanel",
    layout: "anchor",
    items: [
        {
            title: "Mantenimiento / Central",
            xtype: "centralgrid",
            anchor: "100% 30%"
        }
        ,
        {
            title: "Mantenimiento / Comite",
            xtype: "comitegrid",
            anchor: "100% 35%"
        },
        {
            title: "Mantenimiento / Socio",
            xtype: "sociogrid",
            anchor: "100% 35%"
        }
    ]
});