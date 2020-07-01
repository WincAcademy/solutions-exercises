const addMediaToDOM = json => {
  console.log(json);
  addTitleToDOM(json.title);
  addExplanationToDOM(json.explanation);

  if (json.media_type === "image") {
    addImageToDOM(json.url);
  }
  if (json.media_type === "video") {
    addVideoToDOM(json.url);
  }
};

const addTitleToDOM = title => {
  const h1 = document.createElement("h1");
  h1.textContent = title;
  document.querySelector("main").appendChild(h1);
};

const addExplanationToDOM = explanation => {
  const p = document.createElement("p");
  p.textContent = explanation;
  document.querySelector("main").appendChild(p);
};

const addImageToDOM = imageURL => {
  const img = document.createElement("img");
  img.src = imageURL;
  document.querySelector("main").appendChild(img);
};

const addVideoToDOM = videoURL => {
  const a = document.createElement("a");
  a.href = videoURL;
  a.textContent = "Click here for the video";
  document.querySelector("main").appendChild(a);
};

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response => response.json())
  .then(json => addMediaToDOM(json))
  .catch(error => console.log(`Er was een error, namelijk: ${error}`));
