var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response){
    var url = request.url;
    var title = '캐시백 대상 가맹점 확인';
    //파일을 읽기전부터 만들어져야하지 않나?
    if(request.url == '/'){
      url = '/index.html'; //1) 파라미터가 붙은 링크를 실행하고 2)파일이 파라미터를 받아서 변수에 넣고 3) 그 파일을 화면에 출력
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url)); //파일을 읽어서 화면에 보여주는거
 
});
app.listen(3000);