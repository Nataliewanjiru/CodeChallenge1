// Prompt the user for their basic salary

let basicSalary= Number(prompt("What is your Basic Salary?","In terms of Kenya shillings"))

// get the Gross Salary

let benefits = Number(prompt("Total amount of benefits got?" ))
let grossSalary = basicSalary + benefits;
console.log(`Gross Salary : ${grossSalary}`)


//Calculating NSSF
//Calculation for the firstTier
function firstTier(){
    let total= 0.06 * 6000;
    return total;
}

//Calculations for the secondTier
function secondTier(gross){
 let total= gross - 6000;
 let limit = (18000-6000)* 0.06;
 let payment = total * 0.06;
 let totalPayment = Math.min( limit, payment)
  return totalPayment;
}



// To calculate the Taxable sum create a function that returns the remaining cash after NSSF is removed
let totalRemoval = (firstTier() + secondTier(grossSalary))
let taxableSum= grossSalary- totalRemoval;
console.log(`Taxable Sum: ${taxableSum}`)




//Calculating the Tax paid 
// Since payment is done monthly
function monthly(money){
    let sumMoney;
    if(money<= 24000){
        sumMoney =(10/100)*money
    }else if((money- 24000) >= 24001 && (money-24000)<= 32333){
       sumMoney = ((money-24000) * 0.25) +(24000* 0.01)
    }else{
        sumMoney =((money - 32333) * 0.30) + (24000 * 0.01) + (8332 * 0.25)
    }
    return sumMoney;
  }
 
  let tax = monthly(taxableSum)
  console.log(`PAYE: ${tax}`)



  //NHIF deductions
  function nhifRates(value){
    let change;
        if(value <= 5999){
          change =150
        }else if( value <=7999 && value>=6000){
            change =  300
        }else if(value <= 11999 && value >= 8000){
            change = 400
        }else if(value<=14999 && value>= 12000){
            change = 500
        }else if(value<=14999 && value>= 15000){
            change = 600
        }else if(value <= 24999 && value>= 20000){
            change = 750
        }else if(value <=29999 && value>= 25000){
            change = 850
        }else if(value<= 34999 && value>= 30000){
            change = 900
        }else if (value <=39999 && value >= 35000){
            change = 950
        }else if (value<=44999 && value>= 40000){
            change =  1000
        } else if(value<=49999 && value >= 45000){
            change =  1100
        }else if(value<=59999 && value>= 50000){
            change =  1200
        }else if (value <=69999 && value>= 60000){
            change= 1300
        }else if (value <= 79999 && value >=70000){
            change = 1400
        }else if(value <= 89999 &&  value >= 80000){
            change = 1500
        } else if (value <= 99999 && value>= 90000){
            change = 1600
        } else if(value >= 100000){
            change =  1700
        }else {
            return "Wrong input"
        }
        return change;
    }

    let nhifDeduction = nhifRates(grossSalary)
    console.log(`NHIF: ${nhifDeduction}`)
 
 
    // Total deduction this is tax plus nhif
    let totalDeduction = nhifDeduction + tax;

    console.log(`Total Deduction: ${totalDeduction}`)

    
    
 // To calculate all the reliefs :
// First relief is personal relief;
    function firstRelief (tax){
        let sum;
        if(tax< 24000){
            sum = 0
        }else{
             sum = 2400
        }
        return sum
    }

    let personalRelief = firstRelief(taxableSum)

// Second relief is nhif relief
    function nhifReduction(value){
        let change;
            if(value <= 5999){
              change = 0.15 * 150
            }else if( value <=7999 && value>=6000){
                change = 0.15 * 300
            }else if(value <= 11999 && value >= 8000){
                change = 0.15 * 400
            }else if(value<=14999 && value>= 12000){
                change = 0.15 * 500
            }else if(value<=14999 && value>= 15000){
                change = 0.15 * 600
            }else if(value <= 24999 && value>= 20000){
                change = 0.15 * 750
            }else if(value <=29999 && value>= 25000){
                change =0.15 *  850
            }else if(value<= 34999 && value>= 30000){
                change = 0.15 * 900
            }else if (value <=39999 && value >= 35000){
                change = 0.15 * 950
            }else if (value<=44999 && value>= 40000){
                change =0.15 * 1000
            } else if(value<=49999 && value >= 45000){
                change =  0.15 * 1100
            }else if(value<=59999 && value>= 50000){
                change = 0.15 * 1200
            }else if (value <=69999 && value>= 60000){
                change= 0.15 * 1300
            }else if (value <= 79999 && value >=70000){
                change =0.15 * 1400
            }else if(value <= 89999 &&  value >= 80000){
                change =0.15 * 1500
            } else if (value <= 99999 && value>= 90000){
                change =0.15 * 1600
            } else if(value >= 100000){
                change =0.15 *  1700
            }else {
                return "Wrong input"
            }
            return change;
        }
   

        let nhifRelief = nhifReduction(grossSalary)

// The total Relief

let totalRelief = personalRelief + nhifRelief;
console.log(`Total Relief : ${totalRelief}`)


//Allowwable Deductions

let allowableDeduction = totalDeduction - totalRelief;
console.log(`Allowable Deduction: ${allowableDeduction}`)

//Calculate the net tax
let netPay = taxableSum - allowableDeduction;
console.log(`Net Pay: ${netPay}`)

