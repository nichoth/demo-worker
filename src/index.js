var worker = new window.Worker('worker.js')
worker.onmessage = function (ev) {
    console.log('Main thread: got message from worker', ev)
    console.log(ev.data)
}

worker.onerror = function (err) {
    console.log('error', err)
}

var form = document.getElementById('demo-form')
form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    var text = ev.target.elements.message.value

    worker.postMessage({
        type: 'foo',
        value: text
    })
})


