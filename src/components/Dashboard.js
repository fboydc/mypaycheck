import React, {Component} from 'react';
import api from '../api';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane-o';
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PieContainer from './PieContainer';
import MonthlySalary from './MonthlySalary';
import BoxDistribution from './BoxDistribution';
import FormattedIncome from '../helpers';



class Dashboard extends Component {






	render(){
		const {incomeDetails, boxes, monthlySalary} = this.props;

		console.log("monthly SALARY", monthlySalary);

		if (Object.keys(incomeDetails).length === 0 || boxes.length === 0){
			return (
				<section className="no_data col-offset-3 col-6">
					<p className="icon"><FaPaperPlane /></p>
					<p>NO INCOME OR BOXES DATA. CLICK HERE TO START:</p>
					<Link to="/parameters" className="link_btn">GET STARTED</Link>
				</section>
			)
		}else if(this.props.totalInBoxes.toFixed(2) !== this.props.monthlySalary.toFixed(2)){

			return (
				<section className="no_data col-offset-3 col-6">
					<p><strong>Please make sure your entire salary is allocated</strong></p>
					<FaExclamationCircle className="exclamation"/>
				</section>
			)
		}else{

			if(this.props.totalInBoxes === 0){
				return (
					<section className="row income_distribution">
						<h2>Income Distribution</h2>
						<p>Please make sure the total of your boxes matches the total of your
						monthly salary</p>
					</section>
				)
			}else{

				const salaryData = [...this.props.boxes.map((box)=>{
						let total = 0;
						box.items.forEach((item)=>{
							total += Number(item.amount);
						})

						return {
							item: box.name,
							value: total.toFixed(2)
						}
					})];

				return (
					<section className="row income_distribution">
						<h2>Income Distribution</h2>
						<p>Income Distributed as configured</p>
						<PieContainer roofValue={this.props.monthlySalary} data={salaryData} />
						<MonthlySalary monthly={monthlySalary}/>
						<div className="box_distributions">
							{this.props.boxes.map(box=>{
								return <BoxDistribution box={box}/>
							})}
						</div>
					</section>
				)
			}

		}

	}


}

const mapStateToProps = (state)=>{
		let totalInBoxes = 0;
		state.boxes.forEach((box)=>{
			box.items.forEach(item=>{
				totalInBoxes += Number(item.amount);
			})
		});
		return {
			incomeDetails: state.incomeDetails,
			boxes: state.boxes,
			totalInBoxes: totalInBoxes,
			monthlySalary: new FormattedIncome(state.incomeDetails).getMonthlyIncome()
		}
}


export default connect(mapStateToProps, null)(Dashboard)