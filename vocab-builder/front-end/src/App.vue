<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/words" exact class="item">
            <i class="comment outline icon"></i> Words
          </router-link>
          <router-link to="/words/new" class="item">
            <i class="plus circle icon"></i> New
          </router-link>
          <router-link to="/test" class="item">
            <i class="graduation cap icon"></i> Test
          </router-link>
          <router-link to="/quockhang" class="item">
            <i class="user profile icon"></i> quockhang
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
     <flash-message class="myflash"></flash-message>
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
  position: fixed;  
  top: 0;
  left: 0;
  height: 100%;  
  width: 200px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: purple; 
}

.ui.large.secondary.inverted.pointing.menu.compact {
  display: flex;
  flex-direction: column; 
  width: 100%; 
}

.ui.large.secondary.inverted.pointing.menu.compact .item {
  padding: 15px 20px;
  width: 100%;
  color: white; 
  text-align: left; 
}

.ui.large.secondary.inverted.pointing.menu.compact .item:hover {
  background-color: #575757; 
}

.ui.text.container {
  margin-left: 220px; 
}

.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50px;
  right: 0;
}

input {
  width: 300px;
}

div.label {
  width: 120px;
}

div.input {
  margin-bottom: 10px;
}

button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>