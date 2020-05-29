<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ing,index) in smoothie.ingrident" :key="index">
            <span class="chip">{{ing}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      smoothies: [
        {
          title: "Layth Drink",
          slug: "Layth-drink",
          ingrident: ["banana", "coffee", "Yogurt"],
          id: "1"
        },
        {
          title: "Afternoon Mode",
          slug: "afternoon-mode",
          ingrident: ["banana", "coffee", "hot souce"],
          id: "2"
        },
        {
          title: "Morning Mode",
          slug: "morning-mode",
          ingrident: ["coffee"],
          id: "3"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 40px;
  grid-gap: 20px
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}
</style>
