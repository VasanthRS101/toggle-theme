const toggle = document.getElementById("toggleTheme");

toggle.onclick = () => {
     toggle.classList.toggle("fa-sun");

     if(toggle.classList.contains("fa-sun")){
          document.body.classList.add("active")
     } else {
         document.body.classList.remove("active")
     }
}