vN = 1;
window.onload = setTimeout(function(){
    setInt(0);
},1000);
function setInt(vNum){
    var pText = document.getElementById("pText");
    var v_Array = ["Happy Father's Day! . .","Thanks for everything you've done over these years. . . ","It means the world to me..."];
    var v = "";
    var x = 0;
    var int = setInterval(function(){
        v = v + v_Array[vNum][x];
        pText.innerHTML = v;
        x++;
        if(v === v_Array[vNum]){
            window.vN++;
            setTimeout(function(){
                switch(window.vN){
                    case 2:setInt(1);
                        break;
                    case 3:setInt(2);
                        break;
                    default:;
                }
            },600);
            clearInterval(int);
        }
    },100);
}
