const clock = document.getElementById('clock')



setInterval(function () {
    let date = new Date()//to data object
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);