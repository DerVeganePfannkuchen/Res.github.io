const icons = document.getElementsByClassName("icon")
const content = document.getElementsByClassName("content")
const main =document.querySelector('.mainIcons')
const welcome =document.querySelector('.welcomeBox')
const welcomeClose =document.querySelector('.closeWelcome')
const footer =document.querySelector('.footerNav')
const X =document.querySelector('.X')
const footerIcons =document.getElementsByClassName("footerIcon")
const iconLables =document.getElementsByClassName("iconLables")
const closeContentX = document.getElementsByClassName("closeContent")
const title = document.getElementsByClassName("title")
const footerWindows =document.getElementsByClassName("footerWindows")
const closeFooter =document.getElementsByClassName("closeFooterWindow")
const XF =document.getElementsByClassName("XF")
const WindowTimeout = setTimeout(welcomeOut,10000)
console.log(closeFooter[0].classList + "hey bitch")

console.log(WindowTimeout)
console.log(main.querySelectorAll('.icon'))
main.addEventListener('click', event =>{
    var images = [].slice.call(main.querySelectorAll('.icon'),0); // get all images inside frame1, and convert to array
    let index =images.indexOf(event.target)
    content[index].classList.add("show")
    content[index].classList.add("fadeInIcons")
    closeContentX[index].classList.add("fadeInIcons")
    iconsOut()
})

footer.addEventListener('click', event =>{
    var images = [].slice.call(footer.querySelectorAll('.footerIcon'),0); // get all images inside frame1, and convert to array
    var images2 = [].slice.call(footer.querySelectorAll('.title'),0); // get all images inside frame1, and convert to array
    let index =images.indexOf(event.target)
    let index2 =images2.indexOf(event.target)
    console.log("first " +index)
    console.log("second " +index2)
    if(index == 1 && !(footerWindows[1].classList.contains('hidden')) ){
        footerWindows[0].classList.remove('hidden')
        closeFooterWindow(1)
    } else if(index2 == 1 && !(footerWindows[1].classList.contains('hidden')) ){
        footerWindows[0].classList.remove('hidden')
        closeFooterWindow(1)
    }else if(index == 2 && !(footerWindows[0].classList.contains('hidden'))){
        footerWindows[1].classList.remove('hidden')
        closeFooterWindow(0)
    } else if(index2 == 2 && !(footerWindows[0].classList.contains('hidden'))){
        footerWindows[1].classList.remove('hidden')
        closeFooterWindow(0)
    } else if(index == 2 && !(footerWindows[1].classList.contains('hidden'))){
        closeFooterWindow(1)
    }else if(index2 == 2 && !(footerWindows[1].classList.contains('hidden'))){
        closeFooterWindow(1)
    } else if(index == 1 && !(footerWindows[0].classList.contains('hidden'))){
        closeFooterWindow(0)
    }else if(index2 == 1 && !(footerWindows[0].classList.contains('hidden'))){
        closeFooterWindow(0)
    }else if(index == 1){
        footerWindows[0].classList.remove('hidden')
    }else if(index2 == 1){
        footerWindows[0].classList.remove('hidden')
    }else if(index == 2){
        footerWindows[1].classList.remove('hidden')
        console.log('qwee')
    }else if(index2 == 2){
        footerWindows[1].classList.remove('hidden')
        console.log('qwee')
    }
})

function welcomeOut(){
    clearTimeout(WindowTimeout)
        setTimeout(hiddWelcome =>{
        welcome.classList.add('hidden');
    },900)
    welcome.classList.add('welcomeDown');
    welcomeClose.classList.add('welcomeDown');
    X.classList.add('welcomeDown');
    home();


    
}
function home(){
    main.classList.remove('hidden');
    footer.classList.remove('hidden');
    footer.classList.add('fadeFooterIcons');
   for(let x=0; x< icons.length;x++){
        icons[x].classList.add('fadeInIcons')
    };
    for(let x=0; x< footerIcons.length;x++){
        footerIcons[x].classList.add('fadeFooterIcons')
    };
    for(let x=0; x< iconLables.length;x++){
        iconLables[x].classList.add('fadeInWords')
   };
   let delay =setTimeout(done =>{
    footer.classList.remove('fadeInIcons');
    for(let x=0; x< icons.length;x++){
         icons[x].classList.remove('fadeInIcons')
     };
     for(let x=0; x< footerIcons.length;x++){
         footerIcons[x].classList.remove('fadeFooterIcons')
     };
     for(let x=0; x< iconLables.length;x++){
         iconLables[x].classList.remove('fadeInWords')
    };
    console.log("im out")
   },799)
   
}
function iconsOut(){

    
   for(let x=0; x< icons.length;x++){
        icons[x].classList.add('fadeOutIcons')
    };
    for(let x=0; x< iconLables.length;x++){
        iconLables[x].classList.add('fadeOutWords')
   };
   
    
}

function closeContent(index){
    iconsOut()
    if(!(main.classList.contains('hidden'))){
        main.classList.add('hidden');
    }
    setTimeout(x =>{
        content[index].classList.remove("show")
        content[index].classList.remove("fadeOutIcons")
        closeContentX[index].classList.remove("fadeOutIcons")
    },799)
    content[index].classList.remove("fadeInIcons")
    closeContentX[index].classList.remove("fadeInIcons")
    iconsHome()
    content[index].classList.add("fadeOutIcons")
    closeContentX[index].classList.add("fadeOutIcons")
   
}
function iconsHome(){
    
    main.classList.remove('hidden');
   for(let x=0; x< icons.length;x++){
        icons[x].classList.remove('fadeOutIcons')
        icons[x].classList.add('fadeInIcons')
    };
    for(let x=0; x< iconLables.length;x++){
        iconLables[x].classList.remove('fadeOutWords') 
        iconLables[x].classList.add('fadeInWords')
   };
   setTimeout(done =>{
    footer.classList.remove('fadeInIcons');
    for(let x=0; x< icons.length;x++){
         icons[x].classList.remove('fadeInIcons')
     };
     for(let x=0; x< iconLables.length;x++){
         iconLables[x].classList.remove('fadeInWords')
    };
    console.log("im out")
   },799)
}
function closeFooterWindow(index){

    footerWindows[index].classList.add('welcomeDown')
    closeFooter[index].classList.add('welcomeDown')
    XF[index].classList.add('welcomeDown')
    setTimeout(x =>{
        footerWindows[index].classList.add('hidden')
        footerWindows[index].classList.remove('welcomeDown')
        XF[index].classList.remove('welcomeDown')
        closeFooter[index].classList.remove('welcomeDown')

    }, 400)
    
}