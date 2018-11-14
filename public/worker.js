onmessage = function (ev) {
    console.log('Worker: Message received from main script', ev)
    var incomingMsg = ev.data
    console.log(incomingMsg)

    postMessage({
        type: 'response',
        value: incomingMsg.value
    })
}

