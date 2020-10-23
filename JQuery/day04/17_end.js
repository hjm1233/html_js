const http=require("http");
http.createServer((req,res)=>{
  var callback=req.url.split("=")[1];
  var weather="北京 大风 14~1";
  res.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8"
  });
  res.write(`${callback}('${weather}')`);
  res.end();
}).listen(3000);
//1. 右键点击16_server.js文件,选择在集成终端中打开
//2. 在弹出窗口中，等待出现输入提示符后，输入node 16_server.js
//3. 不用等待任何输出，直接打开浏览器，地址栏中输入http://localhost:3000按回车
//结果: 看到服务器端程序返回的天气预报
//凡是看到Error: listen EADDRINUSE :::3000，说明重复启动了多个服务器端，解决: 点右上角垃圾桶图标，关闭所有现在打开的终端，重新从第一步操作。