Ext.define("ExtMVC.store.coordinador.CoordinadorCombo",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.coordinador.Coordinador",
   sorters:[
       {
           property:"idcoor",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/coordinador/listaCombo"
       },
       writer:{
           type:"json",
           root:"data",
           encode:true
       },
       reader:{
           type:"json",
           root:"data"
       }
   }
});