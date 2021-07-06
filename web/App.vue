<template>
  <div id="app">
    <Header />
    <Homepage />
    
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
