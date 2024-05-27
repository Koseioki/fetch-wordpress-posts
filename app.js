"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const posts = await getPosts();
  // displayPosts(posts);
  displayPostGrid(posts);

}

async function getPosts(){
  const response = await fetch("https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard ");
  const data = await response.json();
  // console.log(data)
  return data;
}

// function displayPosts(posts){
//   const postsList = document.querySelector("#post-list");
//   for (const post of posts){
//     postsList.insertAdjacentHTML(
//       "beforeend",`
// <li>${post.title.rendered}</li>
// `
//     );
//   }
// }

function displayPostGrid(posts){
  const postsGrid = document.querySelector("#posts-grid");
  for (const post of posts) {
    postsGrid.insertAdjacentHTML(
      "beforeend",`
      <article class="grid-item">
      <img src="${post.acf.image}" alt="${post.title.rendered}">
      <h2>${post.title.rendered}</h2>
      </article>`
    );
  }
}