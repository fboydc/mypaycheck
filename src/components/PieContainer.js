import React, {Component} from 'react';
import * as d3 from 'd3';
import Pie from './Pie';


export default class PieContainer extends Component {

	getColorScheme = ()=>{
		const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
		const scheme = this.props.boxes.map((box, i)=>{
			return colorScale(i);
		});

		return scheme;
	}




	render(){
		let radius = 100;
		let x = 250/2;
		let y= 250/2;
		const scheme = this.getColorScheme();
		console.log(scheme);
		return(
			<div className="pie_container">
				<svg className="svg">
					<Pie x={x} y={y} radius={radius} data={[...this.props.boxes.map((box)=>{
						let total = 0;
						box.items.forEach((item)=>{
							total += Number(item.amount);
						})

						return total.toFixed(2);
					})]} scheme={scheme}/>
				</svg>
				<div className="pie_value">
					{this.props.boxes.map((box, i)=>{
						let total = 0;
						box.items.forEach(item=>{
							total += Number(item.amount);
						})
						const percentage = (total/(this.props.monthly))*100;

						return <p><span className="box_color" style={{background: scheme[i]}}></span><span>{box.name}</span>({percentage.toFixed(2)}%<span>{})</span></p>
					})}
				</div>
			</div>
		)
	}
}



