const qrConatiner=document.querySelector(".qr-container");
const qrTextInput = document.querySelector(".qr-text");

const generateQrBtn=document.querySelector(".generate-qr-code-btn");
const errorMessageText=document.querySelector(".error-message-text");

generateQrBtn.addEventListener("click",()=>{
    validateInputField();
});
function validateInputField(){
    if(qrTextInput.value.trim().length>0){
        generateQrCode();
    }
    else{
        qrConatiner.innerHTML="";
        errorMessageText.textContent="Enter a text to generate QR code";
        return;
    }
}
function generateQrCode(){
    qrConatiner.innerHTML="";
    new QRCode(qrConatiner, {
        text: qrTextInput.value,
        width: 400,
        height: 400,
        colorLight: "#fff",
        colorDark: "#000",
    });

    qrTextInput.value="";
    errorMessageText.textContent="";
}