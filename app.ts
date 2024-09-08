let resumeForm = document.querySelector("#cv-form") as HTMLElement
let resumeOutput = document.querySelector("#resume-output") as HTMLInputElement


resumeForm?.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    resumeOutput.style.display = "block"

    const name = document.getElementById("name") as HTMLInputElement
    const email = document.getElementById("email") as HTMLInputElement
    const phone = document.getElementById("phone") as HTMLInputElement
    const education = document.getElementById("education") as HTMLInputElement
    const experience = document.getElementById("experience") as HTMLInputElement
    const skills = document.getElementById("skills") as HTMLInputElement

    if(!name || !email || !phone || !education || !experience || !skills){
        alert("please fill all field");
        return;
    }

    (document.getElementById("resumeName") as HTMLElement).innerText = `Name: ${name.value}`;
    (document.getElementById("resumeEmail") as HTMLElement).innerText = `Email: ${email.value}`;
    (document.getElementById("resumePhone") as HTMLElement).innerText = `Phone: ${phone.value}`;
    (document.getElementById("resumeEducation") as HTMLElement).innerText = `Education: ${education.value}`;
    (document.getElementById("resumeExperience") as HTMLElement).innerText = `Experience: ${experience.value}`;
    (document.getElementById("resumeSkils") as HTMLElement).innerText = `Skills: ${skills.value}`

})


