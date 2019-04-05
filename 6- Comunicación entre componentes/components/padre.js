Vue.component('padre', {

  template:
  `
    <div class="p-5 bg-dark text-white">
      <h2> Componente Padre: {{ numeroPadre }}</h2>
      <button class="btn btn-danger" @click="numeroPadre++">+</button>
      <hijo :numero="numeroPadre @nombreHijo="nombrePadre = $event"></hijo>

      {{nombrePadre}}
    </div>
  `,
  data(){ // Pasar datos del padre al hijo
    return{ //- Retorna un objeto
      numeroPadre: 0,
      nombrePadre: '' //Con este dato, vamos a recibir al dato hijo
    }
  }
})
