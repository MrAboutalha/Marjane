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
        on = "no";
        }
        else{ 
        closeNav();
        on = "yes";
        }

});
function openNav() {
    document.getElementById("mySidenav").style.width = "750px";}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";}