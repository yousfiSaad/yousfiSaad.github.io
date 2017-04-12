(function() {
	//sof
	// if (typeof console != "undefined")
	// 	if (typeof console.log != 'undefined')
	// 		console.olog = console.log;
	// 	else
	// 		console.olog = function() {};

	window.clog = console.log = function(message) {
    if(typeof message === 'object'){
      message = JSON.stringify(message);
    }
		alertify.log(message, null, 0);
	};
	console.error = function(message) {
		alertify.log("Notification", "error", 5000);
	};
	// console.debug = console.info = console.log;


	var allCode = document.querySelectorAll('code')
	for (var i in allCode) {
		var code = allCode[i];
		var parent = code.parentElement;
		var button = document.createElement('div');

		button.innerText = 'Executer';
		button.setAttribute('style', ' float: right; background-color: rgb(63, 63, 63); color: #FFECCF; padding: 1px 5px; cursor:pointer')

		code.innerHTML = code.innerHTML.trim();

		button.addEventListener('click', function(event) {
			var but = event.srcElement;
			var code = but.parentElement.querySelector('code');
			var codeContent = code.innerText;
			eval(babel.transform(codeContent).code);
		});

		parent.appendChild(button);
	}
})();
