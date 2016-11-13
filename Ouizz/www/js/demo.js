
var cal_single = ics();
cal_single.addEvent('Best Day', 'This is the best day to demonstrate a single event.', 'New York best city', '11/12/1987', '11/12/1987');


var makelogs = function(obj) {
	console.log('Events Array');
	console.log('=================');
	console.log(obj.events());
	console.log('Calendar With Header');
	console.log('=================');
	console.log(obj.calendar());
}
