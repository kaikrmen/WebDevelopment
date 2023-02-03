let stocks  = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts'],
}


let isShopOpen = Boolean = true

let order = (time, work) => {
    
    return new Promise( (resolve, reject)=>{
        if(isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time);
        }
        else{
            reject(console.log('Our shop is close'))
        }
    } )
}

order(2000, ()=>{
    console.log(`${stocks.fruits[1]} was selected`)
}).then(()=>{
    return order(0000, ()=>console.log('Production has started'))
}).then(()=>{
    return order(2000, ()=>console.log('The fruit has been chopped'))
}).then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
}).then(()=>{
    return order(1000, ()=>console.log('Machine was started'))
}).then(()=>{
    return order(3000, ()=>console.log(`${stocks.holder[0]} was picked`))
}).then(()=>{
    return order(2000, ()=>console.log(`${stocks.toppings[0]} was added`))
})
.then(()=>{
    return order(2000, ()=>console.log('serve ice cream'))
})
