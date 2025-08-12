

export const images = () =>{
   const image1 = document.createElement('img');
    
   const image2 = document.createElement('img');
   
   const image3 = document.createElement('img');
   
   const image4 = document.createElement('img');
   
   const image5 = document.createElement('img');
   
   
    const imageArray = [image1, image2, image3, image4, image5];

    imageArray.forEach((img, indx) =>{
        
         const imgId = (indx + 1)
        const imgLoader = () => {
         img.setAttribute('src',`https://picsum.photos/400/300?random=${Date.now()}${imgId}`)
        }
        img.classList.add('image');
       
        img.id = `img${indx}`
        img.onerror = imgLoader;
        imgLoader();
    })

    const imageArrayLength = imageArray.length;


return { imageArray, imageArrayLength}
}