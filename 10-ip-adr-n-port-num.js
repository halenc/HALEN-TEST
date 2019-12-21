//ip地址用来定位计算机
//端口号用来定位具体的应用程序
//所有需要联网通信的应用程序都会占用一个端口号

var http = require('http')//加载http

var server = http.createServer()//创建服务器

server.on('request',function(req,res){
	console.log('收到请求，请求路径是:'+req.url)
	console.log('请求我的客户端地址是：',req.socket.remoteAddress,req.socket.remotePort)
	res.end('hello world')
})

server.listen(3000,function(){
	console.log('server running')
})