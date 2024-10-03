var http = require('http');
var url = require('url')


const { start } = require('repl');
function startServer(route, handle)
{
        function onRequest(request,response){
            var reviewData = '';
            var pathname = url.parse(request.url).pathname;
            console.log('Request received for pathname:'+ pathname);
            request.setEncoding("utf8");
            request.addListener("data", function(chunk){
                reviewData+= chunk;
            })
            request.addListener("end",function(){
                route(handle,pathname,response,reviewData);
            })
        }
        http.createServer(onRequest).listen(8888);

        console.log(" Server is running on port:8888")
}

exports.startServer = startServer