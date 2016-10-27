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
      "description" : "I had to maintain the pre-existent IT infrastructure. I started to introduce some new features to improve the current working process. My first improve was a NAS, for backup and sharingsolution. I crafted, with the accounting Office, some custom Excel sheets to hold all the bank records, to speed up all the bank reports, but those are some examples of what I have done inside the company. Next, I had to remodel and redesign the company website. I started crafting handwritten websites for the other company under the KARIM SRO company group, with the help of the Design Office.",
      "url" : "http://www.karimsro.it"
    },
    {
      "employer" : "MeGwise SRL",
      "title" : "Chief Digital Officer",
      "location" : "Boves (CN) - Italy",
      "dates" : "2014 - Present",
      "description" : "I'm working side to side with the Design Office, to create beautiful and modern websites for our clients.",
      "url" : "http://www.megwise.it"
    },{
      "employer" : "C.I.A.M. SRL",
      "title" : "Head of Web Development",
      "location" : "Boves (CN) - Italy",
      "dates" : "2013 - Present",
      "description" : "My main focus is to develop, with the new technologies available, every possible tool to create an avanguard environment working place. I created a custom iOS application for the MADE Expo exhibition, in with you could collect clients infos and show the company catalogues. I also created the company website, alongside the Design Office.",
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
      "url" : "https://youtu.be/9fkGFCoe40E"
    },
    {
      "title" : "MeGwise website",
      "dates" : "August 2015",
      "description" : "Website for the company I'm working for. I had to develop all the structures of the website, to create a responsive design to makes it available to every screen and platforms. I used different techniques from javascript to css media queries.",
      "url" : "http://www.megwise.it",
      "images" : [
        {
          "url" : "images/megwise/megwise_01.jpg",
          "alt" : "Home page of MeGwise website"
        },
        {
          "url" : "images/megwise/megwise_02.jpg",
          "alt" : "Another view of the website, with some data filtered from the menu"
        }
      ]
    },
    {
      "title" : "Victor Salvi Museum",
      "dates" : "March 2015 - Present",
      "description" : "Institutional website of the Victor Salvi Museum. I've created all the structure of the website as the client wanted. I've made two versions of the website, one for desktop and tablets, and one specifically for mobile devices. I had to create a simple and easy way to update all events and press media contents. To achive this goal, I used jQuery and a Json file(s) to populatd the relative webpages, so I only have to add an entry to the Json to insert new data. On the other hand, the mobile version, is based on jQuery mobile framework.",
      "url" : "http://www.victorsalvimuseum.org",
      "images" : [
        {
          "url" : "images/salvi/salvi-1.jpg",
          "alt" : "Harp and Victor Salvi Museum Logo"
        },
        {
          "url" : "images/salvi/salvi-2.jpg",
          "alt" : "Screenshot of a partial of the website main page"
        },
        {
          "url" : "images/salvi/salvi-3.jpg",
          "alt" : "Collection of slides of the main page carousel"
        },
        {
          "url" : "images/salvi/salvi-4.jpg",
          "alt" : "Victor Salvi Museum Pinterest page and famous photo with Prince Charles"
        },
        {
          "url" : "images/salvi/salvi-5.jpg",
          "alt" : "Glympse of the Harps Collection page"
        }
      ]
    }
  ]
};


bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  var formattedPic = HTMLbioPic.replace("%data%",bio.biopic).replace("%alt%",bio.name);

  $("#header").prepend(formattedPic);
  $("#header").prepend(formattedMessage);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedWebsite = HTMLwebsite.replace("%data%",bio.contacts.website);

  var idString = ["#topContacts", "#footerContacts"];
  for ( i = 0, id; i < idString.length; i++){
    id = idString[i];
    $(id).append(formattedMobile);
    $(id).append(formattedEmail);
    $(id).append(formattedTwitter);
    $(id).append(formattedGithub);
    $(id).append(formattedWebsite);
    $(id).append(formattedLocation);
  }

  $('#header').append(HTMLskillsStart);

  for ( i = 0, id; i < bio.skills.length; i++){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkill);
  }

};
bio.display();

work.display = function(){
  $('#workExperience').append(HTMLworkStart);
  for( i = 0; i < work.jobs.length; i++){
    var currentJob = work.jobs[i];
    var formattedEmployer = HTMLworkEmployer.replace("%data%",currentJob.employer).replace("#",currentJob.url);
    var formattedTitle = HTMLworkTitle.replace("%data%",currentJob.title);
    var formattedLocation = HTMLworkLocation.replace("%data%",currentJob.location);
    var formattedDates = HTMLworkDates.replace("%data%",currentJob.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",currentJob.description);

    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

projects.display = function(){
  $('#projects').append(HTMLprojectStart);
  for( i = 0; i < projects.project.length; i++){
    var currentProject = projects.project[i];
    var formattedTitle = HTMLprojectTitle.replace("%data%",currentProject.title).replace("#",currentProject.url);
    var formattedDates = HTMLprojectDates.replace("%data%",currentProject.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",currentProject.description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    if(currentProject.images !== null)
    {
      var formattedImgs = "";
      for(var j = 0; j < currentProject.images.length;j++){
        var currentImg = currentProject.images[j];
        formattedImgs += HTMLprojectImage.replace("%data%",currentImg.url);
        //check if there is a specific name for the picture
        if(currentImg.alt !== null)
          formattedImgs = formattedImgs.replace("%alt%",currentImg.alt);
        else
          formattedImgs = formattedImgs.replace("%alt%",currentProject.title + " image " + j);

      }
      $(".project-entry:last").append(formattedImgs);
    }

  }
};

projects.display();

education.display = function(){
  $('#education').append(HTMLschoolStart);
  for( i = 0; i < education.schools.length; i++){
    var currentSchool = education.schools[i];
    var formattedName = HTMLschoolName.replace("%data%",currentSchool.name).replace("#",currentSchool.url);
    var formattedLocation = HTMLschoolLocation.replace("%data%",currentSchool.location);
    var formattedDegree = HTMLschoolDegree.replace("%data%",currentSchool.degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%",currentSchool.major);
    var formattedDates = HTMLschoolDates.replace("%data%",currentSchool.dates);

    $(".education-entry:last").append(formattedName + formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
  }
  if(education.onlineCourses.length > 0){
    $("#education").append(HTMLonlineClasses);
    $('#education').append(HTMLschoolStart);
    for( i = 0; i < education.onlineCourses.length; i++){
      var currentOnline = education.onlineCourses[i];
      var formattedTitle = HTMLonlineTitle.replace("%data%",currentOnline.title).replace("#",currentOnline.url);
      var formatterSchool = HTMLonlineSchool.replace("%data%",currentOnline.school);
      var formattedDatesSchool = HTMLonlineDates.replace("%data%",currentOnline.dates);
      var formattedUrl = HTMLonlineURL.replace("%data%",currentOnline.url);

      $(".education-entry:last").append(formattedTitle + formatterSchool);
      $(".education-entry:last").append(formattedDatesSchool);
      $(".education-entry:last").append(formattedUrl);
    }
  }
};

education.display();

$('#mapDiv').append(googleMap);
