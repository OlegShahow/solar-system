
"use strict";

// .....................................  volume   ...............................................

const soundImg = document.querySelector('.sound img');
const soundInput = document.querySelector('.sound input');

// Обработчик для события mouseenter
soundImg.addEventListener("mouseenter", () => {
	soundInput.style.opacity = "1";  // Показать элемент
});

// Обработчик для события mouseleave
soundImg.addEventListener("mouseleave", () => {
	soundInput.style.opacity = "0";  // Скрыть элемент
});

// Обработчик для события mouseenter
soundInput.addEventListener("mouseenter", () => {
	soundInput.style.opacity = "1";  // Показать элемент
});

// Обработчик для события mouseleave
soundInput.addEventListener("mouseleave", () => {
	soundInput.style.opacity = "0";  // Скрыть элемент
});







// // Получаем элемент аудио и регулятор громкости
// const audio = document.getElementById('audio');
// const volumeControl = document.getElementById('volume');
// const solarSystem = document.querySelector('.solar__system');

// // Устанавливаем громкость при загрузке страницы
// audio.volume = volumeControl.value;


// // Обработчик для движения мыши
// window.addEventListener('mousemove', function () {
// 	// Запускаем воспроизведение аудио при первом движении мыши
// 	// if (audio.paused) {
// 	// 	audio.play();
// 	// }

// 	audio.play();
// });


// // Обработчик изменения громкости
// volumeControl.addEventListener('input', function () {
// 	audio.volume = volumeControl.value;
// });


// ...................................   fon music    ............................................................

// Получаем элемент аудио и регулятор громкости
const audio = document.getElementById('audio');
const volumeControl = document.getElementById('volume');
const solarSystem = document.querySelector('.solar__system');

// Устанавливаем громкость при загрузке страницы
audio.volume = volumeControl.value;

// Флаг для отслеживания, когда пользователь кликает по странице /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */ 
let userInteracted = false;

// Обработчик клика по странице
window.addEventListener('click', function () {
	if (!userInteracted) {
		userInteracted = true; // Отмечаем, что пользователь взаимодействовал
	}
});

// Функция для воспроизведения аудио
function playAudio() {
	if (userInteracted) {
		audio.play().catch(error => {
			console.error('Не удалось запустить воспроизведение:', error);
		});
	}
}

// Обработчик для нахождения мыши на блоке .solar__system или его потомках
solarSystem.addEventListener('mouseover', function () {
	// Проверяем, что пользователь взаимодействовал с документом
	if (!userInteracted) return;

	// Запускаем воспроизведение аудио, если это разрешено браузером
	playAudio();
});

// Обработчик изменения громкости
volumeControl.addEventListener('input', function () {
	audio.volume = volumeControl.value;
});

// ------------------------------------------------------------------------------------------------------------

const mozaikButton = document.querySelector(".all__planet button");

const upFigure = document.querySelector(".up__figure");
const rightFigure = document.querySelector(".right__figure");
const downFigure = document.querySelector(".down__figure");
const leftFigure = document.querySelector(".left__figure");

mozaikButton.addEventListener("click", () => {

	// Останавливаем прокрутку страницы
	document.body.style.overflow = "hidden";  // Запрещаем прокрутку

	upFigure.style.top = "0";
	rightFigure.style.right = "0";
	downFigure.style.bottom = "0";
	leftFigure.style.left = "0";

	event.stopPropagation();/* ОБЯЗАТЕЛЬНО ОСТАНОВИТЬ ОБРАБОТЧИК ЧТОБ НИЖЕ ПРИ КЛИКЕ НА  ДОКУМЕНТ !!!!  ЗАКРЫТЬ СТРАНИЦУ */
})

document.addEventListener("click", () => {
	// закрыть без крестика благодаря event.stopPropagation()
	upFigure.style.top = "-100%";
	rightFigure.style.right = "-100%";
	downFigure.style.bottom = "-100%";
	leftFigure.style.left = "-100%";

	document.body.style.overflow = "auto";  // Восстанавливаем прокрутку
})





// -------------------------------------  slider  solar -----------------------------------------


const starButton = document.querySelector(".star__slider--button button");
const starDiv = document.querySelectorAll(".star__slider--body div");



// внимание на тор в т.стилей - не -100   а ТОР 0  -  это не выезд а поворот ( листание )!!!!!

let currentPage = 0;  // Переменная для отслеживания текущей картинки /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */ 

starButton.addEventListener("click", () => {
	// Если мы еще не дошли до последней картинки
	if (currentPage < starDiv.length) {
		starDiv[currentPage].style.transform = "rotateX(0deg)";  // Переворачиваем картинку
		currentPage++;  // Переходим к следующей картинке
	} else {
		// Когда все картинки были перевернуты, возвращаем все изображения в исходную позицию
		starDiv.forEach(img => {
			img.style.transform = "rotateX(90deg)";
		});
		currentPage = 0;  // Сбрасываем счетчик, чтобы начать снова
	}

	event.stopPropagation();

});


