//接收傳值
let machine1 = {
    name : "machine1",
    user : "",
    lock : [],
    basket : ""
};

let machine2 = {
    name : "machine2",
    user : "",
    lock : [],
    basket : ""
};

io().on('time1',function(time){
    timer1 = time;
})

io().on('user_leave',function(message){
    machine1.lock.shift();
})

let index = 0 ; //for new machine name -> ex: Machine+${index}
io().on('new_user', function (message) {
    console.log(message);
    switch(message.machine){
        case "machine1" :
            machine1.lock.push(message.username);
            console.log(machine1.lock)
            break;
        case "machine2":
            machine2.lock.push(message.username);
            console.log(machine2.lock)
            break;
        default:
            console.log("something error");
            break;
    }
});

//洗衣機(1)變數
let angle = 0;
let jump = 0;
let jump_status = 0;
let laundryOutside;
let laundryInside;

//洗衣機(2)變數
//無

//計時器(1)變數
let timer1 = 0; //畫面預設0，偵測到使用者後才開始從28倒數

//計時器(2)變數
let timer2 = 0; 

//使用者
let user1 = "";
let user2 = "";
let user3 = "";
let user4 = "";
let user5 = "";
let user6 = "";


//洗衣機(1) Canvas
var s1 = function( sketch ) {
    sketch.preload = function() {
        laundryOutside = sketch.loadImage('../組件1.png');
        laundryInside = sketch.loadImage('../組件2.png');
        laundryEmpty = sketch.loadImage('../組件3.png');
    }

    sketch.setup = function() {
        let canvas1 = sketch.createCanvas(330, 430);
        canvas1.parent("laundry1");
        laundryInside.width = laundryInside.width * 1.1;
        laundryInside.height = laundryInside.height * 1.1;
    }

    sketch.draw = function() {
        sketch.clear();
        if (angle === 360){
            angle = 0; 
        } 
        else {
            angle += 1;
        }

        if (jump>3) {
            jump_status=0;
        }
        if (jump<-3) {
            jump_status=1;
        }

        if (jump_status==0) {
            jump=jump-0.25;
        }
        else {
            jump=jump+0.25;
        }
        
        //洗衣機(1)中心
        if (machine1.lock[0] != null){
            sketch.push();
            sketch.imageMode(sketch.CENTER);
            sketch.translate(160, 233);
            sketch.rotate(angle);
            sketch.image(laundryInside,0,jump);
            sketch.pop();

            //洗衣機(1)邊框
            sketch.push();
            sketch.image(laundryOutside,0,jump);
            sketch.pop();
        }
        else {
            sketch.push();
            sketch.imageMode(sketch.CENTER);
            sketch.translate(160, 233);
            sketch.image(laundryEmpty,0,0);
            sketch.pop();

            //洗衣機(1)邊框
            sketch.push();
            sketch.image(laundryOutside,0,0);
            sketch.pop();  
        }
    }
};

new p5(s1);


//洗衣機(2) Canvas
var s2 = function( sketch ) {

    sketch.setup = function() {
        let canvas2 = sketch.createCanvas(330, 430);
        canvas2.parent("laundry2");
    }

    sketch.draw = function() {
        sketch.clear();
        
        if (machine2.lock[0] != null){
            sketch.push();
            sketch.imageMode(sketch.CENTER);
            sketch.translate(160, 233);
            sketch.rotate(angle);
            sketch.image(laundryInside,0,jump);
            sketch.pop();

            //洗衣機(1)邊框
            sketch.push();
            sketch.image(laundryOutside,0,jump);
            sketch.pop();
        }
        else {
            sketch.push();
            sketch.imageMode(sketch.CENTER);
            sketch.translate(160, 233);
            sketch.image(laundryEmpty,0,0);
            sketch.pop();

            //洗衣機(1)邊框
            sketch.push();
            sketch.image(laundryOutside,0,0);
            sketch.pop();  
        }
    }
};

new p5(s2);


