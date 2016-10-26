/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  BIO
//  name : string
//        role : string
//        contacts : an object with
//              mobile: string
//              email: string
//              github: string
//              twitter: string (optional)
//              location: string
//        welcomeMessage: string
//        skills: array of strings
//        biopic: url
// display: function
//
// EDUCATION
// schools: array of objects with
//            name: string
//            location: string
//            degree: string
//            majors: array of strings
//            dates: string (works with a hyphen between them)
//            url: string
// onlineCourses: array of objects with
//            title: string
//            school: string
//            dates: string (works with a hyphen between them)
//            url: string
// display: function
//
// WORK
// jobs: array of objects with
//            employer: string
//            title: string
//            location: string
//            dates: string (Can be 'in progress')
//            description: string
// display: function
//
// PROJECTS
// projects: array of objects with
//             title: string
//             dates: string (works with a hyphen between them)
//             description: string
//             images: array with string urls
// display: function

var bio = {
          "name" : "Guglielmo Turco",
          "role" : "Chief Digital Officer",
          "contacts" : {
            "mobile" : "+39 346 3809631",
            "email" : "guglielmo.turco@gmail.com",
            "github" : "guglio",
            "twitter" : "@gugliolo",
            "location" : "Cuneo (CN) - Italy",
            "website" : "guglielmo-turco.com"
          },
          "welcomeMessage" : "Welcome!",
          "skills" : ["HTML5", "CSS3", "JavaScript", "Web Developer", "C++", "Maker", "AngularJS", "Sass", "Compass"],
          "biopic" : "images/me.jpg"
 };

 var education = {
   "schools" : [
     {
      "name" : "Liceo Scientifico G. Peano",
      "location" : "Cuneo (CN) - Italy",
      "degree" : "High School",
      "major" : ["Mathematics", "Phisyc", "Latin", "Italian literature", "History", "Geography", "Chemistry"],
      "dates" : "1998 - 2004",
      "url" : "http://liceocuneo.it"
     },{
      "name" : "Politecnico di Torino",
      "location" : "Torino (TO) - Italy",
      "degree" : "Informatic Engineering",
      "major" : ["Programming Language", "Informatic", "Mathematics", "Phisyc","Chemistry"],
      "dates" : "2004 - 2008",
      "url" : "http://www.polito.it"
     }
  ],
  "onlineCourses" : [
    {
     "title" : "Introduction to Computer Science",
     "school" : "HarvardX -  CS50",
     "dates" : "June 28, 2016",
     "url" : "https://courses.edx.org/certificates/345e97eb6ddd424084291b8e23249b30"
     },{
      "title" : "Introduction to jQuery",
      "school" : "Microsoft -  DEV208x",
      "dates" : "January 13, 2016",
      "url" : "https://courses.edx.org/certificates/b49e5e6fdd4348a39c70af056eebf39f"
     },{
      "title" : "Mobile Application Experiences Part 2: Mobile App Design",
      "school" : "MITx -  21W.789.2x",
      "dates" : "Mar 28, 2016",
      "url" : ""
    },{
      "title" : "HTML / CSS Path and Javascript Path",
      "school" : "CodeSchool",
      "dates" : "February - April 2016",
      "url" : "https://www.codeschool.com/users/2246633"
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "KARIM SRO",
      "title" : "Senior Web Developer",
      "location" : "Boves (CN) - Italy",
      "dates" : "2008 - 2013",
      "description" : "",
      "url" : "http://www.karimsro.it"
    },
    {
      "employer" : "MeGwise SRL",
      "title" : "Chief Digital Officer",
      "location" : "Boves (CN) - Italy",
      "dates" : "2014 - Present",
      "description" : "",
      "url" : "http://www.megwise.it"
    },{
      "employer" : "C.I.A.M. SRL",
      "title" : "Head of Web Development",
      "location" : "Boves (CN) - Italy",
      "dates" : "2013 - Present",
      "description" : "",
      "url" : "http://www.ciamcostruzioni.it"
    }
  ]
};

var projects = {
  "project" : [
    {
      "title" : "Access Control System",
      "dates" : "September 2015 - March 2016",
      "description" : "Arduino based system to store and control access to workplace with NFC badges. All data is stored locally, as backup, and into a remote server. All data is accessible through a webpage that show the ID of the card and the relative timestamp.",
      "images" : [
        {
          "url" : "images/ACS/01.jpg",
          "alt" : "01 balb balb"
        },
        {
          "url" : "images/ACS/02.jpg",
          "alt" : "02 balb asdasffg"
        }
      ],
      "url" : "https://youtu.be/9fkGFCoe40E"
    },
    {
      "title" : "MeGwise website",
      "dates" : "August 2015",
      "description" : "Website for the company I'm working for. I had to develop all the structures of the website, to create a responsive design to makes it available to every screen and platforms. I used different techniques from javascript to css media queries.",
      "url" : "http://www.megwise.it"
    },
    {
      "title" : "Victor Salvi Museum",
      "dates" : "March 2015 - Present",
      "description" : "Institutional website of the Victor Salvi Museum. I've created all the structure of the website as the client wanted. I've made two versions of the website, one for desktop and tablets, and one specifically for mobile devices. I had to create a simple and easy way to update all events and press media contents. To achive this goal, I used jQuery and a Json file(s) to populatd the relative webpages, so I only have to add an entry to the Json to insert new data. On the other hand, the mobile version, is based on jQuery mobile framework.",
      "url" : "http://www.victorsalvimuseum.org"
    }
  ]
}
