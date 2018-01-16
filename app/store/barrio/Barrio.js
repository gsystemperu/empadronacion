Ext.define("ExtMVC.store.barrio.Barrio",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.barrio.Barrio",
   sorters:[
       {
           property:"barrioid",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/barrio/lista"
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