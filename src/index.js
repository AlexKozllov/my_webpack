import css from "./css/styles.css";
import template from "./templates/post.hbs";
console.log(template);

import posts from "./date/posts.json";
console.log(posts);

const postList = document.querySelector(".posts");
console.log(postList);

const postItem = template(posts);
console.log(postItem);

postList.insertAdjacentHTML("afterbegin", postItem);
