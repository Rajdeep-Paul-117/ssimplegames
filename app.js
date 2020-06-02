var express=require('express');
var path=require('path');
var app=express();
app.use(express.static(path.join(__dirname,'public')));
app.set('public',path.join(__dirname,'public'));
app.get('/',function(req,res){

	res.sendFile(__dirname+'/index.html');
	
});
app.get('/TicTacToe',function(req,res){
	res.sendFile(__dirname+'/public/pages/ttt.html');
})

app.listen(process.env.PORT || 3000,function(){
	console.log('started');
});