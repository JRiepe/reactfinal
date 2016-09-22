// Include React 
var React = require('react');
//var helpers = require('../utils/helpers.js');
// This is the form component. 
var Search = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			term: "",
			b_Year: "",
			e_Year: ""
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
    	
	},

	// When a user submits... 
	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.term + ' ' + this.state.b_Year + ' ' +this.state.e_Year);
		//console.log(this state.beginYear);
		//console.log(this.state.endYear);
		// Set the parent to have the search term
		this.props.setTerm(this.state.term, this.state.b_Year, this.state.e_Year);

		
		//runQuery(term, beginYear, endYear)
	},

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Query the New York Times Database</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Enter Search Term(s) Here!</strong></h4>

								{/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
									Also note how each has an onChange event associated with our handleChange event. 
								*/}
								
										<label>Search Term:</label>
											<input type="text" className="form-control text-center" id="term"  onChange= {this.handleChange} required/>
										
										<label>Beginning Year:</label>
											<input type="text" className="form-control text-center" id="b_Year" onChange= {this.handleChange} />
										
										<label>Ending Year:</label>
											<input type="text" className="form-control text-center" id="e_Year" onChange= {this.handleChange} />
								
								
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>



		)
	}
});

// Export the component back for use in other files
module.exports = Search;