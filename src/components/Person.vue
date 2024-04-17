<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names

<template>
        <h2>Login</h2>
        <div class="item">
            <input type="text">
            <label>Username</label>
        </div>
        <div class="item">
            <input type="password">
            <label>
                <img src="C:\Users\Ylenovo\Desktop\Project\myVueProject\resource\image\头像.png"/>
                Password
                </label>
        </div>
        <button class="btn">submit
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>

</template>

<script lang="ts" setup name="Person234">
import {reactive} from 'vue'
//数据
//let car=reactive({brand:"奔驰",price:100})
//方法
//function changePrice(){
//    car.price+=10
//}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
 /*   .loginBox{
        width: 600px;
        height: 364px;
        background: rgba(0,0,0,0.5);
        box-shadow: 0px 15px 25px 0 rgba(0,0,0,0.6);
        padding: 20px;
        box-sizing: border-box;
    }*/
    h2{
        text-align: center;
        color: #fff;
        margin-bottom: 30px;
    }
    .item{
        height: 45px;
        border-bottom: 1px solid #fff;
        margin-bottom: 40px;
        position: relative;
    }
    .item input{
        width: 100%;
        height: 100%;
        color: #fff;
        padding-top:20px;
        box-sizing: border-box;
    }
    .item input:focus+label{
        top:0px;
        font-size: 12px;
    }
    input,button{
        background: transparent;
        border:none;
        outline: none;
    }
    .item label{
        position:absolute;
        left: 0;
        top:12px;
        transition: all 0.5s linear;
    }
    .btn{
        padding: 10px 20px;
        overflow: hidden;
        margin-top:30px;
        color: #03e9f4;
        position: relative;
        text-transform: uppercase;
        letter-spacing:2px;
    }
    .btn:hover{
        background: #03e9f4;
        border-radius:5px ;
        color: #fff;
        box-shadow: 0 0 5px 0 #03e9f4,
        0 0 25px 0 #03e9f4,
        0 0 50px 0 #03e9f4,
        0 0 100px 0 #03e9f4;
    }
    .btn>span{
        position:absolute;
    }
    .btn>span:nth-child(1){
        width: 100%;
        height: 2px;
        background:-webkit-linear-gradient(left,transparent,#03e9f4);
        left:-100%;
        top:0px;
        animation: line1 1s linear infinite;
    }

    @keyframes line1{
        50%,100%{
            left:100%;
        }
        
    }

    .btn>span:nth-child(2){
        width: 2px;
        height: 100%;
        background:-webkit-linear-gradient(top,transparent,#03e9f4);
        right: 0px;
        top:-100%;
        animation: line2 1s 0.25s linear infinite;
    }

    @keyframes line2{
        50%,100%{
            top:100%;
        }
    }

    .btn>span:nth-child(3){
        width: 100%;
        height: 2px;
        background:-webkit-linear-gradient(left,#03e9f4,transparent);
        left: 100%;
        bottom: 0;
        animation: line3 1s 0.5s linear infinite;
    }
    @keyframes line3{
        50%,100%{
            left:-100%;
        }
    }
    .btn>span:nth-child(4){
        width: 2px;
        height: 100%;
        background:-webkit-linear-gradient(top,#03e9f4,transparent);
        left: 0px;
        top: 100%;
        animation: line4 1s 0.75s linear infinite;
    }
    @keyframes line4{
        50%,100%{
            top:-100%;
        }
    }




</style>