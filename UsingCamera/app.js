(async function(){
    document.querySelector("video").srcObject = await navigator.mediaDevices.getUserMedia({
        audio:false,
        video:true
    });
})();