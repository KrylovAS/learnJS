var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2  
d = b++; alert(d); // 1

c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4

alert(a); // 3
alert(b); // 3



var a = 2;

var x = 1 + (a *= 2);

a // 5