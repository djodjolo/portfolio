<template>
<div>
 
 <div id="nav">
   <router-link v-for="item in srData" v-bind:key="item.id" v-bind:to="item.link">{{item.title}}</router-link>
 </div>

  <!-- <div id="nav">
      <router-link to="/">HOME</router-link> 
      <router-link to="about">PUBLICATIONS</router-link> 
      <router-link to="about">BLOG</router-link> 
      <router-link to="about">CV</router-link> 
      <router-link to="about">PROJECTS</router-link> 
      <router-link to="about">BIO</router-link>
      <router-link to="about">CONTACT</router-link>
    </div> -->
          <hr>
  <div class="hello">
        EN
        {{srData[0].body}}
        </div>
  </div>
</template>

<script>
import db from './firebaseInit';

export default {
  name: 'EnHome',
  data () {
        return{
            srData:[]
        }
    },
  created () {
        db.collection('sr').where("title","==","CV").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                   'id': doc.id,
                   'title': doc.data().title,
                   'visibility' : doc.data().visibility,
                   'link' : doc.data().link,
                   'body' : doc.data().body

                }
                this.srData.push(data);
            })
        })
    }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
