var sideMenuHamBtn = document.getElementById('sideMenuHamBtn');

var headerHamBtn = document.getElementById('headerHamBtn');

var sideNavDisplay = document.getElementById('sideNavMenu');
sideNavDisplay.style.display = 'none';


$( document ).ready(function() {
    console.log( "ready!" );
    
    headerHamBtn.addEventListener('click' , ()=>{
        if(sideNavDisplay.style.display == 'none'){
            sideNavDisplay.style.display = 'block';
        }
             
    });
    
    sideMenuHamBtn.addEventListener('click' , ()=>{
        if(sideNavDisplay.style.display == 'block'){
            sideNavDisplay.style.display = 'none';
        }
             
    });
    
});