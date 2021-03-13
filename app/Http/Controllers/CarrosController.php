<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarrosController extends Controller
{
    function getCarros(){

        $arr = Array('celta','polo','civic','argo');

        return json_encode($arr);
    }

    function setCarros(){
        return "setCarros";

    }

    function getCarrosbyId(){
        return "getCarrosbyId";

    }

    function setCarrosbyId(){
        return "setCarrosbyId";

    }

    function deleteCarrosbyId(){
        return "deleteCarrosbyId";
    }

}
