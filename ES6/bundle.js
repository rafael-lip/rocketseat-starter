"use strict";

// class List {
//   constructor() {
//     this.data = [];
//   }
//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }
// class TodoList extends List {
//   constructor() {
//     super();
//     this.usuario = 'Felipe';
//   }
//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }
// const minhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//   minhaLista.add('Novo dado');
// };
// minhaLista.mostraUsuario();
function escopo(x) {
  var y = 2;

  if (x > 5) {
    var _y = 8;
    console.log(x, _y);
  }

  console.log(y);
}

escopo(7);
