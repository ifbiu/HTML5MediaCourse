// (async function () {
//     let devices = await navigator.mediaDevices.enumerateDevices();
//     let stream = await navigator.mediaDevices.getUserMedia({
//         video:false,
//         audio:true
//         });
//     document.querySelector("audio").srcObject = stream;
// })();

new Vue({
    el:"#app",
    data:{
        audioInputDevices:[],
        selectAudioDeviceIndex:0
    },
    mounted(){
        this.initVueApp();
    },
    watch:{
        selectAudioDeviceIndex(newVal,oldValue){
            this.showSelectedDevice();
        }
    },
    methods:{
        async initVueApp(){
            let devices = await navigator.mediaDevices.enumerateDevices();
            this.audioInputDevices = devices.filter(value => value.kind === "audioinput");
            console.log(this.audioInputDevices)
            this.showSelectedDevice();
        },
        async showSelectedDevice(){
            let deviceInfo = this.audioInputDevices[this.selectAudioDeviceIndex];
            let stream = await navigator.mediaDevices.getUserMedia({
                video:false,
                audio:deviceInfo
            });
            // this.$refs.audio.srcObject = stream;
            document.querySelector("audio").srcObject = stream;
        }
    }
})