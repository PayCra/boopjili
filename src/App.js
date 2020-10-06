import React, {Component} from 'react';
import './App.css';
import Eyes from "./Components/Eyes";
import Nose from "./Components/Noses";
import ToggleButton from 'react-toggle-button'

let number = Math.floor(Math.random() * 5)

class App extends Component {

    state = {
        link: number,
        crazy: false,
        mode: 'hardMode'
    }

    handleClick = () => {
        number = (number + 1 + Math.floor(Math.random() * 100) % 4) % 5;
        this.setState({link: number})
    }

    handleMouseEnter = () => {
        this.setState({crazy: true})
    }

    handleMouseLeave = () => {
        this.setState({crazy: false})
    }

    handleToggle = (value) => {
        this.setState({value: !value, mode: (value ? 'hardMode' : 'easyMode')})
    }

    render() {
        return (
            <>
                <div className='instructions'>boop Ji Li's nose to change the picture
                </div>
                <div className='body'>
                    <div className='side'/>
                    <div>
                        <Nose mode={this.state.mode} number={number} onClick={this.handleClick}
                              onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                        <Eyes number={number} crazy={this.state.crazy ? "crazyEyes" : "eyes"}/>
                        <img src={'纪李/JiLi' + this.state.link + '.jpg'} alt={'Unable to load Ji Li'}/>
                    </div>
                    <div className='side'>
                        <label className='modeLabel'>Easy mode:</label>
                        <ToggleButton value={this.state.value || false} onToggle={this.handleToggle}/>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
