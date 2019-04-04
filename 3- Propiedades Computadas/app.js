const app = new Vue({

  el: '#app',
  data: {
    mensaje: 'Hello from WC',
    contador: 0
  },
  computed: { //Pasamos datos que SI tienen lógica
    invertido(){
      // split() separa todo en un array
      // reverse() invierte las posiciones del array
      // join() une de nuevo nuestro array en string
      return this.mensaje.split('').reverse().join('');
    },
    Color(){
        return{
          'bg-success' : this.contador <= 10,
          'bg-warning' : this.contador > 10 && this.contador < 20,
          'bg-danger' : this.contador >= 20
        }
    }
  }
})
