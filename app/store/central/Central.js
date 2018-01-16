Ext.define("ExtMVC.store.central.Central",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.central.Central",
   sorters:[
       {
           property:"centralid",
           direction:"asc"
       }
   ],
   proxy:
       {
           type:"ajax",
           api:{
               read:"cdiempadronacion/central/lista"
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