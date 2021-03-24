import React, {Component} from 'react';
import './App.css';
import './eyePositions.css';
import Eyes from "./Components/Eyes";
import Nose from "./Components/Noses";
import ToggleButton from 'react-toggle-button'
import Slider from '@material-ui/core/Slider';

let number = Math.floor(Math.random() * 5)

class App extends Component {

    state = {
        link: number,
        crazy: false,
        mode: 'hardMode',
        eyesMode: 1
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

    handleSlide = (event, value) => {
        this.setState({eyesMode: value})
    }

    render() {

        let eyeModes = [{value: 0, label: "off"}, {value: 1, label: "normal"}, {value: 2, label: "crazy"}];

        let mySlider = <Slider
            className={'mySlider'}
            max={2}
            defaultValue={1}
            step={null}
            valueLabelDisplay="off"
            marks={eyeModes}
            onChange={this.handleSlide}
        />

        return (
            <>
                <div className='instructions'>boop Ji Li's nose to change the picture
                </div>
                <div className='body'>
                    <div className='side'/>
                    <div>
                        <Nose mode={this.state.mode} number={number} onClick={this.handleClick}
                              onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                        <Eyes number={number}
                              crazy={this.state.crazy ? "eyesMode" + this.state.eyesMode : "eyesMode0"}/>
                        <img src={'纪李/JiLi' + this.state.link + '.jpg'} alt={'Unable to load Ji Li'}/>
                    </div>
                    <div className='side'>
                        <div className="eyeModeSlider">
                        <label>Eye mode:</label>
                        {mySlider}
                        </div>
                        <label className='modeLabelDifficulty'>Easy mode:</label>
                        <ToggleButton value={this.state.value || false} onToggle={this.handleToggle}/>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
