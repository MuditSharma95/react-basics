import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {incrementCounter,decrementCounter} from './redux/actions/index'



function app(props) {

    return (
        <div>
            <div>Count : {props.count}</div>
            <button onClick={props.increaseCounter}> Increase Count </button>
            <button onClick={props.decreaseCounter}> Decrease Count </button>
        </div>
    );

}


const mapStateToProps = (state) => ({
    count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch(incrementCounter()),
    decreaseCounter: () => dispatch(decrementCounter())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(app);

