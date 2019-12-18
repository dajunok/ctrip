<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li></li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        console.log(r)
      })
    }
  }
}
</script>
<style>
  .article_list {margin: auto;}
</style>