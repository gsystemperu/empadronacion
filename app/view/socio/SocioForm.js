Ext.define("ExtMVC.view.socio.SocioForm", {
    extend: "Ext.window.Window",
    alias: "widget.socioform",
    title: "Socio",
    width: 650,
    height: 620,
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
                            name: "centralid",
                            itemId: "centralid",
                            hidden: true,
                            readOnly:true
                        },
                        {
                            xtype: "textfield",
                            name: "comiteid",
                            itemId: "comiteid",
                            hidden: true,
                            readOnly:true
                        },
                        {
                            xtype: "textfield",
                            name: "socioid",
                            itemId: "socioid",
                            hidden: true,
                            readOnly:true
                        },
                        {
                            xtype: "textfield",
                            name: "apepater",
                            itemId: "apepater",
                            fieldLabel: "Ape.Paterno",
                            fieldStyle: "text-transform:uppercase",
                            anchor: "100%",
                            allowBlank: false
                        },
                        {
                            xtype: "textfield",
                            name: "apemater",
                            itemId: "apemater",
                            fieldLabel: "Ape.Materno",
                            fieldStyle: "text-transform:uppercase",
                            anchor: "100%",
                            allowBlank: false
                        },
                        {
                            xtype: "textfield",
                            name: "nombre",
                            itemId: "nombre",
                            fieldLabel: "Nombre",
                            fieldStyle: "text-transform:uppercase",
                            anchor: "100%",
                            allowBlank: false
                        },
                        {
                            xtype: "textfield",
                            name: "dni",
                            itemId: "dni",
                            fieldLabel: "DNI",
                            fieldStyle: "text-transform:uppercase",
                            allowBlank: false,
                            maxLength :8,
                            minLength :8
                        }
                    ]
                },
                {
                    xtype: "fieldset",
                    padding: "10 10 10 10",
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: "Opcion",
                            name: "opcionid",
                            itemId: "opcionid",
                            anchor: "100%",
                            store: "ExtMVC.store.opcion.Opcion",
                            mode: "remote",
                            valueField: "opcionid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: false,
                            allowBlank: false
                        }

                    ]
                }

            ]
        },
        {
            xtype: "form",
            itemId: "formsector",
            style: "border-style:none",
            padding: "0 15 0 15",
            frame: true,
            items: [
                {
                    xtype: "fieldset",
                    itemId: "fieldsetsector",
                    hidden: true,
                    title: "Sector",
                    padding: "5 10 10 10",
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: "Sector",
                            name: "sectorid",
                            itemId: "sectorid",
                            anchor: "100%",
                            store: "ExtMVC.store.sector.Sector",
                            mode: "remote",
                            valueField: "sectorid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: false
                        },
                        {
                            xtype: "combobox",
                            fieldLabel: "Parcela",
                            name: "parcelaid",
                            itemId: "parcelaid",
                            anchor: "60%",
                            store: "ExtMVC.store.parcela.Parcela",
                            mode: "remote",
                            valueField: "parcelaid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: true
                        }
                        ,
                        {
                            xtype: "combobox",
                            fieldLabel: "Grupo",
                            name: "grupoid",
                            itemId: "grupoid",
                            anchor: "60%",
                            store: "ExtMVC.store.grupo.Grupo",
                            mode: "remote",
                            valueField: "grupoid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: true
                        }

                        ,
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox"
                            },
                            items: [
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Manzana",
                                    name: "manzanaid",
                                    itemId: "manzanaid",
                                    anchor: "20%",
                                    store: "ExtMVC.store.manzana.Manzana",
                                    mode: "remote",
                                    valueField: "manzanaid",
                                    displayField: "descripcion",
                                    editable: false,
                                    hidden: true
                                },
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Lote",
                                    name: "loteid",
                                    itemId: "loteid",
                                    anchor: "20%",
                                    hidden: true,
                                    store: "ExtMVC.store.lote.Lote",
                                    mode: "remote",
                                    valueField: "loteid",
                                    displayField: "descripcion",
                                    editable: false,
                                    labelAlign: "right"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        ,
        {
            xtype: "form",
            itemId: "formpachacamac",
            style: "border-style:none",
            padding: "0 15 0 15",
            frame: true,
            items: [
                {
                    xtype: "fieldset",
                    itemId: "fieldsetpachacamac",
                    hidden: true,
                    title: "Pachacamac",
                    padding: "5 10 10 10",
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: "Etapa",
                            name: "etapaid",
                            itemId: "etapaid",
                            anchor: "100%",
                            store: "ExtMVC.store.etapa.Etapa",
                            mode: "remote",
                            valueField: "etapaid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: false
                        }
                        
                        ,
                        {
                            xtype: "container",
                            itemId: "containeretapasector",
                            hidden: true,
                            layout: {
                                type: "vbox"
                            },
                            items: [
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Sector",
                                    name: "sectoridetapa",
                                    itemId: "sectoridetapa",
                                    anchor: "100%",
                                    store: "ExtMVC.store.sector.SectoresCuartaEtapa",
                                    mode: "remote",
                                    valueField: "sectorid",
                                    displayField: "descripcion",
                                    editable: false,
                                    hidden: false
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            itemId: "containeretapacuatrosector",
                            padding: "0 5 5 0",
                            hidden: true,
                            layout: {
                                type: "vbox"
                            },
                            items: [
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Barrio",
                                    name: "barrioid",
                                    itemId: "barrioid",
                                    anchor: "100%",
                                    store: "ExtMVC.store.barrio.BarrioSectorEtapa",
                                    mode: "remote",
                                    valueField: "barrioid",
                                    displayField: "descripcion",
                                    editable: false,
                                    hidden: false
                                }
                                
//                                ,
//                                {
//                                    xtype: "container",
//                                    layout: {
//                                        type: "hbox"
//                                    },
//                                    items: [
//                                        {
//                                            xtype: "combobox",
//                                            fieldLabel: "Manzana",
//                                            name: "manzanaid",
//                                            itemId: "manzanaid",
//                                            anchor: "20%",
//                                            store: "ExtMVC.store.manzana.Manzana",
//                                            mode: "remote",
//                                            valueField: "manzanaid",
//                                            displayField: "descripcion",
//                                            editable: false,
//                                            hidden: false
//                                        },
//                                        {
//                                            xtype: "combobox",
//                                            fieldLabel: "Lote",
//                                            name: "loteid",
//                                            itemId: "loteid",
//                                            anchor: "20%",
//                                            hidden: false,
//                                            store: "ExtMVC.store.lote.Lote",
//                                            mode: "remote",
//                                            valueField: "loteid",
//                                            displayField: "descripcion",
//                                            editable: false,
//                                            labelAlign: "right"
//                                        }
//                                    ]
//                                }

                            ]

                        },
                              
                        {
                            xtype: "container",
                            itemId: "containerPachacamacMzLt",
                            hidden: true,
                            layout: {
                                type: "hbox"
                            },
                            items: [
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Manzana",
                                    name: "manzanaid",
                                    itemId: "manzanaid",
                                    anchor: "20%",
                                    store: "ExtMVC.store.manzana.Manzana",
                                    mode: "remote",
                                    valueField: "manzanaid",
                                    displayField: "descripcion",
                                    editable: false,
                                    hidden: false
                                },
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Lote",
                                    name: "loteid",
                                    itemId: "loteid",
                                    anchor: "20%",
                                    hidden: false,
                                    store: "ExtMVC.store.lote.Lote",
                                    mode: "remote",
                                    valueField: "loteid",
                                    displayField: "descripcion",
                                    editable: false,
                                    labelAlign: "right"
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            xtype: "form",
            itemId: "formaahh",
            style: "border-style:none",
            padding: "0 15 0 15",
            frame: true,
            items: [
                {
                    xtype: "fieldset",
                    itemId: "fieldsetaahh",
                    hidden: true,
                    title: "AAHH",
                    padding: "5 10 10 10",
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: "AAHH",
                            name: "asentamientohumanoid",
                            itemId: "asentamientohumanoid",
                            anchor: "100%",
                            store: "ExtMVC.store.asentamientohumano.AsentamientoHumano",
                            mode: "remote",
                            valueField: "asentamientohumanoid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: false
                        },
                        {
                            xtype: "container",
                            itemId: "containeraahhMzLt",
                            hidden: false,
                            layout: {
                                type: "hbox"
                            },
                            items: [
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Manzana",
                                    name: "manzanaid",
                                    itemId: "manzanaid",
                                    anchor: "20%",
                                    store: "ExtMVC.store.manzana.Manzana",
                                    mode: "remote",
                                    valueField: "manzanaid",
                                    displayField: "descripcion",
                                    editable: false,
                                    hidden: false
                                },
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Lote",
                                    name: "loteid",
                                    itemId: "loteid",
                                    anchor: "20%",
                                    hidden: false,
                                    store: "ExtMVC.store.lote.Lote",
                                    mode: "remote",
                                    valueField: "loteid",
                                    displayField: "descripcion",
                                    editable: false,
                                    labelAlign: "right"
                                }
                            ]
                        }
                    ]
                }



            ]
        },
        {
            xtype: "form",
            itemId: "formasociacion",
            style: "border-style:none",
            padding: "0 15 0 15",
            frame: true,
            items: [
                {
                    xtype: "fieldset",
                    itemId: "fieldsetasociacion",
                    hidden: true,
                    title: "Asociacion",
                    padding: "5 10 10 10",
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: "Asociacion",
                            name: "asociacionid",
                            itemId: "asociacionid",
                            anchor: "100%",
                            store: "ExtMVC.store.asociacion.Asociacion",
                            mode: "remote",
                            valueField: "asociacionid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: false
                        },
                        {
                            xtype: "combobox",
                            fieldLabel: "Grupo",
                            name: "grupoid",
                            itemId: "grupoid",
                            anchor: "60%",
                            store: "ExtMVC.store.grupo.GrupoAsociacion",
                            mode: "remote",
                            valueField: "grupoid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: true
                        },
                        {
                            xtype: "container",
                            itemId: "containerasociacionMzLt",
                            hidden: false,
                            layout: {
                                type: "hbox"
                            },
                            items: [
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Manzana",
                                    name: "manzanaid",
                                    itemId: "manzanaid",
                                    anchor: "20%",
                                    store: "ExtMVC.store.manzana.Manzana",
                                    mode: "remote",
                                    valueField: "manzanaid",
                                    displayField: "descripcion",
                                    editable: false,
                                    hidden: false
                                },
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Lote",
                                    name: "loteid",
                                    itemId: "loteid",
                                    anchor: "20%",
                                    hidden: false,
                                    store: "ExtMVC.store.lote.Lote",
                                    mode: "remote",
                                    valueField: "loteid",
                                    displayField: "descripcion",
                                    editable: false,
                                    labelAlign: "right"
                                }
                            ]
                        }
                    ]
                }



            ]
        },
        {
            xtype: "form",
            itemId: "formcooperativa",
            style: "border-style:none",
            padding: "0 15 0 15",
            frame: true,
            items: [
                {
                    xtype: "fieldset",
                    itemId: "fieldsetcooperativa",
                    hidden: true,
                    title: "Cooperativa",
                    padding: "5 10 10 10",
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: "Cooperativa",
                            name: "cooperativaid",
                            itemId: "cooperativaid",
                            anchor: "100%",
                            store: "ExtMVC.store.cooperativa.Cooperativa",
                            mode: "remote",
                            valueField: "cooperativaid",
                            displayField: "descripcion",
                            editable: false,
                            hidden: false
                        },
                        {
                            xtype: "container",
                            itemId: "containercooperativaMzLt",
                            hidden: false,
                            layout: {
                                type: "hbox"
                            },
                            items: [
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Manzana",
                                    name: "manzanaid",
                                    itemId: "manzanaid",
                                    anchor: "20%",
                                    store: "ExtMVC.store.manzana.Manzana",
                                    mode: "remote",
                                    valueField: "manzanaid",
                                    displayField: "descripcion",
                                    editable: false,
                                    hidden: false
                                },
                                {
                                    xtype: "combobox",
                                    fieldLabel: "Lote",
                                    name: "loteid",
                                    itemId: "loteid",
                                    anchor: "20%",
                                    hidden: false,
                                    store: "ExtMVC.store.lote.Lote",
                                    mode: "remote",
                                    valueField: "loteid",
                                    displayField: "descripcion",
                                    editable: false,
                                    labelAlign: "right"
                                }
                            ]
                        }
                    ]
                }



            ]
        },
        {
            xtype: "fieldset",
            title: "Referencia",
            margin: "0 15 0 15",
            padding: "5 10 10 10",
            items: [
                {
                    xtype: "combobox",
                    fieldLabel: "Referencia",
                    name: "referenciaid",
                    itemId: "referenciaid",
                    anchor: "100%",
                    store: "ExtMVC.store.referencia.Referencia",
                    mode: "remote",
                    valueField: "referenciaid",
                    displayField: "descripcion",
                    editable: false,
                    hidden: false
                }
            ]
        },
        {
            xtype: "fieldset",
            title: "Observacion",
            margin: "0 15 0 15",
            padding: "5 10 10 10",
            items: [
                {
                    xtype: "textareafield",
                    fieldLabel: "Observacion",
                    name: "observacion",
                    itemId: "observacion",
                    fieldStyle: "text-transform:uppercase",
                    anchor: "100%",
                    hidden: false
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


 