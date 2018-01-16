<?php
class Central_model extends CI_Model{
    
    public function __construct() {
        parent::__construct();
    }
    function lista(){
        $sql="select centralid,descripcion from central order by 1";
        $rs=  $this->db->query($sql);
        $flag=($rs->num_rows()>0)?true:FALSE;
        $data["success"]=$flag;
        $data["data"]=$rs->result();
        return $data;
         
    }
    
    function listaXId($arreglo){
        $array[]=$arreglo["centralid"];
        $sql="select centralid,descripcion from central where centralid=?";
        $rs=$this->db->query($sql,$array);
        $item["centralid"]=$rs->row("centralid");
        $item["central"]=$rs->row("descripcion");
        $data["success"]=($rs->num_rows()>0)?TRUE:FALSE;
        $data["data"]=$item;
        return $data;
    }
    
}
 

