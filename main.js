const advP = document.querySelector('.the-adv');
const advNo = document.querySelector('.adv-no');
const btn = document.querySelector('.btn');

    advP.innerHTML = 'L O A D I N G...';
    btn.addEventListener('click', ()=>{
        fetch('https://api.adviceslip.com/advice')
        .then((res)=> {return res.json()})
        .then(data => {
            advP.innerHTML = data.slip.advice;
            advNo.innerHTML = `#${data.slip.id}`
        })
        .catch(e => console.log('ERROR', e))
    })