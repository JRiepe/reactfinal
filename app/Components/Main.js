// Include React 
var React = require('react');

// Here we include all of the sub-components
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

// Helper Function
var helpers = require('./utils/helpers.js');

// This is the main component. 
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			beginYear: "",
			endYear: "",
			results: "",
			saved: [] /*Note how we added in this history state variable*/
		}
	},	

	// This function allows childrens to update the parent.
	setTerm: function(term, b_Year, e_Year){
		this.setState({
			searchTerm: term,
			beginYear: b_Year,
			endYear: e_Year
		})
	},



	// If the component changes (i.e. if a search is entered)... 
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			// Run the query from NY Times
			helpers.runQuery(this.state.searchTerm, this.state.beginYear, this.state.endYear)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log('data23: ' + data);

						this.setState({
							results: data
						})
					} // end if
				}.bind(this)) // .then(function(data){	
						

			helpers.getSaved()
				.then(function(response){
					console.log("Currently Saved", response.data);
					if (response != this.state.saved){
						console.log ("Saved", response.data);

						this.setState({
							saved: response.data
						})
					}
				}.bind(this)) // then(function(response){
			
					
				
				
				
		} // end if(prevState.searchTerm
	},

	// The moment the page renders get the History
	componentDidMount: function(){

		// Get saved articles
		helpers.getSaved()
			.then(function(response){
				if (response != this.state.saved){
					console.log ("Saved", response.data);

					this.setState({
						saved: response.data
					})
				}
			}.bind(this))
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2 className="text-center">Article Finder!</h2>
						<p className="text-center"><em>Search the New York Times Database.</em></p>
					</div>

					<div className="col-md-12">
					
						<Search setTerm={this.setTerm}/>

					</div>

					<div className="col-md-12">
				
						<Results results={this.state.results} />

					</div>

				

					<div className="col-md-12">

						 <Saved saved={this.state.saved}/>

					</div>
				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Main;