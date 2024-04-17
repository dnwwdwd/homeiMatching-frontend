<template>
  <div class="html">
    <div class="background">
      <header-layout />
      <div class="User">
        <div class="left">
          <div class="userbtn1">
            <router-link to="/user">
              <h4 style="color: aqua;">个人信息</h4>
            </router-link>
          </div>
          <div class="userbtn2">
            <router-link to="/user_info">
              <h4 style="color: aliceblue;">信息通知</h4>
            </router-link>
          </div>
        </div>
        <div class="right">
          <div class="r_left">
            <form>
              <div class="input_style">姓名：<input v-model="userName"></div>
              <div class="input_style">账号：<input v-model="userAccount"></div>
              <div class="input_style">密码：<input v-model="userPassword" type="password"></div>
              <div class="input_style">手机：<input v-model="phone"></div>
              <div class="input_style">邮箱：<input v-model="mail" type="email"></div>
              <button @click="edit" type="reset" class="alertbtn">修改</button>
              <button @click="save" type="submit" class="savebtn">保存</button>
            </form>
          </div>
          <div class="r_right">
            <div class="UserImage">
              <img class="userAvatar" src="https://p.qqan.com/up/2021-1/16101620383324674.jpg"/>
            </div>
            <label class="nameLabel">{{ userName }}</label>
            <label class="titleLabel">武汉智慧大棚种植大厂</label>
            <button @click="logout" class="exitbtn">退出登录</button>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>
<script setup lang="ts">
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import {onMounted, ref} from "vue";
import myAxios from "@/plugins/myAxios";
import {message} from "ant-design-vue";
import {useRouter} from "vue-router";

const router = useRouter();

const userName = ref();
const userAccount = ref();
const userPassword = ref();
const phone = ref();
const mail = ref();
const userAvatar = ref();

let isModify = false;
const edit = () => {
  isModify = true;
  message.info('记得点击保存修改才会生效');
};

/**
 * 页面加载时获取登录用户信息
 */
onMounted(async () => {
  const res : any  = await myAxios.get('/user/get/login/info');
  if (res?.code === 0) {
    userName.value = res.data.userName;
    userAccount.value = res.data.userAccount;
    userPassword.value = res.data.userPassword;
    mail.value = res.data.mail;
    phone.value = res.data.phone;
    userAvatar.value = res.data.userAvatar;
  } else {
    message.error('获取登录用户失败，' + `${res.message}`);
  }
});


const save = async () => {
  if (isModify) {
    const res : any = await myAxios.post('/user/edit', {
      userName: userName.value,
      userAccount: userAccount.value,
      userPassword: userPassword.value,
      mail: mail.value,
      phone: phone.value,
    });
    if (res?.code === 0) {
      message.success('信息保存成功');
    } else {
      message.success('信息保存失败，' + `${res.message}`);
    }
  } else {
    message.info('先点击修改才能保存');
  }
};

const logout = async () => {
  const res : any = await myAxios.post('/user/logout');
  if (res?.code === 0) {
    message.success('退出登录成功');
    router.push({
      path: '/login',
    });
  } else {
    message.error('退出登录失败');
  }
};
</script>
<style scoped>
.exitbtn{
  width: 150px;
  height: 60px;
  background-color: #1296DB;
  font:30px lighter;
  border-radius: 15px;
  margin-left: 30px;
  margin-top: 100px;

}
.titleLabel{
  font:30px lighter;
  display: block;
  color:#58DFDF;
  text-align: center;

}
.nameLabel{
  font:50px lighter;
  display: block;
  text-align: center;
  line-height: 100px;
}
img{
  width: 300px;
  height: 300px;
}
.UserImage{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 200px;
  margin-top:100px
}
.userAvatar{
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.r_right{
  float: left;
  margin-left: 50px;
  width: 700px;
}
.savebtn{
  width: 150px;
  height: 60px;
  background-color: #1296DB;
  font:30px lighter;
  border-radius: 15px;
  margin-left: 120px;
}
.alertbtn{
  width: 150px;
  height: 60px;
  background-color: #2A8F31;
  font:30px lighter;
  border-radius: 15px;
  margin-left: 100px;
  margin-top:40px;
}
.input_style{
  font:35px lighter;
  text-align: center;
  margin-top: 50px;
}
.input_style input{
  border:2px #58DFDF solid;
  background: transparent;
  width:300px;
  height: 60px;
}

.r_left{
  width: 600px;
  height: 700px;

  border-radius: 15px;
  float:left;
  margin-top:5%;
  margin-left:5%;
  box-shadow: 0px 10px 30px 0 #58DFDF;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
}
.html{
  background:#00040C;
  align-items: center;
  font-size: 16px;
  height: 100%;
  width: 100%;
  position: fixed;
  padding-left: 0%;
}
.background{
  margin: auto;
  position: relative;
  top:0;
  width:2200px;
  height: 1200px;
  background: url(../image/background.jpg) no-repeat top center;
}

.left{
  position: absolute;
  height: 60%;
  width: 15%;
  margin-left: 9%;
  float: left;
}

.right{
  position: absolute;
  height: 80%;
  width: 80%;
  margin-left: 25%;
  float: left;
}
.userbtn1{
  margin-top:20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong02.png) no-repeat center;

}
.userbtn2{
  margin-top:15% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

}
h4{
  font:35px lighter;
  text-align: center;
  padding-top:22px ;

}
a{
  text-decoration: none;
}
</style>