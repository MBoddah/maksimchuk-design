/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/portfolio */ \"./src/js/portfolio.js\");\n/* harmony import */ var _js_portfolio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_portfolio__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/common */ \"./src/js/common.js\");\n/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_common__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n\n\n//# sourceURL=webpack://maksimchuk-design/./src/index.js?");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ (() => {

eval("const background = document.querySelector('.separator__img');\nconst form = document.querySelector('.form');\nconst formText = document.querySelector('.form__text');\nconst formBody = document.querySelector('.form__wrapper');\nconst socials = document.querySelector('.socials');\nconst socialsList = document.querySelector('.socials__row');\ndocument.addEventListener('scroll', () => {\n  if (background.getBoundingClientRect().top < window.screen.height) {\n    background.style.transform = `translateY(-${(window.pageYOffset - background.getBoundingClientRect().top) / 4}px)`;\n  }\n\n  if (form.getBoundingClientRect().top + 300 < window.screen.height) {\n    formText.classList.add('show-in');\n    formBody.classList.add('show-in');\n  } else {\n    formText.classList.remove('show-in');\n    formBody.classList.remove('show-in');\n  }\n\n  if (socials.getBoundingClientRect().top + 300 < window.screen.height) {\n    socialsList.classList.add('show-in');\n  } else {\n    socialsList.classList.remove('show-in');\n  }\n});\n\n//# sourceURL=webpack://maksimchuk-design/./src/js/common.js?");

/***/ }),

/***/ "./src/js/portfolio.js":
/*!*****************************!*\
  !*** ./src/js/portfolio.js ***!
  \*****************************/
