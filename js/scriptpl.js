"use strict";



//  ОБОЛОЧКА ДЛЯ ВСЕГО СКРИПТА ЧТОБ ОН ВЫПОЛНЯЛСЯ ПОСЛЕ ЗАГРУЗКИ ВСЕХ ЭЛЕМЕНТОВ НА СТРАНИЦЕ
document.addEventListener("DOMContentLoaded", () => {



	// // < !--звук  TIE выполняется циклично-- >


	const sound = document.getElementById("audios");
	const volumeControler = document.getElementById("volume");  // Здесь создаем переменную для volume
	const element = document.querySelector(".i3");
	const element2 = document.querySelector(".i2");


	// Устанавливаем начальную громкость
	sound.volume = volumeControler.value;

	// Обработчик изменения громкости через ползунок
	volumeControler.addEventListener("input", (event) => {
		sound.volume = event.target.value;  // Изменяем громкость в зависимости от положения ползунка
	});


	// Устанавливаем громкость сразу при загрузке
	sound.volume = 0.03;  // Устанавливаем громкость на 10%

	// // Обработчик play для изменения громкости в момент начала воспроизведения
	// sound.addEventListener('play', () => {
	// 	sound.volume = 0.03;  // Устанавливаем громкость на 10%
	// });

	// Запуск звука, когда анимация начинается
	const startSound = () => {
		sound.currentTime = 0; // Сброс времени звука на начало
		sound.play();  // Воспроизведение звука
	};

	// Запуск звука, когда анимация начинается
	element.addEventListener("animationstart", startSound);
	element2.addEventListener("animationstart", startSound);

	// Перезапуск звука каждый раз, когда анимация повторяется
	element.addEventListener("animationiteration", startSound);
	element2.addEventListener("animationiteration", startSound);


	// -------------------------------------------------------------------------------------------------------

	// -----------------------------------   фото каждой планеты  стр. 2   -------------------------------------------------------------


	const buttonPlanets = document.querySelectorAll(".body--planet");
	const planetBoxs = document.querySelectorAll(".planet--box");

	buttonPlanets.forEach((bp, index) => {
		bp.addEventListener("click", (event) => {
			if (planetBoxs[index].style.top === "0") {
				planetBoxs[index].style.top = "-200%";
			}
			else {
				planetBoxs.forEach(bp => {
					bp.style.top = "-200%";
				})
				planetBoxs[index].style.top = "0";

			}

			event.stopPropagation();
		})
	})


	document.addEventListener("click", () => {

		planetBoxs.forEach(pb => {
			pb.style.top = "-200%";
		})
	})


























});
