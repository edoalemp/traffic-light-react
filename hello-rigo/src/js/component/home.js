import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			tlight: 0
		};
		this.onoffRed = this.onoffRed.bind(this);
		this.onoffYellow = this.onoffYellow.bind(this);
		this.onoffGreen = this.onoffGreen.bind(this);
	}

	onoffRed(event) {
		if (this.state.tlight === 1) {
			this.setState({ tlight: 0 });
		} else {
			this.setState({ tlight: 1 });
		}
	}

	onoffYellow(event) {
		if (this.state.tlight === 2) {
			this.setState({ tlight: 0 });
		} else {
			this.setState({ tlight: 2 });
		}
	}

	onoffGreen(event) {
		if (this.state.tlight === 3) {
			this.setState({ tlight: 0 });
		} else {
			this.setState({ tlight: 3 });
		}
	}

	render() {
		let light = this.state.tlight;
		let redhtml = <div />;
		let yellowhtml = <div />;
		let greenhtml = <div />;
		if (light === 1) {
			redhtml = (
				<div
					onClick={this.onoffRed}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: "100px", width: "100px" }}>
						<div
							className=" bg-danger rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		} else {
			redhtml = (
				<div
					onClick={this.onoffRed}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: "100px", width: "100px" }}>
						<div
							className="bg-secondary rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		}

		if (light === 2) {
			yellowhtml = (
				<div
					onClick={this.onoffYellow}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-warning rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		} else {
			yellowhtml = (
				<div
					onClick={this.onoffYellow}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-secondary rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		}
		if (light === 3) {
			greenhtml = (
				<div
					onClick={this.onoffGreen}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-success rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		} else {
			greenhtml = (
				<div
					onClick={this.onoffGreen}
					className="row justify-content-md-center">
					<div
						className="col-sm-1 bg-dark p-0"
						style={{ height: 100, width: 100 }}>
						<div
							className="bg-secondary rounded-circle"
							style={{
								height: "50px",
								width: "44.48px",
								margin: "25px"
							}}
						/>
					</div>
				</div>
			);
		}

		return (
			<div className="container">
				{redhtml}
				{yellowhtml}
				{greenhtml}
			</div>
		);
	}
}
