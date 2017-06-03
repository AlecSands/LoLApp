var myRequest;
// feature check!
if (window.XMLHttpRequest) {
	myRequest = new XMLHttpRequest();
} else if (window.AxtiveXObject) {
	myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

myRequest.onreadystatechange = function(){
	console.log("We were called!");
	console.log(myRequest.readyState);
	if (myRequest.readyState === 4) {
		console.log(myRequest.responseText);
	}
};

// configure and send
myRequest.open("GET", "//na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/sand0848?api_key=", true);
myRequest.send(null);
