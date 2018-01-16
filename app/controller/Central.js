Ext.define("ExtMVC.controller.Central", {
    extend: "Ext.app.Controller",
    views: [
        "ExtMVC.view.central.CentralGrid",
        "ExtMVC.view.central.CentralBuscarGrid"
    ],
    models: [
        "ExtMVC.model.central.Central"
    ],
    stores: [
        "ExtMVC.store.central.Central"
    ],
    init: function (application) {
        this.control({
            "centralgrid": {
                select: this.selectGrilla
            },
            "buscarcentralcomitewindow centralbuscargrid": {
                select: this.selectbuscarGrilla
            }

        });
    },
    selectGrilla: function (obj, record, index, eOpts) {
        var grid = Ext.ComponentQuery.query("comitegrid")[0];
        var store = grid.getStore();
        store.removeAll();
        store.load({
            params: {
                data: Ext.JSON.encode
                        (
                                {
                                    centralid: record.get("centralid"),
                                    cadena: ""

                                }
                        )
            }
        });
        var sociogrid = Ext.ComponentQuery.query("sociogrid")[0];
        var sociostore = sociogrid.getStore();
        sociostore.removeAll();
    },
    
    selectbuscarGrilla: function (obj, record, index, eOpts) {
        var grid = Ext.ComponentQuery.query("buscarcentralcomitewindow comitebuscargrid")[0];
        var store = grid.getStore();
        store.removeAll();
        store.load({
            params: {
                data: Ext.JSON.encode
                        (
                                {
                                    centralid: record.get("centralid"),
                                    cadena: ""

                                }
                        )
            }
        });
        
    }

});