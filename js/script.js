const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minutNum = document.querySelector('.minutes');

// new Date() - Global Object komputerdagi vaqtni olib beradi
// getSeconds() - Secundni olib beradi
// getMinutes() - minutni olib beradi
// getHours() - soatni olib beradi

// console.log(new Date().getHours());

function clock() {
    let time = new Date(),
        second = time.getSeconds(),
        minut = time.getMinutes(),
        hours = time.getHours()

    sec.style.transform = `rotate(${second * 6}deg)`
    min.style.transform = `rotate(${minut * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`
    setTimeout(() => clock(), 1000);

    minutNum.innerHTML = minut < 10 ? '0' + minut : minut
    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
}
clock()

const tabs = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active')
            content[j].classList.remove('active')
        }
        tabs[i].classList.add('active')
        content[i].classList.add('active')
    })
}


const btn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span'),
    t_sec = document.querySelector('.stopwatch__seconds'),
    t_min = document.querySelector('.stopwatch__minutes'),
    t_hours = document.querySelector('.stopwatch__hours')

let q = 0

btn.addEventListener('click', function () {
    btn.innerHTML = btn.innerHTML === 'START' ? 'STOP' : btn.innerHTML === 'STOP' ? 'CLEAR' : 'START';

    function timer() {
        if (btn.textContent === 'STOP') {
            span.classList.add('active')
            t_sec.innerHTML = Number(t_sec.textContent) < 59 ? Number(t_sec.innerHTML) + 1  :0;
            if (t_sec.textContent === '0') {
                t_min.innerHTML = Number(t_min.innerHTML) < 59 ? Number(t_min.innerHTML) + 1 : 0;
            }
             if (t_min.textContent === '59') {
                t_hours.innerHTML = Number(t_hours.innerHTML) < 24 ? q += 1 : 0
            }
            setTimeout(() => {
                timer()
            }, 1);
        }
        if (btn.textContent === 'CLEAR') {
            span.classList.add('active_clear')
        }
        if (btn.textContent === 'START') {
            t_sec.innerHTML = '0'
            t_min.innerHTML = '0'
            t_hours.innerHTML = '0'
            span.classList.remove('active_clear')
            span.classList.remove('active')
        }
        
    }
    timer()
    
})
// btn.addEventListener('click', function () {
//     // if (btn.innerHTML === 'START') {
//     //     btn.innerHTML ='STOP'
//     // }
//     btn.innerHTML = btn.innerHTML === 'START' ? btn.innerHTML = 'STOP'  : btn.innerHTML === 'STOP' ? btn.innerHTML = 'CLEAR' : btn.innerHTML = 'START'
//     function timer() {
//         // btn.innerHTML === 'STOP' ? tabsLink__span.classList = 'active': console.log('no');
//         if (btn.textContent === 'STOP') {
//             span.classList.add('active')
//             // t_sec.innerHTML = t_sec.textContent <  59 ? Number(t_sec.textContent) + 1 : t_sec.innerHTML = 0
//             // t_sec.innerHTML = Number(t_sec.innerHTML) < 59 ? Number(t_sec.innerHTML) + 1 : Number(t_sec.innerHTML) % Number(t_sec.innerHTML)
//             t_sec.innerHTML = Number(t_sec.textContent) < 59 ? Number(t_sec.innerHTML)+1 : 0
//             // function () {
//             //     return t_sec.innerHTML = Number
//             // }
//             if (t_sec.textContent === 0 ) {
//                 t_min.innerHTML = Number(t_min.innerHTML) < 59 ?  Number(t_min.innerHTML) + 1 : 0
//              }
//          }
//         setTimeout(() => {
//             timer()
//         }, 1);
//     }
//     timer()
// })