import React, {Component} from 'react';
import './App.css';
import Eyes from "./Components/Eyes";
import Nose from "./Components/Noses";

let number = Math.floor(Math.random() * 5)

class App extends Component {

    state = {
        link: number,
        crazy: false
    }

    handleClick = () => {
        number = (number + 1 + Math.floor(Math.random()*100) % 4) % 5;
        this.setState({link: number})
    }

    handleMouseEnter = () => {
        this.setState({crazy: true})
    }

    handleMouseLeave = () => {
        this.setState({crazy: false})
    }

    render() {
        return (
            <>
            <div className='instructions'>boop JiLi's nose to change the picture</div>
        <div className='body'>
                <Nose number={number} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                <Eyes number={number} crazy={this.state.crazy ? "crazyEyes" : "eyes"}/>
                <img src={'纪李/JiLi' + this.state.link +'.jpg'} alt={'Unable to load Ji Li'}/>
            </div>
                </>
        );
    }
}

export default App;
