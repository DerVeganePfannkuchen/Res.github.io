const jake = document.getElementsByClassName("exSelect")
const boxA = document.getElementsByClassName("box")
console.log(boxA)
var dateClick = 0



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


