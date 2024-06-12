const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

const count = 10;
const apiKey = '7rCQV-KFeDxp_tFkoKBmI16lDC9MMbMVJZPkibfqqCo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photos = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

//check if all images were loaded this function will run for each object
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

//Helper function to Set Attributes on DOM Elements
function setAttributes(element, attributeObj) {
  for (const key in attributeObj) {
    element.setAttribute(key, attributeObj[key]);
  }
}

//Create Elements for links & photos, Add to Dom
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photos.length;
  // Run function for each object in photosArray
  photos.forEach((photo) => {
    // create <a> to link to unsplash
    const anchorElement = document.createElement('a');
    setAttributes(anchorElement, {
      href: photo.links.html,
      target: '_blank',
    });
    //create <img> for photo
    const imgElement = document.createElement('img');
    setAttributes(imgElement, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    imgElement.addEventListener('load', imageLoaded);

    //Put <img> inside <a>, then put both inside imageContainer Element
    anchorElement.appendChild(imgElement);
    imageContainer.appendChild(anchorElement);
  });
}

//Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    photos = data;
    displayPhotos();
  } catch (error) {
    //Catch Error here
  }
}

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    displayPhotos();
  }
});

//onload
getPhotos();
