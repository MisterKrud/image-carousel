export const images = () => {
  const images = [
    "images/Image1.jpg",
    "images/Image2.jpg",
    "images/Image3.jpg",
    "images/Image4.jpg",
    "images/Image5.jpg",
  ];

  let imagesArray;

  const getImages = () => {
    imagesArray = [];
    images.forEach((img, indx) => {
      const image = document.createElement("img");
      image.setAttribute("src", img);
      image.classList.add("image");
      image.id = `img${indx}`;
      imagesArray.push(image);
    });
  };
  getImages();

  const imageArray = () => imagesArray;
  const imageArrayLength = imageArray.length;

  return { imageArray, imageArrayLength, getImages, images, imagesArray };
};
