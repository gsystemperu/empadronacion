Ext.define("ExtMVC.view.beneficiario.BeneficiarioWindow", {
    extend: "Ext.window.Window",
    alias: "widget.beneficiariowindow",
    title: "Socio",
    width: 850,
    height: 550,
    modal: true,
    autoShow: true,
    resizable: false,
    layout: {
        type: "fit"
    },
    items: [
        {
            xtype: "beneficiariogrid"
        }
    ]
});

