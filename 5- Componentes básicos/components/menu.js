Vue.component('menu-main',{
  template: `
    <ul class="menu-main">
      <li>
        <a href="#">{{ home }}</a>
      </li>
      <li>
        <a href="#">{{ about }}</a>
      </li>
      <li>
        <a href="#">{{ project }}</a>
      </li>
      <li>
        <a href="#">{{ contact }}</a>
      </li>
    </ul>
  `,
  data(){
    return{
      home: 'Home',
      about: 'About',
      project: 'Projects',
      contact: 'Contact'
    }
  }
});
