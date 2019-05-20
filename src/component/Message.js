import React, {Component} from 'react';

class Message extends Component{
//création d'un state
  constructor(){
    super();
    this.state = {
      userImput: '',/*pour l'instant vide car user na rien renseigner*/
      items:[]
    };
  }

  onChange(event){//on cree une fonction qui change la valeur de notre imput
    this.setState ({ //notre state sera =
      userImput: event.target.value //a ce que l'utilisateur entre dans l'imput
    }, () => console.log(this.state.userImput));//permet d'afficher dans la console
  }

  addMessages(event){//on cree la fonction ajout de message
    event.preventDefault();//permet de ne pas reloder la page
    this.setState ({
      userImput:'',//permet de remettre l'imput a 0
      items: [...this.state.items, this.state.userImput]
      //on insere le nouvel item dans notre state items
    });
  }

  renderMessages() {//afficher nos messages
    return this.state.items.map((item) => {/*comme c un tablo on va maper les items qui va louper sur chacun de nos items*/
      return (//et pour chaque items on va return
        <div className="list-group-item" key={item}>
          {(item)}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 align="center">Mon Super Chat</h1>
          <form className="form-row align-items-center">
            <input
              value={this.state.userImput}
              type="text"
              placeholder="Racontez"
              onChange={this.onChange.bind(this)}//bind fait reference à ce compnent
              className="form-control mb-2"
            />
          <button
          className="btn btn-primary mb-3 mt-3"
          onClick={this.addMessages.bind(this)}>Ajouter
          </button>
        </form>
        <div className="list-group">
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}


export default Message;
