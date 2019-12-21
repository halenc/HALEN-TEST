//浏览器中的js没有文件操作能力
//但是node中的js有
//
//fs是file-system的简写，就是文件系统的意思
//在node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有文件操作相关的API
//例如：fs.readFile就是用来读取文件的
//
//1、使用require方法加载fs核心模块
	var fs = require('fs')
//2、读取文件
//	第一个参数就是要读取的文件路径
//	第二个参数是一个回调函数
//		
//		成功
//			data 数据
//			error null
//		失败
//			data undefined没有数据
//			error 错误对象
	fs.readFile('./data/a.txt',function(error,data){
		//<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 20 74 78 74>
		//文件中存储的其实都是二进制数据0 1
		//这里看到的为什么不是0 和 1？原因是二进制转换成十六进制
		//所以我们可以通过toString 方法转换为我们认识的字符
		//console.log(data.toString())
		//console.log(error)
		//console.log(data)
	if(error){
		console.log('读取文件失败了')
		return
	}
		console.log(data.toString())
	
	})
