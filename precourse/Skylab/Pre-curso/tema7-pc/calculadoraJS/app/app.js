
function calculate() {
	var n1=parseInt(document.getElementById('n1').value)
	var n2=parseInt(document.getElementById('n2').value)
	var sum=n1+n2
	var subs=n1-n2
	var mult=n1*n2
	var div=(n1/n2).toFixed(3)
	var square=Math.sqrt(n1).toFixed(3)

	if (isNaN(n1) && isNaN(n2)) {
		document.getElementById('results').innerHTML="You can't do this operation!"
	}else if (isNaN(n2)) {
		document.getElementById('results').innerHTML='<li>'+'Square root of '+n1+' = '+square+'</li>'
	}else{
	document.getElementById('results').innerHTML='<li>'+n1+' + '+n2+' = '+ sum+'</li>'+'<li>'+n1+' - '+n2+' = '+ subs+'</li>'+'<li>'+n1+' * '+n2+' = '+ mult+'</li>'+'<li>'+n1+' / '+n2+' = '+ div+'</li>'
	}
}