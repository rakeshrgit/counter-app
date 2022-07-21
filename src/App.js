import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters'
class App extends Component {
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
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
  }
  handleIncrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }
  handleDecrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }
  render() { 
    return (
      <div>
        <Navbar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
 
export default App;