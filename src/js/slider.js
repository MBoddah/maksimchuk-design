function slider( {
    selectors,   // Object of selectors Required: slide, container.
    startSlideIndex,  // Index of start slide. Default: 1.
    activateNavigationDots, // Expects true for creating navigation dots.
    activateAutoTurning,  // Expexts true for activating autoturning. Works while arrow havent touched.
    turningInterval,  // Auto turn timeout. Default: 10000.
    activateSlidesMoving, // Expects true for auto scrolling elongated imgs and scoping others.
    autoScrollSpeed, // Expects auto img scroll speed. Recomended speed: 1-5. Default: 2.
    autoScopeSpeed, //Expects auto img scope speed. Recomended speed: 1-5. Default: 2.
}) {

    const bodSelectors = prepareSelectors(selectors);           // Creates a selectors object. Declares standard classes to unspecified
    class sliderItem {                                          // Creates a slider object. Expects objects of img path (required), alt (required) and text
        constructor( {imgSrc, alt, text}) {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.text = text;
            this.parent = document.querySelector(bodSelectors.innerSelector);
            this.itemClass = bodSelectors.slidesSelector.slice(1);
        }
    }

    const slider = document.querySelector(bodSelectors.sliderSelector),         // Inits slider
        slides = document.querySelectorAll(bodSelectors.slidesSelector),
        slidesWrapper = document.querySelector(bodSelectors.wrapperSelector) || createSliderElement(slider, bodSelectors.wrapperSelector),
        sliderInner = document.querySelector(bodSelectors.innerSelector) || createSliderElement(slidesWrapper, bodSelectors.innerSelector),
        arrowPrev = document.querySelector(bodSelectors.prevArrowSelector) || createSliderElement(slidesWrapper, bodSelectors.prevArrowSelector),
        arrowNext = document.querySelector(bodSelectors.nextArrowSelector) || createSliderElement(slidesWrapper , bodSelectors.nextArrowSelector);

    sliderInner.style.width = slides.length * 100 + '%';        
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '.5s all';
    slidesWrapper.style.overflow = 'hidden';

    let currentSlide = startSlideIndex - 1 || 0;
    const width = window.getComputedStyle(slidesWrapper).width,
        indicators = [];
    let offset = width.replace(/\px/g, '')*currentSlide;
    let timerTurn;
    let startingSwipeX,
        changedSwipeX;

    if (activateNavigationDots) {
        if (activateNavigationDots === true) {                  // Inits selected options
            createDots(slides, indicators, slider);
        } else {
            warnAboutUnexpectedValue('activateNavigationDots');
        }
    }

    if (activateSlidesMoving) {
        if (activateSlidesMoving === true) {
            document.querySelectorAll('.slider__slide img').forEach( slide => {
                slide.onload = function () {
                    if (slide.offsetHeight > slide.parentNode.offsetHeight * 1.5) {
                        scrollImg(slide, autoScrollSpeed || 2)
                    } else {
                        slide.style.height = '100%';
                        scopeImg(slide, autoScopeSpeed || 2)
                    }
                }
            })
        } else {
            warnAboutUnexpectedValue('activateSlidesMoving');
        }
    }

    if (activateAutoTurning) {
        if (activateAutoTurning === true) {
            const time = turningInterval || 10000;
            timerTurn = setInterval( () => {
                currentSlide = showSlide(slides, ++currentSlide, offset, width , sliderInner, indicators);
                offset = updateOffset(currentSlide, width);
            }, time);
        } else {
            warnAboutUnexpectedValue('actiateAutoTurning')
        }
    }
    
    currentSlide = showSlide(slides, currentSlide, offset, width , sliderInner, indicators)      // Shows start slide
    offset = updateOffset(currentSlide, width); 

    arrowPrev.addEventListener('click', () =>{                                                             // Activates slider controls
        currentSlide = showSlide(slides, --currentSlide, offset, width , sliderInner, indicators)
        offset = updateOffset(currentSlide, width);
        if (activateAutoTurning === true) {
            clearInterval(timerTurn);
        }
    })

    arrowNext.addEventListener('click', () =>{
        currentSlide = showSlide(slides, ++currentSlide, offset, width , sliderInner, indicators);
        offset = updateOffset(currentSlide, width);
        if (activateAutoTurning === true) {
            clearInterval(timerTurn);
        }
    })

    
    indicators.forEach( (dot) => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            currentSlide = showSlide(slides, slideTo - 1, offset, width , sliderInner, indicators);
            offset = updateOffset(currentSlide, width);
            if (activateAutoTurning === true) {
                clearInterval(timerTurn);
            }
        })
    })

    //Activate swipes
    sliderInner.addEventListener('touchstart', (event) => {
        event.preventDefault;
        startingSwipeX = getStartingSwipeX(event);
        if (activateAutoTurning === true) {
            clearInterval(timerTurn);
        }
    })

    sliderInner.addEventListener('touchmove', (event) => {
        event.preventDefault;
        changedSwipeX = getChangedSwipeX(event, startingSwipeX);
        sliderInner.style.transform = `translateX(${-offset + changedSwipeX}px)`;
    })

    sliderInner.addEventListener('touchend', (event) => {
        event.preventDefault;
        const swipeTo = getSwipe(changedSwipeX, width.replace(/\Bpx/g, '')/3, currentSlide)
        currentSlide = showSlide(slides, +swipeTo, offset, width , sliderInner, indicators)
        offset = updateOffset(currentSlide, width);
    })

    slider.style.height = `${document.documentElement.clientHeight - document.querySelector('.header').clientHeight}px`;
    
    function updateOffset(slide, width) {
        return width.replace(/\px/g, '')*slide;
    }

    function createSliderElement(parentElement, elementClass) {
        const newElement = document.createElement('div');
        newElement.classList.add(elementClass.slice(1));
        parentElement.append(newElement);
        return newElement;
    }

    function prepareSelectors(selectors) {
        return {
            sliderSelector: selectors.container,
            slidesSelector: selectors.slide,
            wrapperSelector: selectors.wrapper || '.slider__wrapper',
            innerSelector: selectors.inner || '.slider__inner',
            prevArrowSelector: selectors.arrowPrev || '.slider__prev',
            nextArrowSelector: selectors.arrowNext || '.slider__next'
        }
    }

    function createDots(slides, indicators, slider) {
        const dots = document.querySelectorAll('.slider__dot');

        for (let i = 0; i < dots.length; i++) {

            dots[i].setAttribute('data-slide-to', i + 1);
            dots[i].classList.add('slider__dot');

            if ( i == 0) {
                dots[i].style.opacity = 1;
            }
            
            indicators.push(dots[i]);
        }
    }

    function showSlide(slides, slideIndex, offset, width, sliderInner, indicators) {

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } 

        if (slideIndex == slides.length) {
            slideIndex = 0;
        }

        offset = width.replace(/\Bpx/g, '')*slideIndex;
        sliderInner.style.transform = `translateX(-${offset}px)`;
        if(indicators.length > 0) {
            indicators.forEach( (dot) => dot.style.opacity = '.5');
            indicators[slideIndex].style.opacity = 1;
        }

        return slideIndex;
    }

    function getStartingSwipeX(event) {
        return event.touches[0].clientX;
    }

    function getChangedSwipeX(event, start) {
        return event.touches[0].clientX - start;
    }

    function getSwipe(change, part, current) {
        if(Math.abs(change) < part) {
            return current;
        }

        if(change < -part) {
            return ++current;
        } else {
            if(change > part) {
                return --current;
            }
        }
    }

    function scrollImg(img, speed) {
        let offset = 0;
        const rollup = setInterval( () => {
            img.style.transform = `translateY(${(-offset)}px)`;
            offset = offset + 0.2;

            if (offset > (img.offsetHeight - img.parentNode.offsetHeight)) clearInterval(rollup)
        }, 100/speed);
    }

    function scopeImg(img, speed) {
        img.style.transform = 'scale(1.3)';
        img.style.transition = `all ${90/speed}s`;
    }

    function warnAboutUnexpectedValue(value) {
        console.warn(`Wrong property of ${value}`)
    }
}

export default slider;

