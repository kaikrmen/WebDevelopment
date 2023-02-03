function dateFormatte(date) {
  return dayjs(date).format("DD/MM/YYYY HH:MM");
}

function getData(){
    axios.get("http://localhost:8090/api")
    .then(res => {
        const data= res.data;
        console.log(data)
        let temp="<h2>Todos los posts</h2><hr>"
        for (const i in data) {
            temp+=`<div class="col-12" style="cursor:pointer;" onclick="GoToPost(${i})">
            <div class="card mb-3" >
            <div class="row no-gutters">
  
              <div class="col-md-8">
                <div class="card-body" style="cursor:pointer;" onclick="GoToPost(${i})">
                  <h5 class="card-title">Titulo: ${data[i].title}</h5>
                  <h5 class="card-title">Autor: ${data[i].autor}</h5>
                  <h5 class="card-title">Fecha: ${dateFormatte(data[i].date)}</h5>
                </div>
              </div>
            </div>
          </div>
          </div>`
        }
        document.getElementById("IndexPosts").innerHTML=temp;
    })
    .catch(err => {
        console.error(err); 
    })
}

function GoToPost(data) {
    window.location.href = "onepost.html?id="+data
}

