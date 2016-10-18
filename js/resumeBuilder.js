/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append(["Guglielmo Turco"]);
// var awesomeThoughts = "I am Guglielmo Turco and I'm AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%","Guglielmo Turco");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);
