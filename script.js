const purohit = document.querySelector("#purohit");
const purohit_arrow = document.querySelector("#purohit div");
const purohit_ul = document.querySelector("#purohit-ul");
const service = document.querySelector("#service");
const service_arrow = document.querySelector("#service div");
const service_ul = document.querySelector("#service-ul");
const puja = document.querySelector("#puja");
const puja_arrow = document.querySelector("#puja div");
const puja_ul = document.querySelector("#puja-ul");
const cook = document.querySelector("#cook");
const cook_arrow = document.querySelector("#cook div");
const cook_ul = document.querySelector("#cook-ul");
const astrology = document.querySelector("#astrology");
const astrology_arrow = document.querySelector("#astrology div");
const astrology_ul = document.querySelector("#astrology-ul");

let click = true;

function services_link() {
	if (click) {
		service_ul.style.display = "block";
		service_arrow.classList.add("up-arrow-key");
		click = false;
	} else {
		service_ul.style.display = "none";
		service_arrow.classList.toggle("up-arrow-key");
		click = true;
	}
}

function purohit_link(e) {
	if (click) {
		purohit_ul.style.display = "block";
		purohit_arrow.classList.add("up-arrow-key");
		click = false;
	} else {
		purohit_ul.style.display = "none";
		purohit_arrow.classList.toggle("up-arrow-key");
		click = true;
	}
}
function puja_link() {
	if (click) {
		puja_ul.style.display = "block";
		puja_arrow.classList.add("up-arrow-key");
		click = false;
	} else {
		puja_ul.style.display = "none";
		puja_arrow.classList.toggle("up-arrow-key");
		click = true;
	}
}
function cook_link() {
	if (click) {
		cook_ul.style.display = "block";
		cook_arrow.classList.add("up-arrow-key");
		click = false;
	} else {
		cook_ul.style.display = "none";
		cook_arrow.classList.toggle("up-arrow-key");
		click = true;
	}
}
function astrology_link() {
	if (click) {
		astrology_ul.style.display = "block";
		astrology_arrow.classList.add("up-arrow-key");
		click = false;
	} else {
		astrology_ul.style.display = "none";
		astrology_arrow.classList.toggle("up-arrow-key");
		click = true;
	}
}

purohit.addEventListener("click", purohit_link);
service.addEventListener("click", services_link);
puja.addEventListener("click", puja_link);
cook.addEventListener("click", cook_link);
astrology.addEventListener("click", astrology_link);

// ////////////////////////////////////////////////////////////////

(function () {
	const openLoginForm = document.querySelectorAll(".open-form");
	const login_container = document.querySelector("#login-section");
	const cross_sign = document.querySelector("#cross-sign-in");
	const hamburger = document.querySelector("#hamburger");
	const open_menu = document.querySelector("#open-menu");
	const hamburger_cross = document.querySelector("#hamburger img");

	openLoginForm.forEach((element) => {
		element.addEventListener(
			"click",
			(e) => {
				setTimeout(() => {
					if (click) {
						login_container.style.display = "block";
						document.body.style.background = "#060606a7";
						click = false;
					} else {
						login_container.style.display = "none";
						document.body.style.background = "transparent";
						click = true;
					}
				});
			},
			1000
		);
	});
	cross_sign.addEventListener("click", (e) => {
		e.stopPropagation();
		login_container.style.display = "none";
		document.body.style.background = "transparent";
	});
	hamburger.addEventListener("click", () => {
		if (click) {
			open_menu.style.display = "block";
			open_menu.classList.add("hamburger-menu");
			hamburger_cross.src = "/assets/svg/cross sign.svg";
			click = false;
		} else {
			open_menu.style.display = "none";
			hamburger_cross.src = "/assets/svg/hamburger-sidebar-svgrepo-com.svg";
			click = true;
		}
	});
})();
