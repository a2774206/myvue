/**
 * 全局函数（多次调用）
 */

let fn = function(){
	return {
		console:function(val){
			console.log(val);
		}
	}
}

export default fn;
