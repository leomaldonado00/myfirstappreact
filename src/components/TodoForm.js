import React, {Component} from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description:'',
            priority:'low'
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleInput(e) {
        const {name, value} = e.target; // destructuring objct
        this.setState({
            [name] : value
        })
    }
    handleClick(e) {
        //e.preventDefault();
        const newTodo = this.state; // guardamos el objeto de la nueva tarea (state) en una variable
        this.props.handleSave(newTodo); // le pasamos como parametro dicha variable (objeto tarea) para ejecutar el evento en el componente padre "App"
    }

    render () {
        return(
                
            <div className="card ">
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" 
                        onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsible" 
                        onChange={this.handleInput}/>                       
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" 
                        onChange={this.handleInput}/>                       
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control"
                        onChange={this.handleInput}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-info"  
                        onClick={this.handleClick} >Save</button> 
                    </div>
                </form>
            </div>
                
               
        );
    }



}

export default TodoForm;