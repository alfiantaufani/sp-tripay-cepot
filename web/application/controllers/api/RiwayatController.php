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
        // select DB
        $id = $this->input->get('id');
        $this->db->select('*');
        $this->db->from('transaksi');
        $this->db->join('detail_transaksi', 'transaksi.id=detail_transaksi.id_pembayaran');
        $this->db->where('transaksi.uuid', $id);
        $data = $this->db->get();
        $hasil = $data->row();

        // cari tutorial di tripay
        $apiKey = 'xvYjCuHif6GP6J7OTUqrQXgs4xd7kTfMTPXippgO';
        $payload = ['code' => $hasil->payment_name];
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_FRESH_CONNECT  => true,
            CURLOPT_URL            => 'https://tripay.co.id/api/payment/instruction?' . http_build_query($payload),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER         => false,
            CURLOPT_HTTPHEADER     => ['Authorization: Bearer ' . $apiKey],
            CURLOPT_FAILONERROR    => false,
            CURLOPT_IPRESOLVE      => CURL_IPRESOLVE_V4
        ]);
        $response = curl_exec($curl);
        $methode = json_decode($response);
        // $error = curl_error($curl);
        // curl_close($curl);
        // echo empty($error) ? $response : $error;

        header('Content-Type: application/json');
        echo json_encode([
            'status' => 'success',
            'data' => $hasil,
            'tutorial' => $methode,
        ]);
    }
}
