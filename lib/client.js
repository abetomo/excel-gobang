

module.exports = (host) => {
    const WebSocket = require('ws');

    const ws = new WebSocket(host);

    ws.on('open', function open() {
        console.log('已加入五子棋服务器：%s',host);
        const createGame = require('./createGame')();
        ws.send('something');
    });

    ws.on('message', function incoming(data) {
        console.log(data);
    });
}