const registerBox = document.getElementById("register-box")
const doneButton = document.getElementById("register-button")

const SPECIAL_WORD = 'robust'


localStorage.setItem("points", '0');

registerBox.addEventListener("input", e => {
    if (e.target.value === SPECIAL_WORD) {
        window.location = '/level-1/index.html'
    }
})

const thumbsUp = document.getElementById("thumbs-up")

let redirectTimeout, doneTimeout;

thumbsUp.addEventListener('mouseover', e => {
    redirectTimeout = setTimeout(() => {
        setTimeout(() => {
            window.location = '/secret-level/index.html'
        }, 5000)
        alert("you died")
        window.location = "https://youtube.com/results?search_query=why+did+I+die+to+a+happy+man"
    }, 500)
})

thumbsUp.addEventListener('mouseleave', e => {
    clearTimeout(redirectTimeout)
})

doneButton.addEventListener('click', e => {
    alert("that's not how you register ☹")
    window.location = "https://www.youtube.com/watch?v=A67ZkAd1wmI"
})

doneButton.addEventListener('mouseover', e => {
    doneTimeout = setTimeout(() => {
            alert("what's taking you so long to click???")
            alert("click faster!! you can do it!!!")
            window.location = '/failure-level/index.html'
    }, 500)
})

doneButton.addEventListener('mouseleave', e => {
    clearTimeout(doneTimeout)
})