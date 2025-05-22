import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            name1: "",
            name2: "",
            result: ""
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleClear = () => {
        this.setState({
            name1: "",
            name2: "",
            result: ""
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {name1, name2} = this.state;
        if(!name1.trim() || !name2.trim()) {
            this.setState({result: "Please enter valid input"})
            return
        }
        let nameArr1 = name1.split("")
        let nameArr2 = name2.split("")
        for(let i=0; i<nameArr1.length; i++){
            const index = nameArr2.indexOf(nameArr1[i])
            if(index !== -1){
                nameArr1[i] = ""
                nameArr2[index] = ""
            }
        }
        const totalRemaining = nameArr1.filter(Boolean).length + nameArr2.filter(Boolean).length
        const flamesIndex = totalRemaining % 6;
        const flamesMap = {
            1: "Friends",
            2: "Love",
            3: "Affection",
            4: "Marriage",
            5: "Enemy",
            0: "Siblings",
        }
        this.setState({result: flamesMap[flamesIndex]})
    }
    render() {
        return(
            <div id="main">
               {/* Do not remove the main div */}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        data-testid="input1" 
                        placeholder="Enter first name" 
                        name="name1"
                        onChange={this.handleInputChange}
                        value={this.state.name1}
                        id="name1-input"
                    />
                    <input 
                        type="text" 
                        data-testid="input2" 
                        placeholder="Enter second name" 
                        name="name2"
                        onChange={this.handleInputChange}
                        value={this.state.name2}
                        id="name2-input"
                    />
                    <button 
                        type="submit" 
                        data-testid="calculate_relationship"
                        name="calculate_relationship"
                        id="calculate-btn"
                    >
                        Calculate Relationship Future
                    </button>
                    <button 
                        type="button"
                        data-testid="clear"
                        name="clear"
                        onClick={this.handleClear}
                        id="clear-btn"
                    >
                        Clear
                    </button>
                </form>
                <h3 data-testid="answer">{this.state.result}</h3>
            </div>
        )
    }
}


export default App;
