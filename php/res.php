<?php

    header("Content-Type:text/html;charset=utf-8;");
    #1. 从前端拿来数据;
    $username = @$_GET["username"];
    $password = @$_GET["password"];
    if($username == "" || $password == ""){
        die("参数不全");
    }
    #2. 把数据放入到数据库之中;
    // 1. 如何连接数据;
    $con = mysql_connect("localhost","root","000000");
    if(!$con){
        // echo "数据库连接成功";
        die("数据库连接失败");
    }
    mysql_select_db("userlist", $con);
    // 判定是否存在相同用户名;
    $result = mysql_query(
                "SELECT username FROM 
                detaillist WHERE username='$username'"
    );
    $count = 0;
    while($row = mysql_fetch_array($result)){
        $count ++;
    }
    // 用户名重名
    if($count != 0){
        die("用户名重名");
    }
    // 加密密码;
    $password = md5($password);
    mysql_query("INSERT INTO detaillist (password, username ) 
    VALUES ('$password', '$username')");
    if(mysql_error()){
        die("数据库错误".mysql_error());
    }
    echo "注册成功";

?>