const pageID = document.getElementById("pageID");
const elementID = document.getElementById("elementID");
const dropListPage = document.getElementById("dropListPage");
const dropListElement = document.getElementById("dropListElement");
pageID.addEventListener("click", ()=>{
    if (dropListPage.style.display == "none") dropListPage.style.display = "block";
    else dropListPage.style.display = "none";
});
elementID.addEventListener("click", ()=>{
    if (dropListElement.style.display == "none") dropListElement.style.display = "block";
    else dropListElement.style.display = "none";
});
//////////menu button
const sideBar = document.getElementById("sideBar");
const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", ()=>{
    if (sideBar.style.display == "none") sideBar.style.display = "block";
    else sideBar.style.display = "none";
});

//# sourceMappingURL=animation.579125c3.js.map
