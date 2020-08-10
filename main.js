let plyName =prompt("名前を入力してください");
let flag = true;
let plyLv = 1;
let plyHp = 6;
let plyHpMax = 6;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let plyExpNeed = [5,15,30,50,80,100,150,200];
let plyImg = document.getElementById("plyImg");
let plySt = document.getElementById("plySt[i]");

plyImg.addEventListener("mousedown", () =>{
    if(flag){
      plyImg.src = "playerC.png";   
    }   
});
plyImg.addEventListener("mouseup", () =>{
    if(flag) {
    plyImg.src = "playerA.png";
    plyHp += plyHeal;
    if(plyHp > plyHpMax){
        plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
    }
});
plySt0.textContent = "プレイヤー"+plyName;

 //↑ここまでプレイやー

//エネ

let eneLv = [1,3,2,5,7,9,9,11,15,30];
let eneHp = [10,12,15,15,20,99,50,30,40,200];
let eneHpMax0 = [10,12,15,15,20,99,50,30,40,200];
let eneAtt0 = [2,2,3,3,5,7,1,8,9,12];
let enekill0 = 0;
let eneExp0 = 1;
let eneCnt = 5;
let eneCntMax0 = 5;
i=0;
b=0;
let eneImg = document.getElementById("eneImg");
let eneSt = document.getElementById("eneSt[i]")
let enename = ["スライム","コウモリ","虫","蛇","ほね","トカゲ","お化け","鬼","つよいほね","ボス"];

eneImg.addEventListener("mousedown", () =>{
    if(flag){
    eneImg.src = "enemyB0.png"
    }
 });    
eneImg.addEventListener("mouseup", () =>{
    if(flag){
    eneImg.src = "enemyA"+ i +".png"; 
    if (eneHp[i] > 0) {
        eneHp[i] -= plyAtt;
    }else{
        if(i == 9){
            eneSec.textContent = "ゲームクリア!";
            flag = false;
            b++;

        }else{
        eneHp[i] = eneHpMax0[i];
        enekill0++;
        eneSt4.textContent = "倒した回数:" + enekill0;
    }
        //レベル系統
        plyExp += eneExp0;
        plySt5.textContent = "経験値:" + plyExp;
        plyExpNext -= eneExp0;

        if(plyExpNext < 1) {
            plyExpNext = plyExpNeed[plyLv];
            plyLv++;
            plySt1.textContent = "レベル:" + plyLv;
            plyHpMax = plyLv* 2 + 6;
            plyHp= plyHpMax;
            plySt2.textContent = "HP:" + plyHp;
            plyAtt++;
            plySt3.textContent = "攻撃力:"+ plyAtt;
            plyHeal++;
            plySt4.textContent = "回復魔法:"+ plyHeal;
        }
        
        plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
    }
    eneSt2.textContent = "Hp:" + eneHp[i];  
    }
});

//二匹目

let asd = document.getElementById("right");

asd.addEventListener("click", () =>{
 if(i < 9){ 
     if(flag){  
    i++;
     }
    console.log(i);
    eneSt0.textContent=enename[i];
    eneSt2.textContent ="Hp:" + eneHp[i];
    eneSt3.textContent="攻撃力："+eneAtt0[i];
    eneSt4.textContent="倒した回数:" + enekill0;
    eneSt1.textContent="レベル：" + eneLv[i];
      eneImg.src = "enemyA"+i+".png";
      enekill0 = 0;
      eneExp0 ++;
     
     
      
   

      eneImg.addEventListener("mousedown", () =>{
if(flag){
    eneImg.src = "enemyB"+i+".png";
    
}
      });
      eneImg.addEventListener("mouseup",()=>{
          if(flag){
eneImg.src = "enemyA"+i+".png"
 }})}

 });

 
let sd = document.getElementById("left");

sd.addEventListener("click", () =>{
    if(i > 0){
        if(flag){
    i--;
        }
    console.log(i);
    eneSt0.textContent=enename[i];
    eneSt2.textContent ="Hp:" + eneHp[i];
    eneSt3.textContent="攻撃力："+eneAtt0[i];
    eneSt4.textContent="倒した回数:" + enekill0;
    eneSt1.textContent="レベル：" + eneLv[i];
      eneImg.src = "enemyA"+i+".png";
      enekill0 = 0;
      eneExp0 ++;
     
     
      
   

      eneImg.addEventListener("mousedown", () =>{
if(flag){
    eneImg.src = "enemyB"+i+".png";
    
}
      });
      eneImg.addEventListener("mouseup",()=>{
          if(flag){
eneImg.src = "enemyA"+i+".png"
 }})
 
}});


//時間系統
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() =>{   
    if (eneCnt > 0){
 if(b==1){
            clearInterval(loop);
            flag = false;
            eneSec.textContent = "ゲームクリア!";
            plyImg.src = "playerA.png";
            eneImg.src = "clear.png";
            eneSt0.textContent=" ";
    eneSt2.textContent =" " ;
    eneSt3.textContent=" ";
    eneSt4.textContent=" ";
    eneSt1.textContent=" ";
        }else{
       eneCnt--;
   
        eneSec.textContent= "モンスターの攻撃まで"+ eneCnt +"秒";
        }
    }else{
        plyImg.src = "playerB.png";
        plyHp -= eneAtt0[i];
       
        if(plyHp > 0){
            plySt2.textContent = "HP:" + plyHp; 
            eneSec.textContent= "モンスターの攻撃まで"+ eneCnt +"秒";
        }else{
            plyHp = 0;
            clearInterval(loop);
            flag = false;
            plySt2.textContent = "HP:" + plyHp;
            eneSec.textContent = "ゲームオーバー";
        }
        

        setTimeout(() =>{
            if(flag) {
            eneCnt = eneCntMax0;
            plyImg.src = "playerA.png";
            eneSec.textContent= "モンスターの攻撃まで"+ eneCnt +"秒";
            }
        }, 500);     
    }
},1000);