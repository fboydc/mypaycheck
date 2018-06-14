import React, {Component} from 'react';
import * as d3 from 'd3';
import Pie from './Pie';


export default class PieContainer extends Component {

	getColorScheme = ()=>{
		const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
		const scheme = this.props.data.map((box, i)=>{
			return colorScale(i);
		});

		return scheme;
	}




	render(){

		let radius = 100;
		let x = 350/2;
		let y= 250/2;
		const scheme = this.getColorScheme();
		return(
			<div className="pie_container">
				<svg className="svg">
					<Pie x={x} y={y} radius={radius} data={[...this.props.data.map(item=>{
						return item.value;
					})]} scheme={scheme}/>
				</svg>
				<div className="pie_value">
					{

						this.props.data.map((item, i)=>{
							const percentage = (item.value/(this.props.roofValue))*100;
							return (<p><span className="box_color" style={{background: scheme[i]}}></span><span>{item.item}</span>({percentage.toFixed(2)}%<span>)</span></p>)
						})

					}
				</div>
			</div>
		)

	}
}



