import { images } from "./images";
import { slideForward } from "./slideMovement";

export const carousel = () => {

    let navDotArray = []

    const content = document.getElementById('content');
    //Div container framework
    const wideContainer = document.createElement('div');
        wideContainer.id = 'wide-container';
    const pictureFrame = document.createElement('div');
        pictureFrame.id = 'picture-frame';
    const navDotContainer = document.createElement('div');
        navDotContainer.id = 'nav-dot-container';
    
    

    //Append containers
    const imageData = images();
    const imageLinks = imageData.images
    content.appendChild(pictureFrame);
    pictureFrame.append(wideContainer, navDotContainer);

    

    //Get images (from images.js)
    //Place each img inside a div and append to #wide-container
   const renderImages = () => { 
   
    // imageData.getImages();
    const imageArr = imageData.imagesArray;
    console.log('Render Images: '+imageArr)
    imageArr.forEach((img, idx) => {
        const imgDiv = document.createElement('div');
     wideContainer.appendChild(imgDiv);
        imgDiv.appendChild(img);
        
        imgDiv.classList.add('img-div')
        imgDiv.id = `img-${idx}`

        if (navDotArray.length < imageArr.length) {
    const navDot = document.createElement('btn');
    navDot.classList.add('nav-dot');
    navDot.id = `dot-${idx}`
    navDotContainer.appendChild(navDot);
       navDotArray.push(navDot)
        }
    
    });
     console.log('images rendered');
     console.log(navDotArray);
}

renderImages();

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

    const moveNext = () => {
   const visibleDiv = document.querySelector('.img-div')
        wideContainer.removeChild(visibleDiv);
        wideContainer.appendChild(visibleDiv);
    }

    const movePrev = () => {
        const lastDiv = wideContainer.lastChild;
        wideContainer.removeChild(lastDiv);
        wideContainer.prepend(lastDiv);
    }

    const goToImg = (imgNumber) => {
        console.log('dot clicked')
        wideContainer.innerHTML = '';
        renderImages();
        for (let i=1; i<imgNumber; i++) {
        moveNext()
        
        }
    }
    

    navDotArray.forEach((dot, index) => {
       
        dot.addEventListener('click',() => goToImg(index+1)
    );
    })
   
    fwdButton.addEventListener('click', moveNext);

    bkButton.addEventListener('click', movePrev);



 
    

  

return { pictureFrame, renderImages }
}