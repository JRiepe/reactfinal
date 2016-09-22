// Include React 
var React = require('react');
var helpers = require('../utils/helpers.js');
// This is the history component. It will be used to show a log of  recent searches.
var Saved = React.createClass({

	/*getInitialState: function(){
		return {
			saved: []
		}
	}, */
	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
    	
	},


	handleClick: function(){
		app.deleteSaved(this.state.search._id);
		//this.props.deleteSaved(this.state.headline);
	},
	// Here we render the function
	render: function(){
		var nytSaved = this.props.saved || [];
		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Saved Articles</h3>
				</div>
				<div className="panel-body text-center">
					<form>
						<div className="form-group"> 
							
						        {nytSaved.map(function(search, i) {
									
									return <p key={i}>{search.title} <button id={search._id} onClick={this.handleClick}>Remove</button></p> 
								})}
					    	
						</div>
					</form>
				</div>
			</div>

		)
	}
});



// Export the component back for use in other files
module.exports = Saved;