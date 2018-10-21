    var pass;
    var pass1;
    var pass2;
    $("#username").on("blur",function(){
        var oUsername=$("#username").val();
        var regName=/^1[3|4|5|8][0-9]\d{4,8}$/;
        if(regName.test(oUsername)){
            $(".the_one").css({
                "display":"inline",
            })
            $("#number").removeClass("failline");
            $("#number .invalid").css({
                "display":"none"
            })
            pass=true;
        }else{
            $("#number").addClass("failline");
            $("#number .invalid").css({
                "display":"block"
            })
            pass=false;
        }
         
    })
    $("#password").on("blur",function(){
        var oPassword=$("#password").val();
        var regPdw=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        if(regPdw.test(oPassword)){
            $(".the_two").css({
                "display":"inline",
            })
            $("#pword").removeClass("failline");
            $("#pword .invalid").css({
                "display":"none"
            })
            pass1=true;
        }else{
            $("#pword").addClass("failline");
            $("#pword .invalid").css({
                "display":"block"
            })
            pass1=false;
        }
    })
    $("#password2").on("blur",function(){
        var oPassword2=$("#password2").val();
        var oPassword=$("#password").val();
        if(oPassword2==oPassword){
            $(".the_three").css({
                "display":"inline",
            })
            $("#pword2").removeClass("failline");
            $("#pword2 .invalid").css({
                "display":"none"
            })
            pass2=true;
        }else{
            $("#pword2").addClass("failline");
            $("#pword2 .invalid").css({
                "display":"block"
            })
            pass2=false;
        }
    })
    var oBtn = document.getElementById("btn");
    var oUser = document.getElementById("username");
    var oPwd = document.getElementById("password");
    $("#btn").on("click",function(){
        console.log(pass)
        if(pass&&pass1&&pass2){
            $.ajax({
            url:"http://localhost:8001/proxy/localhost/php/res.php",
            type:"GET",
            data:`username=${oUser.value}&password=${oPwd.value}`,
            datatype:"html",
            success:function(res){
                alert(res);
                $("#username").val("");
                $("#password").val("");
                $("#password2").val("");
                $(".the_one").css({
                "display":"none",
                })
                $(".the_two").css({
                "display":"none",
                })
                $(".the_three").css({
                "display":"none",
                })
                setTimeout(function(){
                    location.href="jumei_login.html"
                },3000)
            }
        }) 
     }
        
        
    })