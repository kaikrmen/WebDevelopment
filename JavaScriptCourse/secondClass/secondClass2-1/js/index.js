var apps = []

const register = () => { 
    const name = document.getElementById("nombre_app").value
    const type = document.getElementById("tipo_app").value

    if(name  == "") {
        alert("El nombre de la app esta vacia")
    } else if(type == "" ) {
        alert("El tipo esta vacio")
    } else {

 
            const jsn = {
                "name": name,
                "type": type,
            }
            
            console.log(jsn)
    
            apps.push(jsn)

            console.log(apps)
            cleanInputs()
            showData()
        
    }
}

const showData = () => {
    let output = ""

    for(let i in apps) {
        output += `
        <li class="list-group-item">
        <span>${apps[i].name} - ${apps[i].type}</span>
        <button onclick="deleteRow(${i})" class="btn btn-danger">Eliminar</button>
        </li>
        `
    }

    document.getElementById("list").innerHTML = output
}

const deleteRow = (index) => { 
    console.log(index)
    apps.splice(index, 1)

    console.log(apps)
    showData()
}

const cleanInputs = () => {
    document.getElementById("nombre_app").value = ""
    document.getElementById("tipo_app").value = ""
}