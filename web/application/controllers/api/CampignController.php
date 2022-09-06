<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

require 'vendor/autoload.php';
defined('BASEPATH') or exit('No direct script access allowed');

use Tripay\Main;

class CampignController extends CI_Controller
{
    public $tripay;

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->helper('url');

        $this->tripay =  new Main(
            'xvYjCuHif6GP6J7OTUqrQXgs4xd7kTfMTPXippgO',
            'Fj910-6NDuf-AgHVH-MjGBY-4HYnd',
            'T15053',
            'live'
        );
    }

    public function index()
    {
        // $this->db->select('*');
        // $this->db->from('campign');
        $campign = $this->db->get('campaign');

        if ($campign) {
            header('Content-Type: application/json');
            echo json_encode([
                'status' => 'success',
                'data' => $campign->result()
            ]);
        } else {
            header('Content-Type: application/json');
            echo json_encode([
                'status' => 'error',
                'message' => 'Data tidak tersedia'
            ]);
        }
    }

    public function detail()
    {
        $campign = $this->db->get_where('campaign', ['kode' => $this->input->get('kode')]);
        $methode = $this->tripay->initChannelPembayaran()->getData();

        if ($campign) {
            header('Content-Type: application/json');
            echo json_encode([
                'status' => 'success',
                'data' => $campign->row(),
                'methode' => $methode
            ]);
        } else {
            header('Content-Type: application/json');
            echo json_encode([
                'status' => 'error',
                'message' => 'Data tidak tersedia'
            ]);
        }
    }
}