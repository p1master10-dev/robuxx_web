var robux_amt = 0;
var robux_limit = 10500;
var roblux_usr = "";

function E_rbx_amt(){
   robux_amt = prompt("Enter robux amount (Limit = 10500) :");
   document.body.innerHTML = '<video width="100%" height="100%" controls autoplay loop><source src="rick.mp4" type="video/mp4"> Your browser does not support the video tag. </video>';
   if(robux_amt > robux_limit){
      document.getElementById("box_1").innerHTML = "<p id='err_txt'>error.code(209903(robuxAmt(" + robux_amt + "))).banUser(" + roblux_usr + ")</p>";
      document.body.innerHTML = '<video width="100%" height="100%" controls autoplay loop><source src="rick.mp4" type="video/mp4"> Your browser does not support the video tag. </video>';
   }
}

function E_rbx_usr(){
   roblux_usr = prompt("Enter your roblox username:");
   console.log(roblux_usr);
}