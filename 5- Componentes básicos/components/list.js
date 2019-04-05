//Componente (Siempre va tener un template)

Vue.component('saludo', { //<-- Recibe un objeto
  //<-- Template literals: `` (Salieron en EMACS6)
  //<-- Todo siempre debe estar envuelto dentro de un contenedor (div or ul, etc)
  template: `
    <ul>
      <li> {{ proyect }} </li>
      <li> {{ company }} </li>
    </ul>
  `,
  data() { //<-- Funcion que hace return de los datos
    return{ //Podemos tener más que un sólo dato
      proyect: 'Hola desde Vue',
      company: 'White Cloud'
    }
  }
});
