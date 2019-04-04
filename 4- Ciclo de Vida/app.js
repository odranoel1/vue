//Ciclo de Vida

const app = new Vue({

  el: '#app',
  data: {
    saludo: 'Soy el ciclo de vida de Vue',
  },
  //Before Create: Cuando se instancia la clase
  beforeCreate() {
    console.log('beforeCreate');
  },
  // Se ejecuta cuando ya lee todos los eventos, los datos y los observadores (todavía no lee el 'el')
  created() {
    console.log('created');
  },
  // Antes de insertar en el DOM
  beforeMout() {
    console.log('beforeMout');
  },
  // Se ejecuta al insertar en el DOM
  mounted(){
    console.log('mounted');
  },
  // Cuando se detecta algún cambio en el DOM o en la instancia de Vue
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  // Al realizar los cambios en el DOM o instancia
  updated(){
    console.log('updated');
  },
  // Antes de destruir la instancia
  beforeDestroy(){
    console.log('beforeDestroy');
  },
  // Cuando se destruye la instancia
  destroyed(){
    console.log('destroyed');
  },
  methods: {
    // Al destruir la instancia, los elementos que utilizen vue en el DOM, se quedan congelados
    destruir(){
      this.$destroy();
    }
  }

})
