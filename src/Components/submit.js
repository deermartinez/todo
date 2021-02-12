import React, {Component} from 'react'


//passing state
//everytime hit submit button, state of component is going to change
//everytime use state
//use class extend component

class SubmitForm extends Component{
    state = {term: ''};

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                {/* //form holding out tasks */}
                <input
                type = 'text'
                className = 'input'
                placeholder = 'Enter Task'
                value = {this.state.term}
                onChange = {(e) => this.setState({term: e.target.value})}
                />
            </form>
        )
    }
}



export default SubmitForm;