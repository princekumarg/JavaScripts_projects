const hexBtn=document.querySelector('.hex-btn');
const hexColorValue=document.querySelector('.hex-color-value');
const hexColorContainer=document.querySelector('.hex-color-container');
const hexCopyBtn=document.querySelector('.hex-copy-color');
//Create Random Color
hexBtn.addEventListener('click',()=>{
    let characters='0123456789abcdef';
    let hexColorOutput="";
    for(let i=0,charlen=characters.length;i<6;++i){
        hexColorOutput+=characters.charAt(Math.floor(Math.random()*charlen))
    }
    hexColorValue.textContent=`#${hexColorOutput}`
    hexColorContainer.style.backgroundColor=`#${hexColorOutput}`
    hexBtn.style.color=`#${hexColorOutput}`
})

//RGB Color Generator
const rgbBtn=document.querySelector('.rgb-btn');
const getRedInput=document.querySelector('#red');
const getGreenInput=document.querySelector('#green');
const getBlueInput=document.querySelector('#blue');
const rgbColorValueContainer=document.querySelector('.rgb-color-container');
const rgbCopyBtn=document.querySelector('.rgb-copy-color');
const rgbColorValue=document.querySelector('.rgb-color-value');
rgbBtn.addEventListener('click',()=>{
    let extractRedValue=getRedInput.value;
    let extractGreenValue=getGreenInput.value;
    let extractBlueValue=getBlueInput.value;
    rgbColorValue.textContent=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbColorValueContainer.style.backgroundColor=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbBtn.style.color=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
})

function HexcopyToClipboard(){
    navigator.clipboard.writeText(hexColorValue.textContent)
    alert('Copied Hex !')
}
hexCopyBtn.addEventListener('click',HexcopyToClipboard)
function RGBcopyToClipboard(){
    navigator.clipboard.writeText(rgbColorValue.textContent)
    alert('Copied RGB !')
}
rgbCopyBtn.addEventListener('click',RGBcopyToClipboard)