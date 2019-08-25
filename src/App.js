import React, {Component} from 'react'; 
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json'; // destructuring !
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor() { // heredar funcionalidad de react y alamacenar los datos
    super();
    this.state = {
      todos // (destructuring) datos del .json  almacenada en el estado de la aplicacion
    }

  //  this.handleClick = this.handleClick.bind(this); // SE BINDEO EN EL EVENTO MAS EL PARAMETRO..
  this.handleSave = this.handleSave.bind(this);
  }

  handleSave(newTodo) {     // (Recibimos objeto de nueva tarea) anadir elemento (objeto --> parametros de tarea) al array "todos" del state
    this.setState({         // APLICAR ...REST para INCRUSTAR LOS ARREGLOS EN OTRO ARREGLO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      todos: [...this.state.todos,
      newTodo]
    })
  }

  handleDelete(i) {  // PASAR PRIMERO EL PARAMETRO "i" , luego el OBJECT EVENT "e"
    if (window.confirm("are you sure you want to delet it?")) {

      this.setState({
        todos : this.state.todos.filter( (todo,index) => {
          return i !== index
        }
  
        )
      })

    }
    
  }

  render() {
    const todos = this.state.todos.map( (todo, i)  => {  // procesar y pintar antes de renderizar ARRAY
      return(                                             // convertir en una card bootstrap para luego renderizar 
        <div className="col-md-6 col-lg-4"  key={i}>                                
          <div className=" card mt-4" >  
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger "> {todo.priority} </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <mark>{todo.responsible}</mark>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-danger"  onClick={this.handleDelete.bind(this, i)} >Delete</button> 
            </div>


            
          </div>
        </div> 
      );
    })

    return (
      <div>
        

        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white"> Tasks  <span className="badge badge-pill badge-light ">{this.state.todos.length}</span>  </a> 
          </nav>

          

          <div className="container">
            <div className="row mt-4">  
              <div className=" col-md-4 col-lg-3">
                <img src={logo} className="App-logo" alt="logo" />

                <TodoForm handleSave={this.handleSave} />
              </div>
            
              <div className="col-md-8 col-lg-9">
                <div className="row">
                  {todos} 
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
  
    );
  }
}

export default App;

// git init
// git status : permite ver los archivos que tenemos
//git status: ver en que estado estan los archivos (working dir, staging a..)
//git add <file(nombreArchivo)> : pasar un proyecto al staging area
//  git commit (PRIMERA VEZ) :  //crear el primer snapshot o primer punto de partida..
// CONFIGURAR: HAY QUE DECIRLE correo nombre.. ..
   // git config --global user.email "albert_leo_maldonado@hotmail.com"
   // git config --global user.name "Albert"

// Ahora, pasarlo con un snatshop (nuestro primer punto de partida) . El inicio de nuestro proyecto!:
// git commit           // cambia la consola (editor de codigo en el terminal) "bin"? --> presionar "i" insertar comentario de commit..
//.. presionar ESC, escribir (abajo) ":wq"..(muestra los cambios los archivos insertados, dice los IDs )
// git log : da un hash (como un id) para diferenciar cada commit o snapshot o version del programa (dice el dia del cambio, autor,message...)
// git status ... (ahora dice que nada para commit por ahora) "ya se realizaron los cambios"
// ahora se tiene un a manera de seguir esta primera version del programa! -->
// git checkout -- index.html : para descartar algun cambio en el archivo index.html (por ejemplo.) // SE PUEDE TOMAR FOTOS DE CADA CAMBIO
// PARA PODER VOLVER ...
// PARA VER LAS DIFERENCIAS DE LOS CAMBIOS:  git diff src/App.js    (+ agregado, - quitado)
// git add src/App.js : (por ejemplo) las que salgan en "modified" y queramos agregar dichas modificaciones
// luego git commit para subirlo//: salen los detalles de cantidad de archivos cambiados, lineas agregadas y eliminadas, ej: 1 file changed, 4 insertions(+), 1 deletion(-)
// git log: puede ver el HEAD -> MASTER (version en la que estamos)
// cuando se quiere IGNORAR archivos: crear archivo .gitignore, anotar dentro de este los archivos que queremos ignorar. 
// Luego git add .gitignore         ..o...
// ... git commit -m "agregado archivo text a gitignore" : ALTERNATIVA PARA NO ABRIR EL EDITOR
