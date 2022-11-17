const copyBtn = $("#copy-btn")
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

    let range = document.createRange();
    range.selectNode(document.getElementById("promo-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    notification.addClass('visible');
    setTimeout( () => notification.removeClass('visible'), notificationCloseDalay)

    copyDivToClipboard()
});


const animate = (element, animation, delay) => {
    setTimeout( () => element.addClass(animation), delay)
    setTimeout( () => element.removeClass(animation), removeClassDelay)
}


// Copy promo code
function copyDivToClipboard() {

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

