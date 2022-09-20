<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

defined('BASEPATH') or exit('No direct script access allowed');

class RiwayatController extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->helper('url');
    }

    public function index()
    {
        $id_registrasi = $this->input->get('id_registrasi');

        $this->db->select('*');
        $this->db->from('transaksi');
        $this->db->join('detail_transaksi', 'transaksi.id=detail_transaksi.id_pembayaran');
        $data = $this->db->get();

        header('Content-Type: application/json');
        echo json_encode([
            'status' => 'success',
            'data' => $data->result(),
        ]);
    }

    public function detail()
    {
        $id = $this->input->get('id');
        $this->db->select('*');
        $this->db->from('transaksi');
        $this->db->join('detail_transaksi', 'transaksi.id=detail_transaksi.id_pembayaran');
        $this->db->where('transaksi.uuid', $id);
        $data = $this->db->get();

        header('Content-Type: application/json');
        echo json_encode([
            'status' => 'success',
            'data' => $data->row(),
        ]);
    }
}
