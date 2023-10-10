const time = document.getElementById('time')

time.textContent = new Date().toLocaleTimeString()

setInterval(() => {
    time.textContent = new Date().toLocaleTimeString()
}, 1000)