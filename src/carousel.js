import { images } from "./images";
import { slideForward } from "./slideMovement";

export const carousel = () => {


    const content = document.getElementById('content');
    //Div container framework
    const wideContainer = document.createElement('div');
        wideContainer.id = 'wide-container';
    const pictureFrame = document.createElement('div');
        pictureFrame.id = 'picture-frame';
    
    

    //Append containers
    const imageData = images();
    content.appendChild(pictureFrame);
    pictureFrame.appendChild(wideContainer);

    //Get images (from images.js)
    //Place each img inside a div and append to #wide-container
    imageData.imageArray.forEach((img, idx) => {
        const imgDiv = document.createElement('div');
     
        imgDiv.appendChild(img);
        
        imgDiv.classList.add('img-div')
        imgDiv.id = `img-${idx}`
        wideContainer.appendChild(imgDiv);
        if (idx == 2) {
            imgDiv.classList.add('visible')
        }
    });

    //Render 'Next' and 'Prev' buttons
    const buttonDiv = document.createElement('div');
        buttonDiv.id = 'button-div'
        
   
    const bkButton = document.createElement('button');
        bkButton.id = 'bk-button';
        bkButton.classList.add('btn');
        bkButton.innerText = 'Prev';

         const fwdButton = document.createElement('button');
        fwdButton.id = 'fwd-button';
        fwdButton.classList.add('btn')
        fwdButton.innerText = 'Next';

    content.appendChild(buttonDiv);
    buttonDiv.append(bkButton, fwdButton);

//    const visibleImage = imageData.imageArray[2]
//    console.log(visibleImage)
//     const visibleImageIndex = imageData.imageArray.indexOf(visibleImage);
//     console.log(visibleImageIndex)
    
//      const slideForward = () =>{
//         const visibleImage = imageData.imageArray[2]
//         console.log(visibleImage)
//         const visibleImageIndex = imageData.imageArray.findIndex(visibleImage);
        
//         visibleImage.classList.remove('visible');
//         const nextVisibleImage = imageData.imageArray[visibleImageIndex+1];
//         nextVisibleImage.classList.add('visible');
    // }




    
   
    fwdButton.addEventListener('click', slideForward);

 
    

  

return pictureFrame;
}