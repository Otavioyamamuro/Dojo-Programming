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
            $carro->setId($in->id);

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


        $carroQuery = CarrosModel::query()->find($id);


        $carro = new Carro();
        $carro->setMarca($carroQuery->Marca);
        $carro->setModelo($carroQuery->Modelo);
        $carro->setId($carroQuery->id);


        return Array($carro);


    }

    function setCarrosbyId(Request $request){


        $retorno = CarrosModel::query()->where('id',$request->post('id'))->update(['Modelo'=>$request->post('modelo'),'Marca'=>$request->post('marca')]);

        if($retorno){
            return "sucesso";
        }else{
            return "falha";
        }

    }

    function deleteCarrosbyId(Request $request){

        $retorno = CarrosModel::query()->where('id',$request->post('id'))->delete();

        if($retorno){
            return "sucesso";
        }else{
            return "falha";
        }

    }

}
