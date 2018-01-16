 Ext.define("ExtMVC.store.manzana.Manzana",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.manzana.Manzana",
   sorters:[
       {
           property:"manzanaid",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/manzana/lista"
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