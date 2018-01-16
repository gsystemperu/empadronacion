 Ext.define("ExtMVC.view.beneficiario.BeneficiarioTodosGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.beneficiariotodosgrid",
    title: "Mantenimiento / Beneficiario",
    store: "ExtMVC.store.beneficiario.BeneficiarioTodos",
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
                    hidden:true
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
               },
                {
                   xtype:"button",
                   text:"Refrescar",
                   itemId:"btnRefrescar",
                   iconCls:"icon-reload",
                   margin:"0 0 0 5",
                   fixed:true
               },
               {
                  xtype:"textfield",
                  itemId:"totalbeneficiario",
                  width:200,
                  fieldLabel:"Cantidad",
                  margin:"0 0 0 5",
                  labelAlign:"right",
                  readOnly:true

               }
               
            ]
        }
    ],
    columns: [
       {
            xtype: "rownumberer",
            width:50
        },
        
        {
            text: "Ape.Paterno",
            dataIndex: "apepater",
             width:120
        },
        {
            text: "Ape.Materno",
            dataIndex: "apemater",
            width:120
        },
        {
            text: "Nombre",
            dataIndex: "nombre",
           width:150
        },
        {
            text: "DNI",
            dataIndex: "dni",
            width:80
        },

        {
            text:"Socio",
            dataIndex:"socio",
            width:250
        },
        {
            text:"DNI Socio",
            dataIndex:"dnisocio",
            width:80
        },
        {
            text:"Central",
            dataIndex:"central",
            width:100
        },
        {
            text:"Comite",
            dataIndex:"comite",
            width:100
        }
       
    ]
});
 

 

