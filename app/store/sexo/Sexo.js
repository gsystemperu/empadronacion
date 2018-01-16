Ext.define("ExtMVC.store.sexo.Sexo",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.sexo.Sexo",
   sorters:[
       {
           property:"sexoid",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/sexo/lista"
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