var s3 = function( sketch ) {

    sketch.setup = function() {
        let canvas3 = sketch.createCanvas(150, 100);
        canvas3.parent("timer1");
    }

    sketch.draw = function() {
        sketch.clear();
        
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(32);
        sketch.text(timer1.toString(),75,60);
        sketch.pop();
    }
};

new p5(s3);

var s4 = function( sketch ) {

    sketch.setup = function() {
        let canvas4 = sketch.createCanvas(150, 100);
        canvas4.parent("timer2");
    }

    sketch.draw = function() {
        sketch.clear();
        
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(32);
        sketch.text(timer2.toString(),75,60);
        sketch.pop();
    }
};

new p5(s4);

var s5 = function( sketch ) {

    sketch.setup = function() {
        let canvas5 = sketch.createCanvas(120, 40);
        canvas5.parent("laundry1_user1");
    }

    sketch.draw = function() {
        sketch.clear();
        
        if (machine1.lock[0] != null) {
            user1=machine1.lock[0].toString();
        }
        else{
            user1="(無人使用)";
        }
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(14);
        sketch.text(user1,60,28);
        sketch.pop();
    }
};

new p5(s5);

var s6 = function( sketch ) {

    sketch.setup = function() {
        let canvas6 = sketch.createCanvas(120, 40);
        canvas6.parent("laundry1_user2");
    }

    sketch.draw = function() {
        sketch.clear();
        
        if (machine1.lock[1] != null) {
            user2=machine1.lock[1].toString();
        }
        else{
            user2="(無人等候)";
        }
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(14);
        sketch.text(user2,60,28);
        sketch.pop();
    }
};

new p5(s6);

var s7 = function( sketch ) {

    sketch.setup = function() {
        let canvas7 = sketch.createCanvas(120, 40);
        canvas7.parent("laundry1_user3");
    }

    sketch.draw = function() {
        sketch.clear();
        
        if (machine1.lock[2] != null) {
            user3=machine1.lock[2].toString();
        }
        else{
            user3="(無人等候)";
        }
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(14);
        sketch.text(user3,60,28);
        sketch.pop();
    }
};

new p5(s7);

var s8 = function( sketch ) {

    sketch.setup = function() {
        let canvas8 = sketch.createCanvas(120, 40);
        canvas8.parent("laundry2_user1");
    }

    sketch.draw = function() {
        sketch.clear();
        
        if (machine2.lock[0] != null) {
            user4=machine2.lock[0].toString();
        }
        else{
            user4="(無人使用)";
        }
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(14);
        sketch.text(user4,60,28);
        sketch.pop();
    }
};

new p5(s8);

var s9 = function( sketch ) {

    sketch.setup = function() {
        let canvas9 = sketch.createCanvas(120, 40);
        canvas9.parent("laundry2_user2");
    }

    sketch.draw = function() {
        sketch.clear();
        
        if (machine2.lock[1] != null) {
            user5=machine2.lock[1].toString();
        }
        else{
            user5="(無人等候)";
        }
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(14);
        sketch.text(user5,60,28);
        sketch.pop();
    }
};

new p5(s9);

var s10 = function( sketch ) {

    sketch.setup = function() {
        let canvas7 = sketch.createCanvas(120, 40);
        canvas7.parent("laundry2_user3");
    }

    sketch.draw = function() {
        sketch.clear();
        
        if (machine2.lock[2] != null) {
            user6=machine2.lock[2].toString();
        }
        else{
            user6="(無人等候)";
        }
        sketch.push();
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(14);
        sketch.text(user6,60,28);
        sketch.pop();
    }
};

new p5(s10);

//開註冊視窗
function Register_Window() {
    window.open(' http://localhost:3000/Register.html ', '註冊視窗', config='height=400px,width=800px');
}

//1號機排隊順位遞進
function laundry1Finish() {
    machine1.lock.shift();
}

//2號機排隊順位遞進
function laundry2Finish() {
    machine2.lock.shift();
}