Ext.define("ExtMVC.store.sector.SectoresCuartaEtapa", {
    extend: "Ext.data.Store",
    model: "ExtMVC.model.sector.Sector",
    sorters: [
        {
            property: "sectorid",
            direction: "asc"
        }
    ],
    proxy:{
        type:"ajax",
        api:{
            read:"cdiempadronacion/sector/listaCuartaEtapa"
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