var querystring = require('querystring')

function home(response){
    console.log(" executing home handler");
    var htmlFile = 
    '<html>' +
    '<head>' + 
    '<meta http-equi="Content-Type"  content="text/plain;charset=UTF-8" />'+
    '</head>' +
    '<body>' +
    '<form action="/review" method="post">' +
    '<textarea name="text" rows="20" cols="20"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>' ;

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(htmlFile);
    response.end();
}

function review(response, reviewData){
    console.log(" executing review handler");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Your review is " + querystring.parse(reviewData).text);
    response.end();

}

exports.home = home;
exports.review = review;