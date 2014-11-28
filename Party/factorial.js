process.stdin.resume();
process.stdin.setEncoding('utf8');
 
process.stdin.on('data', function (chunk) {

	var lines = chunk.split('\n');
	var ind= 1;
	var space= lines[ind-1].search(/ [0-9]+/);
	
	var temp1=parseInt(lines[0].substring(0,space));
	var temp2=parseInt(lines[0].substring(space+1));
	
	while(temp1!=0)
	{
		calc(lines, ind);
		ind=ind+temp2+2;
		temp1=parseInt(lines[ind-1].substring(0,space));
		temp2=parseInt(lines[ind-1].substring(space+1));
		if(temp1!=0)
			process.stdout.write('\n');
	}
});
 
function calc(lines, ind){
	
	var space= lines[ind-1].search(/ [0-9]+/);
	var temp1=parseInt(lines[ind-1].substring(0,space));
	var temp2=parseInt(lines[ind-1].substring(space+1));
	var A=[], B=[], C=[];
	for (var j=ind;j<ind+temp2;j++)
	{
		space=lines[j-1].search(/ [0-9]+/);
		A[j-1]=parseInt(lines[j].substring(0,space));
		B[j-1]=parseInt(lines[j].substring(space+1));
		C[j-1]=B[j-1]/A[j-1];
	}
	
	for (var i=ind+temp2;i>=ind;i--)
		{
			var tempC=0, tempB=0, tempA=0;
			for (var j=ind;j<=i;j++)
			{
				if(C[j-1]>C[j])
				{
					tempC=C[j-1], tempB=B[j-1], tempA=A[j-1];
					C[j-1]=C[j], B[j-1]=B[j], A[j-1]=A[j];
					C[j]=tempC, B[j]=tempB, A[j]=tempA;
				}
			}	
		}	//sorting the arrays according to values of C[j]
		
	var sumE=0;
	var sumF=0;
	for (var i=ind+temp2;i>=ind;i--)
	{
		if (sumE + A[i-1] <=50)
		{
			sumE=sumE+A[i-1];
			sumF=sumF+B[i-1];
		}	
	}
	process.stdout.write(sumE+' '+sumF);
}