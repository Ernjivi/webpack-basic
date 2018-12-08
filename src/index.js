
class App{
  constructor(selector){
    this.el = document.querySelector(selector);
    this.list = this.el.querySelector('ul');
    this.form = this.el.querySelector('form');
    this.init();
    this.form.addEventListener('submit', this.saveAuthor.bind(this))
  }

  init(){
    fetch('http://localhost:3000/authors')
      .then(request => request.json())
      .then(authors => {
        this.authors = authors;
        this.render();
      });
  }

  // Método para guardar el nuevo autor
  saveAuthor(evt){
    evt.preventDefault();
    var inputValue = evt.target.querySelector('input').value
    evt.target.querySelector('input').value = '';
    fetch('http://localhost:3000/authors', {
      method: 'POST',
      body: JSON.stringify({name: inputValue}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => this.init())
  }

  render(){
    this.list.innerHTML = '';
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