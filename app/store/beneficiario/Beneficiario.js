Ext.define("ExtMVC.store.beneficiario.Beneficiario",{
   extend:"Ext.data.Store",
   model:"ExtMVC.model.beneficiario.Beneficiario",
   sorters:[
       {
           property:"beneficiarioid",
           direction:"asc"
       }
   ],
   proxy:{
       type:"ajax",
       api:{
           read:"cdiempadronacion/beneficiario/listaPorSocio"
       },
       writer:{
           type:"json",
           root:"data",
           encode:true
       },
       reader:{
           type:"json",
           root:"data"
       },
       extraParams:{
           data:Ext.JSON.encode
           (
                   {
                       socioid:0
                   }
           )
       }
   }
});