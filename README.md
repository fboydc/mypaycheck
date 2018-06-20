# My Paycheck - "A tool for handling my family budget"

It can be difficult to distribute our household expenses each month without the proper organization. This tool will help you do just that: organize
your monthly deductions (expenses, savings, debt, etc.) into boxes so that
you can completely track where your cash is flowing. My paycheck automatically
deducts all tax payments from your salary so that all you have to focus on
is organizing where your money goes!

## Getting Started

### Installation ###

I. Clone this project into your local environment: ` git clone mypaycheck`.

II. Make sure you have yarn installed (if you prefer using npm instead, that's fine). For more information on setting up yarn: [CHECK THIS OUT](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

III. After cloning the project and installing yarn (again, not needed if you prefer to use npm), navigate to the root folder (in this case `mypaycheck/`) using your bash terminal or command prompt (if using windows), and run the command `yarn` (or `npm install` if using windows).

IV. With you current work directory set to `mypaycheck/`, simply run the command: `yarn start` or `npm run start`.

Congratulations! the project should be up and running :).


### How do I use this web application? ###

The application contains three sections: Dashboard, Cashflow Plan, and Parameters.

### Dashboard ###
This section will show how your income is distributed along your boxes, and how each box portion of the income is distributed along its items. The pie graphs provided help visualize the information shown in each table.

### Cashflow Plan ###
Depending on how you set up your payment parameters, this section provides a breakdown of your boxes (as per your pay frequency) so that it is easier to allocate a portion of your paycheck to each item in your boxes.

### Parameters ###
This is where you set up all your payment details as well as your boxes.
#### Payment Details ####
NOTE:
CURRENTLY SUPPORTING SALARIES FOR:
-Persons filing as single or as a married couple (jointly).
-Biweekly or monthly payments.
-People living in Miami, FL.
* I will add more filing options, payment periods, and cities in the future.

Simply fill your information:
1. **Annual Salary** - how much are you paid every year (before taxes).
2. **Filing Status** - two options: single, or filing jointly.
3. **Pay Frequency** - are you paid every two weeks or every month.
4. **Federal Allowances** - any deductions that your employer might take from your paycheck
5. **state** - only Florida is supported.
6. **city** - only Miami is supported.


#### Boxes ###
A box is simply a categorization of any kind of cash outflow you incur periodically: they can be expenses (i.e. rent, health insurance, car payments,
your monthly groceries or cell phone bills), debt (mortgage, credit card), savings (Downpayment for a house, a new car, or something for yourself), or anything else you can think of. The idea is to just classify and group together your different periodic cash outflows so that it is easier to manage your household budget. The summation of the total of your boxes should equal the total of your monthly salary (after taxes). A text with the remaining amount is shown for your convenience. Once you have allocated

#### How do I add a box? ####

Simply fill the name in the form provided and click on **create**.


#### What Now ####
You can now see all your monthly salary distributed amongst your boxes. In cashflow plan, your monthly salary (after taxes) is broken down as per your pay frequency and your boxes are distributed their corresponding portion of your broken down salary. Your dashboard will show a graphical visualization of this data.











