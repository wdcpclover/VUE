
var obj={
	fn:function(){
		console.log(this);
	}
}
obj.fn();
var obj1={
	fn:function(){
		setTimeout(function(){
			console.log(this);
		});
	}
}
obj1.fn();//wind

var obj3={
	fn:function(){
		setTimeout(() => {
			console.log(this);
		});
	}
}
obj3.fn();