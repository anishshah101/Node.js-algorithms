process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
var lines = chunk.split('\n');
	for (var j=1; j<=parseInt(lines[0]);j++)
	{
	process.stdout.write(addnum(lines[j])+'\n');
	};
});

function addnum(num){
	var ind= num.search(/ [0-9]+/);
	var temp1=parseInt(num.substring(0,ind));
	var temp2=parseInt(num.substring(ind+1));
	var add=reverse(temp1)+reverse(temp2);
	return reverse(add);
}

function reverse(num){
var temp=num;
var n=0, sum=0;
	do{
	n=temp%10;
	sum=sum*10+n;
	temp=Math.floor(temp/10);
	}while(temp!=0);
return sum;
}
