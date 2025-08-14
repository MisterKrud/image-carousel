import { images } from "./images";

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
    });


    const buttonDiv = document.createElement('div');
        buttonDiv.id = 'button-div'
        
    const fwdButton = document.createElement('button');
        fwdButton.id = 'fwd-button';
        fwdButton.classList.add('btn')
        fwdButton.innerText = 'Next';
    const bkButton = document.createElement('button');
        bkButton.id = 'bk-button';
        bkButton.classList.add('btn');
        bkButton.innerText = 'Prev';

    content.appendChild(buttonDiv);
    buttonDiv.append(fwdButton, bkButton);


    const slideForward = () =>{

    }

return pictureFrame;
}