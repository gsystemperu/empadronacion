 Ext.define("ExtMVC.view.comite.ComiteTodosGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.comitetodosgrid",
    title: "Mantenimiento / Comite",
    store: "ExtMVC.store.comite.ComiteTodos",
    layout: {
        type: "fit"
    },
    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            items: [
                {
                    xtype: "button",
                    text: "Nuevo",
                    itemId: "btn_nuevo",
                    iconCls: "icon-add",
                    hidden:true
                },
                {
                    xtype: "tbseparator"
                },
                {
                    xtype: "button",
                    text: "Editar",
                    itemId: "btn_editar",
                    iconCls: "icon-edit",
                    hidden:false
                },
                {
                    xtype: "tbseparator"
                },
                {
                    xtype: "button",
                    text: "Eliminar",
                    itemId: "btn_eliminar",
                    iconCls: "icon-delete",
                    hidden:true
                },
                {
                    xtype:"tbseparator"
                }
               
            ]
        },
        {
            xtype: "toolbar",
            dock: "top",
            items:[
                {
                    xtype:"textfield",
                    name:"txtBuscar",
                    itemId:"txtBuscar",
                    fieldLabel: "Buscar",
                    labelAlign:"right",
                    fieldStyle: "text-transform:uppercase",
                    labelWidth:40
               },
               {
                   xtype:"button",
                   text:"Buscar",
                   itemId:"btnBuscar",
                   iconCls:"icon-buscar",
                   margin:"0 0 0 5",
                   fixed:true
               }
            ]
        }
    ],
    columns: [
        {
            xtype: "rownumberer",
            width:40
        },
        {
            text: "Id",
            dataIndex: "comiteid",
            width: 100,
            hidden: true
        },
        {
            text: "Codigo",
            dataIndex: "codigointerno",
            flex: 2
        },
        {
            text:"Ubicacion",
            dataIndex:"direccion",
            flex:2
        },
        {
            text:"Central",
            dataIndex:"central",
            flex:2
        }
       
    ]
});
 

 

