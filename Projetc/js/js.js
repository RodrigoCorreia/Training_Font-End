$(document).ready(function(){
    console.log("teste");

    $("#input-search").on("focus", function(){
        $("li.search").addClass("ativo");
    }).on("blur", function(){
        $("li.search").removeClass("ativo");
    });

});