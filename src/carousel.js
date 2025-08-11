export const carousel = () => {
    //Div container framework
    const wideContainer = document.createElement('div');
        wideContainer.id = 'wide-container';
    const pictureFrame = document.createElement('div');
        pictureFrame.id = 'picture-frame';


    const content = document.getElementById('container');

    content.appendChild(pictureFrame);
    pictureFrame.appendChild(wideContainer);
    

return pictureFrame;
}