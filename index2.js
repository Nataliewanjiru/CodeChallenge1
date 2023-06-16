// input the carSpeed

let carSpeed=Number(prompt("What is your car speed?"))

//does the demerit calculation
// above 12 points prints suspension

function calculator(speed){
    if(speed <=70){
        console.log("OK!")
    } else{
        let excessSpeed = (speed-70);
        let demerit =excessSpeed/5;
        console.log(`Demerit points: ${demerit}`)
        if(demerit > 12){
            console.log("License suspended!")
        } 
    }
}

calculator(carSpeed)
