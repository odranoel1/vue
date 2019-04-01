const app = new Vue({
  //Gestión de objetos
  el: '#app', //<-- Detectar el id, para decirle a vue que todo lo que este adentro se va trabajar con vue
  data: {
    name: 'Leonardo González',
    contacts: [
      {nombre: 'leo.gonzalez@web.mx', tel: '3322274617'}, //<--Objeto
      {nombre: 'juan.gonzalez@web.mx', tel: '3316550713'}
    ]
  }
});
