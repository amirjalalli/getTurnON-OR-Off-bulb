 let bublFlag = document.getElementById('bulb')
 let btn = document.getElementById('btn')

 let bulbOfforOn = false

 function getTurnONorOff (){
    //  alert('true')====> great
    if (bulbOfforOn){
        bublFlag.setAttribute('src' , 'pics/bulboff.gif')
        btn.innerHTML = 'Turn On'
        bulbOfforOn = false
    } else {
        bublFlag.setAttribute('src' , 'pics/bulbon.gif')
        btn.innerHTML = 'Turn Off'
        bulbOfforOn = true
    }
    console.log(bulbOfforOn)
 }