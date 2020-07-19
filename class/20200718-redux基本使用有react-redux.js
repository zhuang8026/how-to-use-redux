import React, { Component } from 'react';

import actions from './actions'; 

import {connect} from 'react-redux';

class Todos extends Component {
    render(){
        return(
            <div onCLick={()=>this.props.del_todo() }>test</div>
        )
    }
}

export default connect(
    (state)=> state,
    actions
)(Todos);