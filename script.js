const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function main() {
  let users = await loadUsers();
  let posts = await loadPosts();

  renderUsers(users);

  // console.log("users: ", users);
  // console.log("posts: ", posts);
}

async function loadUsers() {
  try {
    const res = await fetch(USERS_URL);
    data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function loadPosts() {
  try {
    const res = await fetch(POSTS_URL);
    data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function renderUsers(users) {
  const tbody = document.querySelector("tbody");

  users.map((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.name}<td>`;
    tbody.append(tr);
    tr.addEventListener("click", () => renderPosts(user.id));
  });
}

function renderPosts(userId) {
  //todo
  console.log(userId);
}

main();
