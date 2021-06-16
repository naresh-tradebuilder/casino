/* [ROULETTE ACTIONS] */
var roul = {
    start : function () {
        angle = prize.rnd(0,prize.number-1)*(360/prize.number);
        console.log("angle:"+angle);
        this.rotate(angle);
    },
    /* [ROTATION] */
    rotate : function (angle){
        v = parseInt(angle);
        $("#turntable").rotate({
            angle: 0,
            animateTo: v + 360*1,
            duration: 7000,
            callback: function(){  
                pr = prize.get(angle);
                console.log("prize "+pr);
                $("#prize").text("prize "+pr);
            }
        });     
    },
    stop_rotation : function (){
        $("#turntable").stopRotate();
        angle = this.get_rotation_angle()
        console.log("angle:"+angle);
        $("#prize").text("angle "+angle);
    },
    get_rotation_angle : function (){
        return $("#turntable").getRotateAngle();
    },   
};
var prize = {
    number : 37,
    mapping: {0:0, 1:26, 2:3, 3:35, 4:12, 5:28, 6:7, 7:29, 8:18, 9:22, 
            10:9, 11:31, 12:14, 13:20, 14:1, 15:33, 16:16, 17:24, 18:5, 19:10, 
            20:23, 21:8, 22:30, 23:11, 24:36, 25:13, 26:27, 27:6, 28:34, 29:17, 
            30:25, 31:2, 32:21, 33:4, 34:19, 35:15, 36:32},
    get : function (angle){
        index = parseInt(angle/(360/this.number));
        return this.mapping[index];
    },
    /* [RANDOM] */
    rnd : function (n, m){
        /* rnd(): get ramdom from n to m */
        return Math.floor(Math.random()*(m-n+1)+n);
    },
};
