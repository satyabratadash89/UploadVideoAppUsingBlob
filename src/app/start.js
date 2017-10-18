/**
 * 
 */

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var shell = require('shelljs');

http.createServer(function (req, res) {
	var url = require('url');
	var adr=req.url;
	var q = url.parse(adr, true);
  if (adr.indexOf("fileupload") != -1) {
      var searchQuery=q.search;
      var searchQ = searchQuery.substring(1, searchQuery.length);
      var oldpath= 'C:/Users/satyabrata.dash/Downloads/'+searchQ;
      var newpath = 'C:/Users/satyabrata.dash/eclipse-workspace/UploadVideoApp2.0/src/assets/';
      console.log("OldPath-->"+oldpath);
      console.log("NewPath-->"+newpath);
      //shell(`mv ${oldpath} ${newpath}`);
      
      shell.mv(oldpath,newpath);
      shell.rm(oldpath+'*');
      shell.cd(oldpath);
      shell.chmod(777, searchQ);

  } else {
	  res.setHeader('Content-Type', 'application/json');
      var json = JSON.stringify({ 
          aa:2
        });
        res.end(json);
  }
}).listen(8080);