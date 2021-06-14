// Async - Await

/* const getImagePromise = () => {
  const promise = new Promise((resolve, reject) => {
    resolve("http://gosdaklsdnq.com");
  });
  return promise;
};
getImagePromise().then(console.log); */
export const getImagePromise = async () => {
  try {
    const apiKey = "1q8bsMLFhZWuVmX3BpYp4CJw8RJqIyKR";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
    // const img = document.createElement("img");
    // img.src = url;
    // document.body.append(img);
  } catch (error) {
    // console.error(error);
    return "No existe";
  }
};
getImagePromise();
