


var Flight = React.createClass({
	render: function() {
		return (
			<div className="flight">
				<div className="ca"><img src={this.props.ca_url} /></div>
				<div className="co">{this.props.co}</div>
				<div className="time">{this.props.dt} - {this.props.at}</div>
				<div className="price">&yen;{this.props.price}</div>
			</div>
		);
	}
});



var FlightList = React.createClass({
	render: function() {

		var flights = [],
			flightInfo = this.props.data.flightInfo,
			priceInfo = this.props.data.priceInfo;

		for (var fn in flightInfo) {

			var flt = flightInfo[fn],
				price = priceInfo[fn];
			var ca_url = 'http://simg1.qunarzz.com/site/images/airlines/' +flt.ca+ '.gif';
			flights.push(<Flight co={flt.co} price={price.lownpr} dt={flt.dt} at={flt.at} ca_url={ca_url} />);

		}

		return (

			<div className="flightList">
				{flights}
			</div>

		)

	}
});

var FlightBox = React.createClass({

	getInitialState: function() {
		return {data: {}};
	},
	componentDidMount: function() {

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				this.setState({data: data.oneway_data});
			}.bind(this)
		})

	},
	render: function() {
		return (
		  <div className="box">
		    <h1>Flights</h1>
		    <FlightList data={this.state.data} />

		  </div>
		);
	}
});

ReactDOM.render(
  <FlightBox url="data.json" />,
  document.getElementById('content')
);
