
var minusurl = 'faq-accordion-main/assets/images/icon-minus.svg'
var plusurl = 'faq-accordion-main/assets/images/icon-plus.svg'

var click_count = 0
var click_count2 = 0
var click_count3 = 0
var click_count4 = 0

function func1() {
    
    if (click_count == 0) {
        document.getElementById("img1").src = minusurl
        document.getElementById("para1").style.display = "flex"
        click_count++
    }
    else if (click_count == 1) {
        document.getElementById('img1').src = plusurl
        document.getElementById("para1").style.display = "none"
        click_count++
    } else if (click_count%2 == 0 && click_count > 0) {
        document.getElementById('img1').src = minusurl
        document.getElementById("para1").style.display = "flex"
        click_count++
    } else if (click_count%2 != 0 && click_count > 0) {
        document.getElementById('img1').src = plusurl
        document.getElementById("para1").style.display = "none"
        click_count++
    }
}

function func2() {
    
    if (click_count2 == 0) {
        document.getElementById("img2").src = minusurl
        document.getElementById("para2").style.display = "flex"
        click_count2++
    }
    else if (click_count2 == 1) {
        document.getElementById('img2').src = plusurl
        document.getElementById("para2").style.display = "none"
        click_count2++
    } else if (click_count2%2 == 0 && click_count2 > 0) {
        document.getElementById('img2').src = minusurl
        document.getElementById("para2").style.display = "flex"
        click_count2++
    } else if (click_count2%2 != 0 && click_count2 > 0) {
        document.getElementById('img2').src = plusurl
        document.getElementById("para2").style.display = "none"
        click_count2++
    }
}

function func3() {

    if (click_count3 == 0) {
        document.getElementById("img3").src = minusurl
        document.getElementById("para3").style.display = "flex"
        click_count3++
    }
    else if (click_count3 == 1) {
        document.getElementById('img3').src = plusurl
        document.getElementById("para3").style.display = "none"
        click_count3++
    } else if (click_count3%2 == 0 && click_count3 > 0) {
        document.getElementById('img3').src = minusurl
        document.getElementById("para3").style.display = "flex"
        click_count3++
    } else if (click_count3%2 != 0 && click_count3 > 0) {
        document.getElementById('img3').src = plusurl
        document.getElementById("para3").style.display = "none"
        click_count3++
    }
}

function func4() {

    if (click_count4 == 0) {
        document.getElementById("img4").src = minusurl
        document.getElementById("para4").style.display = "flex"
        click_count4++
    }
    else if (click_count4 == 1) {
        document.getElementById('img4').src = plusurl
        document.getElementById("para4").style.display = "none"
        click_count4++
    } else if (click_count4%2 == 0 && click_count4 > 0) {
        document.getElementById('img4').src = minusurl
        document.getElementById("para4").style.display = "flex"
        click_count4++
    } else if (click_count4%2 != 0 && click_count4 > 0) {
        document.getElementById('img4').src = plusurl
        document.getElementById("para4").style.display = "none"
        click_count4++
    }
}

