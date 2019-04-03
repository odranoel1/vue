const app = new Vue({
  //Gestión de objetos
  el: '#app', //<-- Detectar el id(Todo lo que este adentro se va gestionar con Vue)
  data: { //<-- Datos de Vue
    title: 'Hola Mundo con Vue Js', //<-- String
    name: 'Proyectos',
    projects: [ //<- Array
      {type: 'web page', quantity: 3 }, //<--Objeto
      {type: 'mobil apps', quantity: 2 },
      {type: 'erps', quantity: 0 },
    ],
    newProject: '',
    total: 0
  },
  methods: { //<-- Metodos de Vue
    addProject() { //<-- Función
      this.projects.push({
        type: this.newProject, quantity: 2
      });
      // Reiniciar el valor introducido en el input, String vacio de nuevo
      this.newProject = ''
    }
  },
  computed: { //Array (Crear funciones que ocupemos)
    plusProjects() {
      this.total = 0;
      for(project of this.projects) {
        this.total = this.total + project.quantity;
      }

      return this.total;
    }
  }
});
