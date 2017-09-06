
module.exports = (port) => {

    const WebSocket = require('ws');

    const wss = new WebSocket.Server({ port });

    console.log('五子棋服务器已建立，地址为：%s',wss._server.domain);

    wss.on('connection', function connection(ws) {
        console.log('已建立连接');

        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });

        ws.send('something');
    });
}