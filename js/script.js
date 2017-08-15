$("#content .list-items").click(function(event){
    if($("#content .list-items").index($(this)) != $("#content .list-items").index($("#content .list-items" ).children(".fa-angle-down").parent()))
         {
            $("#content .list-items").next(".alt-list").hide("slow");
            $("#content .list-items").children("i").removeClass("fa-angle-down");
            $(this).next(".alt-list").slideToggle("slow");
            if($(".list-items i").hasClass("fa-angle-down")){
                $(this).children("i").removeClass("fa-angle-down");
            }else{  
                $(this).children("i").addClass("fa-angle-down");
            }
         }
})

$("#addEmployee .header_list .list-group li").click(function(event){
    $("#addEmployee .header_list .list-group li").css("color","black");
    $(this).css("color","white");
    $("#addEmployee .body_all>div").css("display","none");
    $("#addEmployee .body_all>div").eq($("#addEmployee .header_list .list-group li").index($(this)) ).css("display","block");
})    
