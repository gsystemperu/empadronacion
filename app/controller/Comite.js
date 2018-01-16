Ext.define("ExtMVC.controller.Comite", {
    extend: "Ext.app.Controller",
    views: [
        "ExtMVC.view.comite.ComiteGrid",
        "ExtMVC.view.comite.ComiteBuscarGrid",
        "ExtMVC.view.comite.ComiteTodosGrid",
        "ExtMVC.view.comite.ComiteForm"
    ],
    models: [
        "ExtMVC.model.comite.Comite"
    ],
    stores: [
        "ExtMVC.store.comite.Comite",
        "ExtMVC.store.comite.ComiteTodos"
    ],
    init: function (application) {
        this.control({
            "comitegrid button#btnBuscar": {
                click: this.btnBuscarComitePorCentral_onClick
            },
            "buscarcentralcomitewindow comitebuscargrid button#btnBuscar": {
                click: this.btnBuscarComitePorCentralBuscar_onClick
            },
            "comitegrid": {
                select: this.selectGrilla
            },
            "buscarcentralcomitewindow comitebuscargrid": {
                itemdblclick: this.onGrillabuscarDobleClick
            },
            "comitegrid button#btn_editar": {
                click: this.btn_editar_onClick
            },
            "comiteform button#btn_cancelar": {
                click: this.btn_cancelar_onClick
            },
            "comiteform button#btn_grabar": {
                click: this.btn_grabar_onClick
            }
        });
    },
    btn_grabar_onClick: function (btn, e, opc) {


        var win = btn.up("window");
        var form = win.down("form");
        var grid = Ext.ComponentQuery.query("comitegrid")[0];
        var values = form.getValues();
        var record = form.getRecord();
        var store = grid.getStore();

        if (form.getForm().isValid()) {

            var data = {
                comiteid: (values.comiteid == "") ? 0 : values.comiteid,
                centralid: values.centralid,
                codigointerno: values.codigointerno,
                direccion: values.direccion,
                idsuper: values.idsuper,
                idcoor: values.idcoor,
                primeraprioridad: values.primeraprioridad,
                segundaprioridad: values.segundaprioridad
            };

            Ext.Ajax.request({
                url: "cdiempadronacion/comite/grabar",
                method: "post",
                params: {
                    data: Ext.JSON.encode(data)
                },
                success: function (conn, response, options, eOpts) {

                    var rs = Ext.JSON.decode(conn.responseText);

                    if (rs.success) {

                        if (!record) {


                        } else {

                            var indice = grid.getSelectionModel().getCurrentPosition().row;
                            store.load({
                                params: {
                                    data: Ext.JSON.encode
                                            (
                                                    {
                                                        "centralid": values.centralid,
                                                        "cadena": ""

                                                    }
                                            )
                                },
                                callback: function (record, option, success) {
                                    grid.getSelectionModel().select(indice);
                                }
                            });
                            win.close();
                        }


                    }

                }

            });

        } else {

            Ext.Msg.show({
                title: "Mensaje",
                msg: "Complete los datos...!",
                buttons: Ext.Msg.OK,
                buttonText: {
                    ok: "Aceptar"
                },
                icon: Ext.Msg.ERROR
            });

        }


    },
    btn_cancelar_onClick: function (btn, e, opc) {

        var win = btn.up("window");
        win.close();

    },
    btn_editar_onClick: function (btn, e, opc) {

        var grid = btn.up("grid");
        var record = grid.getSelectionModel().getSelection();
        if (record.length > 0) {

            var win = Ext.create("ExtMVC.view.comite.ComiteForm");
            win.down("form").loadRecord(record[0]);
            win.down("#codigointerno").focus();

        } else {

            Ext.Msg.show({
                title: "Mensaje",
                msg: "Seleccione un registro...!",
                buttons: Ext.Msg.OK,
                buttonText: {
                    ok: "Aceptar"
                },
                icon: Ext.Msg.ERROR
            });

        }

    },
    onGrillabuscarDobleClick: function (grid, record, item, index, e, eOpts) {
        var panelreportesocio = Ext.ComponentQuery.query("reportesociopanel")[0];
        var gridcentral = grid.up("window").down("centralbuscargrid");
        var recordcentral = gridcentral.getSelectionModel().getSelection();
        console.log(recordcentral[0]);
        panelreportesocio.down("#centralid").setValue(recordcentral[0].get("centralid"));
        panelreportesocio.down("#central").setValue(recordcentral[0].get("descripcion"));
        panelreportesocio.down("#comiteid").setValue(record.get("comiteid"));
        panelreportesocio.down("#comite").setValue(record.get("codigointerno"));
        panelreportesocio.down("#ubicacion").setValue(record.get("direccion"));
        grid.up("window").close();
    },
    selectGrilla: function (obj, record, index, eOpts) {

        var grid = Ext.ComponentQuery.query("sociogrid")[0];
        var store = grid.getStore();
        store.removeAll();
        store.load({
            params: {
                data: Ext.JSON.encode
                        (
                                {
                                    centralid: record.get("centralid"),
                                    comiteid: record.get("comiteid"),
                                    cadena: ""

                                }
                        )
            }
        });
    },
    btnBuscarComitePorCentralBuscar_onClick: function (btn, e, opc) {
        var grid = Ext.ComponentQuery.query("centralbuscargrid")[0];
        var record = grid.getSelectionModel().getSelection();
        var cadena = btn.up("grid").down("#txtBuscar").getValue();
        if (record.length > 0) {
            var gridcomite = Ext.ComponentQuery.query("comitebuscargrid")[0];
            var store = gridcomite.getStore();
            console.log(record[0].get("centralid"));
            console.log(cadena);
            store.removeAll();
            store.load({
                params: {
                    data: Ext.JSON.encode
                            (
                                    {
                                        "centralid": record[0].get("centralid"),
                                        "cadena": cadena

                                    }
                            )
                }
            });
            btn.up("grid").down("#txtBuscar").focus();

        } else {

            alert("Seleccione una central!");


        }
    },
    btnBuscarComitePorCentral_onClick: function (btn, e, opc) {
        var grid = Ext.ComponentQuery.query("centralgrid")[0];
        var record = grid.getSelectionModel().getSelection();
        var cadena = btn.up("grid").down("#txtBuscar").getValue();
        if (record.length > 0) {
            var gridcomite = Ext.ComponentQuery.query("comitegrid")[0];
            var store = gridcomite.getStore();
            console.log(record[0].get("centralid"));
            console.log(cadena);
            store.removeAll();
            store.load({
                params: {
                    data: Ext.JSON.encode
                            (
                                    {
                                        "centralid": record[0].get("centralid"),
                                        "cadena": cadena

                                    }
                            )
                }
            });
            btn.up("grid").down("#txtBuscar").focus();

        } else {

            alert("Seleccione una central!");


        }
    }

});