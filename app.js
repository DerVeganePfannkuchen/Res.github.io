const jake = document.getElementsByClassName("exSelect")
const boxA = document.getElementsByClassName("box")
const options = document.getElementsByClassName("optionButtons")
const mainBox = document.getElementsByClassName("mainBox")
const mainXP = document.querySelector(".MainXp")
const box = document.querySelector(".grid")

var dateClick = 0
const FooterIcon = document.getElementsByClassName("imgIcon")
const Windows = document.getElementsByClassName("HiddenIconWindow")
for(let x =0; x< options.length; x++){
    options[x].addEventListener('click', event =>{
        if (event.target.innerHTML == 'Experirence'){
            let num = x;
            for(let y = 0; y< mainBox.length; y++){
                if(!(y==x) && !(mainBox[y].classList.contains('hidden'))){
                    mainBox[y].classList.add('hidden')
                    if(y== 0){
                    mainXP.classList.add('expand')
                    box.classList.add('slideDown')  
                    setTimeout(removeMainXpAt, 3000)
                    }
                }else if(y==x && mainBox[y].classList.contains('hidden')){
                    mainXP.classList.add('shrink')
                    box.classList.add('slideUP')
                    mainBox[y].classList.remove('hidden')
                    box.classList.remove('hidden')
                    setTimeout(removeMainXpAt, 1800)

                }else {
                    console.log('not you fucking up')
                }
            }
            
        }else if(event.target.innerHTML == 'Porfolio') {
            let num = x;
            for(let y = 0; y< mainBox.length; y++){
                if(!(y==x) && !(mainBox[y].classList.contains('hidden'))){
                    if( y== 0 && mainXP.classList.contains('shrink')){
                        setTimeout(outAndDown,1800)  
                    }else if (y== 0){
                        outAndDown()
                    }
                    mainBox[y].classList.add('hidden')
                    setTimeout(box.classList.add,500,'hidden' )
                }else if(y==x){
                    mainBox[y].classList.remove('hidden')
                }else {
                    console.log('not you fucking up')
                }
            }
        }else if (event.target.innerHTML == 'more+'){
            let num = x;
            for(let y = 0; y< mainBox.length; y++){
                if(!(y==x) && !(mainBox[y].classList.contains('hidden'))){
                    if( y== 0 && mainXP.classList.contains('shrink') && !(mainBox[1].claslist.contains('hidden'))){
                        setTimeout(outAndDown,1800)  
                    } else if( y== 0 && mainXP.classList.contains('shrink')){
                        setTimeout(outAndDown,1800)
                    }else if (y== 0){
                        outAndDown()
                    }
                    mainBox[y].classList.add('hidden')
                    setTimeout(box.classList.add,500,'hidden' )
                }else if(y==x){
                    mainBox[y].classList.remove('hidden')
                }else {
                    console.log('not you fucking up')
                }
            }
                
            
        }else {
            console.log("not you fucking up")
            console.log(event)

        }
    })
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

function removeMainXpAt() {
    mainXP.classList.remove('shrink')
    box.classList.remove('slideUP')
    mainXP.classList.remove('expand')
    box.classList.remove('slideDown')
}
function outAndDown(){
    mainXP.classList.add('expand')
    box.classList.add('slideDown')
}