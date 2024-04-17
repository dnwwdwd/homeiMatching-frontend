<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="html">
    <div class="background">
      <header-layout />
      <div class="sale_detail">
        <div class="left">
          <div class="salebtn1">
            <router-link to="/sale_chart">
              <h4 style="color:aliceblue;">图表</h4>
            </router-link>
          </div>
          <div class="salebtn2">
            <router-link to="/sale_detail">
              <h4 style="color:aqua;">详情</h4>
            </router-link>
          </div>
          <div class="query_keyword">
            <input type="text" class="keyword" id="keyword" placeholder="请输入关键字">
            <button class="query"></button>
          </div>
        </div>

        <div class="right">
          <div class="detail">
            <h4 style="color: aqua; font-size: 30px; margin-top: 20px">销售详情</h4>
            <a-table
                style="margin-top: 30px;"
                :columns="columns"
                :dataSource="data"
                class="antv-table"
            >
              <template #bodyCell="{ column }">
                <template v-if="column.key === 'operation'">
                  <a>立即处理</a>
                </template>
              </template>
            </a-table>
          </div>


        </div>
      </div>
      <div class="changePeng">
<!--        <button><h3>大棚1</h3></button>
        <button style="background-color:#1A2842"><h3>大棚2</h3></button>
        <button style="background-color:#1A2842"><h3>大棚3</h3></button>-->
      </div>

    </div>
  </div>


</template>
<script setup lang="ts">

import HeaderLayout from "@/layouts/HeaderLayout.vue";
import {ref, watchEffect} from "vue";
import myAxios from "@/plugins/myAxios";
import {message, TableColumnsType} from "ant-design-vue";

const columns: TableColumnsType = [
  { title: '订单号', width: 100, dataIndex: 'id', key: 'id', fixed: 'left' },
  { title: '品种', dataIndex: 'name', key: 'name', width: 150 },
  { title: '价格', dataIndex: 'price', key: 'price', width: 150 },
  { title: '数量', dataIndex: 'totalNum', key: 'totalNum', width: 150 },
  { title: '交易对象', dataIndex: 'userId', key: 'userId', width: 150 },
  { title: '交易时间', dataIndex: 'datetime', key: 'datetime', width: 150 },
];
interface SaleDetailData {
  id: number;
  name: string;
  price: number;
  totalNum: number;
  userId: number;
  datetime: string;
}

interface DataItem {
  key: number;
  id: number;
  name: string;
  price: number;
  totalNum: number;
  userId: number;
  datetime: string;
}

const data = ref<DataItem[]>([]);

watchEffect(async () => {
  const res : any = await myAxios.post('/sale/detail/list',);
  if (res?.code === 0) {
    data.value = res.data.map((item: SaleDetailData, index: number) => ({
          key: index,
          id: item.id,
          name: item.name,
          price: item.price,
          totalNum: item.totalNum,
          userId: item.userId,
          datetime: item.datetime,
        }));
  } else {
    message.error('数据获取失败');
  }
});



</script>
<style scoped>
.query_keyword{
  margin-left: 60px;
  margin-top:15%;
}
.keyword{
  width: 200px;
  height: 60px;
  margin-right: 20px;
  float: left;
  background: #00040C;
  border-radius: 10px;
  border: #1296DB 4px solid;
  font-size:30px;
  text-align: center;
}
.query{
  width: 40px;
  height: 40px;
  margin-top:10px;
  background: url(../image/monitor/query.png) no-repeat;

}
.detail{
  /*background: url(../image/sale/sale_detail.png) no-repeat center;*/
  width: 1450px;
  height: 750px;
  margin-left: 10px;
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
  padding-left: 0%;
  position: fixed;
}
.background{
  margin: auto;
  position: relative;
  top:0;
  width: 2200px;
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
  margin-left: 23%;
  float: left;
}
.salebtn1{
  margin-top: 20% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong01.png) no-repeat center;

}
.salebtn2{
  margin-top:15% ;
  height: 100px;
  background:url(../image/monitor/button_jiankong02.png) no-repeat center;

}
h4{
  font:40px lighter;
  text-align: center;
  padding-top:16px ;

}

h3{
  text-align: center;
  font:25px lighter;
  color: aqua;
}
.changeBigbutton{
  height: 50px;
  background: url(../image/monitor/bigbutton.png) no-repeat;
  margin-left:350px;
  margin-top: 200px;
}
.changePeng{
  margin-top:40%;
  text-align: center;
}
.changePeng button{
  height: 50px;
  width: 120px;
  margin: 20px;
  border-radius:15px;
  border-style:none;
  background-color: #1B5F24;
}
a{
  text-decoration: none;
}
</style>