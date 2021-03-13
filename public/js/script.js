$.get('http://localhost:8080/carros/', function(data) {

    $.each(data,function( index,item  ) {

        $(".container").append("<div class=\"card\">\n" +
            "            <div class=\"info\">\n" +
            "                <label >"+item+"</label>\n" +
            "                <label >"+index+"</label>\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"button\">\n" +
            "                <button>Apagar</button>\n" +
            "                <button>Editar</button>\n" +
            "            </div>\n" +
            "        </div>");
    });
});

document.querySelector("#btnbusca").addEventListener("click",()=>{

    var busca =  $('#busca').val();

    $.get('http://localhost:8080/carros/'+busca+'/', function(data) {

        $.each(data,function( index,item  ) {
            $(".container").html("<div class=\"card\">\n" +
                "            <div class=\"info\">\n" +
                "                <label >"+item+"</label>\n" +
                "                <label >"+index+"</label>\n" +
                "            </div>\n" +
                "\n" +
                "            <div class=\"button\">\n" +
                "                <button>Apagar</button>\n" +
                "                <button>Editar</button>\n" +
                "            </div>\n" +
                "        </div>");
        });
    })

})

document.querySelector("#cadastrar").addEventListener("click",()=>{
    var popup = document.querySelector(".popup");

    popup.style.display = "flex";
});


$( "#btnCadastrar" ).click(function() {

    var modelo = $("#modelo")
    var marca = $("#marca")

    if(marca.val() !=0 && modelo.val() !=""){

        $.post('http://localhost:8080/carros/', {
            modelo: modelo.val(),
            marca: marca.val(),
        }, function(data) {

            if(data == "sucesso"){
                alert("Cadastrado com sucesso");
                modelo.val("");
                marca.val("");

            }else{
                alert(data)
            }
        })
    }else{
        alert("Preencha todos os campos!");
    }
});






