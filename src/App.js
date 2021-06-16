import React, { Component } from 'react';
import './App.css';

    const W="W";
    const Dot="D";
    const Wide="_"

export default class App extends Component {

    constructor(){
        super()
        this.state={
            score:0,
            wicket:0,
            array:[]

        }
        this.handleFour=this.handleFour.bind(this);
        this.handleSix=this.handleSix.bind(this);
        this.handleOnes=this.handleOnes.bind(this);
        this.handleTwos=this.handleTwos.bind(this);
        this.handleWide=this.handleWide.bind(this);
        this.handleWic=this.handleWic.bind(this);
        this.handleDot=this.handleDot.bind(this);
         this.handleThrees=this.handleThrees.bind(this);
    }


    handleWide(){
        this.setState(prevState=>{
            return{
                score:prevState.score+1,
                array:prevState.array+Wide
            }
        })
    }

     handleFour(){
        this.setState(prevState=>{
            return{
                score:prevState.score+4,
                array:prevState.array+4
            }
        })
    }

     handleSix(){
        this.setState(prevState=>{
            return{
                score:prevState.score+6,
                array:prevState.array+6
            }
        })
    }
     handleOnes(){
        this.setState(prevState=>{
            return{
                score:prevState.score+1,
                array:prevState.array+1
            }
        })
    }

     handleTwos(){
        this.setState(prevState=>{
            return{
                score:prevState.score+2,
                array:prevState.array+2
            }
        })
    }

    handleThrees(){
        this.setState(prevState=>{
            return{
                score:prevState.score+3,
                array:prevState.array+3
            }
        })
    }

    handleWic(){
        this.setState(prevState=>{
            return{
                wicket:prevState.wicket+1,
                array:prevState.array + W
                
            }
        })
    }

    handleDot(){
        this.setState(prevState=>{
            return{
               array:prevState.array + Dot 
            }
        })
    }








    render() {
        return (
            <div className="App">
                <h1 className="title">cricket score</h1>
                <h2>{`${this.state.score} - ${this.state.wicket > 10 ?
                 " all out ": this.state.wicket }`} of {`${Math.floor(this.state.array.length/6)}.
                  ${Math.floor(this.state.array.length%6)}`} overs </h2>
                 <h2>{this.state.wicket>=10 ? "innings ended" :
                        <div className="but"> 
                            <button onClick={this.handleWide}>wide</button>
                            <button onClick={this.handleDot}>Dot</button>
                            <button onClick={this.handleOnes}>1's</button>
                            <button onClick={this.handleThrees}>3's</button>
                            <button onClick={this.handleFour}>4</button>
                            <button onClick={this.handleSix}>6</button>
                            <button onClick={this.handleTwos}>2's</button>
                            <button onClick={this.handleWic}>Wic</button>
                        </div>
             }</h2> 
                    <h4>runs:</h4>
                    <textarea value={this.state.array}/>
                    <h3>oppositon need {this.state.score+1} runs to win</h3>
                    <div className="rules">
                    <h3>rules</h3>
                        <ul>
                            <li><span> _ </span> denoted wide</li>
                            <li><span> D </span> denoted Dot</li>
                            <li><span> W </span> denoted wicket</li>
                        </ul>
                    </div> 
            </div>
        );
    }
}
