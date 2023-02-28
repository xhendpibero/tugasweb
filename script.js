const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = "white";
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = "black";
        body.style.color = 'pink';
        body.style.transition = '2s';
    }
})