async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  var data = await response.json();

  let userId = document.getElementById("userId");
  let id = document.getElementById("id");
  let title = document.getElementById("title");

  userId.innerHTML = data.userId;
  id.innerHTML = data.id;
  title.innerHTML = data.title;
}

function clearData() {
  let userId = document.getElementById("userId");
  let id = document.getElementById("id");
  let title = document.getElementById("title");

  userId.innerHTML = "";
  id.innerHTML = "";
  title.innerHTML = "";
}
