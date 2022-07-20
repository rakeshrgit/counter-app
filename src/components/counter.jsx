import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:this.props.counter.value,
        //ImgURL:'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1657595860~exp=1657596460~hmac=8fb0a4e59b6616afb355f45d655f1ed87c539def84cfc177b8941a7a71e3e931&w=1380',
        tags: ['tag1', 'tag2', 'tag3']
    } 
    // renderTags () {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul className="list-unstyled">{this.state.tags.map(tag =>(<li key={tag}>{tag}</li>))}</ul>
    // }
    handleIncrement =()=>{
       this.setState({count: this.state.count + 1})
    }
    
    render() { 
       // console.log('props', this.props.id)
        return (
            <React.Fragment>
                <div className="container">
                      
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                    {/* <div className="mt-5">
                        {this.renderTags()}
                    </div>             */}
                </div>
            </React.Fragment>
        );
    }
    getBadgeClasses () {
        let classes = "badge m-2 bg-"
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes;
    }
    formatCount () {
        const {count} = this.state
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;