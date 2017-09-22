
module.exports = () => {
    const xlsx = require('node-xlsx').default;
    const path = require('path');
    const root = process.cwd();
    const gameFile = path.join(root,'game.xlsx');
    console.log('game root is %s', root);

    const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', String.fromCharCode(7),String.fromCharCode(9)], ['baz', null, 'qux']];

    var buffer = xlsx.build([{ name: "mySheetName", data: data }], option); // Returns a buffer

    const fs = require('fs');
    fs.writeFileSync(gameFile, buffer, { encoding: 'utf8' });
};
