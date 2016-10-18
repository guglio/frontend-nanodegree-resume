/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append(["Guglielmo Turco"]);
// var awesomeThoughts = "I am Guglielmo Turco and I'm AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
var name = "Guglielmo Turco";
var role =  "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedName);
$("#header").append(formattedRole);
