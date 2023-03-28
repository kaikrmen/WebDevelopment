async function order() {
    try {
        await abc
    } catch (error) {
        console.log('abcd doesnt exist')
    }
    finally{
        console.log('Runs code anyways')
    }
}

order()
.then(()=>{
    console.log('dfsd')
})