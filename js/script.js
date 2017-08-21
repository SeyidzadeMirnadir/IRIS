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

$(".header_list .list-group button").click(function(event){
    $(".header_list .list-group button").css("background","transparent");
    $(this).css("background","#e0e0e0");
    $(".body_all .col-md-5>div").css("display","none");
    $(".body_all .col-md-5>div").eq($(".header_list .list-group button").index($(this)) ).css("display","block");
})    

$(".addSobe").click(function(event) {
    $(".myForm").append('<div class="form-group row"><label for="example-text-input" class="col-3 col-form-label">Şöbə adı:</label> <div class="col-5 mySobe"><input class="form-control" type="text"  id="example-text-input"></div></div><div class="form-group row"><label for="example-text-input" class="col-3 col-form-label">Bölmə adı:</label><div class="col-5 myBolme"><input class="form-control" type="text"  id="example-text-input"></div><div class="col-2"><div class="row"> <button class="addBolme" type=""><i class="fa fa-plus" aria-hidden="true"></i></button></div></div></div>')
    return false;
});
$(".addBolme").click(function(event) {
    $(".myBolme").append('<input class="form-control" type="text"  id="example-text-input">')
    return false;
});