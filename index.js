var _ul = document.createElement('ul');
_ul.className = "Spisok";
_ul.innerHTML = "<li>test1</li><li>test2</li>";

document.body.appendChild(_ul);

var _h3 = document.createElement('h3');
_h3.className = "h3";
_h3.style.textAlign = "center";
_h3.innerHTML = "h3"
document.body.insertBefore(_h3, _ul)

console.log(_h3);


function _email(em) {
	var spec = "!#$%^&*()№";
	var gav = "@"
	if (em.indexOf(gav) > 0) {
		console.log("good");
		var domen = em.slice(em.indexOf(gav), )
		console.log(domen);
		if (domen.indexOf(".") > 0) {
			console.log("точка в домене есть");
			_name = em.substr(0, em.indexOf(gav));
			console.log(_name);
			for (let i = 0; i < spec.length; i++) {
				for (let k = 0; k < em.length; k++) {
					if (spec[i] == _name[k]) {
						console.log("в имени спец символы");
						alert("в имени спец символы")
						return false

						break
					}
				}
			}
			alert("почта ОК")
			return true
		} else {
			console.log("точки в домене нет есть");
		}
	} else {
		console.log("not good");
		// break
	}
}

// _email("t№est@gmail.com");


function gogo() {
	var _em = document.querySelectorAll("input[type='text']")[0].value;
	// console.log("test");

	_email(_em);
}
document.body.replaceChild(_ul, _h3)


function _del(del) {
	// 	var del = document.body.querySelectorAll(del)
	// for (let i = 0; i < del.length; i++) {
	// 	del[i].parentElement.removeChild(del[i]);
	// }
	del.parentElement.removeChild(del);
}

// setTimeout(() => {
// 	_del("ul")
// }, 1000);

function gogo2(params) {
	console.log(this);


}

var buttons = document.querySelectorAll("button")
for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = FS;

}

function FS() {
	var counterElement = document.querySelector("h2");
	if (this.className.indexOf("plus") + 1) {
		counterElement.innerHTML = + counterElement.innerHTML + 1;
	} else {
		counterElement.innerHTML = + counterElement.innerHTML - 1;
	}
}


document.body.onclick = bod;
function bod() {
	document.body.style.background = _randcolor();
}

function _randcolor() {
	var r = Math.floor(Math.random() * (256));
	var g = Math.floor(Math.random() * (256));
	var b = Math.floor(Math.random() * (256));
	var c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	return c;
}

// document.querySelector("h2").innerHTML.localStorage.getItem