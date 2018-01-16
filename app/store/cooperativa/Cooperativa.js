Ext.define("ExtMVC.store.cooperativa.Cooperativa",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.cooperativa.Cooperativa",
   sorters:[
       {
           property:"cooperativaid",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/cooperativa/lista"
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