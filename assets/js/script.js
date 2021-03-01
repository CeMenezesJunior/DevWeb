///<reference path="../../typings/globals/jquery/index.d.ts" />
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $("#botao-enviar").click(function(){
        let nome_valido = validaNomeFunction()
        let sexo_valido = validaSexoFunction()
        let album_valido = validaAlbumFunction()
        let bandas_valido = validaBandasFunction()

        if(nome_valido && sexo_valido && album_valido && bandas_valido){
            alert("Tudo certo")
        }
        else{
            alert("Estão faltando informações")
        }
    })
})

function validaNomeFunction(){
    let nome = $("#nome")

    if(nome.val() == ''){
        nome.addClass("is-invalid")
        nome.removeClass("is-valid")
        return false
    }
    else{
        nome.removeClass("is-invalid")
        nome.addClass("is-valid")
        return true
    }
}

function validaSexoFunction(){
    let sexo_masc = $("#sexo-masc")
    let sexo_fem = $("#sexo-fem")

    let botoes = $("input[name='sexo']:checked")
    if(botoes.length === 0){
        sexo_masc.addClass("is-invalid")
        sexo_masc.removeClass("is-valid")
        sexo_fem.addClass("is-invalid")
        sexo_fem.removeClass("is-valid")
        $("#sexo-feedback").addClass("d-block")
        return false
    }
    else{
        sexo_masc.addClass("is-valid")
        sexo_masc.removeClass("is-invalid")
        sexo_fem.addClass("is-valid")
        sexo_fem.removeClass("is-invalid")
        $("#sexo-feedback").removeClass("d-block")
        return true
    }
}

function validaAlbumFunction(){
    let album = $("#albuns")
    if(album.val() == ''){
        album.addClass("is-invalid")
        album.removeClass("is-valid")
        return false
    }
    else{
        album.removeClass("is-invalid")
        album.addClass("is-valid")
        return true
    }
}

function validaBandasFunction(){
    let beatles = $("#beatles")
    let queen = $("#queen")
    let elvis = $("#elvis")
    let a_ha = $("#aha")
    let pinkfloyd = $("#pinkfloyd")

    let botoes = $("input.bandas:checked")

    if(botoes.length === 0){
        beatles.addClass("is-invalid")
        beatles.removeClass("is-valid")
        queen.addClass("is-invalid")
        queen.removeClass("is-valid")
        elvis.addClass("is-invalid")
        elvis.removeClass("is-valid")
        a_ha.addClass("is-invalid")
        a_ha.removeClass("is-valid")
        pinkfloyd.addClass("is-invalid")
        pinkfloyd.removeClass("is-valid")
        $("#bandas-feedback").addClass("d-block")
        return false
    }
    else{
        beatles.removeClass("is-invalid")
        beatles.addClass("is-valid")
        queen.removeClass("is-invalid")
        queen.addClass("is-valid")
        elvis.removeClass("is-invalid")
        elvis.addClass("is-valid")
        a_ha.removelass("is-invalid")
        a_ha.addClass("is-valid")
        pinkfloyd.removeClass("is-invalid")
        pinkfloyd.addClass("is-valid")
        $("#bandas-feedback").removeClass("d-block")
        return true
    }
}
