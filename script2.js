$(document).ready(function () {
	alert("Ready!");
	$("#div1").load("cfg.txt #date");
	//$(".safedays").load("cfg.txt #date");
	$("#nracc").load("cfg.txt #nrAccidents");
	$("#lti").load("cfg.txt #lostTime");
	$("#daylti").load("cfg.txt #days");

});