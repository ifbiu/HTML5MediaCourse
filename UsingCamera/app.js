new Vue({
    el:"#app",
    mounted(){
        this.initApp();
    },
    methods:{
        async initApp(){
            this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });
            this._context2d = this.$refs.canvas.getContext("2d");
        },
        btnTakePhotoClicked(){
            this._context2d.drawImage(this.$refs.video,0,0,400,300);
        }
    }
})