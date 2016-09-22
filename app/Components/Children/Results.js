// Include React 
var React = require('react');
var helpers = require('../utils/helpers.js');
// This is the results component
var Results = React.createClass({

	getInitialState: function(){
		return {
			results: []
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


	handleClick: function(){
		this.setState({
			article: {
				title: event.target.getAttribute('data-title'),
				pubDate: event.target.getAttribute('data-date'),
				url: event.target.getAttribute('data-url')
			}
		// callback function so the state can update before we do anyting this that data
		}, function() {
			console.log(this.state.article);
			// call the postArticle function and pass the article
		

			
			helpers.postSaved(this.state.article);
		});	// end setState()
	},


	// Here we render the function
	render: function(){
		var nyt = this.props.results || [];
		
		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Top 5 Results</h3>
				</div>
				<div className="panel-body text-center" onClick={this.handleClick}>
					 
						        {nyt.map(function(article, i) {
									return <p key={i}><a href={article.url} target="_blank">{article.title } </a> <span> {article.pubDate} </span><button className="btn btn-primary" data-title={article.title} data-index={i} data-date={article.pubDate} data-url={article.url}>Save</button></p>

								}.bind(this))}

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;