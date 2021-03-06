Ext.define("ExtMVC.model.beneficiario.Beneficiario",{
   extend:"Ext.data.Model",
   fields:[
       {
           name:"beneficiarioid",
           type:"int"
       },
       {
           name:"socioid",
           type:"int"
       },
       {
           name:"nombresocio",
           type:"string"
       },
       {
           name:"apepatersocio",
           type:"string"
       },
       {
           name:"apematersocio",
           type:"string"
       },
       {
          name:"socio",
          type:"string"
       },

       {
           name:"dnisocio",
           type:"string"
       },
       {
           name:"apepater",
           type:"string"
       },
       {
           name:"apemater",
           type:"string"
       },
       {
           name:"nombre",
           type:"string"
       },
       {
           name:"dni",
           type:"string"
       },
       {
           name:"fechanaci",
           type:"string"
       },
       {
           name:"observacion",
           type:"string"
       },
       {
           name:"sexoid",
           type:"int"
       },
       {
           name:"sexo",
           type:"string"
       },
      {
          name:"comiteid",
          type:"int"
      },
      {
        name:"comite",
        type:"string"
      },
      {
        name:"centralid",
        type:"int"
      },
      {
        name:"central",
        type:"string"
      },
      {
          name:"discapacidad",
          type:"int"
      },
      {
          name:"sisof",
          type:"int"
      },
      {
          name:"idconbene",
          type:"int"
      },
      {
          name:"condicionbeneficiario",
          type:"string"
      }

              
   ]
});