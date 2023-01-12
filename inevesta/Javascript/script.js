let inevestahomepageword = document.getElementById("inevesta").innerHTML;

document.getElementById("inevesta").innerHTML = inevestahomepageword.toUpperCase ();

document.querySelector('.first-button').addEventListener('click', function () {

    document.querySelector('.animated-icon1').classList.toggle('open');
    });
    document.querySelector('.second-button').addEventListener('click', function () {
    
    document.querySelector('.animated-icon2').classList.toggle('open');
    });
    document.querySelector('.third-button').addEventListener('click', function () {
    
    document.querySelector('.animated-icon3').classList.toggle('open');
    });


    
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
