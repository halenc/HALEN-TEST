var http = require('http')

var server = http.createServer()

//request请求时间处理函数，需要接受两个参数
//request 请求对象
//	请求对象可以用来获取客户端的一些请求信息，例如请求路径
//	response 响应对象
//	响应对象可以用来给客户端发送响应信息
server.on('request',function(request, response){
	//http://127.0.0.1:3000/ /
	//http://127.0.0.1:3000/a /a
	//http://127.0.0.1:3000/foo/b /foo/b
	console.log('收到客户端请求了，请求路径是：'+request.url)

	//response 对象有一个方法：write 可用来给客户端发送响应数据
	//write可以使用多次，但最后一定要和使用end来结束响应，否则客户端会一直等待
	response.write('hello')
	response.write('node')

	//告诉客户端我的话说完了可以传递给用户了
	response.end()
})

server.listen(3000,function(){
	console.log('服务器启动成功，可以通过http://127.0.0.1:3000/来进行访问')
})