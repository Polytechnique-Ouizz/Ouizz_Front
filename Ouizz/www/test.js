 var u = new Date("2015-11-11T08:00:00");


	console.log("Hello world");
            var f = ("0000" + u.getFullYear().toString()).slice(-4);
		
            var l = ("00" + (u.getMonth() + 1).toString()).slice(-2);
            var c = ("00" + u.getDate().toString()).slice(-2);
            var h = ("00" + u.getHours().toString()).slice(-2);
            var p = ("00" + u.getMinutes().toString()).slice(-2);
            var d = ("00" + u.getSeconds().toString()).slice(-2);

console.log(u.toString());
console.log(f);
console.log(c);
console.log(c);
console.log(h);
console.log(p);
console.log(d);
