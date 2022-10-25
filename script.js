const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function main() {
  let users = await loadUsers();
  let posts = await loadPosts();

  console.log("users: ", users);
  console.log("posts: ", posts);
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

function renderUsers() {
  //todo
}

function renderPosts() {
  //todo
}

main();
