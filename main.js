/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 let index1 = 0;
 let index2 = 0;
 
 displayImages1();
 displayImages2();
 
 function displayImages1() {
   let i;
   const images1 = document.getElementsByClassName("images");
   for (i = 0; i < images1.length; i++) {
     images1[i].style.display = "none";
   }
   index1++;
   if (index1 > images1.length) {
     index1 = 1;
   }
   images1[index1-1].style.display = "block";
   setTimeout(displayImages1, 2000); 
 }
 
 function displayImages2() {
   let i;
   const images2 = document.getElementsByClassName("image");
   for (i = 0; i < images2.length; i++) {
     images2[i].style.display = "none";
   }
   index2++;
   if (index2 > images2.length) {
     index2 = 1;
   }
   images2[index2-1].style.display = "block";
   setTimeout(displayImages2, 2000); 
 }