/***/ (() => {

eval("function portfolio() {\n  document.querySelectorAll('.portfolio__container img').forEach(img => {\n    img.addEventListener('click', () => {\n      showInModal(img);\n    });\n  });\n\n  function showInModal(img) {\n    const modal = document.querySelector('.modal'),\n          content = document.querySelector('.modal__content'),\n          wrapper = document.querySelector('.modal__wrapper');\n    modal.style.display = 'flex';\n    document.body.style.overflow = 'hidden';\n    content.innerHTML = `\n            <img src=\"${img.src}\" alt=\"\" class=\"modal__image\">\n        `;\n    console.log(content.children[0].width);\n    wrapper.style.width = `${content.children[0].width}px`;\n    document.querySelector('.modal__close').addEventListener('click', () => {\n      closeModal(modal);\n    });\n  }\n\n  function closeModal(modal) {\n    modal.style.display = 'none';\n    document.body.style.overflow = '';\n  }\n}\n\nportfolio();\n\n//# sourceURL=webpack://maksimchuk-design/./src/js/portfolio.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("function slider({\n  selectors,\n  // Object of selectors Required: slide, container.\n  slidesList,\n  // Array of slide objects. Required properties: imgPath, alt.\n  startSlideIndex,\n  // Index of start slide. Default: 1.\n  activateNavigationDots,\n  // Expects true for creating navigation dots.\n  activateAutoTurning,\n  // Expexts true for activating autoturning. Works while arrow havent touched.\n  turningInterval,\n  // Auto turn timeout. Default: 10000.\n  activateSlidesMoving,\n  // Expects true for auto scrolling elongated imgs and scoping others.\n  autoScrollSpeed,\n  // Expects auto img scroll speed. Recomended speed: 1-5. Default: 2.\n  autoScopeSpeed,\n  //Expects auto img scope speed. Recomended speed: 1-5. Default: 2.\n  leftArrowImg,\n  rightArrowImg\n}) {\n  const bodSelectors = prepareSelectors(selectors); // Creates a selectors object. Declares standard classes to unspecified\n\n  class sliderItem {\n    // Creates a slider object. Expects objects of img path (required), alt (required) and text\n    constructor({\n      imgSrc,\n      alt,\n      text\n    }) {\n      this.imgSrc = imgSrc;\n      this.alt = alt;\n      this.text = text;\n      this.parent = document.querySelector(bodSelectors.innerSelector);\n      this.itemClass = bodSelectors.slidesSelector.slice(1);\n    }\n\n    render() {\n      const item = document.createElement('div');\n      item.classList.add(this.itemClass);\n\n      if (this.text) {\n        item.innerHTML = `\n                <img src=${this.imgSrc} alt=${this.alt}>\n                <div class=\"slider__overlay\">\n                    <div class=\"slider__text\">${this.text}</div>\n                </div>\n            `;\n      } else {\n        item.innerHTML = `\n                <img src=${this.imgSrc} alt=${this.alt}>\n            `;\n      }\n\n      this.parent.append(item);\n    }\n\n  }\n\n  slidesList.forEach(slide => {\n    // Creates slides from array of slides and renders it\n    new sliderItem(slide).render();\n  });\n  const slider = document.querySelector(bodSelectors.sliderSelector),\n        // Inits slider\n  slides = document.querySelectorAll(bodSelectors.slidesSelector),\n        slidesWrapper = document.querySelector(bodSelectors.wrapperSelector) || createSliderElement(slider, bodSelectors.wrapperSelector),\n        sliderInner = document.querySelector(bodSelectors.innerSelector) || createSliderElement(slidesWrapper, bodSelectors.innerSelector),\n        arrowPrev = document.querySelector(bodSelectors.prevArrowSelector) || createSliderElement(slidesWrapper, bodSelectors.prevArrowSelector),\n        arrowNext = document.querySelector(bodSelectors.nextArrowSelector) || createSliderElement(slidesWrapper, bodSelectors.nextArrowSelector);\n  sliderInner.style.width = slides.length * 100 + '%';\n  sliderInner.style.display = 'flex';\n  sliderInner.style.transition = '.5s all';\n  slidesWrapper.style.overflow = 'hidden';\n  let currentSlide = startSlideIndex - 1 || 0;\n  const width = window.getComputedStyle(slidesWrapper).width,\n        indicators = [];\n  let offset = width.replace(/\\D/g, '') * currentSlide;\n  let timerTurn;\n  renderArrows(leftArrowImg, rightArrowImg, arrowPrev, arrowNext);\n\n  if (activateNavigationDots) {\n    if (activateNavigationDots === true) {\n      // Inits selected options\n      createDots(slides, indicators, slider);\n    } else {\n      warnAboutUnexpectedValue('activateNavigationDots');\n    }\n  }\n\n  if (activateSlidesMoving) {\n    if (activateSlidesMoving === true) {\n      document.querySelectorAll('.slider__slide img').forEach(slide => {\n        slide.onload = function () {\n          if (slide.offsetHeight > slide.parentNode.offsetHeight * 1.5) {\n            scrollImg(slide, autoScrollSpeed || 2);\n          } else {\n            slide.style.height = '100%';\n            scopeImg(slide, autoScopeSpeed || 2);\n          }\n        };\n      });\n    } else {\n      warnAboutUnexpectedValue('activateSlidesMoving');\n    }\n  }\n\n  if (activateAutoTurning) {\n    if (activateAutoTurning === true) {\n      const time = turningInterval || 10000;\n      timerTurn = setInterval(() => {\n        [currentSlide, offset] = showSlide(slides, ++currentSlide, offset, width, sliderInner, indicators);\n      }, time);\n    } else {\n      warnAboutUnexpectedValue('actiateAutoTurning');\n    }\n  }\n\n  [currentSlide, offset] = showSlide(slides, currentSlide, offset, width, sliderInner, indicators); // Shows start slide\n\n  arrowPrev.addEventListener('click', () => {\n    // Activates slider controls\n    [currentSlide, offset] = showSlide(slides, --currentSlide, offset, width, sliderInner, indicators);\n\n    if (activateAutoTurning === true) {\n      clearInterval(timerTurn);\n    }\n  });\n  arrowNext.addEventListener('click', () => {\n    [currentSlide, offset] = showSlide(slides, ++currentSlide, offset, width, sliderInner, indicators);\n\n    if (activateAutoTurning === true) {\n      clearInterval(timerTurn);\n    }\n  });\n  indicators.forEach(dot => {\n    dot.addEventListener('click', e => {\n      const slideTo = e.target.getAttribute('data-slide-to');\n      [currentSlide, offset] = showSlide(slides, slideTo - 1, offset, width, sliderInner, indicators);\n    });\n  });\n\n  function createSliderElement(parentElement, elementClass) {\n    const newElement = document.createElement('div');\n    newElement.classList.add(elementClass.slice(1));\n    parentElement.append(newElement);\n    return newElement;\n  }\n\n  function prepareSelectors(selectors) {\n    return {\n      sliderSelector: selectors.container,\n      slidesSelector: selectors.slide,\n      wrapperSelector: selectors.wrapper || '.slider__wrapper',\n      innerSelector: selectors.inner || '.slider__inner',\n      prevArrowSelector: selectors.arrowPrev || '.slider__prev',\n      nextArrowSelector: selectors.arrowNext || '.slider__next'\n    };\n  }\n\n  function renderArrows(leftUrl, rightUrl, leftContainer, rightContainer) {\n    const left = document.createElement('img'),\n          right = document.createElement('img');\n    left.src = leftUrl;\n    right.src = rightUrl;\n    leftContainer.append(left);\n    rightContainer.append(right);\n  }\n\n  function createDots(slides, indicators, slider) {\n    const dots = document.createElement('ol');\n    dots.classList.add('slider__indicators');\n    slider.append(dots);\n\n    for (let i = 0; i < slides.length; i++) {\n      const dot = document.createElement('li');\n      dot.setAttribute('data-slide-to', i + 1);\n      dot.classList.add('slider__dot');\n\n      if (i == 0) {\n        dot.style.opacity = 1;\n      }\n\n      dots.append(dot);\n      indicators.push(dot);\n    }\n  }\n\n  function showSlide(slides, slideIndex, offset, width, sliderInner, indicators) {\n    if (slideIndex < 0) {\n      slideIndex = slides.length - 1;\n    }\n\n    if (slideIndex == slides.length) {\n      slideIndex = 0;\n    }\n\n    offset = width.replace(/\\Bpx/g, '') * slideIndex;\n    sliderInner.style.transform = `translateX(-${offset}px)`;\n\n    if (indicators.length > 0) {\n      indicators.forEach(dot => dot.style.opacity = '.5');\n      indicators[slideIndex].style.opacity = 1;\n    }\n\n    return [slideIndex, offset];\n  }\n\n  function scrollImg(img, speed) {\n    let offset = 0;\n    const rollup = setInterval(() => {\n      img.style.transform = `translateY(${-offset}px)`;\n      offset = offset + 0.2;\n      if (offset > img.offsetHeight - img.parentNode.offsetHeight) clearInterval(rollup);\n    }, 100 / speed);\n  }\n\n  function scopeImg(img, speed) {\n    img.style.transform = 'scale(1.3)';\n    img.style.transition = `all ${90 / speed}s`;\n  }\n\n  function warnAboutUnexpectedValue(value) {\n    console.warn(`Wrong property of ${value}`);\n  }\n}\n\nconst selectors = {\n  slide: '.slider__slide',\n  container: '.slider'\n};\nconst slidesList = [{\n  imgSrc: 'img/arts/slides/cyberpunk.png',\n  alt: 'cyberpunk',\n  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'\n}, {\n  imgSrc: 'img/arts/slides/skull.png',\n  alt: 'skull',\n  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'\n}, {\n  imgSrc: 'img/arts/slides/wings3.png',\n  alt: 'wings',\n  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'\n}];\nslider({\n  selectors,\n  slidesList,\n  leftArrowImg: 'img/arrow-left.png',\n  rightArrowImg: 'img/arrow-right.png',\n  activateNavigationDots: true,\n  activateSlidesMoving: true,\n  autoScrollSpeed: 4,\n  autoScopeSpeed: 1\n});\n\n//# sourceURL=webpack://maksimchuk-design/./src/js/slider.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://maksimchuk-design/./src/scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;