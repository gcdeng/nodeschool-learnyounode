var i=2, sum=0;
while (process.argv[i]){
	sum += Number(process.argv[i]);
	i++;
}
console.log(sum);
