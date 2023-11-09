<template>
  <div class="numeros">   
      <div v-for="(n,i) in 40" :key="i" :class="{atual:n == atual,'numero':true}" @click="atual = n;this.$emit('pegarAtual',atual)" >
          {{n}}
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            atual:0
        }
    },
}
</script>

<style>
div.atual{
    background: #af3437 0 0 no-repeat padding-box !important;
    color: #fff !important;
}
.numeros{    
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.numeros div.numero{
    background: rgba(175,52,55,.05) 0% 0% no-repeat padding-box;
    border-radius: 5px;
    width: 31px !important;
    min-width: 20px;
    height: 40px;
    color:#808080;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
@media screen and (max-width: 800px) {
  .numeros {height: 100px; width: 100%;}
}
</style>