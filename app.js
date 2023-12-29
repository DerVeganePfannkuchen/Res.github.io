const icons = document.getElementsByClassName("icon")
const main =document.querySelector('.mainIcons')
const welcome =document.querySelector('.welcomeBox')
const welcomeClose =document.querySelector('.closeWelcome')
const footer =document.querySelector('.footerNav')
const X =document.querySelector('.X')
const footerIcons =document.getElementsByClassName("footerIcon")
const iconLables =document.getElementsByClassName("iconLables")
setTimeout(welcomeOut,10000)
console.log(main.querySelectorAll('.icon'))
main.addEventListener('click', event =>{
    var images = [].slice.call(main.querySelectorAll('.icon'),0); // get all images inside frame1, and convert to array
    let index =images.indexOf(event.target)
})

function welcomeOut(){
    if(!welcome.classList.contains('closing')){
        welcome.classList.add('closing');
        setTimeout(hiddWelcome =>{
        welcome.classList.add('hidden');
    },900)
    welcome.classList.add('welcomeDown');
    welcomeClose.classList.add('welcomeDown');
    X.classList.add('welcomeDown');
    home();
    setTimeout(hiddWelcome =>{
        welcome.classList.remove('closing');
    },1600)
}else{
    return;
}
    
}
function home(){
    main.classList.remove('hidden');
    footer.classList.remove('hidden');
    footer.classList.add('fadeInIcons');
   for(let x=0; x< icons.length;x++){
        icons[x].classList.add('fadeInIcons')
    };
    for(let x=0; x< footerIcons.length;x++){
        footerIcons[x].classList.add('fadeFooterIcons')
    };
    for(let x=0; x< iconLables.length;x++){
        iconLables[x].classList.add('fadeInWords')
   };
   setTimeout(done =>{
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
   },1500)
}