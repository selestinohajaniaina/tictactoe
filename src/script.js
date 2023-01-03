$(document).ready(function(){
    const croix = "<p>+</p>";
    const circle = "<p style='transform:none;font-size:50pt;'>O</p>";
    let tour=0;
    let colonne="num";
    $(".case").click(function(){
        if($(this).attr("id")){
            $(this).html()=$(this).html();
            // console.log(tour);
        }else{
            if(tour==1){
                    $(this).html(circle);
                    $(this).attr("id",tour);
                    tour=0;
                    $(".icon").html(croix);
                }else{
                    $(this).html(croix);
                    $(this).attr("id",tour);
                    tour=1;
                    $(".icon").html(circle);
                }
        }
        //selection id
        const a = $("tr").eq(0).children("td").eq(0).attr("id");
        const b = $("tr").eq(0).children("td").eq(1).attr("id");
        const c = $("tr").eq(0).children("td").eq(2).attr("id");
        const d = $("tr").eq(1).children("td").eq(0).attr("id");
        const e = $("tr").eq(1).children("td").eq(1).attr("id");
        const f = $("tr").eq(1).children("td").eq(2).attr("id");
        const g = $("tr").eq(2).children("td").eq(0).attr("id");
        const h = $("tr").eq(2).children("td").eq(1).attr("id");
        const i = $("tr").eq(2).children("td").eq(2).attr("id");

        //comparate with id
        let resulte = [a+b+c,d+e+f,g+h+i,a+d+g,b+e+h,c+f+i,a+e+i,g+e+c];
        for(let i=0;i<9;i++){
            let response = resulte[i];
            if(response=="000" || response=="111"){
                setTimeout(()=>{
                    alert('ok');
                },500);
            }
        }
    });
});
let i = 78
 re