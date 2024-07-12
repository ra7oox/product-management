var formulaire=document.getElementById("formul")
var table=document.getElementById("table")

var product_serie=document.getElementById("serie")
var product_name=document.getElementById("name")
var product_price=document.getElementById("price")
var product_quantity=document.getElementById("quantity")


var total=0  
var h1_total=document.getElementById("total")

function add_product(){
    formulaire.style="display:flex;"
    table.style="display:none;"
}

function cancel(){
    formulaire.style="display:none;"
    table.style="display:flex;"
    table.style="width:100%;"

}

function clean(){
    product_name.value=""
    product_price.value=""
    product_quantity.value=""

    product_serie.value=""
}

function save(){
    if(product_name.value.length===0 || product_serie.value.length===0|| product_price.value.length===0|| product_quantity.value.length===0){
        alert("an input is empty please fill all the fields")
    }
    else{
        var tr=document.createElement("tr")
        tr.innerHTML=`
        <td>${product_serie.value}</td>
        <td>${product_name.value}</td>
        <td>${product_price.value}</td>
        <td>${product_quantity.value}</td>
        <td><button class="btn btn-danger" onclick="deletee(this)">delete</button></td>


        
        `
        table.appendChild(tr)
        formulaire.style="display:none;"
        table.style="display:flex;"
        table.style="width:100%;"
        total=total+Number(product_price.value*product_quantity.value)
        h1_total.innerHTML="Total is:"+total+"DH"


    }
}

function deletee(btn){
    var line=btn.parentNode.parentNode;
    line.parentNode.removeChild(line)
 
    var childs=line.children
    var child=Number(childs[2].innerHTML*childs[3].innerHTML)
    total=total-child
    h1_total.innerHTML="Total is:"+total+"DH"
}