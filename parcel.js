
//prompt is a global variable
const prompt = require("prompt-sync")();





const main = (()=>{

    
    //EVERY INNER FUNCTION CAN ACCESS 'weight'

    const calDeliveryCharge = (weight)=>{

        let deliveryCharge; //this is a local variable (Function Scope)

        if(weight <=0)
        {
          deliveryCharge = null
        }
        
        else if(weight < 2.5)
        {
            deliveryCharge = 3.50 * weight;
        }

        else if(weight>=2.5 && weight <=5)
        {
            deliveryCharge = 2.85 * weight;
        }

        else if(weight>5 && weight <7)
        {
            deliveryCharge = 2.45 * weight;
        }

        // 
        else
        {
            deliveryCharge = 3.25 * weight;
        }

        return deliveryCharge;
        


    }
    



    const parcelWeight= parseFloat(prompt("Please enter the weight of the customer's parcel : "));

    const charge = calDeliveryCharge(parcelWeight);

    if(charge!=null)
    {

        console.log(`The cost of delivering the customer parcel is ${charge}`)
    }

    else
    {
        console.log(`Error`);
    }



})();





