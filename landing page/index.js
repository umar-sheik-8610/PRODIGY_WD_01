const path = window.location.pathname;
const route = path.substring(path.lastIndexOf("/") + 1);

const about = document.getElementById("about");
const index = document.getElementById("index");
const contact = document.getElementById("contact");
if (route === "index.html") {
  index.style.borderBottom = "3px solid #20d761";
} else if (route === "about.html") {
  about.style.borderBottom = "3px solid #20d761";
} else if (route === "contact.html") {
  contact.style.borderBottom = "3px solid #20d761";
}
