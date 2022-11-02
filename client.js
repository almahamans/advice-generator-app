var advP = document.querySelector('.the-adv');
var advNo = document.querySelector('.adv-no');
var btn = document.querySelector('.btn');
advP.innerHTML = 'L O A D I N G...';
btn.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        advP.innerHTML = data.slip.advice;
        advNo.innerHTML = "#".concat(data.slip.id);
    })["catch"](function (e) { return console.log('ERROR', e); });
});
