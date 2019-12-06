<template>
  <div class="plan-head">
    <div class="plan-head-logo">
      <img src="../assets/img/logo.png" />
    </div>
    <div class="plan-head-right">
      <div class="user-info">
        <span class="name">金大光</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.plan-head{
  height: 40px;
  display: flex;
  justify-content: space-between;
  .plan-head-logo{
    padding: 0 10px;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
    display: flex;
    align-items: center;
    img{
      height: 20px;
    }
  }
  .plan-head-right{
    padding: 0 10px;
    .user-info{
      padding: 10px 0;
      .name{
        font-size: 14px;
        cursor: pointer;
        line-height: 20px;
      }
    }
  }
}
</style>