//require是一种方法
//它的作用就是用来加在模块
//在node中模块有三种：
//具名的核心模块，例如fs、http
//用户自己编写的文件模块
//相对路径必须加./，不能省略因为会报错
//在Node中没有全局作用域，只有模块作用域
//外部和内部不能相互访问
//可以省略后缀名

var foo = 'aaa'

console.log('a start')

function add (x,y){
	return x + y
}
//Error: Cannot find module 'b.js'
//require('b.js')

//可以
//require('./b.js')

//推荐，可以省略后缀名
require('./b')

console.log('a end')

console.log(foo)