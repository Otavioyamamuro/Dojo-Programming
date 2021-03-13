<?php


namespace App\Http\Controllers;


class Carro
{

    public $Marca;
    public $Modelo;

    /**
     * @return mixed
     */
    public function getMarca()
    {
        return $this->Marca;
    }

    /**
     * @param mixed $Marca
     */
    public function setMarca($Marca): void
    {
        $this->Marca = $Marca;
    }

    /**
     * @return mixed
     */
    public function getModelo()
    {
        return $this->Modelo;
    }

    /**
     * @param mixed $Modelo
     */
    public function setModelo($Modelo): void
    {
        $this->Modelo = $Modelo;
    }



}
