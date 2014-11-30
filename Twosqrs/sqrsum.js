process.stdin.resume();
process.stdin.setEncoding('utf8');
 
process.stdin.on('data', function (chunk) {

	var lines = chunk.split('\n');
	
	var itr=parseInt(lines[0]);
	for (i=1; i <=itr; i++){
		var t1= parseInt(lines[i]);
		process.stdout.write(sqrsum(t1)+'\n');
	}
	
});

function sqrsum(num){
		var a=Math.floor(Math.sqrt(num));
		var b=0;
		while(a>b){
			if(a*a + b*b == num)
			{
				
				return 'Yes';
			}
			else if(a*a + b*b < num)
			{
				console.log(num);
				b++;
			}
			else
			{
				a--;
			}
		}
	return 'No';	
}