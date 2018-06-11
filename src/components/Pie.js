import React, {Component} from 'react';
import * as d3 from 'd3';
import Slice from './Slice'



export default class Pie extends Component {

	constructor(props){
		super(props);
		this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
	}

	

	render(){
		let {x, y, data, scheme} = this.props;

		let pie = d3.pie();

		return(
			<g transform={`translate(${x}, ${y})`}>
				{pie(data).map((value,i)=>{

					console.log("data", data[i]);
					return (
						<Slice key={i} outerRadius={this.props.radius} value={value} label={value.data} fill={scheme[i]} />
					)
				})}
			</g>
		)
	}

	


}