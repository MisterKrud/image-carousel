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

    // const imgDivArray = imageData.imageArray
    //     imgDivArray.forEach(imgDiv => {
    //         wideContainer.appendChild(imgDiv);
    //     })
    
    imageData.imageArray.forEach((img, idx) => {
        const imgDiv = document.createElement('div');
     
        imgDiv.appendChild(img);
        
        imgDiv.classList.add('img-div')
        imgDiv.id = `img-${idx}`
        wideContainer.appendChild(imgDiv);
    });

return pictureFrame;
}