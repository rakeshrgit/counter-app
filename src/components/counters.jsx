import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                   <div className="mb-2">
                        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                   </div>
                   {counters.map(counter=>(
                       <Counter 
                       key={counter.id} 
                      // value={counter.value} 
                       counter={counter}
                       onDelete={onDelete}
                       onIncrement={onIncrement}
                       onDecrement={onDecrement}
                       /> 
                   ))}

                </div>
            </React.Fragment>    
        );
    }
}
 
export default Counters;