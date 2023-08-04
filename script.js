const page_about = document.getElementById("page_about");
const page_skills = document.getElementById("page_skills");
const page_proyects = document.getElementById("page_proyects");
const page_contact = document.getElementById("page_contact");
const displayType = "block";

function showBody(page){
    page_about.style.display = "none";
    page_skills.style.display = "none";
    page_proyects.style.display = "none";
    page_contact.style.display = "none";
    switch(page){
        case 'about':
            page_about.style.display= displayType;
            break;
        case 'skills':
            page_skills.style.display= displayType;
            break;
        case 'proyects':
            page_proyects.style.display= displayType;
            break;
        case 'contact':
            page_contact.style.display= displayType;
            break;
    }
}


showBody('about');