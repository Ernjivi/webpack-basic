class BitchiButton{
	constructor(selector){
		this.el = document.querySelector(selector);
		console.log(this.el);
		this.el.addEventListener('click', this.complain);
	}

	complain(){
		console.log('Ouch!!')
	}
}

var bb1 = new BitchiButton('#bitchiButton1');
var bb2 = new BitchiButton('#bitchiButton2');
var bb3 = new BitchiButton('#bitchiButton3');
