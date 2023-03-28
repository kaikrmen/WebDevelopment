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
    console.log(`${stocks.fruits[3]} was selected`)
}).then( ()=>{

    return order(0000, ()=> console.log('Productions has started'))
}).then( ()=>{

    return order(0000, ()=> console.log('Productions has started'))
})
