// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var teamLeadership = document.getElementById('teamLeadershipHover');
teamLeadership.onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    modal.style.display = "block";
    modalImg.src = "images/teamLeadership.jpg";
    captionText.innerHTML = "This multi-week training taught us how to manage interactions with all levels of colleagues.";
};

var engineeringExcellence = document.getElementById('engineeringExcellenceHover');
engineeringExcellence.onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    modal.style.display = "block";
    modalImg.src = "images/engineeringExcellence.jpg";
    captionText.innerHTML = "Awarded for exceeding expectations in my role as an R&D engineer.";
};

var individualRecruiting = document.getElementById('individualRecruitingHover');
individualRecruiting.onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    modal.style.display = "block";
    modalImg.src = "images/individualRecruiting.jpg";
    captionText.innerHTML = "Awarded for individual efforts as host, campus recruiter, interviewer, and follow-up contact for candidates offered employment.";
};

var teamRecruiting = document.getElementById('teamRecruitingHover');
teamRecruiting.onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    modal.style.display = "block";
    modalImg.src = "images/teamRecruiting.jpg";
    captionText.innerHTML = "Awarded as leader and key contributor of a recruiting team that excelled.";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};