import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id:1, value:1},
            {id:2, value:3},
            {id:3, value:5},
            {id:4, value:9},
            {id:5, value:0},
        ]
     } 
     handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
      };
      handleReset = () => {
        console.log('sss')
      }
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                   <div className="mb-2">
                        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                   </div>
                   {this.state.counters.map(counter=>(
                       <Counter 
                       key={counter.id} 
                       value={counter.value} 
                       counter={counter}
                       onDelete={this.handleDelete}
                       /> 
                   ))}

                </div>
            </React.Fragment>    
        );
    }
}
 
export default Counters;