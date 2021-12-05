let heart = document.querySelector("#heart");
let overlay = document.querySelector(".overlay");
let textUnderHeart = document.querySelector(".text-under-heart");
let app = document.querySelector(".main");
let navItems = document.querySelectorAll(".main-nav-item");
let clockBlock = document.querySelectorAll(".main-clock__item");
let clockContainer = document.querySelector(".main-clock");
let webQuote = document.querySelector(".main-quote");
let extraQuote = document.querySelector(".extra-quote");
let tabs = document.querySelectorAll(".nav-item-tab");
let navItem = document.querySelectorAll(".main-nav-item");
let home = document.querySelector(".nav-item-home");
let ourDayNav = document.querySelector(".nav-item-our-day");
let ourStoryNav = document.querySelector(".nav-item-our-story");
let galleryNav = document.querySelector(".nav-item-gallery");
let gamingNav = document.querySelector(".nav-item-gaming");
let homeTab = document.querySelector("main");
let ourDayTab = document.querySelector(".our-day");
let ourStoryTab = document.querySelector(".our-story");
let galleryTab = document.querySelector(".gallery");
let gamingTab = document.querySelector(".gaming");

let dateBlock = document.querySelector(".nav-date>p");
let bigDateBlock = document.querySelector(".main-date>h1");

let settingBtn = document.querySelector(".setting-btn");
let settingBar = document.querySelector(".setting-bar");
let settingUnlockPremium = document.querySelector(".unlock-primeum");
let darkModeBtn = document.querySelector(".setting-bar-darkmode>label>input");

let message = document.querySelector(".message");
let messageClose = document.querySelector(".message>button");

darkModeBtn.addEventListener("click", function() {
    if (darkModeBtn.checked) {
        document.body.classList.add("darkmode");
    } else {
        document.body.classList.remove("darkmode");
    }
})

settingUnlockPremium.addEventListener("click", function() {
    message.classList.add("message-display");
})
messageClose.addEventListener("click", function() {
    message.classList.remove("message-display");
    settingBar.classList.remove("setting-bar-display");
    settingBtn.classList.remove("fa-times");
})

settingBtn.addEventListener("click", function() {
    if (!settingBtn.classList.contains("fa-times")) {
        settingBar.classList.add("setting-bar-display");
        settingBtn.classList.add("fa-times");
    } else {
        settingBar.classList.remove("setting-bar-display");
        settingBtn.classList.remove("fa-times");
        message.classList.remove("message-display");
    }

})


setInterval(function() {
    let date = new Date();
    let day = date.getDay();
    let dateToday = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    switch (month) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }
    dateBlock.innerHTML = `${day}, ${dateToday} <span style="color:#ff8277; font-family: 'Fuzzy Bubbles', cursive;">${month}</span> ${year}`;
    bigDateBlock.innerHTML = `${day}, ${dateToday} <span style="color:#ff8277; font-family: 'Fuzzy Bubbles', cursive;">${month}</span> ${year}`;
}, 1000)


ourDayNav.addEventListener("click", function() {
    handleTabs(ourDayTab, ourDayNav);
})
home.addEventListener("click", function() {
    handleTabs(homeTab, home);
})
ourStoryNav.addEventListener("click", function() {
    handleTabs(ourStoryTab, ourStoryNav);
})
gamingNav.addEventListener("click", function() {
    handleTabs(gamingTab, gamingNav);
})
galleryNav.addEventListener("click", function() {
    handleTabs(galleryTab, galleryNav);
})

clockContainer.addEventListener("animationend", function() {
    webQuote.style.display = "flex";
    webQuote.addEventListener("animationend", function() {
        extraQuote.style.display = "flex";
    })
})

setInterval(function() {
    for (i of clockBlock) {
        i.classList.toggle("clock-border");
    }
}, 1000)

heart.addEventListener("click", function() {
    heart.remove();
    overlay.remove();
    textUnderHeart.remove();
    app.classList.add("main-display");
})


function handleTabs(tab, navigator) {
    for (i of navItem) {
        i.classList.remove("item-active");
    }
    navigator.classList.add("item-active");
    for (i of tabs) {
        i.classList.remove("tab-active");
    }
    tab.classList.add("tab-active")
}