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

// EDIT en git.
