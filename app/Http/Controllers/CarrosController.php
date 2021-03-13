<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CarrosModel;
use App\Http\Controllers\Carro;

class CarrosController extends Controller{

    function getCarros(){

        $carros = CarrosModel::all();

        $arr = Array();

        foreach ($carros as $in){

            $carro = new Carro();
            $carro->setMarca($in->Marca);
            $carro->setModelo($in->Modelo);

            array_push($arr,$carro);

        }

        return $arr;
    }

    function setCarros(Request $request){

        $modelo = $request->post("modelo");
        $marca = $request->post("marca");

        $carro = new Carro();

        $carro->setModelo($modelo);
        $carro->setMarca($marca);

        $retorno = CarrosModel::query()->insert(get_object_vars($carro));

        if($retorno){
            return "sucesso";
        }

        return "erro";

    }

    function getCarrosbyId($id){

        return null;
    }

    function setCarrosbyId(){
        return "setCarrosbyId";

    }

    function deleteCarrosbyId(){
        return "deleteCarrosbyId";
    }

}
