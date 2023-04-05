
var btn = document.getElementById("btn");

btn.addEventListener("click", ChargeinfoJson());


function ChargeInfoJson(){
    fetch('pizzas.json')
.then((response)=>{
    return response.json();
})
then((data)=>{
    console.log(data);
});

}

function CreativeDivs(_data){
   var preview=document.getElementsByClassName('preview')[0];
   preview.innerHTML="";

   var pizzeriaName=document.createElement("div");
   pizzeriaName.innerHTML=_data.Name;
   pizzeriaName.setAttribute("id", "NomPizza");

   var pizzeriaSlogan=document.createElement("div");
   pizzeriaSlogan.innerHTML=_data.Slogan;
   preview.appendChild(pizzeriaName);
}