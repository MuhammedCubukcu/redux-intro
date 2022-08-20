import React, { Component } from 'react'
import { decreaseCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux"
import { DECREASE_COUNTER } from '../redux/actions/actionTypes';

 class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button 
          onClick={(e) => {
            this.props.dispatch(decreaseCounter());
          }}
        >
          1 azalt
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(DecreaseCounter, dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter)