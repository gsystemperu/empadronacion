Ext.define("ExtMVC.view.comite.ComiteForm", {
    extend: "Ext.window.Window",
    alias: "widget.comiteform",
    title: "Comite",
    width: 650,
    height: 320,
    modal: true,
    autoShow: true,
    resizable: false,
    layout: {
        type: "anchor"
    },
    items: [
        {
            xtype: "form",
            style: "border-style:none",
            itemId: "form1",
            padding: "15 15 0 15",
            frame: true,
            items: [
                {
                    xtype: "fieldset",
                    title: "Datos Personales",
                    padding: "10 10 10 10",
                    items: [
                        {
                            xtype: "textfield",
                            name: "comiteid",
                            itemId: "comiteid",
                            hidden: true,
                            readOnly: true
                        },
                        {
                            xtype: "textfield",
                            name: "centralid",
                            itemId: "centralid",
                            hidden: true,
                            readOnly: true
                        },
                        {
                            xtype: "textfield",
                            name: "codigointerno",
                            itemId: "codigointerno",
                            fieldLabel: "Codigo Inetrno",
                            fieldStyle: "text-transform:uppercase",
                            anchor: "100%",
                            allowBlank: false
                        },
                        {
                            xtype: "textfield",
                            name: "direccion",
                            itemId: "direccion",
                            fieldLabel: "Direccion",
                            fieldStyle: "text-transform:uppercase",
                            anchor: "100%",
                            allowBlank: false
                        },
                        {
                            xtype: "combobox",
                            name: "idsuper",
                            itemId: "idsuper",
                            fieldLabel: "Supervisor",
                            mode: "remote",
                            store: "ExtMVC.store.supervisor.SupervisorCombo",
                            valueField: "idsuper",
                            displayField: "supervisor",
                            editable: false,
                            allowBlank: false,
                            width: 400

                        },
                        {
                            xtype: "combobox",
                            name: "idcoor",
                            itemId: "idcoor",
                            fieldLabel: "Coordinador",
                            mode: "remote",
                            store: "ExtMVC.store.coordinador.CoordinadorCombo",
                            valueField: "idcoor",
                            displayField: "coordinador",
                            editable: false,
                            allowBlank: false,
                            width: 400

                        },
                        {
                            xtype: "container",
                            layout: "hbox",
                            margin: "5 0 0 0",
                            items: [
                                {
                                    xtype: "numberfield",
                                    name: "primeraprioridad",
                                    itemId: "primeraprioridad",
                                    fieldLabel: 'Primera Prioridad',
                                    decimalPrecision: 0,
                                    step: 0.01,
                                    minValue: 1,
                                    hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    width: 200
                                },
                                {
                                    xtype: "label",
                                    text: "dias",
                                    width: 30,
                                    margin: "1 0 0 5"
                                }
                            ]
                        }
                        ,
                        {
                            xtype: "container",
                            layout: "hbox",
                            margin: "5 0 0 0",
                            items: [
                                {
                                    xtype: "numberfield",
                                    name: "segundaprioridad",
                                    itemId: "segundaprioridad",
                                    fieldLabel: 'Segunda Prioridad',
                                    decimalPrecision: 0,
                                    step: 0.01,
                                    minValue: 1,
                                    hideTrigger: true,
                                    keyNavEnabled: false,
                                    mouseWheelEnabled: false,
                                    allowBlank: true,
                                    width: 200
                                },
                                {
                                    xtype: "label",
                                    text: "dias",
                                    width: 30,
                                    margin: "7 0 0 5"
                                }
                            ]
                        }





                    ]
                }
            ]
        }
    ],
    buttons: [
        {
            xtype: "button",
            itemId: "btn_grabar",
            text: "Grabar",
            iconCls: "icon-save"
        },
        {
            xtype: "button",
            itemId: "btn_cancelar",
            text: "Cancelar",
            iconCls: "icon-cancel"
        }

    ]
});
