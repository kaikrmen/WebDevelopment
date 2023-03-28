let stocks  = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts'],
}


let isShopOpen = Boolean = true

function time(ms) {
    
    return new Promise( (resolve, reject)=>{
        if (isShopOpen) {
            setTimeout(resolve,ms)
        }
        else{
            reject(con.log('Shop is closed'))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.fruits[1]} was selected`)
        await time(0000)
        console.log('Production has started')
        await time(2000)
        console.log('The fruit has been chopped')
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        await time(1000)
        console.log('Machine was started')
        await time(3000)
        console.log(`${stocks.holder[0]} was picked`)
        await time(2000)
        console.log(`${stocks.toppings[0]} was added`)
        await time(1000)
        console.log('serve ice cream')
    } catch (error) {
        console.log('Cutomer left', error)
    }
    finally{
        console.log('Day ended, shop is closed')

    }
}

kitchen()


