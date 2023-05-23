{
var player=1;//#of player
var count=0;//count disc and steps
var playera=0;//#of section
var playerb=0;
var pamoney=3000;//money
var pbmoney=3000;
var prop=[];
var proptimes=[];//times prop used
var dicemem;//memory dice
}
window.onload=()=>
{
    let i=0;
    let row;
    let col;
    console.log("load finished");
    var item=document.querySelectorAll("section");
    for(i=0;i<item.length;i++)
    {
        console.log(item[i]);
        console.log(item[i].getAttribute("suite"));
        row=parseInt(item[i].getAttribute("suite")/100);
        col=parseInt(item[i].getAttribute("suite"))%100;
        console.log(row);
        console.log(col);
        item[i].style="grid-row:"+row+";grid-column:"+col;
        if(item[i].getAttribute("val")==null){

        }
        else{
        item[i].innerHTML+="<p>"+item[i].getAttribute("val")+"$</p>"
        }
        if(parseInt(item[i].getAttribute("suite")/100)==11)//bottom
       {
        console.log("bottom border");
       item[i].style.borderLeft+="1px solid black";
       item[i].style.borderBottom+="1px solid black";
       switch(item[i].getAttribute("class"))
       {
        case "reg brown":
            item[i].style.borderTop+="15px solid #a52a2a";
            console.log("brown");
        break;
        case "reg lightblue":
             item[i].style.borderTop+="15px solid skyblue";
             console.log("skyblue");
        break;
        case "reg orange": 
        item[i].style.borderTop+="15px solid orange";
        console.log("orange");
        break;
        case "reg purple":
         item[i].style.borderTop+="15px solid purple";
         console.log("purple");
         break;
        case "reg red": 
        item[i].style.borderTop+="15px solid red";
        console.log("red");
        break;
        case "reg green":
            item[i].style.borderTop+="15px solid green";
            console.log("you are now green");
        break;
        default:item[i].style.borderTop+="1px solid black";break;
       };
    }
       if(parseInt(item[i].getAttribute("suite")/100)==1)//top
       {
        console.log("top border");
        item[i].style.borderTop+="1px solid black";
        item[i].style.borderRight+="1px solid black";
        switch(item[i].getAttribute("class"))
       {
        case "reg brown":
            item[i].style.borderBottom+="15px solid #a52a2a";
            console.log("brown");
        break;
        case "reg lightblue":
             item[i].style.borderBottom+="15px solid skyblue";
             console.log("skyblue");
        break;
        case "reg orange": 
        item[i].style.borderBottom+="15px solid orange";
        console.log("orange");
        break;
        case "reg purple":
         item[i].style.borderBottom+="15px solid purple";
         console.log("purple");
         break;
        case "reg red": 
        item[i].style.borderBottom+="15px solid red";
        console.log("red");
        break;
        case "reg green":
            item[i].style.borderBottom+="15px solid green";
            console.log("you are now green");
        break;
        default:item[i].style.borderBottom+="1px solid black";break;
       };
       }
       if(item[i].getAttribute("suite")%100==11)//right
       {
        console.log("right border");
        item[i].style.borderRight+="1px solid black";
        item[i].style.borderBottom+="1px solid black";
        switch(item[i].getAttribute("class"))
       {
        case "reg brown":
            item[i].style.borderLeft+="15px solid #a52a2a";
            console.log("brown");
        break;
        case "reg lightblue":
             item[i].style.borderLeft+="15px solid skyblue";
             console.log("skyblue");
        break;
        case "reg orange": 
        item[i].style.borderLeft+="15px solid orange";
        console.log("orange");
        break;
        case "reg purple":
         item[i].style.borderLeft+="15px solid purple";
         console.log("purple");
         break;
        case "reg red": 
        item[i].style.borderLeft+="15px solid red";
        console.log("red");
        break;
        case "reg green":
            item[i].style.borderLeft+="15px solid green";
            console.log("you are now green");
        break;
        default:item[i].style.borderLeft+="1px solid black";break;
       };
       }
       if(item[i].getAttribute("suite")%100==1)//left
       {
        console.log("left border");
        item[i].style.borderTop+="1px solid black";
        item[i].style.borderLeft+="1px solid black";
        switch(item[i].getAttribute("class"))
        {
         case "reg brown":
             item[i].style.borderRight+="15px solid #a52a2a";
             console.log("brown");
         break;
         case "reg lightblue":
              item[i].style.borderRight+="15px solid skyblue";
              console.log("skyblue");
         break;
         case "reg orange": 
         item[i].style.borderRight+="15px solid orange";
         console.log("orange");
         break;
         case "reg purple":
          item[i].style.borderRight+="15px solid purple";
          console.log("purple");
          break;
         case "reg red": 
         item[i].style.borderRight+="15px solid red";
         console.log("red");
         break;
         case "reg green":
             item[i].style.borderRight+="15px solid green";
             console.log("you are now green");
         break;
         default:item[i].style.borderRight+="1px solid black";break;
        };
       }
    }
    document.querySelector("#player1").innerHTML+="Player1";
    document.querySelector("#player2").innerHTML+="Player2";
    document.querySelector("#player1").innerHTML+="<p><img id='p1img' src='p1.png'></p>";
    document.querySelector("#player2").innerHTML+="<p><img id='p2img' src='p2.png'></p>";
    document.querySelectorAll("section")[playera].innerHTML+="<p><img id='p1' src='p1.png'></p>";
    document.querySelectorAll("section")[playerb].innerHTML+="<p><img id='p2' src='p2.png'></p>";

   document.querySelector(["#RollDice"]).onclick=()=>//use event handler now
   {
    let x1=parseInt(Math.random()*6);
    let x2=parseInt(Math.random()*6);
    var die1;
    var die2;
    count=x1+x2+2;
    dicemem=count;
    switch(x1){
        case 0:die1="dice1.png";
        break;
        case 1:die1="2.png";
        break;
        case 2:die1="3.png";
        break;
        case 3:die1="4.png";
        break;
        case 4:die1="5.png";
        break;
        default:die1="6.png";
        break;
    }
    switch(x2){
        case 0:die2="dice1.png";
        break;
        case 1:die2="2.png";
        break;
        case 2:die2="3.png";
        break;
        case 3:die2="4.png";
        break;
        case 4:die2="5.png";
        break;
        default:die2="6.png";
        break;
    }
    console.log(die1);
    console.log(x1);
    document.querySelector("#die1").innerHTML="<img class='die'src='"+die1+"'>";
    console.log(die2);
    console.log(x2);
    document.querySelector("#die2").innerHTML="<img class='die'src='"+die2+"'>";
    setTimeout(move,500);
}
}
function move()
{
count=count-1;
console.log("Move"+count);
if(player==1)
{
    if(playera==39)
    {
        playera=0;
    }
    else{
    playera=playera+1;
    }
    console.log("playera="+playera);
    const node = document.getElementById("p1");
    document.querySelectorAll("section")[playera].appendChild(node);
    let action=document.querySelectorAll("section")[playera].getAttribute("id");
    if (action.indexOf("go")!=-1)
    {
        pamoney=pamoney+200;
    }
   
}
if(player==2)
{
    if(playerb==39)
    {
        playerb=0;
    }
    else{
    playerb=playerb+1;
    }
    console.log("playerb="+playerb);
    const node = document.getElementById("p2");
  document.querySelectorAll("section")[playerb].appendChild(node);
  let action=document.querySelectorAll("section")[playerb].getAttribute("id");
  if (action.indexOf("go")!=-1)
    {
        pbmoney=pbmoney+200;
    }
   
}

if(count>0)
{
setTimeout(move,500);
}
if(count==0)//landing
{
    if(player==1)
    {
        player=2;
        let red=document.getElementById("player2");
        red.style.border+="5px soild red";
        console.log("swap to"+player);
        let action=document.querySelectorAll("section")[playera].getAttribute("id");
        console.log(action)
        if(action.indexOf("cc")!=-1)//actions at landing
        {
            const takeAChanceText = ["Second Place in Beauty Contest: $10", "Bank Pays You Dividend of $50",
            "Repair your Properties. You owe $250", "Speeding Fine: $15",
            "Holiday Fund Matures: Receive $100", "Pay Hospital Fees: $100"];
             const takeAChanceMoney = [10, 50, -250, -15, 100, -100];
        let rad=parseInt(Math.random()*6);
        alert(takeAChanceText[rad]);
        pamoney=pamoney+takeAChanceMoney[rad];
        }
        if(action.indexOf("tax")!=-1)
        {
            pamoney=pamoney-document.querySelectorAll("section")[playera].getAttribute("val");
        }
        if(action.indexOf("gotojail")!=-1)
        {
            playera=10;
        }
        if(action.indexOf("jail")!=-1)
        {
            pamoney=pamoney-document.querySelectorAll("section")[playera].getAttribute("val");
        }
        if(document.querySelectorAll("section")[playera].getAttribute("class").indexOf("reg")!=-1&&(document.querySelectorAll("section")[playera].getAttribute("class").indexOf("tax")==-1||(document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("cc")==-1)))
        {
        if(prop[playera]!=2)
        {
            pamoney=pamoney-document.querySelectorAll("section")[playera].getAttribute("val");
            prop[playera]=1;
            document.querySelectorAll("section")[playera].style.backgroundColor="lightgreen";
            console.log("Player a purchase");
        }
        if(prop[playera]==2)
        {
            if(document.querySelectorAll("section")[playera].getAttribute("class").indexOf("utility")!=-1)
            {
                pamoney=pamoney-document.querySelectorAll("section")[playera].getAttribute("val")*dicemem;
            }
            if(document.querySelectorAll("section")[playera].getAttribute("class").indexOf("rr")!=-1)
            {
                pamoney=pamoney-25;
            }
            if(document.querySelectorAll("section")[playera].getAttribute("class").indexOf("red")!=-1||document.querySelectorAll("section")[playera].getAttribute("class").indexOf("green")!=-1||document.querySelectorAll("section")[playera].getAttribute("class").indexOf("blue")!=-1||document.querySelectorAll("section")[playera].getAttribute("class").indexOf("yellow")!=-1||document.querySelectorAll("section")[playera].getAttribute("class").indexOf("orange")!=-1||document.querySelectorAll("section")[playera].getAttribute("class").indexOf("purple")!=-1|document.querySelectorAll("section")[playera].getAttribute("class").indexOf("brown")!=-1)
            {
                pamoney=pamoney-parseInt(document.querySelectorAll("section")[playera].getAttribute("val")^proptimes[playera]);
                proptimes[playera]=proptimes[playera]+1;
            }
        }
        }
        document.getElementById("player1amt").innerHTML="$"+pamoney;//write money
    }
    else if(player==2)//for p2
    {
        player=1;
        let red=document.getElementById("player1");
        red.style.border+="5px soild red";
        console.log("swap to"+player);
        let action=document.querySelectorAll("section")[playerb].getAttribute("id");
        console.log(action)
        if(action.indexOf("cc")!=-1)//actions at landing
        {
        const takeAChanceText = ["Second Place in Beauty Contest: $10", "Bank Pays You Dividend of $50",
        "Repair your Properties. You owe $250", "Speeding Fine: $15",
       "Holiday Fund Matures: Receive $100", "Pay Hospital Fees: $100"];
        const takeAChanceMoney = [10, 50, -250, -15, 100, -100];
        let rad=parseInt(Math.random()*6);
        alert(takeAChanceText[rad]);
        pbmoney=pbmoney+takeAChanceMoney[rad];
        }
        if(action.indexOf("tax")!=-1)
        {
            pbmoney=pbmoney-document.querySelectorAll("section")[playerb].getAttribute("val");
        }
        if(action.indexOf("gotojail")!=-1)
        {
            playerb=10;
        }
        if(action.indexOf("jail")!=-1)
        {
            pbmoney=pbmoney-document.querySelectorAll("section")[playerb].getAttribute("val");
        }
        if(document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("reg")!=-1&&(document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("tax")==-1||document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("cc")==-1))
        {
        if(prop[playerb]!=1)//buy
        {
            pbmoney=pbmoney-document.querySelectorAll("section")[playerb].getAttribute("val");
            prop[playerb]=2;
            document.querySelectorAll("section")[playerb].style.backgroundColor="blueviolet";
            console.log("Player b purchase");
        }
        if(prop[playerb]==1)//another one
        {
            if(document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("utility")!=-1)
            {
                pbmoney=pbmoney-document.querySelectorAll("section")[playerb].getAttribute("val")*dicemem;
            }
            if(document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("rr")!=-1)
            {
                pbmoney=pbmoney-25;
            }
            if(document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("red")!=-1||document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("green")!=-1||document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("blue")!=-1||document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("yellow")!=-1||document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("orange")!=-1||document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("purple")!=-1|document.querySelectorAll("section")[playerb].getAttribute("class").indexOf("brown")!=-1)
            {
                pbmoney=pbmoney-parseInt(document.querySelectorAll("section")[playerb].getAttribute("val")^proptimes[playerb]);
                proptimes[playerb]=proptimes[playerb]+1;
            }
        }
        }
        document.getElementById("player2amt").innerHTML="$"+pbmoney;//write money
    }
    console.log("It is your turn,player "+player);
}
}
