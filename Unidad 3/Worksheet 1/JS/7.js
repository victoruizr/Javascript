function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
a = factorial(1); // a obtiene el valor 1
b = factorial(2); // b obtiene el valor 2
c = factorial(3); // c obtiene el valor 6
d = factorial(4); // d obtiene el valor 24
e = factorial(5); // e obtiene el valor 120
f = factorial(6);
g = factorial(7);
h = factorial(8);
x = factorial(9);
j = factorial(10);
document.write("<table border=1 style=\"border-collapse:collapse\">"
+"<tr><td>"+a+"</td></tr>"
+"<tr><td>"+b+"</td></tr>"
+"<tr><td>"+c+"</td></tr>"
+"<tr><td>"+d+"</td></tr>"
+"<tr><td>"+e+"</td></tr>"
+"<tr><td>"+f+"</td></tr>"
+"<tr><td>"+g+"</td></tr>"
+"<tr><td>"+h+"</td></tr>"
+"<tr><td>"+x+"</td></tr>"
+"<tr><td>"+j+"</td></tr>"
+"</tr></table>");