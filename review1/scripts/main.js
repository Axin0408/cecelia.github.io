let myImg = document.querySelector('img')
let myHeading = document.querySelector('h1')

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src')
    if (mySrc === 'images/dear.jpg') {
        myImg.setAttribute('src', 'images/hp.jpg')

    } else {
        myImg.setAttribute('src', 'images/dear.jpg')
    }


}
let btn = document.querySelector('button')

function setUserName() {
    let myName = prompt('请输入你的名字。')
    if (!myName || myName === 'null') {
        setUserName()
    }
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Welcome to your own world,' + myName

}
if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textCont = 'Welcome to your own world,' + storedName
}
btn.onclick =
    function() {
        setUserName()

    }