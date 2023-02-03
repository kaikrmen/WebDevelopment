function post() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("Test_DatetimeLocal").value;
    const autor = document.getElementById("autor").value;

    if (!title.length || !description.length || !date.length || !autor.length) {
        alert("Llene los campos")
      
    }

    axios.post("http://localhost:8090/api", {
        title, description, date, autor
    })
    .then(res => {
        if(res.data){
            window.location.href = "index.html"
            alert("Post subido exitosamente")
        }else{
            alert("Error al subir el post")
        }
    })
    .catch(err => {
        console.error(err); 
    })
}