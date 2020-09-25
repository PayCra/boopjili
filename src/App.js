import React, {Component} from 'react';
import './App.css';
import Eyes from "./Components/Eyes";

let number = Math.floor(Math.random() * 5)

class App extends Component {

    state = {
        link: number
    }

    handleClick = () => {
        number = (number + 1 + Math.floor(Math.random()*100) % 4) % 5;
        this.setState({link: number})
    }

    render() {
        return (
            <div className='App'>
                <Eyes number={number}/>
                <img onClick={this.handleClick} src={'纪李/JiLi' + this.state.link +'.jpg'} alt={'Unable to load Ji Li'}/>
            </div>
        );
    }
}

export default App;
