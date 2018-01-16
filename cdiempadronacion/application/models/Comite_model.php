<?php

class Comite_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function listaPorCentral($arreglo) {
        $sql = "select comiteid,codigointerno,centralid,direccion,idsuper,idcoor,primeraprioridad,segundaprioridad from comite where codigointerno like ? and  centralid=? order by codigointerno";
        $param["codigointerno"] = '%' . $arreglo["cadena"] . '%';
        $param["centralid"] = $arreglo["centralid"];
        $rs = $this->db->query($sql, $param);
        $flag = ($rs->num_rows() > 0) ? TRUE : FALSE;
        $data["success"] = $flag;
        $data["data"] = $rs->result();
        return $data;
    }

    public function lista() {
        $sql = "select co.comiteid,co.codigointerno,co.direccion,co.centralid,ce.descripcion as central,co.idsuper,co.idcoor,co.primeraprioridad,co.segundaprioridad from comite co left join central ce on co.centralid=ce.centralid limit 500";
        $rs = $this->db->query($sql);
        $flag = ($rs->num_rows() > 0) ? TRUE : FALSE;
        $data["success"] = $flag;
        $data["data"] = $rs->result();
        return $data;
    }

    public function listaPorCentralId($arreglo) {
        $array[] = $arreglo["centralid"];
        $sql = "select comiteid,centralid,codigointerno,direccion,idsuper,idcoor,primeraprioridad,segundaprioridad from comite where centralid=? order by codigointerno";
        $rs = $this->db->query($sql, $array);
        $flag = ($rs->num_rows() > 0) ? TRUE : FALSE;
        $data["success"] = $flag;
        $data["data"] = $rs->result();
        return $data;
    }

    public function grabar($arreglo) {

        if ($arreglo["comiteid"] == 0) {
            
        } else {

            $array[] = $arreglo["centralid"];
            $array[] = $arreglo["codigointerno"];
            $array[] = $arreglo["direccion"];
            $array[] = $arreglo["idsuper"];
            $array[] = $arreglo["idcoor"];
            $array[] = $arreglo["primeraprioridad"];
            $array[] = $arreglo["segundaprioridad"];
            $array[] = $arreglo["comiteid"];

            $sql = "update comite  set centralid=?,codigointerno=?,direccion=?,idsuper=?,idcoor=?,primeraprioridad=?,segundaprioridad=? where comiteid=?";

            $rs = $this->db->query($sql, $array);
            $data["success"] = $rs;
            return $data;
        }
    }

}
