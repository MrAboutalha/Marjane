/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var on = "yes";
const but=document.getElementById("bx-help-block");
but.addEventListener("click",function(){
        if (on === "yes") {
        openNav();
        document.getElementById("body").style.overflowY="hidden";
        document.getElementById("bx-im-bar").style.borderRight="17px solid rgb(238, 242, 244)";
        document.getElementById("bx-im-bar").classList.add("bx-im-bar-default");
        on = "no";
        }
        else{ 
        closeNav();
        document.getElementById("body").style.overflowY="scroll";
        document.getElementById("bx-im-bar").style.borderRight="0 solid rgb(238, 242, 244)";
        document.getElementById("bx-im-bar").style.transition="0.3s";
        document.getElementById("loading-image").style.transition="0.3s";
        document.getElementById("bx-im-bar").classList.remove("bx-im-bar-default");        
        on = "yes";
        }
});
function openNav() {
    document.getElementById("mySidenav").style.width = "75%";}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";}