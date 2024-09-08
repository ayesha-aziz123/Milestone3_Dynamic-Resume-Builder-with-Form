"use strict";
let resumeForm = document.querySelector("#cv-form");
let resumeOutput = document.querySelector("#resume-output");
resumeForm?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    resumeOutput.style.display = "block";
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const skills = document.getElementById("skills");
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }
    document.getElementById("resumeName").innerText = `Name: ${name.value}`;
    document.getElementById("resumeEmail").innerText = `Email: ${email.value}`;
    document.getElementById("resumePhone").innerText = `Phone: ${phone.value}`;
    document.getElementById("resumeEducation").innerText = `Education: ${education.value}`;
    document.getElementById("resumeExperience").innerText = `Experience: ${experience.value}`;
    document.getElementById("resumeSkils").innerText = `Skills: ${skills.value}`;
});
