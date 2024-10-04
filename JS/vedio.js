// console.log("js file added");
function time(time) {
  const hour = parseInt(time / 3600);
  let sec = parseInt(time % 3600);
  const min = parseInt(sec / 60);
  sec = sec % 60;
  return `${hour} hour ${min} min ${sec} second ago`;
}

// 1. fetch, load and show categories on html
// create loadCategories
const loadCategories = () => {
  // console.log("loadCategories function load.");
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

const loadCategoryVideos = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((err) => console.log(err));
};

// create displayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    console.log(item);

    // create a button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button onclick="loadCategoryVideos(${item.category_id})" class="btn"> ${item.category} </button>
    `;

    // add button to category container ----->>
    categoryContainer.append(buttonContainer);
  });
};

// create load-videos
const loadVideos = () => {
  // console.log("loadCategories function load.");
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";

  if (videos.length === 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
    <div class = "min-h-[300px] flex flex-col gap-5 justify-center items-center">
    <img src="Icon.png" />
    </div>
    <h2 class = "text-center text-xl font-bold"> No Content here in this Category</h2>
    `;
  } else {
    videoContainer.classList.add("grid");
  }
  videos.forEach((video) => {
    console.log(video);

    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
    <figure class ="h-[200px] relative">
    <img
      class = "h-full w-full object-cover"
      src= ${video.thumbnail} />

      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class = "absolute right-2 bottom-2 text-white text-xs bg-black rounded p-1"> ${time(
              video.others.posted_date
            )} </span>`
      }
      
  </figure>

  <div class="px-0 py-2">
    
    <div>
        <img class ="w-10 h-10 rounded-full object-cover" src= "${
          video.authors[0].profile_picture
        }" />
    </div>

    <div>
        <h2 class = "font-bold"> ${video.title} </h2>
        <div class ="flex items-center gap-2">
           <p class = "text-gray-400"> ${video.authors[0].profile_name} </P>
           
           ${
             video.authors[0].verified === true
               ? '<img class = "w-5" src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />'
               : ""
           }
        </div>

        <p> </P>
    </div>
  </div>
    `;
    videoContainer.append(card);
  });
};

loadCategories();
loadVideos();

{
  /*  */
}
