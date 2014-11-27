process.stdin.resume();
process.stdin.setEncoding('utf8');
 
process.stdin.on('data', function (chunk) {

	var lines = chunk.split('\n');
	var ind= 0;
	var space= lines[ind].search(/ [0-9]+/);
	
	var temp1=parseInt(lines[0].substring(0,space));
	var temp2=parseInt(lines[0].substring(space+1));
	
	while(temp1 !=0 && temp2 != 0)
	{
		newind=calc(lines, ind+1);
	};
});
 
function calc(lines, ind){
	var space= lines[ind].search(/ [0-9]+/);
	var temp1=parseInt(lines[ind].substring(0,space));
	var temp2=parseInt(lines[ind].substring(space+1));
	var A[temp2], B[temp2], C[temp2];
	for (var j=ind;j<ind+temp2;j++)
	{
		space=lines[j+1].search(/ [0-9]+/);
		A[j]=parseInt(lines[ind].substring(0,space));
		B[j]=parseInt(lines[ind].substring(0,space+1));
		C[j]=A[j]/B[j];
	}
	for (var i=ind+temp2;i>=ind;i--)
		{
			var tempC=0, tempB=0, tempA=0;
			for (var j=ind;j<=i;j++)
			{
				if(C[j]>C[j+1])
				{
					tempC=C[j], tempB=B[j], tempA=A[j];
					C[j]=C[j+1], B[j]=B[j+1], A[j]=A[j+1];
					C[j+1]=tempC, B[j+1]=tempB, A[j+1]=tempA;
				}
			}	
		}	//sorting the arrays according to values of C[j]
}
 
