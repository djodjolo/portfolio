<template>
<div v-html="srData[0].body">
  </div>
</template>

<script>
import db from './firebaseInit';

export default {
  name: 'CV',
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
