const options = document.getElementsByClassName("optionButtons")
const mainBox = document.getElementsByClassName("mainBox")
const windows = document.getElementsByClassName("window")
const mainXP = document.querySelector(".MainXp")
const box = document.querySelector(".grid")
const more = document.getElementsByClassName("mElements")
var dateClick = 0
const FooterIcon = document.getElementsByClassName("imgIcon")
console.log(FooterIcon)
const Windows = document.getElementsByClassName("HiddenIconWindow")
//handles the option switching
for(let x =0; x< options.length; x++){
    options[x].addEventListener('click', event =>{
        if (event.target.innerHTML == 'Experirence'){
            let num = x;
            for(let y = 0; y< mainBox.length; y++){
                if(!(y==x) && !(mainBox[y].classList.contains('hidden'))){
                    mainBox[y].classList.add('hidden')
                    if(y== 1){
                    mainXP.classList.add('expand')
                    box.classList.add('slideDown')  
                    setTimeout(removeMainXpAt, 3000)
                    }
                }else if(y==x && mainBox[y].classList.contains('hidden')){
                    mainXP.classList.add('shrink')
                    box.classList.add('slideUP')
                    box.classList.remove('hidden')
                    mainXP.classList.add('xp')
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
                    if( y== 1 && mainXP.classList.contains('shrink')){
                        console.log('wait close exp')
                        setTimeout(outAndDown,1800)  
                    }else if (y== 1){
                        outAndDown()
                    }
                    mainBox[y].classList.add('hidden')
                    
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
                    if( y== 1 && mainXP.classList.contains('shrink') && !(mainBox[0].classList.contains('hidden'))){
                        setTimeout(outAndDown,1800)  
                    } else if( y== 1 && mainXP.classList.contains('shrink')){
                        setTimeout(outAndDown,1800)
                    }else if (y== 1){
                        outAndDown()
                    }
                    mainBox[y].classList.add('hidden')
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

//handels the footter windows 
for(let x =0; x< FooterIcon.length; x++){
    FooterIcon[x].addEventListener('click', event =>{
       let z
        if(event.target.classList[1]== 'home'){
            z= 0
       }else if(event.target.classList[1]== 'about'){
            z=1
       }else if(event.target.classList[1]== 'contact'){
            z=2
       }else{
            z=3
       }
       
       for( let y =0; y< FooterIcon.length; y++){
          if( !(y == z) && FooterIcon[y].classList.contains('open') && z < 3){
                windows[y].classList.add('windowClose')
                windows[y].classList.remove('windowOpen')
                FooterIcon[y].classList.remove('open')
                setTimeout(RemoveWindow,500, y) 
                console.log(x)
            }else{
            }
        }
        if (x==z && z < 3 && !(FooterIcon[z].classList.contains('open'))) {
            AddWindow(z)
            return 
            }
            if(x==z && FooterIcon[z].classList.contains('open') && z < 3) {
            windows[z].classList.add('windowClose')
            windows[z].classList.remove('windowOpen')
            FooterIcon[z].classList.remove('open')
            setTimeout(RemoveWindow,500, z) 
            console.log("open closed window")
        }
            
       
    })
}
//more+ main displayed object switching
for(let x = 0; x < more.length;x++){
    more[x].addEventListener('click',event =>{
        if( event.target.classList.contains('notActive')){
            for(let y=0;y < more.length;y++){
                if(more[y].classList.contains('mElementMain')){
                more[y].classList.remove('mElementMain')
                more[y].classList.add('notActive')
                }
            }
            event.target.classList.add('mElementMain')
            event.target.classList.remove('notActive')
        }
    })
}


function RemoveWindow (x){
    Windows[x].classList.remove('windowClose')
}

function AddWindow(x){
    Windows[x].classList.add('windowOpen')
    FooterIcon[x].classList.add('open')
}
function RemoveAbout(){
            Windows[1].classList.add('windowClose')
            Windows[1].classList.remove('windowOpen')
            FooterIcon[1].classList.remove('open')
            setTimeout(RemoveWindow,500, 1) 
}
function RemoveHome(){
    Windows[0].classList.add('windowClose')
    Windows[0].classList.remove('windowOpen')
    FooterIcon[0].classList.remove('open')
    setTimeout(RemoveWindow,500, 0) 
}
function RemoveContact(){
    Windows[2].classList.add('windowClose')
    Windows[2].classList.remove('windowOpen')
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
