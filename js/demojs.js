//code js viet o day
var x;
x = 10;//number
x = "hello world";
x = true;

var y=20;
y = y +5;//number
y = y + "hello";//string -> 25hello
y = y +10;//string -> 25hello10
y = y + "t2204m";//string -> 25hello10t2204m

if(x==true){
    y=y+"hello";
}else{
    y=y+"xin chao";
}

for(var i=0;i<10;i++){
    console.log("i="+i);
}

var arr=[];
arr[0]=2;
arr[1]="hello";
arr[2]=true;
arr[3]=[1,2,3,4];
arr[3][4]=["hello","abc"];

//
var ary=[];
for(var i=0;i<10;i++){
    ary[i]=2*i+1;
}
//muon them so 21 vao cuoi arr
ary[10]=21;
ary.push=(21);
ary.push=(23);
ary.push=(25);
for(var i=0;i<ary.length;i++){
    console.log(ary[i]);
}

tinhtong(5,7);
function tinhtong(a,b){
    console.log(a+b);
    return a+b;
}

function checkPrime(n){
    if(n<2) return false;
    if(n==2 || n==3) return true;
    for(var i=2;i<=n/2;i++){
        if(n%i==0) return false;
    }
    return true;
}
//console.log(checkPrime(7));

//1 so ham co san
//alert("Must be 18 dumbo");
//==============================
// var check = confirm("Are you 18?");//boolean
// console.log(check);
//==============================
//var str = prompt("vui lòng nhập tên của bạn:");// string
//console.log(str);
//str =parseInt(str);//string -> number
//console.log(str+10);
//==============================

//==============================
//nhập tên 5 người, sau đó in ra danh sách 5 người vừa nhập
//trên màn hình console

//var arrname=[];
//for(i=0;i<5;i++){
//    var arrname=prompt("nhập nickname");
//    console.log(arrname);
//}
//==============================


//==============================
//viết chương trình bắt người dùng nhập 10 số dương
// for(i=0;i<10;i++){
//     var arrposnum=prompt("nhập số nguyên dương");
//     if(arrposnum>0){
//         console.log(arrposnum);
//     }
// }
//==============================
// setTimeout(function ()
//     {alert("Timeout in 5sec");
//     },5000
// );
//==============================
// var t=0;
// var demotime = setInterval(function(){
//     console.log("t="+t);
//     t++;
//     if(t>=5){
//         clearInterval(demotime);
//     }
// },1000);
//==============================
//viết đồng hồ đếm ngược từ 10:00 về 00:00

var min=10,sec=3,mid=":";
var clocktime = setInterval(function(){
    if(0<min<10){
        console.log("time remain "+"0"min + mid + sec);
    }else{
        console.log("time remain "+min + mid + sec);
    }
    sec--;
    if(sec==-1){
        sec+=60;
        min-=1;

    }
        if(min==0 && sec==0){
        clearInterval(clocktime);}
},1000)
//==============================