#!/usr/bin/env node
var program = require('commander');
var spawn = require('child_process').spawnSync;

program
    .command("server <op>")
    .description('建立五子棋服务器。\n')
    .action(createServer);

program
    .command("join <op>")
    .description('加入五子棋游戏。\n')
    .action(createClient);

program
    .parse(process.argv);

function createServer(port) {
    const server = require('./lib/server');
    server(port);
}

function createClient(host) {
    const client = require('./lib/client');
    client(host);
}