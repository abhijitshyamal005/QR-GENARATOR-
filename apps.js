function genarateQRCode(){
    var url= document.getElementById("urlInput").value;
    var qrcodediv =document.getElementById("qrcode");
    qrcodediv.innerHTML="";
    var qrcode = new QRCode(qrcodediv,{
        text:url,
        width :128,
        height :128,
    });
    }
