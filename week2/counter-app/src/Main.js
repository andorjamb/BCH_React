import React, { Component } from 'react';
import Button from './Button';

class Main extends Component {
    state = {
        counter: 0,
    };

    addOneHandler = () => {
        this.setState({ counter: this.state.counter + 1 });

    }

    removeOneHandler = () => {
        if (this.state.counter - 1 < 0) {
            this.setState({ counter: 0 })
        }
        else { this.setState({ counter: this.state.counter - 1 }); }
    }

    addFiveHandler = () => {
        this.setState({ counter: this.state.counter + 5 });
    }

    removeFiveHandler = () => {
        if (this.state.counter - 5 < 0) {
            this.setState({ counter: 0 })
        }
        else { this.setState({ counter: this.state.counter - 5 }); }

    }

    resetHandler = () => {
        this.setState({ counter: 0 })
    }





    render() {

        let circleClass = "";
        if (this.state.counter === 0) { circleClass = 'circle' }
        else if (this.state.counter % 2 === 0) { circleClass = 'circle even' }
        else { circleClass = 'circle odd' };
        return <main><h1 className={circleClass} id="counter">{this.state.counter}</h1>
            <div className="button-container">
                <Button click={this.addFiveHandler}>Add Add</Button>
                <Button click={this.addOneHandler}>Add</Button>
                <Button id="reset" click={this.resetHandler}>reset</Button>
                <Button click={this.removeOneHandler}>Remove</Button>
                <Button click={this.removeFiveHandler}>Remove Remove</Button>
            </div></main>
    };
}

export default Main;