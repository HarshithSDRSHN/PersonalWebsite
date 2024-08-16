let str = "You Have Chosen: "
function appendstr(k){
    if(k.checked){
        str=str+k.classList[0]+", ";
        return true;
    }
    else return false;
}
function dsply(){
    let badmin = document.querySelector('.badmin');
    let movie = document.querySelector('.mv');
    let vgame = document.querySelector('.vgame');
    let badmincheck = appendstr(badmin.childNodes[1]);
    let mvcheck = appendstr(movie.childNodes[1]);
    let vgamecheck = appendstr(vgame.childNodes[1]);
    if(str != "You Have Chosen: "){
        alert(str);
        str= "You Have Chosen: ";
    }
    if(badmincheck)
        document.querySelector('.badminp').style.display = "block";
    else
        document.querySelector('.badminp').style.display = "none";
    if(mvcheck)
        document.querySelector('.moviep').style.display = "block";
    else 
        document.querySelector('.moviep').style.display = "none";
    if(vgamecheck)
        document.querySelector('.vgamep').style.display = "block";
    else
    document.querySelector('.vgamep').style.display = "none";
}


