var show=0;

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
}