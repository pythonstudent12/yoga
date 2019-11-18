window.addEventListener('DOMContentLoaded', function () {

 // 'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  
  function hideTabContent (a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
  }

  hideTabContent (1);

  function showTabContent (b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        
    }
  }

info.addEventListener ('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent (0);
                showTabContent(i);
                break;
            }
        }
    }
    
});

//timer

let deadline = '2019-10-17';

function getTimeRemaining (endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));

    return {
    'total' : t,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
    };

}

function setClock (id, endtime) {
  let timer = document.getElementById(id),
  hours = timer.querySelector('.hours'),
  minutes = timer.querySelector('.minutes'),
  seconds = timer.querySelector('.seconds'),
  timeInterval = setInterval(updateClock, 1000);

function updateClock () {
   let t1 = getTimeRemaining(endtime);
   if (t1.seconds <= 9) {
    t1.seconds = '0' + t1.seconds;
   }
   if (t1.minutes <= 9) {
    t1.minutes = '0' + t1.minutes;
   }
   if (t1.hours <= 9) {
    t1.hours = '0' + t1.hours;
   }
   hours.textContent = t1.hours;
   minutes.textContent = t1.minutes;
   seconds.textContent = t1.seconds;

   if (t1.total <= 0 ) {
       clearInterval (timeInterval);
       hours.textContent = '00';
       minutes.textContent = '00';
       seconds.textContent = '00';
   }

}
}

setClock ('timer', deadline);

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector ('.popup-close');

   



    function modalWind (btn) {
     
        btn.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
            
        });

        close.addEventListener('click', function () {
            overlay.style.display = 'none';
            btn.classList.remove('more-splash');
            document.body.style.overflow = '';
        
            });

     }

    modalWind (more);


    //more.addEventListener('click', function () {
     //   overlay.style.display = 'block';
     //   this.classList.add('more-splash');
      //  document.body.style.overflow = 'hidden';
        
   // });

  //  close.addEventListener('click', function () {
  //  overlay.style.display = 'none';
   // more.classList.remove('more-splash');
    //document.body.style.overflow = '';

   // });





console.log(tabContent[3].querySelector('.description-btn'));


function yoga (tabb) {

    let tc = tabb.querySelector('.description-btn');
    modalWind (tc);
 
}

for (let i = 0; i < tabContent.length; i++) {
    yoga (tabContent[i]);
}

});

class Options {
    constructor (height, width, bg = 'black', fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv () {
       let div = document.createElement('div');
       div.style.cssText =  `height:${this.height}px; 
       width:${this.width}px;
       background-color:${this.bg};
       font-size:${this.fontSize}px;
       text-align:${this.textAlign}`;
       div.textContent = 'Hello World!';
       document.body.appendChild(div);
    }

}

//let element = new Options (600, 666, 'green', 70, 'left');
//element.createDiv();


let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function(value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange', function() {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});






let form1 = document.getElementById('form'),
    statusMessage1 = document.createElement('div');





//console.log (1111111111);

form1.addEventListener('submit', function (event) {

    event.preventDefault();
    form1.appendChild(statusMessage1);
    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    //console.log (444444444);


   console.log(form1[0].value);
   console.log(form1[1].value);

   let f1 = form1[0].value;
   let f2 = form1[1].value;
   
   let obj = {
     email: f1,
     phone: f2
   };

   let dataJ = JSON.stringify(obj);

   console.log(dataJ);
  
   request.send(dataJ);

   
   request.addEventListener('readystatechange', function() {
<<<<<<< HEAD


    function postData () {

        return new Promise (function (resolve, reject){


            if (request.readyState < 4) {
                resolve();
            } else if(request.readyState === 4 && request.status == 200) {
                resolve();
            } else {
                reject();
            }
      });
     
    }
    
    postData()
    .then(()=>{
    statusMessage.innerHTML = message.loading;
    })
    .then(()=>{
      statusMessage.innerHTML = message.success;
    })
    .catch(()=>{statusMessage.innerHTML = message.failure;})



=======
    if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
    } else if(request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
    } else {
        statusMessage.innerHTML = message.failure;
    }
>>>>>>> 6d80fb77ed0c718a78dda814235b502fd6d451cc
});


}   

);



