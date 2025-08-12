import { images } from "./images";

export const carousel = () => {

    const content = document.getElementById('content');
    //Div container framework
    const wideContainer = document.createElement('div');
        wideContainer.id = 'wide-container';
    const pictureFrame = document.createElement('div');
        pictureFrame.id = 'picture-frame';
    //

    
    const imageData = images();
    content.appendChild(pictureFrame);
    pictureFrame.appendChild(wideContainer);
    
    imageData.imageArray.forEach(img => {
        wideContainer.appendChild(img);
    });

return pictureFrame;
}