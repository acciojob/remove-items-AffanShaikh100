//your JS code here. If required.
function remove(){
let ele = document.getElementById("colorSelect");

for(let i=0; i<ele.length;i++)
	{
		if(ele.value == ele[i]){
			ele.remove[i];
		}
	}
}