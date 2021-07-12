<template>
  <div id="app">
    <Header @shijian="getData($event)" />
    <Homepage :return-data="returnData" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Homepage from './containers/Homepage.vue';

export default {
  name: 'App',
  components: {
    Header,
    Homepage,
  },
  data() {
    return {
      returnData: [
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
        {
          id: '004',
          name: '玉米蔬菜猪肉蒸饺 690g',
          image: '/images/product/004.jpg',
          price: 35.8,
          tags: ['饺子'],
          isActive: true,
        },
        {
          id: '005',
          name: '鲜鸡蛋礼盒 32枚',
          image: '/images/product/005.jpg',
          price: 46.9,
          tags: ['鸡蛋', '礼盒'],
          isActive: true,
        },
        {
          id: '006',
          name: '台湾烤肠 鸡肉火腿肠 500g',
          image: '/images/product/006.jpg',
          price: 23.9,
          tags: ['鸡肉', '香肠'],
          isActive: true,
        },
        {
          id: '007',
          name: '薯乐鸡块原味 900g',
          image: '/images/product/007.jpg',
          price: 37.9,
          tags: ['鸡肉', '小吃'],
          isActive: true,
        },
        {
          id: '008',
          name: '金香无骨鸡柳 800g',
          image: '/images/product/008.jpg',
          price: 37.9,
          tags: ['鸡肉', '小吃'],
          isActive: true,
        },
        {
          id: '009',
          name: '富硒鲜鸡蛋 16枚',
          image: '/images/product/009.jpg',
          price: 39.9,
          tags: ['鸡蛋', '早餐'],
          isActive: true,
        },
        {
          id: '010',
          name: '玉米黄鲜鸡蛋 30枚',
          image: '/images/product/010.jpg',
          price: 49.9,
          tags: ['鸡蛋'],
          isActive: true,
        },
        {
          id: '011',
          name: '凝香骨肉相连 400g',
          image: '/images/product/011.jpg',
          price: 29.9,
          tags: ['鸡肉', '烧烤'],
          isActive: true,
        },
        {
          id: '012',
          name: '酱肉包 12只装',
          image: '/images/product/012.jpg',
          price: 39.8,
          tags: ['猪肉', '包子', '早餐'],
          isActive: true,
        },
        {
          id: '013',
          name: '糯米猪肉烧麦 32只',
          image: '/images/product/013.jpg',
          price: 36.8,
          tags: ['猪肉', '烧麦', '早餐'],
          isActive: true,
        },
        {
          id: '014',
          name: '鲜肉饼 猪肉馅饼 12只',
          image: '/images/product/014.jpg',
          price: 40.8,
          tags: ['猪肉', '包子', '早餐'],
          isActive: true,
        },
        {
          id: '015',
          name: '黑椒牛肉饼 12只',
          image: '/images/product/015.jpg',
          price: 39.9,
          tags: ['牛肉', '包子', '早餐'],
          isActive: true,
        },
        {
          id: '016',
          name: '玉米猪肉烧麦 32只',
          image: '/images/product/016.jpg',
          price: 35.8,
          tags: ['猪肉', '烧麦', '早餐'],
          isActive: true,
        },
        {
          id: '017',
          name: '宁德大黄鱼 500g',
          image: '/images/product/017.jpg',
          price: 49.9,
          tags: ['鱼', '海鲜'],
          isActive: true,
        },
        {
          id: '018',
          name: '黑椒脆皮猪排 1kg',
          image: '/images/product/018.jpg',
          price: 89.9,
          tags: ['猪肉'],
          isActive: true,
        },
        {
          id: '019',
          name: '芝士酱爆鸡排 800g',
          image: '/images/product/019.jpg',
          price: 45.9,
          tags: ['鸡肉', '小吃'],
          isActive: true,
        },
        {
          id: '020',
          name: '福建白虾 800g',
          image: '/images/product/020.jpg',
          price: 99,
          tags: ['虾', '海鲜'],
          isActive: true,
        },
        {
          id: '021',
          name: '泰国进口虾肉馄饨 630g 50粒',
          image: '/images/product/021.jpg',
          price: 139.8,
          tags: ['馄饨', '进口'],
          isActive: true,
        },
        {
          id: '022',
          name: '越南带皮巴沙鱼片 550g',
          image: '/images/product/022.jpg',
          price: 29.9,
          tags: ['鱼'],
          isActive: false,
        },
        {
          id: '023',
          name: '劲爽老坛酸菜包 12只',
          image: '/images/product/023.jpg',
          price: 39.8,
          tags: ['猪肉', '包子', '早餐'],
          isActive: false,
        },
      ],
    };
  },
  methods: {
    getData(val) {
      this.returnData = val;
    },
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #333;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
}
</style>
