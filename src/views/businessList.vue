<template><div>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <div class="wrapper">

    <!-- header部分 -->
    <header>
      <p>商家列表</p>
    </header>

    <!-- 商家列表部分 -->
    <ul class="business">
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj01.png">
          <div class="business-img-quantity">3</div>
        </div>
        <div class="business-info">
          <h3>万家饺子（软件园E18店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>各种饺子炒菜</p>
        </div>
      </li>
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj02.png">
          <div class="business-img-quantity">2</div>
        </div>
        <div class="business-info">
          <h3>小锅饭豆腐馆（全运店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>特色美食</p>
        </div>
      </li>
      <li onclick="this.router.push()">
        <div class="business-img">
          <img src="img/sj03.png">
          <div class="business-img-quantity">1</div>
        </div>
        <div class="business-info">
          <h3>麦当劳麦乐送（全运路店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>汉堡薯条</p>
        </div>
      </li>
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj04.png">
        </div>
        <div class="business-info">
          <h3>米村拌饭（浑南店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>各种炒菜拌饭</p>
        </div>
      </li>
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj05.png">
        </div>
        <div class="business-info">
          <h3>申记串道（中海康城店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>烤串炸串</p>
        </div>
      </li>
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj06.png">
        </div>
        <div class="business-info">
          <h3>半亩良田排骨米饭</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>排骨米饭套餐</p>
        </div>
      </li>
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj07.png">
        </div>
        <div class="business-info">
          <h3>茶兮鲜果饮品（国际软件园店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>甜品饮品</p>
        </div>
      </li>
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj08.png">
        </div>
        <div class="business-info">
          <h3>唯一水果捞（软件园E18店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>新鲜水果</p>
        </div>
      </li>
      <li onclick="location.href='businessInfo.html'">
        <div class="business-img">
          <img src="img/sj09.png">
        </div>
        <div class="business-info">
          <h3>满园春饼（全运路店）</h3>
          <p>&#165;15起送 | &#165;3配送</p>
          <p>各种春饼</p>
        </div>
      </li>
    </ul>

    <!-- 底部菜单部分 -->
    <ul class="footer">
      <li onclick="location.href='index.html'">
        <i class="fa fa-home"></i>
        <p>首页</p>
      </li>
      <li>
        <i class="fa fa-compass"></i>
        <p>发现</p>
      </li>
      <li onclick="location.href='orderList.html'">
        <i class="fa fa-file-text-o"></i>
        <p>订单</p>
      </li>
      <li>
        <i class="fa fa-user-o"></i>
        <p>我的</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "businessList"
}
</script>

<style scoped>
.wrapper{
  width: 100%;
  height: 100%; }
/****************** header部分 ******************/
.wrapper header{
  width: 100%;
  height: 12vw;
  background-color: #0097FF;
  color: #fff;
  font-size: 4.8vw;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center; }
/****************** 商家列表部分 ******************/
.wrapper .business{
  width: 100%;
  margin-top: 12vw;
  margin-bottom: 14vw; }
.wrapper .business li{
  width: 100%;
  box-sizing: border-box;
  padding: 2.5vw;
  border-bottom: solid 1px #DDD;
  user-select: none;
  cursor: pointer;

  display: flex;
  align-items: center; }
.wrapper .business li .business-img{
  /*这里设置为相当定位，成为business-img-quantity元素的父元素*/
  position: relative;
}
.wrapper .business li .business-img img{
  width: 20vw;
  height: 20vw; }
.wrapper .business li .business-img .business-img-quantity{
  width: 5vw;
  height: 5vw;
  background-color: red;
  color: #fff;
  font-size: 3.6vw;
  border-radius: 2.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  /*设置成绝对定位，不占文档流空间*/
  position: absolute;
  right: -1.5vw;
  top: -1.5vw; }
.wrapper .business li .business-info{
  margin-left: 3vw; }
.wrapper .business li .business-info h3{
  font-size: 3.8vw;
  color: #555; }
.wrapper .business li .business-info p{
  font-size: 3vw;
  color: #888;
  margin-top: 2vw; }
/****************** 底部菜单部分 ******************/
.wrapper .footer{
  width: 100%;
  height: 14vw;
  border-top: solid 1px #DDD;
  background-color: #fff;

  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center; }
.wrapper .footer li{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #999;
  user-select: none;
  cursor: pointer; }
.wrapper .footer li p{
  font-size: 2.8vw; }
.wrapper .footer li i{
  font-size: 5vw; }

</style>
