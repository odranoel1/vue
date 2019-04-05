Vue.component('hijo',{

  template:
  `
    <div class="p-5 bg-success">
      <h4> Componente hijo: {{ numero }}</h4>
      <h3> Nombre: {{ nombre }}</h3>
    </div>
  `,
  props: ['numero'], //Props: Permiten hacer comunicación entre componentes (Es un array)
  data(){
    return{
      nombre: 'Leo Gonzalez'
    }
  },
  mounted(){ //- Ciclo de Vida de Vue
    this.$emit('nombreHijo',this.nombre); //- Emitir un evento (pasamos un nombre, pasamos el dato)
  },

})
