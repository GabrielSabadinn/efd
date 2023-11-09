<template>
  <div class="container-rt">
    <div v-if="dados.length != 0">
      <p v-html="dados?.observacao[isRota]"></p>
      <p class="tituloA">Natureza Envio</p>
      <p v-html="dados[isRota]?.naturezaEnvio"></p>
      <p class="tituloA">Exceção</p>
      <p v-html="dados[isRota]?.excecao || '<p>Nenhuma Exceção </p>'"></p>
    </div>
    <div v-else>
      <span class="skeleton-loaderOutrasPagMaior"></span>
      <span class="skeleton-loaderOutrasPagMaior"></span>
      <span class="skeleton-loaderOutrasPagMaior"></span>
      <span class="skeleton-loaderOutrasPagMaior"></span>
    </div>
  </div>
</template>

<script>
import { token, url } from "../services/link.js";
import axios from "axios";
export default {
  props: ["isRota", "dados"],
  data() {
    return {
      mostraSke: true,
      naturezaEnvio: "",
    };
  },
  methods: {
    async regra() {},
  },
  async mounted() {
    console.log("vindo");
  },
};
</script>

<style>
.tituloA {
  margin-left: 7px;
  font-style: italic;
  font-size: 18px;
  font-weight: bold;
  color: rgb(128, 128, 128);
  margin-bottom: 0.6px;
  border-bottom: 1px solid rgb(160, 158, 158);
  margin-top: 35px;
}
[txtGEral] {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
[txtGEral] img {
  margin-right: 5px;
}
.container-rt {
  color: #707070;
}
.info span:nth-child(1) {
  font-weight: bold;
}
</style>
