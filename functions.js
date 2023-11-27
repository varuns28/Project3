var STYLESHEET_KEY = "stylesheet";

window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    //var stylesheetValue = "style2.css";
    var stylesheetValue = localStorage.getItem(STYLESHEET_KEY) || "style2.css";

    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainstylesheet");
    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", stylesheetValue);
    localStorage.setItem(STYLESHEET_KEY, stylesheetValue);
    showsectionall(stylesheetValue);
}
function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleElement = document.getElementById("mainstylesheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var fileName = styleElement.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var newFileName = "style2.css"
    if (fileName == "style1.css") {
        newFileName = "style2.css"
    }
    else{
        newFileName = "style1.css"
        }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElement.setAttribute("href", newFileName);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem(STYLESHEET_KEY, newFileName);
    showsectionall(newFileName);
}
function switchStyle() {
    var theme = document.getElementsByTagName('link')[0];
 
    if (theme.getAttribute('href') == 'style2.css') {
                theme.setAttribute('href', 'style1.css');
            } else {
                theme.setAttribute('href', 'style2.css');
            }
}

function showsectionall(fileName) {
    var elementname1 = "section1";
    var elementname3 = "section3";
    var elementname4 = "section4";
    var elementname5 = "section11";
    var elementname6 = "section31";
    var elementname7 = "section41";

    if (fileName == "style1.css") {
       elementname1 = "section11";
       elementname3 = "section31";
       elementname4 = "section41";
       elementname5 = "section1";
       elementname6 = "section3";
       elementname7 = "section4";
    }
    sec1 = document.getElementById(elementname1);
    sec3 = document.getElementById(elementname3);
    sec4 = document.getElementById(elementname4);
    sec2 = document.getElementById("section2")
    sec5 = document.getElementById(elementname5);
    sec6 = document.getElementById(elementname6);
    sec7 = document.getElementById(elementname7);

    var valueblock = "block";
    var valuenone  = "none";

    sec1.style.display=valueblock;
    sec2.style.display=valueblock;
    sec3.style.display=valueblock;
    sec4.style.display=valueblock;

    sec5.style.display=valuenone;
    sec6.style.display=valuenone;
    sec7.style.display=valuenone;
}

function showsection(secvalue) {
    var styleElement = document.getElementById("mainstylesheet");
    var fileName = styleElement.getAttribute("href");

    var elementname1 = "section1";
    var elementname3 = "section3";
    var elementname4 = "section4";

    var valueblock = "block";
    var valuenone  = "none";

    if (fileName == "style1.css") {
       elementname1 = "section11";
       elementname3 = "section31";
       elementname4 = "section41";
    }
    sec1 = document.getElementById(elementname1);
    sec3 = document.getElementById(elementname3);
    sec4 = document.getElementById(elementname4);
    sec2 = document.getElementById("section2")

    if (secvalue == 1) {
        sec1.style.display=valueblock;
        sec2.style.display=valuenone;
        sec3.style.display=valuenone;
        sec4.style.display=valuenone;
    }
    else if (secvalue == 2){
        sec1.style.display=valuenone;
        sec2.style.display=valueblock;
        sec3.style.display=valuenone;
        sec4.style.display=valuenone;
    }
    else if (secvalue == 3){
        sec1.style.display=valuenone;
        sec2.style.display=valuenone;
        sec3.style.display=valueblock;
        sec4.style.display=valuenone;
    }
    else {
        sec1.style.display=valuenone;
        sec2.style.display=valuenone;
        sec3.style.display=valuenone;
        sec4.style.display=valueblock;
    }
}
function showsection1(){
   showsection(1);
}
function showsection2(){
   showsection(2);
}
function showsection3(){
   showsection(3);
}
function showsection4(){
   showsection(4);
}

var aboutme = "Howdy, I'm Varun! I was born and raised in Austin Texas and am a junior majoring in computer science with a minor in statistics more interested in Artificial Intelligence specifically. My fascination for computer science mainly stemmed from just having to think about how to approach so many tough problems/projects I was tasked with. The idea of having multiple people work on a problem/project being able to approach it in many ways with multiple solutions excited me to work with others in a team because hearing other ideas help create multiple pathways of thoughts which give much more room for creativity and also communicating your thoughts out loud force you to clarify and organize those thoughts in a way they would make sense. Some of my favorite things to do outside of school are play tennis, ping pong or basketball, listen to music (specifically EDM music), DJ and travel. I have been playing tennis competitively from the age of 7 and was a team captain that played for Westwood High School Varsity tennis the year Westwood won its very FIRST state championship. Being a part of the varsity team at Westwood was such a pleasure as I have made so many friends during those years and they are still some of the friends I talk very often to to this very day. Ever since I was a child, we used to make trips to India once every two years. During those visits we visit different parts of India. That caused new interest in me to travel more once I graduate. This past year I have been extremely grateful to travel to Venice, Naples, Positano, Amalfi, Capri in Italy, Vancouver and Seattle. Being able to learn, embrace Italian culture and visit new places that were nothing like where I have lived for my whole life created some captivating memories.";

