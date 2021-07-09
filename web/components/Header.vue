<template>
  <header>
    <div class="static-content">
      <img src="/images/img-logo.png" alt="logo" />
      <ul class="menu">
        <li class="menu-item">
          <a class="menu-text" href="#">首页</a>
        </li>
        <li class="menu-item">
          <a class="menu-text" href="#">品牌与产品</a>
        </li>
        <li class="menu-item">
          <a class="menu-text" href="#">集团动态</a>
        </li>
        <li class="menu-item">
          <a class="menu-text" href="#">可持续发展</a>
        </li>
        <li class="menu-item">
          <a class="menu-text" href="#">联系我们</a>
        </li>
        <li class="menu-item">
          <a class="menu-text" href="#">关于我们</a>
        </li>
      </ul>
      <div class="search-box">
        <a-icon
          type="search"
          class="search-icon"
          @click="searchBarVisible = true"
        />
      </div>
    </div>

    <div v-if="searchBarVisible" class="search-bar">
      <input v-model="searchText" class="search-input" />
      <a-icon
        type="close"
        class="close-icon"
        @click="searchBarVisible = false"
      />
    </div>
  </header>
</template>
<script>

export default {
  name: 'Header',
  data() {
    return {
      searchBarVisible: false,
      searchText: '',
    };
  },
  watch: {
    searchText() {
      const axios = require('axios');
      console.log(this.searchText);
      axios.get('http://localhost:3000').then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        console.log('finished');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  .static-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 880px;
    padding: 10px;

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      min-width: 600px;
      padding: 20px;

      .menu-item {
        line-height: 45px;

        .menu-text {
          font-size: 18px;
        }
      }
    }

    .search-box {
      padding-top: 20px;

      .search-icon {
        font-size: 36px;
        cursor: pointer;
      }
    }
  }

  .search-bar {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #eee;

    .search-input {
      flex: 1;
      height: 30px;
      font-size: 20px;
    }

    .close-icon {
      margin-left: 20px;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
