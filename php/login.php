﻿<?php

    header("Content-Type:text/html;charset=utf-8;");
    #1. 从前端拿来数据;
    $username = @$_GET["username"];
    $password = @$_GET["password"];
    if($username == "" || $password == ""){
        die("参数不全");
    }
    #2. 把数据放入到数据库之中;
    // 1. 如何连接数据;
    // mysql_connect(servername,username,password);
    $con = mysql_connect("localhost","root","000000");
    if(!$con){
        // echo "数据库连接成功";
        die("数据库连接失败");
    }
    mysql_select_db("userlist", $con);
    // 判定是否存在相同用户名;
    // $result = mysql_query("SELECT * FROM detaillist");
    $result = mysql_query(
                "SELECT username,password FROM 
                detaillist WHERE username='$username'"
    );

    $password = md5($password);
    while($row = mysql_fetch_array($result)){
        // echo json_encode($row);
        if($row['password'] == $password){
            die("登陆成功");
        }
    }
    echo mysql_error();

    echo "账号或者密码不正确";
?>