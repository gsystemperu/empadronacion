Ext.define("ExtMVC.store.condicionbeneficiario.Condicionbeneficiario",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.condicionbeneficiario.Condicionbeneficiario",
   sorters:[
       {
           property:"idconbene",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/condicionbeneficiario/lista"
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