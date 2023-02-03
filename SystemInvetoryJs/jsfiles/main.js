const nameProduct = document.getElementById('nameProduct')
const price = document.getElementById('price')
const desc = document.getElementById('desc')
const code = document.getElementById('code')
const categories = document.getElementById('categories')
const quantity = document.getElementById("quantity")
const totalProdutcs = document.getElementById("total-products")
const totalStock = document.getElementById("totalStock")
const totalStockNeto = document.getElementById("totalStockNeto")
const quantityProduct = document.getElementById("quantity-products")
const selectedIndex = document.getElementById("index")
const descProdutTotal = document.getElementById("desc-products")
const productMedice = document.getElementById("product-medicine")
const productCleaning = document.getElementById("product-cleaning")
const productGroseries = document.getElementById("product-groseries")
const productCereals = document.getElementById("product-cereals")

let editing = false;
let selectedRow = null
let formData = []
let index = 1
let editCode = null;
const initalValues = { total: 0, quantity: 0, totalStock: 0, desc: 0, totalStockNeto: 0}
let startValues = { ...initalValues };

const createProduct = (e) => {
  e.preventDefault()
  let productData = getForm()
  let codeExisting = codeExist(productData.code)
  const { nameProduct, code, price, desc, quantity } = productData;
  if (!nameProduct.length || !code.length || !desc.length || !price.length || !quantity.length) {
    alert("Llene los campos")
    return
  }
  if (isNaN(price) || isNaN(desc) || isNaN(quantity)) {
    alert("Ingrese datos validos")
    return 
  }

  if (price <= 0 || quantity <= 0 ) {
    alert("Ingrese datos mayores a 0")
    return
  }
  if(desc <= -1 || code <= -1) {
    alert("Ingrese valores positivos")
    return
  } 
  if(codeExisting) {
    alert(`Codigo ${code} ya existe`)
    return
  }
  if(editing) {
    updateData(productData)
    cancelEdit()
    cleanData()
    return
  }


  if(selectedRow === null) {
    formData.push(productData)
    statisticsCounts(productData)
    console.log(formData)
    cleanData()
    showData(formData)
    productStatistics()
    cleanData()
  }

}

const showData = (formData) => {
  startValues = { ...initalValues };
  table = ""
  formData.forEach((data) => {
    table += addData(data)
    table +=  addButtonsOfEditAndDelete(data.index);
    table += "</tr>"
    statisticsCounts(data)
  })

  document.getElementById("listing").innerHTML = table;
  productStatistics()
}

const addData = (formData) => {
  table = "";
  for (const i in formData) {
    table += `<td>${formData[i]}</td>`

  }
  return table;
}
const upper = () => {
  var str = document.getElementById('code').value   
  var res = str.toUpperCase();
  document.getElementById('code').value = res
}

const getForm = () => {
  const jsn = {
    index: selectedIndex.value ? selectedIndex.value : index++,
    nameProduct: nameProduct.value,
    code : code.value,
    desc: desc.value,
    price: price.value,
    quantity: quantity.value,
    categories: categories.value,
    
  };
  return jsn
};

const getProduct = (id) => {
  const find = formData.find((product) => product.index == id)
  return find 
};

const codeExist = (id) => {
  if (id === editCode) {
    return false;
  }
  const find = formData.find((product) => product.code === id)
  return find
}

const addButtonsOfEditAndDelete = (id) => {
  const buttons =`<td class="buttons">
          <button class="btn btn-dark" onclick="onEdit(${id})">
              Editar
          </button>
          <button class="btn btn-danger" onclick="onDelete(${id})">
              Borrar
          </button>
      </td>`

  return buttons
};


const productStatistics = () => {
    totalProdutcs.value = startValues.total;
    totalStock.value = startValues.totalStock;
    quantityProduct.value = startValues.quantity;
    descProdutTotal.value = startValues.desc
    totalStockNeto.value = startValues.totalStockNeto + startValues.totalStock
    clearLabels();
    if(formData){
      let map = new Map();
      formData.forEach(data =>{
        map.set(data.categories,map.get(data.categories) ? map.get(data.categories) + 1 : 1)
      } 
  )  
        map.forEach((v,k)=>{
          switch(k){
            case 'Cereales': {
              productCereals.value = v
              break;
            }
            case 'Golosinas': {
              productGroseries.value = v 
              break;
            } 
            case 'Limpieza': {
              productCleaning.value = v
              break;
            } 
            case 'Medicinas' : {
              productMedice.value = v
              break
            }

          }
        })
    }
    changeNeto()
    changeUSDToBS()
  };

  const changeNeto = () => {
    let usd = totalStockNeto.value 
    let bs = document.getElementById('bsfNeto').value
    let totalBsf = usd * bs
    document.getElementById("totalnetobsf").value = totalBsf
}
  
  const changeUSDToBS = () => {
      let usd = totalStock.value 
      let bs = document.getElementById('bsf').value
      let totalBsf = usd * bs
      document.getElementById("totalbrutobsf").value = totalBsf
  }

  const statisticsCounts= (formData) => {
    const { quantity, price, desc } = formData
    let iva = 0.16
    startValues.quantity += +quantity;
    startValues.totalStock += +price * +quantity;
    startValues.total++;
    startValues.totalStockNeto += (+price * +quantity) * iva // IVA EN VENEZUELA 16% SE USA PARA EL TOTAL NETO, ES EL TOTAL BRUTO POR EL IVA
    if(desc > 0) {
      startValues.desc++
    }
};

const onEdit = (id) => {
  let productData = getProduct(id);
  editing = true;
  editCode = productData.code;
  selectedIndex.value = productData.index; 
  nameProduct.value = productData.nameProduct
  desc.value = productData.desc
  price.value = productData.price
  code.value = productData.code
  quantity.value =  productData.quantity
  categories.value =  productData.categories
}

const updateData = (productEdited) => {
  formData = formData.map((product) =>
    product.index != productEdited.index ? product : productEdited
  );
  cleanData()
  showData(formData);
}

const onDelete = (id) => {
  if (confirm('Estas seguro de eliminar este producto?')) {
      formData = formData.filter((product) => product.index != id);
      showData(formData);
      console.log(formData);
  }
}

const cancel = () => {
  cancelEdit()
  cleanData()
};

const cancelEdit = () => {
  document.getElementById("clean");
  editing = false;
  cleanData()
};

const cleanData = () => {
  selectedIndex.value = ""
  nameProduct.value = "";
  code.value = "";
  desc.value = "";
  price.value = "";
  quantity.value = "";
};

const clearLabels = () => {
  productCereals.value = 0
  productMedice.value = 0
  productCleaning.value = 0
  productGroseries.value = 0
}
  

