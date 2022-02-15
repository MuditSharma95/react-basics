import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementCounter, decrementCounter } from './counter/actions/index';



function app(props) {

    return (
        <div>
            <div>Count : {props.count}</div>
            <button onClick={props.incrementCounter}> Increase Count </button>
            <button onClick={props.decrementCounter}> Decrease Count </button>
        </div>
    );

}


const mapStateToProps = (state) => ({
    count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: bindActionCreators(incrementCounter, dispatch),
    decrementCounter: bindActionCreators(decrementCounter, dispatch),
    // increaseCounter: () => dispatch(incrementCounter()),
    // decreaseCounter: () => dispatch(decrementCounter())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(app);

