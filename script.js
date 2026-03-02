function addIdea() {
  let name = document.getElementById("name").value;
  let idea = document.getElementById("idea").value;

  let box = document.createElement("div");
  box.className = "idea";
  box.innerHTML = "<b>" + name + "</b>: " + idea;

  document.getElementById("list").appendChild(box);
}