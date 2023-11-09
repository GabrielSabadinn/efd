<template>
  <div id="app">
    <div style="background: #fff; margin-bottom: 28px" id="navba">
      <div style="padding-left: 0px">
        <nav style="padding-left: 0px">
          <div class="navAjs">
            <div style="display: flex; align-items: center">
              <a href="https://www.lefisc.com.br">
                <img
                  src="https://www.lefisc.com.br/monitoramentoncm/img/logo.png"
                  style="width: 115px; height: 27px"
              /></a>
              <p @click="pag" style="cursor: pointer; font-size: 14px">
                EFD Reinf R-4000
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <br />
    <div id="padrao-tamanho">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    let obj = JSON.parse(localStorage.getItem("rtfonte"));

    if (obj != null) {
      this.$store.state.idItem = obj.idItem;
      this.$store.state.titulo = obj.titulo;
      this.$store.state.id = obj.id;
    }
  },
};
</script>

<style>
.skeleton-loaderOutrasPagMaior {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-top: 20px;
  display: block;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 90%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 400px 10px;
  background-position: 0 0;
  animation: shine 1.5s infinite;
}
@keyframes shine {
  to {
    background-position: 100% 100px, 0 0;
  }
}
.skeleton-loaderOutrasPagMenor {
  width: 35%;
  height: 30px;
  border-radius: 5px;
  margin-top: 20px;
  display: block;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
}

#padrao-tamanho {
  max-width: 1300px;
  margin: 0 auto;
  background: #fff;
}
body {
  margin: 0;
  padding: 0px;
}
.navAjs {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
}
.navAjs a {
  text-decoration: none !important;
  color: #383838;
}
.navAjs p {
  position: relative;
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  color: #383838;
  font-size: 19px !important;
  font-weight: 600 !important;
  margin-top: 17px;
}
.navAjs p::before {
  content: "";
  position: absolute;
  height: 25px;
  width: 1px;
  top: 1px;
  left: -14px;
  background: grey;
}
li {
  position: relative;
}
li.active a {
  color: #383838;
}
li.active a::after {
  content: "";
  position: absolute;
  left: -3px;
  top: 13px;
  width: 1px;
  height: 25px;
  background: #000;
  border-left: 0.7px solid grey;
}
@media screen and (max-width: 600px) {
  #app {
    font-size: 0.9em;
  }
}
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  min-height: 94vh;
  margin: 0;
  color: #6a6a6a;
}
html,
body {
  scroll-behavior: smooth !important;
}
.hidden {
  overflow-y: hidden;
}
.newColor {
  background: #eff3f5 !important;
}
html,
body {
  height: 100%;
}
html::-webkit-scrollbar {
  width: 10px !important;
}
html::-webkit-scrollbar-track {
  background-color: rgb(0, 0, 0, 0);
}
html::-webkit-scrollbar-thumb {
  background: #4e4e4e;
  border-radius: 25px;
}
</style>
