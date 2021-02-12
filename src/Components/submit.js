import React, {Component} from 'react'


//passing state
//everytime hit submit button, state of component is going to change
//everytime use state
//use class extend component

class SubmitForm extends Component{
    state = {term: ''};

    handleSubmit = (e) => {
        e.preventDefault();
          // e prevent default prevents page tfrom automatically refreshing when submitted
        if(this.state.term === '') return;
      
        this.props.onFormSubmit(this.state.term);
        this.setState({term: ''});
        //term means text that is going to put in input field
        //adding on-changed handler will update this everytime text is added
    }
    //handlesubmit prevents default
    //anytime we render something to page
    //renders through react, not browser

    render(){
        return(
            <form onSubmit = {this.handleSubmit} >
                {/* //form holding out tasks */}
                <input
                type = 'text'
                className = 'input'
                placeholder = 'Enter Item'
                value = {this.state.term}
                //changes are rendered through react, not the browser
                onChange = {(e) => this.setState({term: e.target.value})}
                />
                <button className = 'button'>Submit</button>
            </form>
        )
    }
}



export default SubmitForm;