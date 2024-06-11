const count = 10;
const apiKey = '7rCQV-KFeDxp_tFkoKBmI16lDC9MMbMVJZPkibfqqCo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //Catch Error here
  }
}

//onload
getPhotos();
