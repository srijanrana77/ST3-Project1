function fun(){
		var name=document.getElementById("name").value;
		var mob=document.getElementById("mob").value;
		var email=document.getElementById("email").value;
    var additem =document.getElementById("additems");
		var reg="^[a-zA-Z0-0+.-]+@[a-zA-Z0-9.]+$";

    additems.style.visibility = "visible";
		if(name === "" && mob === "" && email === ""){
			alert("No field should be empty");
		}
		else if(name.length<3){
			alert("Name should have atleast 3 digits");
		}
		else if(mob.length != 10){
			alert("Mobile Number should be of 10 digits");
		}
		else if(!email.match(reg)){
			alert("Invalid Email id");
		}
    else {
      additem.innerHTML += "<tr><td id=\"column-down\">" + name + "</td><td id=\"column-down\">" + mob + "</td><td id=\"column-down\">" + email + "</td><td><button onclick=\"abc()\" id=\"btn2\">Delete</button></td></tr></table>";
    }
}
function abc() {
    document.getElementById("additems").deleteRow(1);
}
