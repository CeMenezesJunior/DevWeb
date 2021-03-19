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

    let like_kind = $("#like-kind").data("like")
    let dislike_kind = $("#dislike-kind").data("dislike")

    let testeLikekind = true
    let testeDislikekind = true

    $("#like-kind").text(like_kind)
    $("#dislike-kind").text(dislike_kind)

    $("#like-b-kind").click(function(){
        if(testeLikekind){
            $("#thumb-up-kind").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-kind").text(like_kind+1)
            $("#dislike-kind").text(dislike_kind)
            testeLikekind = false
            if(!testeDislikekind){
                $("#thumb-down-kind").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikekind = true
            }
        }
        else{
            $("#thumb-up-kind").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-kind").text(like_kind)
            $("#dislike-kind").text(dislike_kind)
            testeLikekind = true
        }
        
    })

    $("#dislike-b-kind").click(function(){
        if(testeDislikekind){
            $("#thumb-down-kind").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-kind").text(like_kind)
            $("#dislike-kind").text(dislike_kind+1)
            testeDislikekind = false
            if(!testeLikekind){
                $("#thumb-up-kind").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikekind = true 
            }
        }
        else{
            $("#thumb-down-kind").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-kind").text(like_kind)
            $("#dislike-kind").text(dislike_kind)
            testeDislikekind = true
        }
        
    })

    let like_dark = $("#like-dark").data("like")
    let dislike_dark = $("#dislike-dark").data("dislike")

    let testeLikedark = true
    let testeDislikedark = true

    $("#like-dark").text(like_dark)
    $("#dislike-dark").text(dislike_dark)

    $("#like-b-dark").click(function(){
        if(testeLikedark){
            $("#thumb-up-dark").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-dark").text(like_dark+1)
            $("#dislike-dark").text(dislike_dark)
            testeLikedark = false
            if(!testeDislikedark){
                $("#thumb-down-dark").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikedark = true
            }
        }
        else{
            $("#thumb-up-dark").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-dark").text(like_dark)
            $("#dislike-dark").text(dislike_dark)
            testeLikedark = true
        }
        
    })

    $("#dislike-b-dark").click(function(){
        if(testeDislikedark){
            $("#thumb-down-dark").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-dark").text(like_dark)
            $("#dislike-dark").text(dislike_dark+1)
            testeDislikedark = false
            if(!testeLikedark){
                $("#thumb-up-dark").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikedark = true 
            }
        }
        else{
            $("#thumb-down-dark").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-dark").text(like_dark)
            $("#dislike-dark").text(dislike_dark)
            testeDislikedark = true
        }
        
    })

    
    let like_east = $("#like-east").data("like")
    let dislike_east = $("#dislike-east").data("dislike")

    let testeLikeeast = true
    let testeDislikeeast = true

    $("#like-east").text(like_east)
    $("#dislike-east").text(dislike_east)

    $("#like-b-east").click(function(){
        if(testeLikeeast){
            $("#thumb-up-east").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-east").text(like_east+1)
            $("#dislike-east").text(dislike_east)
            testeLikeeast = false
            if(!testeDislikeeast){
                $("#thumb-down-east").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikeeast = true
            }
        }
        else{
            $("#thumb-up-east").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-east").text(like_east)
            $("#dislike-east").text(dislike_east)
            testeLikeeast = true
        }
        
    })

    $("#dislike-b-east").click(function(){
        if(testeDislikeeast){
            $("#thumb-down-east").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-east").text(like_east)
            $("#dislike-east").text(dislike_east+1)
            testeDislikeeast = false
            if(!testeLikeeast){
                $("#thumb-up-east").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikeeast = true 
            }
        }
        else{
            $("#thumb-down-east").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-east").text(like_east)
            $("#dislike-east").text(dislike_east)
            testeDislikeeast = true
        }
        
    })

    let like_elvis = $("#like-elvis").data("like")
    let dislike_elvis = $("#dislike-elvis").data("dislike")

    let testeLikeelvis = true
    let testeDislikeelvis = true

    $("#like-elvis").text(like_elvis)
    $("#dislike-elvis").text(dislike_elvis)

    $("#like-b-elvis").click(function(){
        if(testeLikeelvis){
            $("#thumb-up-elvis").removeClass("far fa-thumbs-up").addClass("fas fa-thumbs-up")
            $("#like-elvis").text(like_elvis+1)
            $("#dislike-elvis").text(dislike_elvis)
            testeLikeelvis = false
            if(!testeDislikeelvis){
                $("#thumb-down-elvis").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
                testeDislikeelvis = true
            }
        }
        else{
            $("#thumb-up-elvis").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
            $("#like-elvis").text(like_elvis)
            $("#dislike-elvis").text(dislike_elvis)
            testeLikeelvis = true
        }
        
    })

    $("#dislike-b-elvis").click(function(){
        if(testeDislikeelvis){
            $("#thumb-down-elvis").removeClass("far fa-thumbs-down").addClass("fas fa-thumbs-down")
            $("#like-elvis").text(like_elvis)
            $("#dislike-elvis").text(dislike_elvis+1)
            testeDislikeelvis = false
            if(!testeLikeelvis){
                $("#thumb-up-elvis").removeClass("fas fa-thumbs-up").addClass("far fa-thumbs-up")
                testeLikeelvis = true 
            }
        }
        else{
            $("#thumb-down-elvis").removeClass("fas fa-thumbs-down").addClass("far fa-thumbs-down")
            $("#like-elvis").text(like_elvis)
            $("#dislike-elvis").text(dislike_elvis)
            testeDislikeelvis = true
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
