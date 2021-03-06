 Ext.define("ExtMVC.store.lote.Lote",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.lote.Lote",
   sorters:[
       {
           property:"loteid",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/lote/lista"
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