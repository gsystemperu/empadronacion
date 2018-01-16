<?php
ini_set('max_execution_time', 300);
ini_set('memory_limit', '4095M');
if (!defined("BASEPATH"))
    exit("sin acesso directo..!");
require_once APPPATH . "/third_party/fpdf/fpdf.php";

class Reporte extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Socio_model", "socio");
        $this->load->model("Beneficiario_model", "beneficiario");
        $this->load->model("Central_model", "central");
        $this->load->model("comite_model", "comite");
    }

    public function imprimirCantidadesTodos() {

        $fpdf = new FPDF("L", "mm", "A4");
        $fpdf->SetAutoPageBreak(true, 100);
        $fpdf->AddPage();
        $fpdf->AliasNbPages();
        $fpdf->SetMargins(10, 15, 10);
        $fpdf->SetAutoPageBreak(true, 10);
        $fpdf->setFont("Arial", "B", 8);

        $rscentral = $this->central->lista();
        $rscentral = $rscentral["data"];

        foreach ($rscentral as $rowcentral) {
            
            $fpdf->SetFillColor(224, 224, 224);
            
            $fpdf->cell(240, 8, $rowcentral->descripcion, 1, 1, "C", true);

            $fpdf->cell(20, 7, "", 1, 0, "C", true);
            $fpdf->cell(85, 7, utf8_decode("1° PRIORIDAD"), 1, 0, "C", true);
            $fpdf->cell(115, 7, utf8_decode("2° PRIORIDAD"), 1, 0, "C", true);
            $fpdf->cell(20, 7, "", 1, 1, "C", true);
            //  $fpdf->setX(40);
            $fpdf->cell(20, 7, "", 1, 0, "C", true);
            $fpdf->cell(70, 7, "EDAD", 1, 0, "C", true);
            $fpdf->Cell(15, 7, "", 1, 0, "C", true);

            $fpdf->cell(100, 7, "EDAD", 1, 0, "C", true);
            $fpdf->Cell(35, 7, "", 1, 1, "C", true);
            //    $fpdf->setX(40);
            $fpdf->cell(20, 7, "COMITE", 1, 0, "C", true);
            $fpdf->cell(10, 7, "0", 1, 0, "C", true);
            $fpdf->cell(10, 7, "1", 1, 0, "C", true);
            $fpdf->cell(10, 7, "2", 1, 0, "C", true);
            $fpdf->cell(10, 7, "3", 1, 0, "C", true);
            $fpdf->cell(10, 7, "4", 1, 0, "C", true);
            $fpdf->cell(10, 7, "5", 1, 0, "C", true);
            $fpdf->cell(10, 7, "6", 1, 0, "C", true);
            $fpdf->cell(15, 7, "TOTAL", 1, 0, "C", true);
            $fpdf->cell(10, 7, "7", 1, 0, "C", true);
            $fpdf->cell(10, 7, "8", 1, 0, "C", true);
            $fpdf->cell(10, 7, "9", 1, 0, "C", true);
            $fpdf->cell(10, 7, "10", 1, 0, "C", true);
            $fpdf->cell(10, 7, "11", 1, 0, "C", true);
            $fpdf->cell(10, 7, "12", 1, 0, "C", true);
            $fpdf->cell(10, 7, "13", 1, 0, "C", true);
            $fpdf->setFont("Arial", "B", 5);
            $fpdf->cell(15, 7, "A.M. MUJER", 1, 0, "C", true);
            $fpdf->cell(15, 7, "A.M. HOMBRE", 1, 0, "C", true);
            $fpdf->setFont("Arial", "B", 8);
            $fpdf->cell(15, 7, "TOTAL", 1, 0, "C", true);
            $fpdf->setFont("Arial", "B", 7);
            $fpdf->cell(20, 7, utf8_decode("TOTAL 1° Y 2°"), 1, 1, "C", true);
            $fpdf->setFont("Arial", "B", 8);

            $totalcero = 0;
            $totaluno = 0;
            $totaldos = 0;
            $totaltres = 0;
            $totalcuatro = 0;
            $totalcinco = 0;
            $totalseis = 0;
            $total1 = 0;

            $totalsiete = 0;
            $totalocho = 0;
            $totalnueve = 0;
            $totaldiez = 0;
            $totalonce = 0;
            $totaldoce = 0;
            $totaltrece = 0;
            $totalancianos = 0;
            $totalancianas = 0;
            $total2 = 0;

            $rscomite = $this->comite->listaPorCentralId(array("centralid" => $rowcentral->centralid));
            $rscomite = $rscomite["data"];

            foreach ($rscomite as $row2) {
                //  $fpdf->setX(40);
                $totalceroaseis = 0;
                $totalsieteatrece = 0;

                $rsedadcero = $this->beneficiario->cantidadPorComite(array("edad" => 0, "comiteid" => $row2->comiteid));
                $rsedaduno = $this->beneficiario->cantidadPorComite(array("edad" => 1, "comiteid" => $row2->comiteid));
                $rsedaddos = $this->beneficiario->cantidadPorComite(array("edad" => 2, "comiteid" => $row2->comiteid));
                $rsedadtres = $this->beneficiario->cantidadPorComite(array("edad" => 3, "comiteid" => $row2->comiteid));
                $rsedadcuatro = $this->beneficiario->cantidadPorComite(array("edad" => 4, "comiteid" => $row2->comiteid));
                $rsedadcinco = $this->beneficiario->cantidadPorComite(array("edad" => 5, "comiteid" => $row2->comiteid));
                $rsedadseis = $this->beneficiario->cantidadPorComite(array("edad" => 6, "comiteid" => $row2->comiteid));

                $rsedadsiete = $this->beneficiario->cantidadPorComite(array("edad" => 7, "comiteid" => $row2->comiteid));
                $rsedadocho = $this->beneficiario->cantidadPorComite(array("edad" => 8, "comiteid" => $row2->comiteid));
                $rsedadnueve = $this->beneficiario->cantidadPorComite(array("edad" => 9, "comiteid" => $row2->comiteid));
                $rsedaddiez = $this->beneficiario->cantidadPorComite(array("edad" => 10, "comiteid" => $row2->comiteid));
                $rsedadonce = $this->beneficiario->cantidadPorComite(array("edad" => 11, "comiteid" => $row2->comiteid));
                $rsedaddoce = $this->beneficiario->cantidadPorComite(array("edad" => 12, "comiteid" => $row2->comiteid));
                $rsedadtrece = $this->beneficiario->cantidadPorComite(array("edad" => 13, "comiteid" => $row2->comiteid));
                $rsmujeresancianas = $this->beneficiario->cantidadAdultoMayorPorComite(array("edad" => 55, "comiteid" => $row2->comiteid, "sexoid" => 2));
                $rshombressancianos = $this->beneficiario->cantidadAdultoMayorPorComite(array("edad" => 60, "comiteid" => $row2->comiteid, "sexoid" => 1));

                $totalceroaseis+=(int) $rsedadcero["cantidad"];
                $totalceroaseis+=(int) $rsedaduno["cantidad"];
                $totalceroaseis+=(int) $rsedaddos["cantidad"];
                $totalceroaseis+=(int) $rsedadtres["cantidad"];
                $totalceroaseis+=(int) $rsedadcuatro["cantidad"];
                $totalceroaseis+=(int) $rsedadcinco["cantidad"];
                $totalceroaseis+=(int) $rsedadseis["cantidad"];
                $total1+=(int) $totalceroaseis;

                $totalsieteatrece+=(int) $rsedadsiete["cantidad"];
                $totalsieteatrece+=(int) $rsedadocho["cantidad"];
                $totalsieteatrece+=(int) $rsedadnueve["cantidad"];
                $totalsieteatrece+=(int) $rsedaddiez["cantidad"];
                $totalsieteatrece+=(int) $rsedadonce["cantidad"];
                $totalsieteatrece+=(int) $rsedaddoce["cantidad"];
                $totalsieteatrece+=(int) $rsedadtrece["cantidad"];
                $totalsieteatrece+=(int) $rsmujeresancianas["cantidad"];
                $totalsieteatrece+=(int) $rshombressancianos["cantidad"];
                $total2+=(int) $totalsieteatrece;

                $totalcero+=(int) $rsedadcero["cantidad"];
                $totaluno+=(int) $rsedaduno["cantidad"];
                $totaldos+=(int) $rsedaddos["cantidad"];
                $totaltres+=(int) $rsedadtres["cantidad"];
                $totalcuatro+=(int) $rsedadcuatro["cantidad"];
                $totalcinco+=(int) $rsedadcinco["cantidad"];
                $totalseis+=(int) $rsedadseis["cantidad"];


                $totalsiete+=(int) $rsedadsiete["cantidad"];
                $totalocho+=(int) $rsedadocho["cantidad"];
                $totalnueve+=(int) $rsedadnueve["cantidad"];
                $totaldiez+=(int) $rsedaddiez["cantidad"];
                $totalonce+=(int) $rsedadonce["cantidad"];
                $totaldoce+=(int) $rsedaddoce["cantidad"];
                $totaltrece+=(int) $rsedadtrece["cantidad"];
                $totalancianas+=(int) $rsmujeresancianas["cantidad"];
                $totalancianos+=(int) $rshombressancianos["cantidad"];

                //  $fpdf->setX(30);
                $fpdf->cell(20, 5, $row2->codigointerno, 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadcero["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedaduno["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedaddos["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadtres["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadcuatro["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadcinco["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadseis["cantidad"], 1, 0, "R");
                $fpdf->cell(15, 5, $totalceroaseis, 1, 0, "R", true);
                $fpdf->cell(10, 5, $rsedadsiete["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadocho["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadnueve["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedaddiez["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadonce["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedaddoce["cantidad"], 1, 0, "R");
                $fpdf->cell(10, 5, $rsedadtrece["cantidad"], 1, 0, "R");
                $fpdf->cell(15, 5, $rsmujeresancianas["cantidad"], 1, 0, "R");
                $fpdf->cell(15, 5, $rshombressancianos["cantidad"], 1, 0, "R");
                $fpdf->cell(15, 5, $totalsieteatrece, 1, 0, "R", true);
                $fpdf->cell(20, 5, ($totalceroaseis + $totalsieteatrece), 1, 1, "R", true);
            }

            $fpdf->cell(20, 7, "TOTAL", 1, 0, "C", true);
            $fpdf->cell(10, 7, $totalcero, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totaluno, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totaldos, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totaltres, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totalcuatro, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totalcinco, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totalseis, 1, 0, "R", true);
            $fpdf->cell(15, 7, $total1, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totalsiete, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totalocho, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totalnueve, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totaldiez, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totalonce, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totaldoce, 1, 0, "R", true);
            $fpdf->cell(10, 7, $totaltrece, 1, 0, "R", true);
            $fpdf->cell(15, 7, $totalancianas, 1, 0, "R", true);
            $fpdf->cell(15, 7, $totalancianos, 1, 0, "R", true);
            $fpdf->cell(15, 7, $total2, 1, 0, "R", true);
            $fpdf->cell(20, 7, ($total1 + $total2), 1, 0, "R", true);
            
            $fpdf->Ln(15);
        }
         $fpdf->Output();
    }

    public function imprimirCantidades() {

        $centralid = $this->input->get("id");
        $rscentral = $this->central->lista();
        $rscentral = $rscentral["data"];

        $fpdf = new FPDF("L", "mm", "A4");
        $fpdf->SetAutoPageBreak(true, 100);
        $fpdf->AddPage();
        $fpdf->AliasNbPages();
        $fpdf->SetMargins(10, 25, 10);
        $fpdf->SetAutoPageBreak(true, 10);
        $fpdf->setFont("Arial", "B", 8);

        $rscentral = $this->central->listaXId(array("centralid" => $centralid));
        $rscentral = $rscentral["data"];

        $rscomite = $this->comite->listaPorCentralId(array("centralid" => $centralid));

        $rscomite = $rscomite["data"];


        $fpdf->SetFillColor(224, 224, 224);
        $fpdf->Ln(5);
        // $fpdf->setX(40);
        $fpdf->cell(240, 8, $rscentral["central"], 1, 1, "C", true);
        // $fpdf->setX(40);

        $fpdf->cell(20, 7, "", 1, 0, "C", true);
        $fpdf->cell(85, 7, utf8_decode("1° PRIORIDAD"), 1, 0, "C", true);
        $fpdf->cell(115, 7, utf8_decode("2° PRIORIDAD"), 1, 0, "C", true);
        $fpdf->cell(20, 7, "", 1, 1, "C", true);
        //  $fpdf->setX(40);
        $fpdf->cell(20, 7, "", 1, 0, "C", true);
        $fpdf->cell(70, 7, "EDAD", 1, 0, "C", true);
        $fpdf->Cell(15, 7, "", 1, 0, "C", true);

        $fpdf->cell(100, 7, "EDAD", 1, 0, "C", true);
        $fpdf->Cell(35, 7, "", 1, 1, "C", true);
        //    $fpdf->setX(40);
        $fpdf->cell(20, 7, "COMITE", 1, 0, "C", true);
        $fpdf->cell(10, 7, "0", 1, 0, "C", true);
        $fpdf->cell(10, 7, "1", 1, 0, "C", true);
        $fpdf->cell(10, 7, "2", 1, 0, "C", true);
        $fpdf->cell(10, 7, "3", 1, 0, "C", true);
        $fpdf->cell(10, 7, "4", 1, 0, "C", true);
        $fpdf->cell(10, 7, "5", 1, 0, "C", true);
        $fpdf->cell(10, 7, "6", 1, 0, "C", true);
        $fpdf->cell(15, 7, "TOTAL", 1, 0, "C", true);
        $fpdf->cell(10, 7, "7", 1, 0, "C", true);
        $fpdf->cell(10, 7, "8", 1, 0, "C", true);
        $fpdf->cell(10, 7, "9", 1, 0, "C", true);
        $fpdf->cell(10, 7, "10", 1, 0, "C", true);
        $fpdf->cell(10, 7, "11", 1, 0, "C", true);
        $fpdf->cell(10, 7, "12", 1, 0, "C", true);
        $fpdf->cell(10, 7, "13", 1, 0, "C", true);
        $fpdf->setFont("Arial", "B", 5);
        $fpdf->cell(15, 7, "A.M. MUJER", 1, 0, "C", true);
        $fpdf->cell(15, 7, "A.M. HOMBRE", 1, 0, "C", true);
        $fpdf->setFont("Arial", "B", 8);
        $fpdf->cell(15, 7, "TOTAL", 1, 0, "C", true);
        $fpdf->setFont("Arial", "B", 7);
        $fpdf->cell(20, 7, utf8_decode("TOTAL 1° Y 2°"), 1, 1, "C", true);
        $fpdf->setFont("Arial", "B", 8);

        $totalcero = 0;
        $totaluno = 0;
        $totaldos = 0;
        $totaltres = 0;
        $totalcuatro = 0;
        $totalcinco = 0;
        $totalseis = 0;
        $total1 = 0;

        $totalsiete = 0;
        $totalocho = 0;
        $totalnueve = 0;
        $totaldiez = 0;
        $totalonce = 0;
        $totaldoce = 0;
        $totaltrece = 0;
        $totalancianos = 0;
        $totalancianas = 0;
        $total2 = 0;



        foreach ($rscomite as $row2) {
            //  $fpdf->setX(40);
            $totalceroaseis = 0;
            $totalsieteatrece = 0;

            $rsedadcero = $this->beneficiario->cantidadPorComite(array("edad" => 0, "comiteid" => $row2->comiteid));
            $rsedaduno = $this->beneficiario->cantidadPorComite(array("edad" => 1, "comiteid" => $row2->comiteid));
            $rsedaddos = $this->beneficiario->cantidadPorComite(array("edad" => 2, "comiteid" => $row2->comiteid));
            $rsedadtres = $this->beneficiario->cantidadPorComite(array("edad" => 3, "comiteid" => $row2->comiteid));
            $rsedadcuatro = $this->beneficiario->cantidadPorComite(array("edad" => 4, "comiteid" => $row2->comiteid));
            $rsedadcinco = $this->beneficiario->cantidadPorComite(array("edad" => 5, "comiteid" => $row2->comiteid));
            $rsedadseis = $this->beneficiario->cantidadPorComite(array("edad" => 6, "comiteid" => $row2->comiteid));

            $rsedadsiete = $this->beneficiario->cantidadPorComite(array("edad" => 7, "comiteid" => $row2->comiteid));
            $rsedadocho = $this->beneficiario->cantidadPorComite(array("edad" => 8, "comiteid" => $row2->comiteid));
            $rsedadnueve = $this->beneficiario->cantidadPorComite(array("edad" => 9, "comiteid" => $row2->comiteid));
            $rsedaddiez = $this->beneficiario->cantidadPorComite(array("edad" => 10, "comiteid" => $row2->comiteid));
            $rsedadonce = $this->beneficiario->cantidadPorComite(array("edad" => 11, "comiteid" => $row2->comiteid));
            $rsedaddoce = $this->beneficiario->cantidadPorComite(array("edad" => 12, "comiteid" => $row2->comiteid));
            $rsedadtrece = $this->beneficiario->cantidadPorComite(array("edad" => 13, "comiteid" => $row2->comiteid));
            $rsmujeresancianas = $this->beneficiario->cantidadAdultoMayorPorComite(array("edad" => 55, "comiteid" => $row2->comiteid, "sexoid" => 2));
            $rshombressancianos = $this->beneficiario->cantidadAdultoMayorPorComite(array("edad" => 60, "comiteid" => $row2->comiteid, "sexoid" => 1));

            $totalceroaseis+=(int) $rsedadcero["cantidad"];
            $totalceroaseis+=(int) $rsedaduno["cantidad"];
            $totalceroaseis+=(int) $rsedaddos["cantidad"];
            $totalceroaseis+=(int) $rsedadtres["cantidad"];
            $totalceroaseis+=(int) $rsedadcuatro["cantidad"];
            $totalceroaseis+=(int) $rsedadcinco["cantidad"];
            $totalceroaseis+=(int) $rsedadseis["cantidad"];
            $total1+=(int) $totalceroaseis;

            $totalsieteatrece+=(int) $rsedadsiete["cantidad"];
            $totalsieteatrece+=(int) $rsedadocho["cantidad"];
            $totalsieteatrece+=(int) $rsedadnueve["cantidad"];
            $totalsieteatrece+=(int) $rsedaddiez["cantidad"];
            $totalsieteatrece+=(int) $rsedadonce["cantidad"];
            $totalsieteatrece+=(int) $rsedaddoce["cantidad"];
            $totalsieteatrece+=(int) $rsedadtrece["cantidad"];
            $totalsieteatrece+=(int) $rsmujeresancianas["cantidad"];
            $totalsieteatrece+=(int) $rshombressancianos["cantidad"];
            $total2+=(int) $totalsieteatrece;

            $totalcero+=(int) $rsedadcero["cantidad"];
            $totaluno+=(int) $rsedaduno["cantidad"];
            $totaldos+=(int) $rsedaddos["cantidad"];
            $totaltres+=(int) $rsedadtres["cantidad"];
            $totalcuatro+=(int) $rsedadcuatro["cantidad"];
            $totalcinco+=(int) $rsedadcinco["cantidad"];
            $totalseis+=(int) $rsedadseis["cantidad"];


            $totalsiete+=(int) $rsedadsiete["cantidad"];
            $totalocho+=(int) $rsedadocho["cantidad"];
            $totalnueve+=(int) $rsedadnueve["cantidad"];
            $totaldiez+=(int) $rsedaddiez["cantidad"];
            $totalonce+=(int) $rsedadonce["cantidad"];
            $totaldoce+=(int) $rsedaddoce["cantidad"];
            $totaltrece+=(int) $rsedadtrece["cantidad"];
            $totalancianas+=(int) $rsmujeresancianas["cantidad"];
            $totalancianos+=(int) $rshombressancianos["cantidad"];

            //  $fpdf->setX(30);
            $fpdf->cell(20, 5, $row2->codigointerno, 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadcero["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedaduno["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedaddos["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadtres["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadcuatro["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadcinco["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadseis["cantidad"], 1, 0, "R");
            $fpdf->cell(15, 5, $totalceroaseis, 1, 0, "R", true);
            $fpdf->cell(10, 5, $rsedadsiete["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadocho["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadnueve["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedaddiez["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadonce["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedaddoce["cantidad"], 1, 0, "R");
            $fpdf->cell(10, 5, $rsedadtrece["cantidad"], 1, 0, "R");
            $fpdf->cell(15, 5, $rsmujeresancianas["cantidad"], 1, 0, "R");
            $fpdf->cell(15, 5, $rshombressancianos["cantidad"], 1, 0, "R");
            $fpdf->cell(15, 5, $totalsieteatrece, 1, 0, "R", true);
            $fpdf->cell(20, 5, ($totalceroaseis + $totalsieteatrece), 1, 1, "R", true);
        }
        //   $fpdf->setX(40);
        $fpdf->cell(20, 7, "TOTAL", 1, 0, "C", true);
        $fpdf->cell(10, 7, $totalcero, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totaluno, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totaldos, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totaltres, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totalcuatro, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totalcinco, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totalseis, 1, 0, "R", true);
        $fpdf->cell(15, 7, $total1, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totalsiete, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totalocho, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totalnueve, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totaldiez, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totalonce, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totaldoce, 1, 0, "R", true);
        $fpdf->cell(10, 7, $totaltrece, 1, 0, "R", true);
        $fpdf->cell(15, 7, $totalancianas, 1, 0, "R", true);
        $fpdf->cell(15, 7, $totalancianos, 1, 0, "R", true);
        $fpdf->cell(15, 7, $total2, 1, 0, "R", true);
        $fpdf->cell(20, 7, ($total1 + $total2), 1, 0, "R", true);

        $fpdf->Output();
    }

    public function imprimirComitePorCentral() {

        $central = $this->input->get("central");
        $comite = $this->input->get("comite");
        $ubicacion = $this->input->get("ubicacion");
        $comiteid = $this->input->get("comiteid");
        $arreglo["comiteid"] = $comiteid;
        $rssocio = $this->socio->listaSocioPorComite($arreglo);
        $rstotalbeneficiario = $this->beneficiario->sumaBeneficiariosPorComite($arreglo);
        $totalbeneficiario = $rstotalbeneficiario["data"]["suma"];

        $titulo = "PADRON DE SOCIOS POR CENTRALES Y COMITES - PROGRAMA DE ALIMENTACION Y VASO DE LECHE";

        $fpdf = new FPDF("L", "mm", "A4");
        //$fpdf->SetMargins(30, 15 , 30);
        $fpdf->SetAutoPageBreak(true, 100);
        $fpdf->AddPage();
        $fpdf->AliasNbPages();
        $fpdf->SetMargins(10, 25, 10);
        $fpdf->SetAutoPageBreak(true, 10);
        $fpdf->setFont("Arial", "B", 10);
        $fpdf->cell(0, 8, $titulo, 1, 0, "C");
        $fpdf->Ln(10);
        $fpdf->setFont("Arial", "B", 10);
        $fpdf->Cell(20, 8, $central, 0, 1, "L");
        $fpdf->Ln(10);
        $fpdf->SetXY(33, 27);
        $fpdf->Cell(20, 8, "COMITE : ", 0, 0, "L");
        $fpdf->Cell(35, 8, $comite, 0, 0, "L");
        $fpdf->Cell(25, 8, "UBICACION : ", 0, 0, "L");
        $fpdf->Cell(100, 8, $ubicacion, 0, 0, "L");
        $fpdf->Cell(45, 8, "TOTAL BENEFICIARIOS : ", 0, 0, "L");
        $fpdf->Cell(10, 8, $totalbeneficiario, 0, 1, "L");

        $contador = 0;
        foreach ($rssocio["data"] as $rowsocio) {

            $fpdf->setFont("Arial", "B", 8);
            $fpdf->SetX(10);
            $fpdf->Cell(130, 7, "SOCIO", 1, 0, "L");
            $fpdf->Cell(20, 7, "DNI", 1, 0, "L");
            $fpdf->Cell(112, 7, "DIRECCION", 1, 1, "L");

            $fpdf->setFont("Arial", "", 8);

            $fpdf->Cell(130, 6, $rowsocio->apepater . " " . $rowsocio->apemater . " " . $rowsocio->nombre, 0, 0, "L");
            $fpdf->Cell(20, 6, $rowsocio->dni, 0, 0, "L");
            $fpdf->Cell(101, 6, $rowsocio->direccion, 0, 1, "L");

            $fpdf->SetX(50);
            $fpdf->setFont("Arial", "B", 8);
            $fpdf->Cell(10, 7, "ITEM", 1, 0, "L");
            $fpdf->Cell(130, 7, "BENEFICIARIO", 1, 0, "L");
            $fpdf->Cell(20, 7, "DNI", 1, 0, "L");
            $fpdf->Cell(10, 7, "EDAD", 1, 1, "L");
            $fpdf->setFont("Arial", "", 8);
            $rsbeneficiario = $this->beneficiario->listaPorSocio($rowsocio->socioid);

            foreach ($rsbeneficiario["data"] as $rowbeneficiario) {
                $contador++;
                $fpdf->SetX(50);
                $fpdf->Cell(10, 6, $contador, 0, 0, "L");
                $fpdf->Cell(130, 6, $rowbeneficiario->apepater . " " . $rowbeneficiario->apemater . " " . $rowbeneficiario->nombre, 0, 0, "L");
                $fpdf->Cell(20, 6, $rowbeneficiario->dni, 0, 0, "L");
                $fpdf->Cell(10, 6, $rowbeneficiario->edad, 0, 1, "L");
            }
            $fpdf->Ln(5);
        }



        $fpdf->Output();
    }

}
