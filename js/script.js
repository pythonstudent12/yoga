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

