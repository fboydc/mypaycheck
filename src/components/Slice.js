import React, {Component} from 'react';
import * as d3 from 'd3';


export default class Slice extends Component {
	render(){
		let {value, label, fill, innerRadius = 0, outerRadius } = this.props;
		let arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
		return(
			<path d={arc(value)} fill={fill}/>
		)
	}
}