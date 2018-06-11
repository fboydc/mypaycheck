import { STATES } from './statetax'
import { CITIES } from './citytax'

export default class FormattedIncome {

	constructor({annualIncome, filingStatus, frequency, federalAllowances, pretaxDeductions, city, state}){
		this.grossIncome = annualIncome;
		this.filingStatus = filingStatus;
		this.frequency = frequency;
		this.federalAllowances = federalAllowances;
		this.pretaxDeductions = pretaxDeductions;
		this.city = city;
		this.state = state;
		this.taxableIncome = this.getTaxableIncome(annualIncome, federalAllowances, filingStatus);
		this.ss = 0.062;
		this.medicare = 0.0145;
	}



	getMonthlyIncome = () => {
		//const incomeTaxPayable = this.getIncomeTax(taxableIncome, federalAllowances, filingStatus);
		const stateTax = STATES[this.state];
		//console.log("filing status", this.filingStatus);
		console.log("taxable Income", this.taxableIncome);
		const federalIncomeTax = this.getIncomeTax(this.taxableIncome, this.filingStatus);
		console.log("federal Income Tax", federalIncomeTax);
		const socialSecurity = this.getSocialSecurityDeduction(this.taxableIncome);
		console.log("social security", socialSecurity);
		const medicare = this.getMedicareDeduction(this.taxableIncome);
		console.log("medicare", medicare);
		const afterTaxIncome = this.grossIncome - (federalIncomeTax + socialSecurity + medicare);
		console.log("Income after taxes", afterTaxIncome);
		const monthlyIncomeBeforeDeductions = afterTaxIncome/12;
		console.log("income before deductions", monthlyIncomeBeforeDeductions);
		const monthlyIncome = this.getotherDeductions(monthlyIncomeBeforeDeductions, this.pretaxDeductions);
		console.log("monthly income", monthlyIncome);
		return monthlyIncome;

	}

	getPeriodicIncome = ()=>{
		const income = this.getMonthlyIncome(this.pretaxDeductions, this.city, this.state)/2;
		return income.toFixed(2);
	}


	getTaxableIncome = (annualIncome, federalAllowances, filingStatus)=>{	
		const taxableIncome = annualIncome - (this.getExemptionDeduction(federalAllowances) + this.getStandardDeductionAmount(filingStatus))
		return taxableIncome;
	}


	getExemptionDeduction = (federalAllowances)=>{
		return 4050 * federalAllowances;
	}


	getStandardDeductionAmount = (filingStatus)=>{
		switch(filingStatus){
			case "single":
				return 6300
			case "jointly":
				return 12600
			default:
				return
		}
	}



	getIncomeTax = (taxableIncome, filingStatus)=> {
		//console.log("filing status", filingStatus);
		if(filingStatus === 'single'){
			console.log(taxableIncome >= 37950 && taxableIncome < 91900);
			switch(true){
				case (taxableIncome >= 0 && taxableIncome < 9325): // 10%
					return (.10 * taxableIncome);
				case (taxableIncome >= 9325 && taxableIncome < 37950): // 15%
					return (932.50 + ((taxableIncome - 9325) * .15));
				case (taxableIncome >= 37950 && taxableIncome < 91900): // 25%
					return (5226.25 + ((taxableIncome - 37950) * .25));
				case (taxableIncome >= 91900 && taxableIncome < 191650): // 28%
					return (18713.75 + ((taxableIncome - 91900) * .28));
				case (taxableIncome >= 191650 && taxableIncome < 416700): // 33%
					return (46643.75 + ((taxableIncome - 191650) * .33));
				case (taxableIncome >= 416700 && taxableIncome < 418400): // 35%
					return (120910.25 + ((taxableIncome - 416700) * .35));
				case (taxableIncome >= 418400): // 39.60%
					return (121505.25 + ((taxableIncome - 418400) * .3960));
				default:
					return 0;
			}
		}else if(filingStatus === 'jointly'){
			switch(true){
				case (taxableIncome >= 0 && taxableIncome < 18650): // 10%
					return (.10 * taxableIncome);
				case (taxableIncome >= 18650 && taxableIncome < 75900): // 15%
					return (1865 + ((taxableIncome - 18650) * .15));
				case (taxableIncome >= 75900 && taxableIncome < 153100): // 25%
					return (10452.10 + ((taxableIncome - 75900) * .25));
				case (taxableIncome >= 153100 && taxableIncome < 233350): // 28%
					return (29752.50 + ((taxableIncome - 153100) * .28));
				case (taxableIncome >= 233350 && taxableIncome < 416700): // 33%
					return (52222.20 + ((taxableIncome - 233350) * .33));
				case (taxableIncome >= 416700 && taxableIncome < 470700): // 35%
					return (112728 + ((taxableIncome - 416700) * .35));
				case (taxableIncome >= 470700): // 39.60%
					return (131628 + ((taxableIncome - 470700) * .3960));
				default:
					return 0;
			}
		}
	}


	getSocialSecurityDeduction = (taxableIncome)=>{
		if(taxableIncome > 118500)
			return 118500 * this.ss;
		else
			return taxableIncome * this.ss;
	}

	getMedicareDeduction = (taxableIncome)=> {
		return taxableIncome * this.medicare;
	}

	getotherDeductions = (monthlyNetPay, pretaxDeductions)=> {
		return monthlyNetPay - pretaxDeductions
	}





}

