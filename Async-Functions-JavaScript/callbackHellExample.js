let stocks  = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts'],
}


let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production()
    }, 2000);

    console.log('Order placed, please call production')
   
}

let production = () => {
    setTimeout(() => {
        console.log('Production has started')

        setTimeout(() => {
            console.log('The fruit has been chopped')    

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
           
                setTimeout(() => {
                    console.log('Machine was started')

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was picked`)
                        
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added`)
                       
                            setTimeout(() => {
                                console.log('serve ice cream')
                            }, 2000);

                        }, 3000);

                    }, 2000);
                    
                }, 1000);

            }, 1000);

        }, 2000);

    }, 0000);
}

order(0, production)