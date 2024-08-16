
/*
CalculateBOD
Calculate BOD of wastewater sample.
parameter:cs:int, bottle size in ml.
          ss:int, sample size in ml.
          ds:float, dissolve oxygen start in mg/l.
          de:float, dissolve oxygen end in mg/l.
          ul:bool, upper lower detection.
return:float,BOD in mg/l.-1:invalid,-2:lower limit,-3 upper limit.
*/
function CalculateBOD(cs,ss,ds,de,ul=false){
    if(!isNaN(cs)&!isNaN(ss)&!isNaN(ds)&!isNaN(de)){
        if((ds>de)&(ss<cs)){//check data valid
            if((ds-de<1)&ul){//when DO drop < 1 mg/l
                return -2;
            }
            if((de<2)&ul){//when DO < 2mg/l
                return -3;
            }
            let bod = (ds-de)/(ss/cs);
            return bod;
        }
    }
    return -1;
}

/*
Click
When button click, run this.
*/
function Click(){
    let cs = parseFloat(document.querySelector("#carboysize").value);
    let ss = parseFloat(document.querySelector("#samplesize").value);
    let ds = parseFloat(document.querySelector("#dostart").value);
    let de = parseFloat(document.querySelector("#doend").value);
    let bod = CalculateBOD(cs,ss,ds,de,true);
    if(bod == -1){
        //alert("Invalid data.")
    }
    else if(bod == -2|bod == -3){
        bod = CalculateBOD(cs,ss,ds,de,false);
        document.querySelector("#result").innerHTML=Math.floor(bod*100)/100+"mg/l???";
    }
    else{
        document.querySelector("#result").innerHTML=Math.floor(bod*100)/100+"mg/l";
    }
}

var html = "<div><span>Carboy Size(ml):<div></span> <input id='carboysize' value='300'> <span>Sample Size(ml):</span><input id='samplesize'><span>DO start(mg/l):</span><input id='dostart'><span>DO end(mg/l):</span><input id='doend'><button onclick='Click()'>Calculate</button><div id = 'result' hidden></div></div>";


/*function Load(){
    console.log(html);
    $("#embed").html(html);
}*/