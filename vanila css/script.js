let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0rem"

function togglemenu(){
    if(menuList.style.maxHeight === "0rem")
    {
        menuList.style.maxHeight = "22rem";
    }else{
        menuList.style.maxHeight = "0rem";
    }
}