document.addEventListener("click", () => {
	starDiv.forEach(std => {
		std.style.transform = "rotateX(90deg)";  // Скручиваем слайды обратно
		currentPage = 0;  // Сбрасываем счетчик, чтобы начать снова
	})
})


// -------------------------------------  slider  mercury -----------------------------------------




const mercuryButton = document.querySelector(".mercury__slider--button button");
const mercuryDiv = document.querySelectorAll(".mercury__slider--body div"); // Заменил на корректный селектор

let current = 0;  // Переменная для отслеживания текущего слайда /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */ 

mercuryButton.addEventListener("click", () => {
	// Если мы еще не дошли до последнего слайда
	if (current < mercuryDiv.length) {
		mercuryDiv[current].style.transform = "rotateX(0deg)";  // Показываем текущий слайд
		current++;  // Переходим к следующему слайду
	}
	else {
		// После того как все слайды прошли, сбрасываем их все в исходное положение
		mercuryDiv.forEach(me => {
			me.style.transform = "rotateX(90deg)";  // Скручиваем слайды обратно
		})
		current = 0;  // Сбрасываем счетчик на начало
	}
	event.stopPropagation();
});

document.addEventListener("click", () => {
	mercuryDiv.forEach(mer => {
		mer.style.transform = "rotateX(90deg)";  // Скручиваем слайды обратно
		current = 0;  // Сбрасываем счетчик на начало
	})
})


// -------------------------------------  slider  venus -----------------------------------------


// const venusButton = document.querySelector(".venus__slider--button button");
// const venusDivs = document.querySelectorAll(".venus__slider--body div");

// let venCount = 0; // Переменная для отслеживания текущего слайда

// venusButton.addEventListener("click", (event) => {
// 	// Скрываем все слайды
// 	venusDivs.forEach(ve => {
// 		ve.classList.add('show--back');
// 	});

// 	// Если достигнут последний слайд, начинаем снова с первого
// 	if (venCount < venusDivs.length) {
// 		venusDivs[venCount].classList.remove('show--back');
// 		venusDivs[venCount].classList.add('show');
// 		venCount++; // Переходим к следующему слайду
// 	} else {
// 		// После последнего слайда скрываем все слайды и сбрасываем счетчик
// 		venusDivs.forEach(ve => {
// 			ve.classList.remove('show');
// 			ve.classList.add('show--back');
// 		});
// 		venCount = 0;  // Сбрасываем счетчик на начало
// 	}

// 	event.stopPropagation();
// });

// document.addEventListener("click", () => {
// 	venusDivs.forEach(venu => {
// 		venu.classList.remove('show');
// 		venu.classList.add('show--back'); // Скручиваем слайды обратно
// 	});
// 	venCount = 0;  // Сбрасываем счетчик на начало
// });


const venusButton = document.querySelector(".venus__slider--button button");
const venusDivs = document.querySelectorAll(".venus__slider--body div");

let venCount = 0; // Переменная для отслеживания текущего слайда /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */ 

venusButton.addEventListener("click", (event) => {


	// Если достигнут последний слайд, начинаем снова с первого
	if (venCount < venusDivs.length) {
		venusDivs[venCount].classList.remove('hide-slide');
		venusDivs[venCount].classList.add('show-slide');
		venCount++; // Переходим к следующему слайду
	} else {
		// После последнего слайда скрываем все слайды и сбрасываем счетчик
		venusDivs.forEach(ve => {
			ve.classList.remove('show-slide');
			ve.classList.add('hide-slide');
		});
		venCount = 0;  // Сбрасываем счетчик на начало
	}

	event.stopPropagation();
});

document.addEventListener("click", () => {
	venusDivs.forEach(venu => {
		venu.classList.remove('show-slide');
		venu.classList.add('hide-slide'); // Скручиваем слайды обратно
	});
	venCount = 0;  // Сбрасываем счетчик на начало
});

// -----------------------------------------     earth__slider    -----------------------------------------------------



const earthButton = document.querySelector(".earth__slider--button button");
const earthDiv = document.querySelectorAll(".earth__slider--body div");

let calk = 0;  // Переменная для отслеживания текущего слайда /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */ 

earthButton.addEventListener("click", () => {
	// Если мы еще не дошли до последнего слайда
	if (calk < earthDiv.length) {
		earthDiv[calk].style.transform = "scale(1)";
		earthDiv[calk].style.opacity = "1";// Показываем текущий слайд
		calk++;  // Переходим к следующему слайду
	}
	else {
		// После того как все слайды прошли, сбрасываем их все в исходное положение
		earthDiv.forEach(ea => {
			ea.style.opacity = "0";  // Скручиваем слайды обратно
		})
		calk = 0;  // Сбрасываем счетчик на начало
	}
	event.stopPropagation();
});

