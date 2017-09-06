

module.exports = (server) => {
    console.log('即将接入的五子棋服务器为：%s',server);
    const WebSocket = require('ws');

    const ws = new WebSocket('ws://'+server);

    ws.on('open', function open() {
        console.log('接入成功');
        const createGame = require('./createGame')();
        ws.send('something');
    });

    ws.on('message', function incoming(data) {
        console.log(data);
    });
}