const copyBtn = $("#copy-btn")
const promoCode = $("#promo-code")
const notification = $("#notification")

const depositBtn = $("#deposit-btn")

const firstIcon = $("#first-icon")
const secondIcon = $("#second-icon")
const thirdIcon = $("#third-icon")

const headingPrimary = $("#heading-primary")
const headingSecondary = $("#heading-secondary")


const firstDelay = 1000
const removeClassDelay = 2000
const intervalDelay = 5000

const notificationCloseDalay = 2000

// Show notification message when copy button is clicked
copyBtn.click(function () {
    notification.addClass('visible');
    setTimeout( () => notification.removeClass('visible'), notificationCloseDalay)

    console.log(promoCode.text())
});


const animate = (element, animation, delay) => {
    setTimeout( () => element.addClass(animation), delay)
    setTimeout( () => element.removeClass(animation), removeClassDelay)
}


// Animate Win steps Icons
const animateIcons = () => {
    firstIcon.addClass('run-scaleUp-animation')
    setTimeout(() => secondIcon.addClass('run-scaleUp-animation'), 200)
    setTimeout(() => thirdIcon.addClass('run-scaleUp-animation'), 400)

    setTimeout(() => {
        firstIcon.removeClass('run-scaleUp-animation')
        secondIcon.removeClass('run-scaleUp-animation')
        thirdIcon.removeClass('run-scaleUp-animation')
    }, removeClassDelay)
}


setTimeout(() => {
    animate(headingPrimary, 'run-bounce-animation', 0 )
    animate(headingSecondary, 'run-bounce-animation', 300 )
    animate(depositBtn, 'run-bounce-twice-animation', 500 )
}, firstDelay)


window.setInterval(() => {
    animate(headingPrimary, 'run-glow-animation', 0 )
    animate(depositBtn, 'run-bounce-twice-animation', 500 )
    animateIcons();
}, intervalDelay)

