import React, {Component} from 'react';
import api from '../api';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane-o';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PieContainer from './PieContainer';
import FormattedIncome from '../helpers';



class Dashboard extends Component {






	render(){
		const {incomeDetails, boxes} = this.props;

		if (Object.keys(incomeDetails).length === 0 || boxes.length === 0){
			return (
				<section className="no_data col-offset-3 col-6">
					<p className="icon"><FaPaperPlane /></p>
					<p>NO PARAMETERS SET. CLICK HERE TO START:</p>
					<Link to="/parameters" className="link_btn">PARAMETERS</Link>
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
				return (
					<section className="row income_distribution">
						<h2>Income Distribution</h2>
						<p>Income Distributed as configured</p>
						<PieContainer boxes={this.props.boxes} monthly={this.props.monthlySalary}/>
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