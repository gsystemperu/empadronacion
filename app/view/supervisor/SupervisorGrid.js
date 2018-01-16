 Ext.define("ExtMVC.view.supervisor.SupervisorGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.supervisorgrid",
    title: "Mantenimiento / Supervisor",
    store: "ExtMVC.store.supervisor.Supervisor",
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
                    hidden:false
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
                    hidden:false
                },
                {
                    xtype:"tbseparator"
                }
               
            ]
        }
    ],
    columns: [
        {
            xtype: "rownumberer"
        },
        {
            text: "Id",
            dataIndex: "idcoor",
            width: 100,
            hidden: true
        },
        {
            text: "Nombres",
            dataIndex: "nombres",
            width:200
        },
         {
            text: "Apellidos",
            dataIndex: "apellidos",
            width:200
        },
         
         {
            text: "Telefono",
            dataIndex: "telefono",
            width:150
        } 
       
    ]
});
 

 

