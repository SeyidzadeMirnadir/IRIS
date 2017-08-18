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

$("#addEmployee .header_list .list-group button").click(function(event){
    $("#addEmployee .header_list .list-group button").css("background","transparent");
    $(this).css("background","#e0e0e0");
    $("#addEmployee .body_all>div").css("display","none");
    $("#addEmployee .body_all>div").eq($("#addEmployee .header_list .list-group button").index($(this)) ).css("display","block");
})    



