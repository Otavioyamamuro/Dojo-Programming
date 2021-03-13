<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarrosController extends Controller
{
    function getCarros(){
        return "getCarros";
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
