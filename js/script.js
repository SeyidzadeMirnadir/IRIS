$("#content .list-items").click(function(event){
    $(this).next().slideToggle("slow");
   
    if($(".list-items .fa-angle-left").hasClass("fa-angle-down")){
        $(this).children(".fa-angle-left").removeClass("fa-angle-down");
    }else{
        $(this).children(".fa-angle-left").addClass("fa-angle-down");
    }
})