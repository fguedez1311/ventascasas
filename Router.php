<?php
    namespace MVC;

    class Router{
        public $rutasGET=[];
        public $rutasPOST=[];
        public function get($url,$fn){
            $this->rutasGET[$url]=$fn;
        }
        public function comprobarRutas(){
            // Leemos la url actual
            $urlActual=$_SERVER['PATH_INFO'] ?? '/';

            // El tipo de método GET o POST
            $metodo=$_SERVER['REQUEST_METHOD'];
            if ($metodo==='GET'){
                $fn=$this->rutasGET[$urlActual] ?? null;
            }
            
            
            if ($fn){
                call_user_func($fn,$this);
            }
            else{
                echo "Página no encontrada";
            }
        }
    }