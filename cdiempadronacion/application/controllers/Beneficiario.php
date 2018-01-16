<?php

class Beneficiario extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Beneficiario_model", "beneficiario");
    }

    public function existeDni() {

        $info = $this->input->post("data");
        $data = json_decode($info);
        $arreglo["dni"] = $data->dni;
        $rs = $this->beneficiario->existeDni($arreglo);
        echo json_encode($rs);
    }

    public function cantidad() {
        $rs = $this->beneficiario->cantidad();
        echo json_encode($rs);
    }

    public function existeDniActualizar() {

        $info = $this->input->post("data");
        $data = json_decode($info);
        $arreglo["dni"] = $data->dni;
        $arreglo["beneficiarioid"] = $data->beneficiarioid;
        $rs = $this->beneficiario->existeDniActualizar($arreglo);
        echo json_encode($rs);
    }

    public function lista() {
        $rs = $this->beneficiario->lista();
        echo json_encode($rs);
    }

    public function listaTodos() {
        $info = $this->input->get("data");
        $data = json_decode($info);
        $arreglo["cadena"] = $data->cadena;
        $rs = $this->beneficiario->listaTodos($arreglo);
        echo json_encode($rs);
    }

    public function listaPorSocio() {
        $info = $this->input->get("data");
        $data = json_decode($info);
        $arreglo["socioid"] = $data->socioid;
        $rs = $this->beneficiario->listaPorSocio($arreglo);
        echo json_encode($rs);
    }

    public function registrar() {
        $info = $this->input->post("data");
        $data = json_decode($info);

        $arreglo["socioid"] = $data->socioid;
        $arreglo["apepater"] = mb_strtoupper($data->apepater, 'UTF-8');
        $arreglo["apemater"] = mb_strtoupper($data->apemater, 'UTF-8');
        $arreglo["nombre"] = mb_strtoupper($data->nombre, 'UTF-8');
        $arreglo["dni"] = $data->dni;
        $arreglo["fechanaci"] = invierte_date($data->fechanaci);
        $arreglo["sexoid"] = $data->sexoid;
        $arreglo["observacion"] = mb_strtoupper($data->observacion, 'UTF-8');
        $arreglo["discapacidad"] = $data->discapacidad;
        $arreglo["sisof"] = $data->sisof;
        $arreglo["idconbene"] = $data->idconbene;
        $rs = $this->beneficiario->registrar($arreglo);
        echo json_encode($rs);
    }

    public function actualizar() {
        $info = $this->input->post("data");
        $data = json_decode($info);

        $arreglo["apepater"] = mb_strtoupper($data->apepater, 'UTF-8');
        $arreglo["apemater"] = mb_strtoupper($data->apemater, 'UTF-8');
        $arreglo["nombre"] = mb_strtoupper($data->nombre, 'UTF-8');
        $arreglo["dni"] = $data->dni;
        $arreglo["fechanaci"] = invierte_date($data->fechanaci);
        $arreglo["sexoid"] = $data->sexoid;
        $arreglo["observacion"] = mb_strtoupper($data->observacion, 'UTF-8');
        $arreglo["discapacidad"] = $data->discapacidad;
        $arreglo["sisof"] = $data->sisof;
        $arreglo["idconbene"] = $data->idconbene;
        $arreglo["socioid"] = $data->socioid;
        $arreglo["beneficiarioid"] = $data->beneficiarioid;

        $rs = $this->beneficiario->actualizar($arreglo);
        echo json_encode($rs);
    }

    public function eliminar() {
        $info = $this->input->post("data");
        $data = json_decode($info);

        $arreglo["beneficiarioid"] = $data->beneficiarioid;
        $rs = $this->beneficiario->eliminar($arreglo);
        echo json_encode($rs);
    }

}
