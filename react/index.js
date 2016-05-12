


var Flight = React.createClass({
	render: function() {
		return (
			<div className="flight">
				{this.props.co}
			</div>
		);
	}
});



var FlightList = React.createClass({
	render: function() {

		var flights = [];

		for (var key in this.props.flightInfo) {

			var flt = this.props.flightInfo[key];
			var flight = <Flight co={flt.co} />
			flights.push(flight);

		}

		return (

			<div className="flightList">
				{flights}
			</div>

		)

	}
});

var Box = React.createClass({
  render: function() {
    return (
      <div className="box">
        <h1>Flights</h1>
        <FlightList data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <Box url="data.json" />,
  document.getElementById('content')
);