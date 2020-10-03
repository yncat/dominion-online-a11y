function killRole(className){
    // unset the misplaced role="button"
    const elems = document.getElementsByClassName(className);
    if(elems.length>0){
        elems[0].removeAttribute("role");
    }
}

function injectAriaLive(className){
    const elems = document.getElementsByClassName(className);
    if(elems.length>0){
        elems[0].setAttribute("aria-live", "polite");
    }
}

window.addEventListener("load", main, false);
function main(e){
setInterval(function(){
killRole("lobby-page");
killRole("game-page");
injectAriaLive("game-log");
}, 5000);
}