document.addEventListener("click", () => {
	earthDiv.forEach(ear => {
		ear.style.opacity = "0";  // Скручиваем слайды обратно
		calk = 0;  // Сбрасываем счетчик на начало
	})
})




// -------------------------------------------  mars   ----------------------------------------------------------



const marsButton = document.querySelector(".mars__slider--button button");
const marsDiv = document.querySelectorAll(".mars__slider--body div");


let schet = 0;  /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */

marsButton.addEventListener("click", (event) => {

	if (schet < marsDiv.length) {
		marsDiv[schet].style.transform = "rotate(0)";
		marsDiv[schet].style.top = "0";
		schet++;
	}
	else {
		marsDiv.forEach(ma => {
			ma.style.transform = "rotate(-90deg)";
			ma.style.top = "-100px";
		})
		schet = 0;
	}
	event.stopPropagation();
})

document.addEventListener("click", () => {
	marsDiv.forEach(mar => {
		mar.style.transform = "rotate(-90deg)";
		mar.style.top = "-100px";
	})
	schet = 0;
})


// ---------------------------------  jupiter  ----------------------------------------------------------------------------

const jupiterButton = document.querySelector(".jupiter__slider--button  button");
const jupiterDivs = document.querySelectorAll(".jupiter__slider--body div");


let ucount = 0;  /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */

jupiterButton.addEventListener("click", (event) => {

	if (ucount < jupiterDivs.length) {
		jupiterDivs[ucount].style.opacity = "1";
		ucount++;
	}
	else {
		jupiterDivs.forEach(up => {
			up.style.opacity = "0";
		})
		ucount = 0;
	}
	event.stopPropagation();
})


document.addEventListener("click", () => {

	jupiterDivs.forEach(uu => {
		uu.style.opacity = "0";
	})
	ucount = 0;
})



// ----------------------------------   saturn   ---------------------------------------------------------------

const saturnButton = document.querySelector(".saturn__slider--button  button");
const saturnDivs = document.querySelectorAll(".saturn__slider--body div");


let scount = 0;   /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */

saturnButton.addEventListener("click", (event) => {


	if (scount < saturnDivs.length) {
		saturnDivs[scount].style.transform = "scale(1)";
		saturnDivs[scount].style.opacity = "1";
		scount++;
	}


	else {
		saturnDivs.forEach(sat => {
			sat.style.transform = "scale(2)";
			sat.style.opacity = "0";
		})
		scount = 0;
	}
	event.stopPropagation();
})



document.addEventListener("click", () => {

	saturnDivs.forEach(sa => {
		sa.style.transform = "scale(2)";
		sa.style.opacity = "0";
	})
	scount = 0;
})


// ----------------------------------   uran   --------------------------------------------------------------


const uranButton = document.querySelector(".uran__slider--button  button");
const uranDivs = document.querySelectorAll(".uran__slider--body div");

let urancount = 0;  /*  ИМЕННО let (ОБЛАСТЬ ВИДИМОСТИ)  НЕ   const !!!!!!!     */

uranButton.addEventListener("click", (event) => {

	if (urancount < uranDivs.length) {
		uranDivs[urancount].style.transform = "rotateY(0deg)";
		uranDivs[urancount].style.opacity = "1";
		urancount++;
	}

	else {
		uranDivs.forEach(ur => {
			ur.style.transform = "rotateY(90deg)";
			ur.style.opacity = "0";
		})
		urancount = 0;
	}
	event.stopPropagation();
})

document.addEventListener("click", () => {
	uranDivs.forEach(ur => {
		ur.style.transform = "rotateY(90deg)";
		ur.style.opacity = "0";
	})
	urancount = 0;
})


// -----------------------------------------    neptun   ------------------------------------------------------------------



const neptunButton = document.querySelector(".neptun__slider--button  button");
const neptunDivs = document.querySelectorAll(".neptun__slider--body div");


let nepcount = 0;

neptunButton.addEventListener("click", (event) => {

	if (nepcount < neptunDivs.length) {
		neptunDivs[nepcount].style.top = "0";
		neptunDivs[nepcount].style.left = "0";
		nepcount++;
	}

	else {
		neptunDivs.forEach(nep => {
			nep.style.top = "100%";
			nep.style.left = "-100%";
		})
		nepcount = 0;
	}
	event.stopPropagation();

})


document.addEventListener("click", () => {
	neptunDivs.forEach(nep => {
		nep.style.top = "100%";
		nep.style.left = "-100%";
	})
	nepcount = 0;
})