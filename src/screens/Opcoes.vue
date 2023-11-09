<template>
  <div>
    <div id="cores">
      <div class="cor1"></div>
      <div class="cor2"></div>
      <div class="cor3"></div>
      <div class="cor4"></div>
    </div>
    <div class="espacamento">
      <div class="top">
        <div>
          <span style="font-size: 18px">{{ $store.state.titulo.substring(0, 5) }}</span
          ><br />
          <p>{{ $store.state.titulo.substring(5, 10000) }}</p>
        </div>
        <button class="voltar" @click="voltar">Voltar</button>
      </div>
      <div class="opcoes">
        <div
          class="bloco cantoEsquerdo"
          @click="abrirOrgao('publico', 'Orgão Público')"
          v-bind:class="{ selecionado: opcaoSelecionada === 'publico' }"
        >
          <p>Orgão Público</p>
        </div>

        <div
          class="bloco normal"
          @click="abrirOrgao('privado', 'Empresa Privada')"
          v-bind:class="{ selecionado: opcaoSelecionada === 'privado' }"
        >
          <p>Empresa Privada</p>
        </div>

        <div
          class="bloco normal"
          @click="abrirOrgao('demais_servicos', 'Demais Serviços')"
        >
          <p style="text-align: center">Demais Serviços <br />ㅤOrg. Publíco</p>
        </div>

        <div class="bloco cantoDireito" @click="abrirOrgao('retfonte', 'RETFONTE')">
          <p>RETFONTE</p>
        </div>
      </div>
      <p class="ronaldo">{{ atualTxt }}</p>
      <Geral :isRota="rota" :dados="dados" />
    </div>
  </div>
</template>

<script>
import Geral from "../components/Geral.vue";
import axios from "axios";
export default {
  components: {
    Geral,
  },
  data() {
    return {
      atualTxt: "Orgão Público",
      rota: "publico",
      dados: [],
      opcaoSelecionada: "publico",
    };
  },
  methods: {
    voltar() {
      this.$router.push({ name: "rtfonte" });
    },
    async chamarRota() {
      const { data } = await axios.get(
        `https://www.lefisc.com.br/api/retFonte/api/efd-reinf/${this.$route.params.cod}`
      );
      this.dados = data;
    },
    async abrirOrgao(atual, txt) {
      if (atual === "retfonte") {
        const cod = this.$route.params.cod;
        if (cod) {
          window.open(`https://www.lefisc.com.br/rtfonte/${cod}`, "_blank");
        } else {
          console.error("Código não encontrado na URL.");
        }
      } else if (atual === "demais_servicos") {
        window.open(
          "https://www.lefisc.com.br/efdreinf/content/demais_servicos.html",
          "_blank"
        );
      } else {
        this.rota = atual;
        this.atualTxt = txt;
        this.opcaoSelecionada = atual;
      }
    },
  },

  mounted() {
    this.chamarRota();
  },
};
</script>

<style>
.opcoes div.bloco.selecionado::after {
  content: "";
  display: block;
  height: 6px;
  background-color: #f4decb;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #a09e9e;
  padding-bottom: 5px;
}
.top p {
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: bold;
}
.voltar {
  height: 42px;
  width: 110px;
  border-radius: 7px;
  border: 2px solid #af3437;
  background: #fff;
  color: gray;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  margin-top: 9px;
  margin-left: 25px;
}
.ronaldo {
  margin-left: 7px;
  font-style: italic;
  font-size: 22px;
  font-weight: bold;
  color: rgb(128, 128, 128);
  margin-bottom: 0.6px;
  border-bottom: 1px solid rgb(160, 158, 158);
  margin-top: 35px;
}
#cores {
  display: flex;
  height: 45px;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-direction: row;
  flex-direction: row;
}
#cores .cor1 {
  width: 25%;
  background: #af3437;
}
#cores .cor2 {
  width: 25%;
  background: #b45152;
}
#cores .cor3 {
  width: 25%;
  background: #f4decb;
}
#cores .cor4 {
  width: 25%;
  background: rgba(175, 52, 55, 0.05);
}
.espacamento {
  padding: 30px;
}
.opcoes {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 35px;
}
.opcoes .select {
  height: 8px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background: #241923;
}
.opcoes .cantoEsquerdo {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.opcoes .normal {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.opcoes .cantoDireito {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.opcoes div.bloco {
  background: #af3437;
  width: 144px;
  height: 85px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  border-left: 1px solid #fff;
  padding: 5px;
  cursor: pointer;
  position: relative;
}

.opcoes div p {
  font-weight: bold;
  margin: 0px;
}
.opcoes div span {
  text-align: center;
  font-size: 13px;
}
</style>
