///<reference path="../../typings/globals/jquery/index.d.ts" />
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    let like_abbey = $("#like-abbey").data("like")
    let dislike_abbey = $("#dislike-abbey").data("dislike")

    let testeLikeAbbey = true
    let testeDislikeAbbey = true

    $("#like-abbey").text(like_abbey)
    $("#dislike-abbey").text(dislike_abbey)

    $("#like-b-abbey").click(function(){
        if(testeLikeAbbey){
            $("#thumb-up-abbey").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-abbey").text(like_abbey+1)
            $("#dislike-abbey").text(dislike_abbey)
            testeLikeAbbey = false
            if(!testeDislikeAbbey){
                $("#thumb-down-abbey").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikeAbbey = true
            }
        }
        else{
            $("#thumb-up-abbey").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-abbey").text(like_abbey)
            $("#dislike-abbey").text(dislike_abbey)
            testeLikeAbbey = true
        }
        
    })

    $("#dislike-b-abbey").click(function(){
        if(testeDislikeAbbey){
            $("#thumb-down-abbey").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-abbey").text(like_abbey)
            $("#dislike-abbey").text(dislike_abbey+1)
            testeDislikeAbbey = false
            if(!testeLikeAbbey){
                $("#thumb-up-abbey").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikeAbbey = true 
            }
        }
        else{
            $("#thumb-down-abbey").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-abbey").text(like_abbey)
            $("#dislike-abbey").text(dislike_abbey)
            testeDislikeAbbey = true
        }
        
    })

    let like_let = $("#like-let").data("like")
    let dislike_let = $("#dislike-let").data("dislike")

    let testeLikeLet = true
    let testeDislikeLet = true

    $("#like-let").text(like_let)
    $("#dislike-let").text(dislike_let)

    $("#like-b-let").click(function(){
        if(testeLikeLet){
            $("#thumb-up-let").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-let").text(like_let+1)
            $("#dislike-let").text(dislike_let)
            testeLikeLet = false
            if(!testeDislikeLet){
                $("#thumb-down-let").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikeLet = true
            }
        }
        else{
            $("#thumb-up-let").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-let").text(like_let)
            $("#dislike-let").text(dislike_let)
            testeLikeLet = true
        }
        
    })

    $("#dislike-b-let").click(function(){
        if(testeDislikeLet){
            $("#thumb-down-let").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-let").text(like_let)
            $("#dislike-let").text(dislike_let+1)
            testeDislikeLet = false
            if(!testeLikeLet){
                $("#thumb-up-let").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikeLet = true 
            }
        }
        else{
            $("#thumb-down-let").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-let").text(like_let)
            $("#dislike-let").text(dislike_let)
            testeDislikeLet = true
        }
        
    })

    let like_sgt = $("#like-sgt").data("like")
    let dislike_sgt = $("#dislike-sgt").data("dislike")

    let testeLikesgt = true
    let testeDislikesgt = true

    $("#like-sgt").text(like_sgt)
    $("#dislike-sgt").text(dislike_sgt)

    $("#like-b-sgt").click(function(){
        if(testeLikesgt){
            $("#thumb-up-sgt").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-sgt").text(like_sgt+1)
            $("#dislike-sgt").text(dislike_sgt)
            testeLikesgt = false
            if(!testeDislikesgt){
                $("#thumb-down-sgt").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikesgt = true
            }
        }
        else{
            $("#thumb-up-sgt").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-sgt").text(like_sgt)
            $("#dislike-sgt").text(dislike_sgt)
            testeLikesgt = true
        }
        
    })

    $("#dislike-b-sgt").click(function(){
        if(testeDislikesgt){
            $("#thumb-down-sgt").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-sgt").text(like_sgt)
            $("#dislike-sgt").text(dislike_sgt+1)
            testeDislikesgt = false
            if(!testeLikesgt){
                $("#thumb-up-sgt").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikesgt = true 
            }
        }
        else{
            $("#thumb-down-sgt").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-sgt").text(like_sgt)
            $("#dislike-sgt").text(dislike_sgt)
            testeDislikesgt = true
        }
        
    })

    let like_night = $("#like-night").data("like")
    let dislike_night = $("#dislike-night").data("dislike")

    let testeLikenight = true
    let testeDislikenight = true

    $("#like-night").text(like_night)
    $("#dislike-night").text(dislike_night)

    $("#like-b-night").click(function(){
        if(testeLikenight){
            $("#thumb-up-night").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-night").text(like_night+1)
            $("#dislike-night").text(dislike_night)
            testeLikenight = false
            if(!testeDislikenight){
                $("#thumb-down-night").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikenight = true
            }
        }
        else{
            $("#thumb-up-night").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-night").text(like_night)
            $("#dislike-night").text(dislike_night)
            testeLikenight = true
        }
        
    })

    $("#dislike-b-night").click(function(){
        if(testeDislikenight){
            $("#thumb-down-night").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-night").text(like_night)
            $("#dislike-night").text(dislike_night+1)
            testeDislikenight = false
            if(!testeLikenight){
                $("#thumb-up-night").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikenight = true 
            }
        }
        else{
            $("#thumb-down-night").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-night").text(like_night)
            $("#dislike-night").text(dislike_night)
            testeDislikenight = true
        }
        
    })

    


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
