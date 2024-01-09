const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minutesNum = document.querySelector('.minutes');
    
function clock() {
    const time = new Date(); // global object
    const hours = time.getHours() * 30;
    const minutes = time.getMinutes() * 6;
    const seconds = time.getSeconds() * 6; // 6 deg
    
    sec.style = `transform:rotate(${seconds}deg) ; `;
    min.style = `transform:rotate(${minutes}deg) ; `;
    hour.style = `transform:rotate(${hours}deg) ; `;
    
    // innerHTML
    hoursNum.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minutesNum.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    
    // updating the time live 
    setTimeout(() => {
        clock();
    }, 1000);
};
clock();

//

const links = document.querySelectorAll('.tabsItem')
const contents = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault();
        
        for (let ix = 0; ix < links.length; ix++) {
            links[ix].classList.remove('active');
            contents[ix].classList.remove('active');
        };
        
        tab(links[i], contents[i]);
    });
};

function tab(link, contents) {
    link.classList.add('active');
    contents.classList.add('active');
};


// stopwatch

const stopwatchBtn = document.querySelector('.stopwatch__btn');
const stopwatchHour = document.querySelector('.stopwatch__hours');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchSeconds = document.querySelector('.stopwatch__seconds');
const tabsSpan = document.querySelector('.tabsLink__span');

stopwatchBtn.addEventListener('click', (e) => {
    e.preventDefault(); // stops refreshing webpage

    if (stopwatchBtn.textContent === 'start'){

        stopwatchBtn.textContent = 'stop';
        tabsSpan.classList.add('active');

    } else if (stopwatchBtn.textContent === 'stop'){

        tabsSpan.classList.remove('active');
        tabsSpan.classList.add('active_clear');
        stopwatchBtn.textContent = 'clear';

    } else if (stopwatchBtn.textContent === 'clear'){

        tabsSpan.classList.remove('active_clear');
        stopwatchBtn.textContent = 'start';

    }
});

function stopwatch() {
    if (stopwatchBtn.textContent === 'stop'){ // means stopwatch in action
        stopwatchSeconds.innerHTML++;
        if (stopwatchSeconds.innerHTML > 59){
            stopwatchSeconds.innerHTML = 0;
            stopwatchMinutes.innerHTML++;
            if (stopwatchMinutes.innerHTML > 59){
                stopwatchMinutes.innerHTML = 0;
                stopwatchHour.innerHTML++;
            }
        }
    } else if (stopwatchBtn.textContent === 'start'){ // means stopwatch in stop, not counting anything
        stopwatchHour.innerHTML = 0;
        stopwatchMinutes.innerHTML = 0;
        stopwatchSeconds.innerHTML = 0;
    }

    setTimeout(() => {
        stopwatch();
    }, 1000);
};
stopwatch();