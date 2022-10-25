const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function main() {
  let users = await loadUsers();
  let posts = await loadPosts();

  renderUsers(users, posts);
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

function renderUsers(users, posts) {
  const tbody = document.querySelector("tbody");

  users.map((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.name}<td>`;
    tbody.append(tr);
    tr.addEventListener("click", () => renderPosts(user.id, posts));
  });
}

function renderPosts(userId, posts) {
  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = ""; // remove any old content so that only one users posts are showing at a time.

  usersPosts = posts.filter((post) => post.userId === userId);

  usersPosts.map((post) => {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `<div class="card-body p-3 mb-2 bg-dark text-white"><h5 class="card-title">${post.title}</h5><p class="card-text">${post.body}</p></div>`;
    postsDiv.append(div);
  });
}

main();
