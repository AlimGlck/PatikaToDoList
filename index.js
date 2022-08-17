let SpanEkle = document.getElementById("liveToastBtn");
let GirilenYazi = document.getElementById("task");
let UlDom = document.querySelector("ul");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


SpanEkle.addEventListener("click",function(){
   
   if(GirilenYazi.value !=0){
   let DivDom = document.createElement("div");
   DivDom.setAttribute("onclick","allert(this);")
   
   
   let LiDom = document.createElement("li");
   let ADom = document.createElement("a");

   ADom.setAttribute("onclick","event.stopPropagation(); alllert2(this);");
   

   LiDom.innerHTML=`${GirilenYazi.value}`;
   ADom.innerHTML=`&times;`

   DivDom.append(LiDom,ADom);

   UlDom.append(DivDom);

  itemsArray.push(GirilenYazi.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));

   GirilenYazi.value="";



   $(document).ready(function(){
      $('.toast.success').toast('show');
    });
   }
   else{
      $(document).ready(function(){
         $('.toast.error.hide').toast('show');
       });
   }
   

});

data.forEach(item => {
   divMaker(item);
});

function divMaker(text1){

   let DivDom = document.createElement("div");
   DivDom.setAttribute("onclick","allert(this);")
   
   
   let LiDom = document.createElement("li");
   let ADom = document.createElement("a");

   ADom.setAttribute("onclick","event.stopPropagation(); alllert2(this);");
   

   LiDom.innerHTML=text1;
   ADom.innerHTML=`&times;`

   DivDom.append(LiDom,ADom);

   UlDom.append(DivDom);

}

function allert(a){
   
   a.classList.add("checked");
  
   
   
}

function alllert2(a){
   localStorage.clear();
   a.parentElement.remove();
  
}








