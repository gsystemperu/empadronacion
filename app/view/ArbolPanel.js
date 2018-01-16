Ext.define("ExtMVC.view.ArbolPanel", {
    extend: "Ext.tree.Panel",
    alias: "widget.arbolpanel",
    rootVisible: false,
    root: {
        expanded: true,
        children: [
            {
                text: "MANTENIMIENTO",
                id: "item_mantenimiento",
                expanded: true,
                children: [
                    {
                        text: "Central / Comite / Socio", leaf: true, id: "item_central"
                    },
                    {
                        text: "Comite", leaf: true, id: "item_comite"
                    },
                    {
                        text: "Sector", leaf: true, id: "item_sector"
                    },
                    {
                        text: "Grupo", leaf: true, id: "item_grupo"
                    },
                    {
                        text: "Lote", leaf: true, id: "item_lote"
                    },
                    {
                        text: "Manzana", leaf: true, id: "item_manzana"
                    },
                    {
                        text: "Referencia", leaf: true, id: "item_referencia"
                    },
                    {
                        text: "Socio", leaf: true, id: "item_socio"
                    },
                    {
                        text: "Beneficiario", leaf: true, id: "item_beneficiario"
                    },
                    {
                        text: "Cooperativa", leaf: true, id: "item_cooperativa"
                    },
                    {
                        text: "Asociacion", leaf: true, id: "item_asociacion"
                    },
                    {
                        text: "Barrio", leaf: true, id: "item_barrio"
                    },
                    {
                        text: "Parcela", leaf: true, id: "item_parcela"
                    },
                    {
                        text: "Asentamiento Humano", leaf: true, id: "item_asentamientohumano"
                    },
                    {
                        text: "Etapa", leaf: true, id: "item_etapa"
                    },
                    {
                        text: "Opcion", leaf: true, id: "item_opcion"
                    },
                    {
                        text: "Coordinador", leaf: true, id: "item_coordinador"
                    },
                    {
                        text: "Supervisor", leaf: true, id: "item_supervisor"
                    }

                ]

            },
            {
                text: "Reporte",
                id: "item_reporte",
                expanded: true,
                children: [
                    {
                        text: "Socio", leaf: true, id: "item_reporte_socio"
                    },
                    {
                        text: "Generar Requerimiento", leaf: true, id: "item_reporte_generarrequerimiento"
                    },
                    {
                        text: "Requerimiento INEI", leaf: true, id: "item_reporte_requerimientoinei"
                    },
                    {
                        text: "Historial de Requerimientos", leaf: true, id: "item_reporte_historialrequerimiento"
                    },
                    {
                        text: "Historial de Beneficiarios", leaf: true, id: "item_reporte_historialbeneficiario"
                    }
//                    {
//                        text: "Beneficiario", leaf: true, id: "item_reporte_beneficiario"
//                    }

                ]
            }

        ]
    }
});



