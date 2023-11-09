<template>
  <div class="pergunta" >
    <p>{{pergunta}}</p>  
    <button @click="abrir(pergunta)" :style="{'background': !!pergunta.match(/VETADO/) ? '#b7b7b7': '4A154B' }">abrir</button>
  </div>
</template>

<script>
export default {
    props:['pergunta','idItem','id'],
    methods:{
        abrir(){   
              
            if(!this.pergunta.match(/VETADO/)){
                this.$store.commit('setIdItem', this.idItem)  
                this.$store.state.id = this.id
                this.$store.state.titulo = this.pergunta
                localStorage.setItem('rtfonte',JSON.stringify({"idItem":this.idItem,"titulo":this.$store.state.titulo,"id":this.id}))
                this.$router.push({name:'opcoes',params:{'cod':this.idItem}})
            }
            
        },
    },
   
}
</script>

<style>
.pergunta p{
    max-width: 1000px;
    margin-bottom: 0;
    padding: 8px 0px;
}
.pergunta button{
    background: #af3437 0% 0% no-repeat padding-box;
    border-radius: 5px;
    color: #fff;
    border: none;
    padding: 10px;
    width: 80px;
    cursor: pointer;
    margin-left: 10px;
    margin: 10px 0px;
    transition: 0.5s all;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pergunta button:hover{
      background: #af3437;
}
.pergunta{
    background: #eee;  
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;  
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 15px;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 10px;
    min-height: 30px;
    font-size: 15px;
}    
</style>