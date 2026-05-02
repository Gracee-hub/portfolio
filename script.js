function addProject() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    if (title === "" || description === "") {
        alert("Please fill in all fields");
        return;
    }

    let projectBox = document.createElement("div");
    projectBox.className = "project-box";

    projectBox.innerHTML =
        "<h3>" + title + "</h3><p>" + description + "</p>";

    document.getElementById("projectsContainer").appendChild(projectBox);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}