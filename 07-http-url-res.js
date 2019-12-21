var http = require('http')

//1、创建server
var server = http.createServer()

//2、监听request请求事件，设置请求处理函数
server.on('request',function(req,res){
//console.log('收到请求了，请求路径是：'+req.url)

console.log('收到请求了，请求路径是' + req.url)
console.log('请求我的客户端的端口号是', req.socket.remoteAddress, req.socket.remotePort)
//res.write('hellar')
//res.write('hello')
//res.end('HELLO BABE')
//
//上面的方式比较麻烦，推荐使用更简单的方式，直接end的同时发送响应数据:
//res.end('hellar hello')

//
//根据不同的请求路径发送不同的响应结果
//1.获取请求路径
//  req.url获取到的是端口号之后的那一部分路径
//  也就是说所有的url都是以/开头的
//2.判断路径处理响应

	var url = req.url

	if (url==='/') {
		res.end('index page')
	}else if (url === '/login') {
		res.end('login page')
	}else if (url === '/products') {
		var products = [
		{
			name : 'apple',
			price : '111'
		},
		{
			name : 'pear',
			price : 115
		},
		{
			name : 'banana',
			price : 181
		}
		]
		//响应内容只能是字符串和二进制数据
		//以下都不行：
		//数组
		//布尔值
		//对象
		//数字
		res.end(JSON.stringify(products))
	}else{
		res.end('404 not found')
	}

	
})
//3、绑定端口号，启动服务

server.listen(3000, function(){
	console.log('服务器启动成功')
})