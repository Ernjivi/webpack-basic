
class App{
  constructor(selector){
    this.el = document.querySelector(selector);
    this.list = this.el.querySelector('ul');
    this.init();
  }

  init(){
    fetch('http://localhost:3000/authors')
      .then(request => request.json())
      .then(authors => {
        this.authors = authors;
        this.render();
      });
  }

  render(){
    this.authors.forEach(author => {
      // crear un <li>.
      var li = document.createElement('li');
      // agregar al <li> el nombre del autor ().
      li.textContent = author.name
      // agregar el <li> a la lista.
      this.list.appendChild(li);
    })
  }
}

var myApp = new App('#app');

// PascalCase
// cammelCase
// kebab-case
// snake_case