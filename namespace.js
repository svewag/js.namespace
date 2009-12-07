register("js.namespace.module1", function(){
	this.start = function(){
		alert("start module 1")
	}
	
	this.end = function(){
		alert("end module 1")
	}
});

register("js.namespace.module2", function(){
	this.start = function(){
		alert("start module 2")
	}
	
	this.end = function(){
		alert("end module 2")
	}
});

function register(namespace, module){
	var list = namespace.split(".")
	var last_namespace = list.pop()
	var obj = window
	
	for(var i in list){
		var ele = list[i]
		if(!obj[ele]){
			obj[ele] = {}
		}
		obj = obj[ele]
	}
	
	obj[last_namespace] = new module()
}