var areaOfInterest = "My main area of interest is Artificial Intelligence. I started to become interested in AI after competing in a hackathon that was centered around programming the most efficient hider and a seeker bot in a game of hide and seek. The idea of allowing software to learn automatically from detecting patterns in data is very cool to me and is something I would like to do in my future.";

var aboutAI = "Some Artificial Intelligence articles I found very interesting are <a href=\"https://www.brookings.edu/research/how-artificial-intelligence-is-transforming-the-world/\"> How artificial intelligence is transforming the world </a>, <a href=\"https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/\"> BENEFITS & RISKS OF ARTIFICIAL INTELLIGENCE\" </a>, and <a href=\"https://www.quantamagazine.org/artificial-intelligence-will-do-what-we-ask-thats-a-problem-20200130/\"> Artificial Intelligence Will Do What We Ask. That's a Problem.</a>";

var fascination = "My fascination for computer science mainly stemmed from just having to think about how to approach so many tough problems/projects I was been tasked with. The idea of having multiple people work on a problem/project being able to approach it in many ways with multiple solutions excited me to work with others in a team because hearing other ideas help create multiple pathways of thoughts which give much more room for creativity and also communicating your thoughts out loud force you to clarify and organize those thoughts in a way they would make sense. ";

var favorite = "Some of my favorite things to do outside of school are play tennis, ping pong or basketball, listen to music (specifically EDM music), DJ and travel. I have been playing tennis competitively from the age of 7 and was a team captain that played for Westwood High School Varsity tennis the year Westwood won its very FIRST state championship. Ever since I was a child, we used make trips to India once every two years.  During those visits we visit different parts of India. That caused new interest in me to travel more once I graduate. This past year I have been extremely grateful to travel to Venice, Naples, Positano, Amalfi, Capri in Italy, Vancouver and Seattle. Being able to learn, embrace the Italian culture and visit new places that were nothing like where I have lived for my whole life created some captivating memories.";

var volunteerAHT = "Volunteered for several hours at the Austin Hindu Temple taking care of accounting and ledger work.  The temple's daily transactions are logged and ledger has been kept up to date on a daily basis.  All accounting work is ensured to be accurate. This work enabled Temple's management to focus on other duties and offloaded this effort to ease their overall work responsibilities";

var bluetooth = "My idea was a bluetooth 2 technology device for tennis players that would ease the work for keeping track of scores and make it automated. The players will find this device very handy and it has potential of even used for advanced tournaments";

var pokemon = "We have created a menu driven and user interactive game that players will enjoy using. This game provides an initial menu to load player file or create player file. The user can choose to load a player file if it already exists or user can create player. Then user will be provided with main menu where user can perform many operations.";

var perfecthash = "We are going through taking each city and hashing it then putting that city at the hash index the hash function produced, and we do that for every city given. The purpose of the project was to use hash tables and deal with collisions";

var cache = "Takes data and parameters as input and populates table with appropriate values. Solution was developed using C++";
var markethead = "Head of Marketing for Texas Blockchain at A&M. Lead our online prescense. Created and maintain our website discord and twitter. Oversee the development and implementation of the marketing strategies. This club is about starting from the basics and building the knowledge as blockchain is becoming more popular"

var varsity = "Aside from being a part of the varsity tennis team at Westwood, I created the website for the varsity team booster club and continued to maintain the website that was mainly a place people could become members and sponsors. Did this through my senior year of high school";

var aht = "Took care of accounting and ledger work at the Austin Hindu Temple.  The temple's daily transactions are logged and the ledger has been kept up to date on a daily basis.  All accounting work is ensured to be accurate.";

var coach = "Volunteered as the assistant tennis coach for Grisham Middle Scool for three years of high school teaching several middle school children the basics of tennis and helping the coach run practices on Tuesdays and Thursdays";
