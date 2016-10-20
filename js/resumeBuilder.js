/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append(["Guglielmo Turco"]);
// var awesomeThoughts = "I am Guglielmo Turco and I'm AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
// var name = "Guglielmo Turco";
// var role =  "Web Developer";
// var formattedName = HTMLheaderName.replace("%data%",name);
// var formattedRole = HTMLheaderRole.replace("%data%",role);
// $("#header").append(formattedName);
// $("#header").append(formattedRole);

var bio = {
          "name" : "Guglielmo Turco",
          "role" : "Web Developer",
          "contacts" : {
            "mobile" : "+39 3463809631",
            "email" : "guglielmo.turco@gmail.com",
            "github" : "guglio",
            "twitter" : "@gugliolo",
            "location" : "Cuneo"
          },
          "pictureURL" : "images/me.jpg",
          "welcomeMsg" : "Welcome!",
          "skills" : ["HTML5", "CSS3", "JavaScript", "Web Developer"]
 };

var work = {};

work.jobPosition = "Head of Digital Media";
work.employer = "C.I.A.M. SRL";
work.years = 8;
work.city = "Boves (CN)";


$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
$("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#header").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#header").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%",bio.pictureURL));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));
$("#header").append(HTMLskillsStart + HTMLskills.replace("%data%",bio.skills));

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobPosition));
$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.employer));
$("#workExperience").append(HTMLworkDates.replace("%data%",work.years));
$("#workExperience").append(HTMLworkLocation.replace("%data%",work.city));
