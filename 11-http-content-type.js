//require加载
//端口号

var http = require('http')//加载http

var server = http.createServer()//创建服务器

server.on('request',function(req,res){
//在服务端默认发送的数据，其实是utf8编码
//但是浏览器不知道你是utf8编码的内容
//浏览器在不知道服务器相应内容的编码的情况
//中文操作系统默认是gbk
//解决方法就是正确地告诉我们浏览器我给你发送的内容是什么编码
//在http协议中，content-type告知对方我方发送的数据类型
//	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
//	res.end('hello 妈妈')
	
	var url = req.url

	if(url === '/plain'){
	//content-text就是普通文本
		res.setHeader('Content-Type', 'text/plain; charset=utf-8')
		res.end('hello 妈妈')
	}else if(url === '/html'){
	//发送html格式的字符串应该告诉浏览器是text/html
		res.setHeader('Content-Type', 'text/html; charset=utf-8')
		res.end('<p>hello html<a href = "">点我</a></p>')
	}

})

server.listen(5000,function(){
	console.log('server running')
})