const bossimg = document.getElementById("boss")
const fossilHitbox = document.getElementById("fossil-area")

let damageTimeout

class Entity {
    constructor(health, hpDisplayElement) {
        this._health = health
        this.hpElem = hpDisplayElement
        //trigger the setter to make text appear on screen
        this.health = this.health
    }

    set health(value) {
        this._health = value
        this.hpElem.innerText = this.health
        this.hpElem.setAttribute("data-health", String(this.health))
    }

    get health() {
        return this._health
    }
}

const player = new Entity(100, document.getElementById("player-hp"))
const boss = new Entity(100, document.getElementById("boss-hp"))

bossimg.addEventListener('mouseover', e => {
    damageTimeout = setInterval(() => {
        player.health -= 1
        if(player.health <= 0){
            if (window.innerWidth < Math.random() * 1000)            
            window.location = "/"
        }
    }, 100)
})

bossimg.addEventListener('mouseleave', e => {
    clearInterval(damageTimeout)
})

fossilHitbox.addEventListener("mouseover", e => {
    let event = document.createEvent("MouseEvent")
    event.initEvent("mouseover", false, false)
    bossimg.dispatchEvent(event)
})
fossilHitbox.addEventListener("mouseleave", e => {
    let event = document.createEvent("MouseEvent")
    event.initEvent("mouseleave", false, false)
    bossimg.dispatchEvent(event)
})

fossilHitbox.addEventListener('click', e => {
    if(Math.random() > .95){
        prompt("Would you like to continue?")
    }
    //3.2 because it's slightly easier than 3
    boss.health -= Math.round(Math.random() * 3.2)
    if(boss.health <= 0){
        alert("YOU WIN")
        window.location = "/level-3/index.html"
    }
})