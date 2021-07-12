<template>
  <div class="homepage">
    <div class="result-container">
      <div v-for="(item) in returnData" :key="item.id" class="display-unit">
        <img :src="item.image" />
        <div class="unit-title">
          {{ item.name }}
        </div>
        <div class="unit-price">
          ￥{{ item.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Homepage',
  props: ['returnData'],
  data: () => ({
  }),
};


</script>

<style lang="scss" scoped>
.homepage {
  background-color: #eee;
}

.result-container {
  width: 100%;
  padding-left: 1%;
  background-color: white;
}

.display-unit {
  display: inline-block;
  width: 270px;
  height: 310px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 40px;
  background-color: #f0f0c1;
}

img {
  width: 270px;
  height: 260px;
}

.unit-title {
  font-size: 20px;
  font-weight: 500;
}
</style>
