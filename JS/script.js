const toggler = document.getElementById(`toggle`);
const menu = document.getElementById(`header-list-1`);
toggler.addEventListener(`click`, () =>{
    if( menu.style.opacity === `1`){
        menu.style.height = `0`;
        menu.style.visibility = `hidden`;
        menu.style.opacity = `0`;

    } else{
        menu.style.height = `14rem`;
        menu.style.visibility = `visible`;
        menu.style.opacity = `1`;
    }
})
