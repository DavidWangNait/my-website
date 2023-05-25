window.onload=()=>{
    const button=document.querySelector("[name=cap]")
    const v=document.querySelector("[name=vol]")
    const a=document.querySelector("[name=ah]")
    const c= document.querySelector("[name=custom]")
    var cap;
    v.onchange=()=>{
        if(v.value==""||a.value=="")//error
        {
            console.log("Error")
        }
        else//calculation
        {
            console.log(v.value)
            console.log(a.value)
            cap=parseInt(v.value)*parseInt(a.value)
            console.log(cap)
            document.querySelector("[name=cap]").value=cap
            caltime();
        }
    }
    a.onchange=()=>{
        if(v.value==""||a.value=="")//error
        {
            console.log("Error")
        }
        else//calculation
        {
            console.log(v.value)
            console.log(a.value)
            cap=parseInt(v.value)*parseInt(a.value)
            console.log(cap)
            document.querySelector("[name=cap]").value=cap
            caltime();
        }
    }
    button.onchange=()=>{
        caltime();
    }
    c.onchange=()=>{
        caltime();
    }
    function caltime(){
      var cap=parseInt(document.querySelector("[name=cap]").value);
      document.getElementById("phone").innerHTML=cap/15;
      document.getElementById("LED").innerHTML=cap/9;
      document.getElementById("laptop").innerHTML=cap/70;
      document.getElementById("laptop2").innerHTML=cap/20;
      document.getElementById("fan").innerHTML=cap/30;
      document.getElementById("TV").innerHTML=cap/100;
      document.getElementById("heater").innerHTML=cap/500;
      document.getElementById("cust").innerHTML=cap/parseInt(document.querySelector("[name=custom]").value);
    }
    }