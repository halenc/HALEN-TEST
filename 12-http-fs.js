
var http = require('http')//加载http
var fs = require('fs')

var server = http.createServer()//创建服务器

server.on('request',function(req,res){

	var url = req.url

	if(url === '/'){
		fs.readFile('./resource/index.html',function(err,data){
		 if (err) {
			res.setHeader('Content-Type', 'text/plain; charset=utf-8')
			res.end('文件读取失败')
		} else {
			res.setHeader('Content-Type', 'text/html; charset=utf-8')
			res.end(data)
		}
	})
}
else if(url === '/cat'){
	//url：统一资源定位符
	//一个url定位到一个对应的资源
		fs.readFile('./resource/yangdal.jpg',function(err,data){
		 if (err) {
			res.setHeader('Content-Type', 'text/plain; charset=utf-8')
			res.end('文件读取失败')
		} else {
			//data默认是二进制
			//res.end（）支持二进制和字符串
			//图片不需要编码，常说的编码指的是字符编码
			res.setHeader('Content-Type', 'image/jpeg')
			res.end(data)
		}
	})
}
})

server.listen(5000,function(){
	console.log('server running')
})