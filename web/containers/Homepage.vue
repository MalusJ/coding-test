<template>
  <div class="homepage">
    <div class="result-container">
      <div v-for="(item,i) in searchResult" :key="item.id" class="display-unit">
        <img :src=item.image />
        <div class="unit-title">
          {{ item.name }}
        </div>
        key is {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data: () => ({
    searchResult: [
      {
        id: '001',
        name: '鲜鸡蛋 30枚',
        image: '/images/product/001.jpg',
        price: 44.9,
        tags: ['鸡蛋', '早餐'],
        isActive: true,
      },
      {
        id: '002',
        name: '鸡翅中 1kg 出口级食材',
        image: '/images/product/002.jpg',
        price: 59.9,
        tags: ['鸡肉', '烧烤', '出口级食材'],
        isActive: true,
      },
      {
        id: '003',
        name: '琵琶腿 鸡大腿 1kg 出口级食材',
        image: '/images/product/003.jpg',
        price: 29.9,
        tags: ['鸡肉', '烧烤', '出口级食材'],
        isActive: true,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.homepage {
  background-color: #eee;
}

.result-container {
  width: 100%;
  background-color: aqua;
}

.display-unit {
  display: inline-block;
  width: 260px;
  height: 260px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: bisque;
}
</style>
