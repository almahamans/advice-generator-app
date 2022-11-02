const advP:HTMLElement = document.querySelector('.the-adv') as HTMLElement;
const advNo:HTMLElement = document.querySelector('.adv-no') as HTMLElement;
const btn:HTMLButtonElement = document.querySelector('.btn') as HTMLButtonElement;

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