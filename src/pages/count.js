import React , {Component}from 'react';


class Appclass extends Component {
    constructor (props){
        super(props); // 是指 父母的類別 (上一層)

        // 宣告狀態
        this.state = {
        total: 0,
        }
    }

    render() {    
        return (
        <div>
            <button onClick={ ()=>{
            this.setState({total: this.state.total + 1});
            } }
            >add + </button>
            <button onClick={ ()=>{
            this.setState({total: this.state.total - 1});
            } }
            >edit - </button>
            <div id="total">{this.state.total}</div>
        </div>
        );
    }
}

export default Appclass;
