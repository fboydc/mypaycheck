export const incomeDetails = {
	annualIncome: 75000,
	filingStatus: 'jointly',
	frequency: 'biweekly',
	federalAllowances: 0,
	pretaxDeductions: 500,
	state: 'florida',
	city: 'miami'
}


//4649.90

export const boxes = [
	{
		name: 'Expenses',
		items: [
			{
				name: "Light & Utilities",
				amount: "165.79"
			},
			{
				name: "Internet",
				amount: "60.00"
			},
			{
				name: "Groceries",
				amount: "640.00"
			},
			{
				name: "Gas",
				amount: "200"
			},
			{
				name: "Health Insurance",
				amount: "321"
			},
			{
				name: "Car Insurance",
				amount: "60"
			},
			{
				name: "Cell Phone",
				amount: "70.00"
			},
			{
				name: "Gym membership",
				amount: "65.00"
			},
			{
				name: "Entertainment",
				amount: "400.00"
			}
		]
	},
	{
		name: 'Debt',
		items: [
			{
				name: "Mortgage",
				amount: "1508.00"
			}
		]
	},
	{
		name: 'savings',
		items: [
			{
				name: "Personal Savings",
				amount: "1160.12"
			}
		]
	}
]

export default {incomeDetails, boxes}