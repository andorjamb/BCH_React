import React, { Component } from 'react';

class Main extends Component {
    state = {
        counter: 3,
    };

    addOneHandler = () => {
        this.setState({ counter: this.state.counter + 1 })
    }



    render() {
        return <main><h1 className="counter">{this.state.counter}</h1><div className="button-container"><button>Add Add</button><button onClick={this.addOneHandler}>Add</button><button id="reset">reset</button><button>Remove</button><button>Remove Remove</button></div></main>
    };
}

export default Main;