<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test-dev Estadão</title>

    <link rel="stylesheet" href="/public/css/style.css">
</head>
<body>


    <header>
        <div class="container div-header">
            <div class="div-logo">
                <img src="/public/img/logoEstadao.png" alt="">
            </div>
            <div class="items-header">
                <div class="div-add">
                    <button id="btnAdicionar">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                    </button>
                </div>
                <div class="div-pesquisa">
                    <input type="text" id="busca" placeholder="Pesquisar aqui">
                    <button id="btnbusca">
                        <svg class="bi bi-search" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                            <path fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main class="container">
        <div class="div-cards">
        </div>
    </main>

    <div class="bg">
        <div class="popup">
            <div class="div-sair">
                <div id="btnSair">
                    +
                </div>
            </div>
            <input type="text" id="marca" placeholder="Marca">
            <input type="text" id="modelo" placeholder="Modelo">
            <input type="hidden" id="hdd">
            <button id="btnInserir">Cadastrar</button>
            <button id="btnEditar">Editar</button>
        </div>
    </div>

    <script src="/public/js/jquery.js"></script>
    <script src="/public/js/script.js"></script>


</body>
</html>
