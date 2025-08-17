import { images } from "./images";
import { carousel } from "./carousel";


const imageData = images();

// const content = carousel()

const startingImage = imageData.imageArray[2];
const imageDivArray = document.querySelectorAll('.img-div');

//Get images
//Add class 'hidden' to hide images
    //either hide them throughdisplay: none or position in center (align -self)
//Create buttons 'Next' and 'Previous'
//Get id of imgDiv
//Click next to active imgDiv with id+1 && click prev to activate imgDiv with id-1

    const visibleImage = () => {
       return document.querySelector('.visible')
       
    }
    // console.log(visibleImage())



export const slideForward = () =>{
    imageData.getImages();
   
    const imageArr = imageData.imagesArray
    console.log(imageData.images);
    const visibleImage = imageArr.shift();
    console.log(imageData.images);

    imageArr.push(visibleImage);
    console.log(imageData.images);





    //    const currentImage = visibleImage();
    //    const currentImageIndex = imageData.imageArray.indexOf(currentImage)
    //     currentImage.classList.remove('visible');

    //     if (currentImageIndex >= imageData.imageArrayLength){
    //         console.log('Already at the end');
    //         return
    //     } else {
    //         console.log(imageData.imageArray);
    //    const nextVisibleImage = imageData.imageArray[currentImageIndex+1]
    //    const nextImage = nextVisibleImage.parentElement;
    //  nextImage.classList.add('visible');
    //  console.log(nextVisibleImage)
    //     console.log('forward');
       
    //     }
    }



export const slideBack = () => {

}



 

//    const repeatMovement = () => {
//      moveNext();
//      setTimeout(repeatMovement, 5000)
//    }
//    repeatMovement();