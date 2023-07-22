var show=0;
var barshow=0;

window.onload=()=>{
    
    document.onscroll=()=>{
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            //alert("bottom!"); 
            if(show==0){
                show++;
                $("#Myexp").fadeIn(1500);
            }
            else if(show==1){
                show++;
                $("#Mypro").fadeIn(1500);
            }
            else{

            }
        }
    }
    document.querySelector("#nav").onclick=()=>
    {
        if(barshow==0){
            $("div").css("grid-column","2/3");
            $("nav").fadeIn(1500);
            barshow=1;
        }
        else{
            barshow=2;
            $("nav").fadeOut(1500,function(){
                $("div").css("grid-column","1/3");barshow=0;
            });
            
        }
    }
    document.querySelector("#skills").onclick=()=>{
        $("#Myexp").fadeIn(1500);
        $("#Mypro").fadeIn(1500);
        document.querySelector("#Myskl").scrollIntoView();
    }
    document.querySelector("#experiences").onclick=()=>{
        $("#Myexp").fadeIn(1500);
        $("#Mypro").fadeIn(1500);
        document.querySelector("#Myexp").scrollIntoView();
    }
    document.querySelector("#project").onclick=()=>{
        $("#Myexp").fadeIn(1500);
        $("#Mypro").fadeIn(1500);
        document.querySelector("#Mypro").scrollIntoView();
    }
}

    