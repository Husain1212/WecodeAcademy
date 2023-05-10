
function addTask() {
  let li = document.createElement("li");
  li.innerHTML = document.getElementById("input-box").value;
  document.getElementById("list-container").appendChild(li);
  document.getElementById("input-box").value = "";
}