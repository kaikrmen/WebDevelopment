const token = window.localStorage.getItem("token")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id")

function dateFormatte(date) {
    return dayjs(date).format("DD/MM/YYYY HH:MM");
  }

function GetData(){
    axios.get("http://localhost:8090/api", {params:{id:id}})
    .then(res => {
        const data = res.data;
 
        if(data!=undefined){
            document.getElementById("insertT").innerHTML=`
            <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Titulo: ${data[id].title}</h5>
              <h5 class="card-title">Autor: ${data[id].autor}</h5>
              <h5 class="card-title">Fecha: ${dateFormatte(data[id].date)}</h5>
              <p>Descripcion: ${data[id].description}</p>
            </div>
            <div class="card-footer">
          </div>
       
          `

        }
    })
    .catch(err => {
        console.error(err); 
    })
}

GetData()