const checkbox= document.querySelector('#checkbox');
const body=document.querySelector('body');

/*if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    checkbox.setAttribute('checked', true)
}*/

load();

checkbox.addEventListener('change', function(event){

        document.body.classList.toggle('is-dark-mode')
        store(body.classList.contains('is-dark-mode'));

});

function load(){

    const darkmode=localStorage.getItem('is-dark-mode');
    if(!darkmode){
        store('false');
    }else if(darkmode=='true'){
        body.classList.add('is-dark-mode');
    }

}

function store(value){
    localStorage.setItem('is-dark-mode',value);
}

