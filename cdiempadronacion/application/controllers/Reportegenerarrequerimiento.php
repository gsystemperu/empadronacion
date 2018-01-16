<?php

ini_set('max_execution_time', 300);
ini_set('memory_limit', '4010.55M');
if (!defined("BASEPATH"))
    exit("sin acesso directo..!");
require_once APPPATH . "/third_party/fpdf/fpdf.php";

class Reportegenerarrequerimiento extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Reportegenerarrequerimiento_model", "reportegenerarrequerimiento");
        $this->load->model("Central_model", "central");
    }

    public function imprimir() {

        $centralid = $this->input->get("id");
        $rscentral = $this->central->listaXId(array("centralid" => $centralid));

        $rs = $this->reportegenerarrequerimiento->generarRequerimiento(array("centralid" => $centralid));

        $fpdf = new FPDF("L", "mm", "A4");
        $fpdf->SetAutoPageBreak(true, 70);
        $fpdf->AddPage();
        $fpdf->AliasNbPages();
        $fpdf->SetMargins(7, 5, 7);
        $fpdf->SetAutoPageBreak(true, 7);
        $fpdf->setFont("Arial", "B", 10.5);

        $fpdf->cell(275, 7, "FORMATO UNICO DE DISTRIBUCION DEL RECURSO ALIMENTICIO", 1, 1, "C", FALSE);
        $fpdf->ln();
          $fpdf->setFont("Arial", "B", 7);
        $fpdf->cell(50, 7, $rscentral["data"]["central"], 0, 1, "L", FALSE);
        $fpdf->ln(5);

        $item = 0;
         $fpdf->setFont("Arial", "B", 5);
        
         $fpdf->setX(27);
         $fpdf->cell(73.5, 7, 'PRIMERA PRIORIDAD - DIAS DE ATENCION: ', 1, 0, "C", FALSE);
         $fpdf->cell(63, 7, 'SEGUNDA PRIORIDAD - DIAS DE ATENCION: ', 1, 0, "C", FALSE);
          $fpdf->cell(73.5, 7, 'TOTAL GENERAL', 1, 0, "C", FALSE);
          $fpdf->cell(30, 7, '', 'LRT', 0, "LR", FALSE);
         $fpdf->cell(15, 7, '', 'LRT', 1, "C", FALSE);
         $fpdf->setX(27);
         $fpdf->cell(52.5, 7, 'BENEFICIARIOS', 1, 0, "C", FALSE);
         $fpdf->cell(21, 7, 'INSUMOS', 1, 0, "C", FALSE);
         $fpdf->cell(42, 7, 'BENEFICIARIOS', 1, 0, "C", FALSE);
         $fpdf->cell(21, 7, 'INSUMOS', 1, 0, "C", FALSE);
          $fpdf->cell(10.5, 7, 'TOTAL', 1, 0, "C", FALSE);
          $fpdf->cell(31.5, 7, 'Leche Evaporada', 1, 0, "C", FALSE);
          $fpdf->cell(31.5, 7, 'Hojuela Cereal Enrq. Azur', 1, 0, "C", FALSE);
         $fpdf->cell(30, 7, 'Coordinadora Responsable', 'LR', 0, "LR", FALSE);
         $fpdf->cell(15, 7, 'Firma', 'LR', 1, "C", FALSE);
         
         
            $fpdf->setX(27);
          //$fpdf->cell(5, 7, 'Nro.', 1, 0, "C", FALSE);
         // $fpdf->cell(15, 7, 'Comite', 1, 1, "C", FALSE);
         $fpdf->cell(10.5, 7, '0 6 años', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'M-Gest', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'M-LACT', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Discap.', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'TOTAL', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'LecheUni', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Hojuela', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, '7-13 años', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Tbc', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Ancianos', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'TOTAL', 1, 0, "C", FALSE);
          $fpdf->cell(10.5, 7, 'LecheUni', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Hojuela', 1, 0, "C", FALSE);
         
         $fpdf->cell(10.5, 7, 'Beneficarios', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'T leche', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Cajas/47', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Und/Lata', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'T Hojuela', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Sacos/70', 1, 0, "C", FALSE);
         $fpdf->cell(10.5, 7, 'Und/Bolsa', 1, 0, "C", FALSE);
         $fpdf->cell(30, 7, ' ', 'LR', 0, "C", FALSE);
         $fpdf->cell(15, 7, ' ', 'LR', 1, "C", FALSE);
        
        $fpdf->setFont("Arial", "B", 7);
        foreach ($rs["data"] as $row) {
            $item++;
            $fpdf->cell(5, 7, $item, 1, 0, "C", FALSE);
            $fpdf->cell(15,7, $row->codigointerno, 1, 0, "C", FALSE);
            $fpdf->cell(10.5, 7, $row->pptotalninos06, 1, 0, "C", FALSE);
            $fpdf->cell(10.5, 7, $row->pptotalmg, 1, 0, "C", FALSE);
            $fpdf->cell(10.5, 7, $row->pptotalml, 1, 0, "C", FALSE);
            $fpdf->cell(10.5, 7, $row->pptotaldisca, 1, 0, "C", FALSE);
            $fpdf->cell(10.5, 7, $row->pptotalninos06 + $row->pptotalmg + $row->pptotalml + $row->pptotaldisca
            , 1, 0, "C", FALSE);
            $fpdf->cell(10.5, 7, $row->pptotalleche, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->pptotalcereal, 1, 0, "C", FALSE);
	    /* Segunda prioridad */
            $fpdf->cell(10.5, 7, $row->sptotalninos713, 1, 0, "C", FALSE);
            $fpdf->cell(10.5, 7, $row->sptotaltbc, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->sptotalamayor, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->sptotalninos713 +  $row->sptotaltbc +  $row->sptotalamayor, 1, 0, "C", FALSE);
	   
	    $fpdf->cell(10.5, 7, $row->sptotalleche, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->sptotalcereal, 1, 0, "C", FALSE);
	    
	     $fpdf->cell(10.5, 7, 
	  $row->pptotalninos06 + $row->pptotalmg + $row->pptotalml + $row->pptotaldisca + $row->sptotalninos713 +  $row->sptotaltbc +  $row->sptotalamayor
            , 1, 0, "C", FALSE);
	    //Totales de leche
	    $fpdf->cell(10.5, 7, $row->totalleche, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->lechescaja, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->lecheunidad, 1, 0, "C", FALSE);
            
            //Tatales cereales
            
            $fpdf->cell(10.5, 7, $row->totalcereal, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->cerealsaco, 1, 0, "C", FALSE);
	    $fpdf->cell(10.5, 7, $row->cerealunidad, 1, 0, "C", FALSE);
	    
	    $fpdf->cell(30, 7, $row->coordinador, 1, 0, "L", FALSE);
	    $fpdf->cell(15, 7, ' ', 1, 1, "L", FALSE);
        }

        $fpdf->Output();
    }

}
