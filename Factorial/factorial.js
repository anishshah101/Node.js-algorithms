process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
	
	var lines = chunk.split('\n');
	lines.forEach(function(line){
		process.stdout.write(factorial(line)+'\n');
	});
});

function factorial(num){
var temp=parseInt(num);
		for(var i=temp-1; i>1; i--){
		temp=temp*i;
		}
	return temp;
}