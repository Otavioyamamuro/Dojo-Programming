$.get('http://localhost:8080/carros/', function(data) {

    $.each(data,function( index,item  ) {

        $(".div-cards").append("<section class=\"card\" id='carro-"+item["id"]+"'>"+
                "<div class=\"info\">"+
                "<label>"+item["Marca"]+"</label>"+
                "<label>"+item["Modelo"]+"</label>"+
            "</div>"+
                "<div class=\"div-button\">"+
                    "<button onclick=\"fnExcluir("+item["id"]+")\">"+//ver o que passar para ter base para excluir
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\">"+
                        "<path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>"+
                        "</svg>"+
                    "</button>"+
                    "<input type='hidden' class='id-btn' id='"+item["id"]+"'>"+
                    "<button onclick=\"fnEditar('"+item["Marca"]+"','"+item["Modelo"]+"',"+item["id"]+")\">"+//ver o que passar para ter base para editar
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">"+
                        "<path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>"+
                        "<path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>"+
                        "</svg>"+
                    "</button>"+
                "</div>"+
            "</section>");
    });
});

$("#btnbusca").click(function(){
    var busca =  $('#busca').val();

    $.get('http://localhost:8080/carros/'+busca+'/', function(data) {

        $.each(data,function( index,item  ) {
            $(".div-cards").html("<section class=\"card\">"+
                "<div class=\"info\">"+
                "<label>"+item["Marca"]+"</label>"+
                "<label>"+item["Modelo"]+"</label>"+
                "</div>"+
                "<div class=\"div-button\">"+
                "<button onclick=\"fnExcluir("+item["id"]+")\">"+//ver o que passar para ter base para excluir
                "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\">"+
                "<path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>"+
                "</svg>"+
                "</button>"+

                "<button onclick=\"fnEditar('"+item["Marca"]+"','"+item["Modelo"]+"',"+item['id']+");\">"+//ver o que passar para ter base para editar
                "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">"+
                "<path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>"+
                "<path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>"+
                "</svg>"+
                "</button>"+
                "</div>"+
            "</section>");
        });
    })

})

$( "#btnAdicionar" ).click(function(){
    $(".bg").css("display","flex");
    $('body').css("overflow","hidden");
    $('html,body').scrollTop(0);
    //$( "#btnEditar" ).css("display","none");
    $("#modelo").val("");
    $("#marca").val("");

});

$("#btnSair").click(function(){
    $(".bg").css("display","none");
    $('body').css("overflow","initial");
    /*$( "#btnInserir" ).css("display","block");
    $( "#btnEditar" ).css("display","block");*/
})

function fnExcluir(id){
    if(confirm("Deseja realmente excluir esse registro?")){
        //alert("foi excluido o registro de id " + id);//apagar essa linha depois

        $.ajax({
            method: "POST",
            url: "http://localhost:8080/carros/"+id+"/",
            data: { "id": id , '_method': 'DELETE'}
        })
        .done(function( msg ) {
            if(msg == "sucesso"){
                alert("Registro excluido com sucesso!");
                $('#carro-'+id).remove();
            }else{
                alert("Falha ao excluir registro");
            }
        });
    }
}

function fnEditar(marca,modelo,id){
    $('html,body').scrollTop(0);
    $(".bg").css("display","flex");
    $('body').css("overflow","hidden");
    //$("#btnInserir").css("display","none");
    $("#modelo").val(modelo);
    $("#marca").val(marca);
    $("#hdd").val(id);

};


$("#btnInserir").click(function() {

    var modelo = $("#modelo");
    var marca = $("#marca");

    if(marca.val() != "" && modelo.val() !=""){


            $.post('http://localhost:8080/carros/', {
                    modelo: modelo.val(),
                    marca: marca.val(),
                }, function(data) {

                if(data == "sucesso"){
                    alert("Cadastrado com sucesso");
                    modelo.val("");
                    marca.val("");

                }else{
                    alert(data);
                }
            })
    }else{
        alert("Preencha todos os campos!");
    }
});

$('#btnEditar').click(function (){

    var modelo = $("#modelo").val();
    var marca = $("#marca").val();
    var id = $("#hdd").val();

    if (marca != "" && modelo != "") {

        $.ajax({
            method: "POST",
            url: "http://localhost:8080/carros/"+id+"/",
            data: { "id": id, "modelo":modelo, "marca":marca,"_method":'PUT' }
        }).done(function( msg ) {
            console.log(msg);
        });

    } else {
        alert("Preencha todos os campos!");
    }

});


