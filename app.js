const jake = document.getElementsByClassName("exSelect")
const boxA = document.getElementsByClassName("box")
var dateClick = 0
const FooterIcon = document.getElementsByClassName("imgIcon")
const Windows = document.getElementsByClassName("HiddenIconWindow")
for(let x=0; x < FooterIcon.length;x++){
    console.log(x, FooterIcon[x])
}

for(let x =0; x< FooterIcon.length; x++){
    FooterIcon[x].addEventListener('click', event =>{
        if(event.target.classList.contains('About') && !(event.target.classList.contains('open')) && FooterIcon[2].classList.contains('open')){
            Windows[1].classList.add('windowClose')
            Windows[1].classList.remove('windowOpen')
            FooterIcon[2].classList.remove('open')
            setTimeout(RemoveWindow,500, 2) 
            setTimeout(AddWindow, 500, x)
               
        } else if(event.target.classList.contains('About') && !(event.target.classList.contains('open'))){
            AddWindow(x)
               
        } else if(event.target.classList.contains('About') && event.target.classList.contains('open')){
            Windows[x-1].classList.add('windowClose')
            Windows[x-1].classList.remove('windowOpen')
            FooterIcon[x].classList.remove('open')
            setTimeout(RemoveWindow,500, x) 

        } else if(event.target.classList.contains('contact') && !(event.target.classList.contains('open')) && FooterIcon[1].classList.contains('open')){
            Windows[0].classList.add('windowClose')
            Windows[0].classList.remove('windowOpen')
            FooterIcon[1].classList.remove('open')
            setTimeout(RemoveWindow,500, 1) 
            setTimeout(AddWindow, 500, x)
               
        } else if (event.target.classList.contains('contact') && !(event.target.classList.contains('open'))){
            AddWindow(x)   

        }else if(event.target.classList.contains('contact') && event.target.classList.contains('open')){
            Windows[x-1].classList.add('windowClose')
            Windows[x-1].classList.remove('windowOpen')
            FooterIcon[x].classList.remove('open')
            setTimeout(RemoveWindow,500, x) 
        } else {
            return
        }
    })
}


for(let x=0; x < jake.length;x++){
    console.log(x, jake[x])
}
for(let x=0; x < jake.length;x++){
    jake[x].addEventListener('click',event =>{
       console.log(event)
         if( event.target.classList.contains('ttwothree') && event.target.classList.contains('active')){
           return;
        }else if (event.target.classList.contains('ttwothree') && !(event.target.classList.contains('active'))){
            for (let x = 0; x < boxA.length; x++){
                boxA[x].classList.remove('active')
            }
            for (let x = 0; x < jake.length; x++){
                jake[x].classList.remove('dactive')
            }
            boxA[0].classList.add("active")
            boxA[1].classList.add("active")
            jake[0].classList.add("dactive")

        }else if(event.target.classList.contains('ztwotwo') && event.target.classList.contains('active')){
            return
        }else if(event.target.classList.contains('ztwotwo') && !(event.target.classList.contains('active'))){
            for (let x = 0; x < boxA.length; x++){
                boxA[x].classList.remove('active')
            }
            for (let x = 0; x < jake.length; x++){
                jake[x].classList.remove('dactive')
            }
            boxA[2].classList.add("active")
            boxA[3].classList.add("active")
            jake[1].classList.add("dactive")
        } else if(event.target.classList.contains('nonezero') && event.target.classList.contains('active')){
            return
        }else if(event.target.classList.contains('nonezero') && !(event.target.classList.contains('active'))){
            for (let x = 0; x < boxA.length; x++){
                boxA[x].classList.remove('active')
            }
            for (let x = 0; x < jake.length; x++){
                jake[x].classList.remove('dactive')
            }
            boxA[4].classList.add("active")
            boxA[5].classList.add("active")
            jake[2].classList.add("dactive")
        } 
    })
}


console.log(jake)


function addCheck(){
if (boxA[0].classList.contains('active') ){
    return
    

} else {
    for (let x = 0; x < boxA.length; x++){
        boxA[x].classList.remove('active')
    }
    boxA[2].classList.add('active')
    boxA[3].classList.add('active')


}
}
function RemoveWindow (x){
    Windows[x-1].classList.remove('windowClose')
}

function AddWindow(x){
    Windows[x-1].classList.add('windowOpen')
    FooterIcon[x].classList.add('open')
}
function RemoveAbout(){
            Windows[0].classList.add('windowClose')
            Windows[0].classList.remove('windowOpen')
            FooterIcon[1].classList.remove('open')
            setTimeout(RemoveWindow,500, 1) 
}
function RemoveContact(){
    Windows[1].classList.add('windowClose')
    Windows[1].classList.remove('windowOpen')
    FooterIcon[2].classList.remove('open')
    setTimeout(RemoveWindow,500, 2) 
}