const prompt = require("prompt-sync")();

const main =(()=>{

    
    const calMonthlyWorkerGrossSalary = (fixedSalary)=>
    {

        return fixedSalary;
    }

    
    const calCommissionWorkerGrossSalary = (fixedSalary, totalSales)=>
    {
        
        const COMMSSION_RATE  = 0.05;

        return fixedSalary + (totalSales * COMMSSION_RATE);
   
    }

    const calHourlyWorkerGrossPay = (rateOfPay,hoursWorked)=>
    {
        
        const OVER_TIME_HOURS_CAP = 120;
        const OVERTIME_RATE = 1.5;

        let grossSalary;

        if(hoursWorked >OVER_TIME_HOURS_CAP)
        {
            const overTimehours = hoursWorked - OVER_TIME_HOURS_CAP 
            const overTimePay = overTimehours * OVERTIME_RATE * rateOfPay;
            const regularPay  = OVER_TIME_HOURS_CAP * rateOfPay;

            grossSalary = regularPay + overTimePay;

        }

        else
        {
            grossSalary = rateOfPay * hoursWorked
        }
     

        return grossSalary;

    }


    const callTotalDeducations = (grossSalary)=>{


        const TAX_FREE_ALLOWANCE = 1000;
        const TAX_RATE=0.15;

        let tax = 0;
 
        if(grossSalary > TAX_FREE_ALLOWANCE)
        {
                               
            tax = TAX_RATE * (grossSalary-TAX_FREE_ALLOWANCE);
        }

        return tax;

    }


    const calNetSalary = (grossSalary,tax)=>
    {

        return grossSalary - tax;
    }


    /*********************************************/

    for(let i=1; i<=3; i++)
    {

        const employeeID = prompt("Please enter an employee ID : ");
        const employeeFirstName = prompt("Please enter an first name : ");
        const employeeLastName = prompt("Please enter an last name : ");
        const employeeTypeCode = prompt("Please enter Type Code (H for Hourly, M for Monthly and C for Commision) : ");
        let gSal;
            
        if(employeeTypeCode==='H' || employeeTypeCode === 'h')
        {
        
            const hours = parseFloat(prompt(`Please enter the number of hours worked for ${employeeFirstName} ${employeeLastName}:`));
            const rate = parseFloat(prompt(`Please enter the  rate of pay  for ${employeeFirstName} ${employeeLastName}:`));   

            gSal = calHourlyWorkerGrossPay(rate,hours);
            

        }
        else if(employeeTypeCode==='M' || employeeTypeCode === 'm')
        {

            const fixedSalary = parseFloat(prompt(`Please enter the fixed salary for ${employeeFirstName} ${employeeLastName}:`));
           
            gSal = calMonthlyWorkerGrossSalary(fixedSalary);
    
        }
        else if(employeeTypeCode==='C' || employeeTypeCode === 'c')
        {


            const totalSales = parseFloat(prompt(`Please enter the total sales made by ${employeeFirstName} ${employeeLastName}:`));
            const fixedSalary = parseFloat(prompt(`Please enter the fixed salary for ${employeeFirstName} ${employeeLastName}:`));   

            gSal = calCommissionWorkerGrossSalary(fixedSalary,totalSales);
         
        }

        else
        {
            console.log(`Sorry you did not enter a valid code`)
        }

        
        const deduct = callTotalDeducations(gSal);
        const netSal = calNetSalary(gSal,deduct);

        console.log(`\nEmployee #${i}`);
        console.log(`Employee Name : ${employeeFirstName} ${employeeLastName} `);
        console.log(`Employee Gross Salary : ${gSal.toFixed(2)}`);
        console.log(`Employee Deducation: ${deduct.toFixed(2)}`);
        console.log(`Employee Net Salary : ${netSal.toFixed(2)}`);


        console.log("\n")
    }


    

})();

