var btnOpen = document.querySelectorAll('.button');
var modal = document.querySelectorAll('.modal');
var btnClose = document.querySelectorAll('.btn-close i');
// var index = 0;
[...btnOpen].forEach((item,index)=>{
    item.addEventListener('click',function(){
      modal[index].classList.add('show')
        console.log(index);
    });
})
btnClose.forEach((item,index )=>{
  item.addEventListener('click',function(){
    modal[index].classList.remove('show')
  })
})
modal.forEach((item,index )=>{
  item.addEventListener('click',function(){
    modal[index].classList.remove('show')
  })
})

