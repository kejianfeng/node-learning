var fs = require("fs")

/*以下方法均为异步方法，都要异步函数及返回，如需用同步方法，即阻塞版本，无返回，在方法名后加Sync代表同步，如fs.unlink()的同步函数为fs.unlinkSybc('..')
如unlink异步版本：
*/

//同步版本-->形成阻塞无返回值
/*
fs.unlinkSync('./dir1/test.js');
*/



//创建文件夹
/*
fs.mkdir('./dir4', (err) => {
	if (err) {
		throw err;
	}
	console.log("已创建文件夹4")
})*/


//删除文件夹
/*
fs.rmdir('./dir1', (err) => {
	if (err) {
		throw err;
	}
	console.log("已删除")
})
*/


//创建文件  fs.writeFile(file, data[, options], callback),
//异步地将数据写入到一个文件，如果文件已存在则覆盖该文件。 data 可以是字符串或 buffer。
/*
const data = new Uint8Array(Buffer.from('var arr = [45,855,96]'));
fs.writeFile('./dir2/test.js', data,  (err) => {
	if (err) {
		throw err;
	}
	console.log("已创建test.js");
})
*/

//追加文件，而不是重写，fs.appendFile(path, data[, options], callback)
//异步地将数据追加到文件，如果文件尚不存在则创建该文件。 data 可以是字符串或 Buffer。
/*
const data = new Uint8Array(Buffer.from('console.log(665)'));
fs.appendFile('./dir2/test.js', data,  (err) => {
	if (err) {
		throw err;
	}
	console.log("已创建test.js");
})
*/

//删除文件
/*
fs.unlink('./dir1/test.js', (err) => {
	if (err) {
		throw err;
	}
	console.log("已删除")
})
*/

//读取文件
/*
fs.readFile('./dir2/test.js',  'utf-8', (err, data) => {
	// const buf = Buffer.from(data, 'ascii');
	console.log(data);
})
*/
fs.readdir('./dir2/test.js', 'utf-8' ,  (err, file) => {
	// const buf = Buffer.from(data, 'ascii');
	console.log(file);
})








