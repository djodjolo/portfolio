<template>
  <div id="app" class="container">
    <div id="infobar">
      <div>
        <h1>Djordje Milosevic</h1>
      </div>
        <div id="languages">
          <h3> <router-link to='/'>SR</router-link> - <router-link to='/en'>EN</router-link></h3>  
        </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#app a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration-line: none;
  margin:0 8px;
}
#app a:hover {
  color: #2585F6;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

#nav a.router-link-exact-active {
  color: #2585F6;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}
#languages a.router-link-exact-active {
  color: #2585F6;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

#infobar{
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
}

#infobar > div{
  width: 100%;
}



.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
