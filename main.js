
const button = document.querySelector('#button');
const content = document.querySelector('#content');
console.log(content);

button.addEventListener("click", function () {
    console.log('Click!!!');
    content.classList.toggle('hidden-content')//работает как тумблер выкл,вкл это toggle

if( content.classList.contains('hiden-content')){//проверяем содержит ли этот класс хидден
   button.textContent = "открыть блок";
}else{ 
    button.textContent ="закрыть блок";

}
    
}  );





const person={
    name:'Alex',
    id:10
}
console.log(person)
  
  