const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider'); // Ensure this matches your HTML structure
const imgSlider = document.querySelectorAll('.img-slider'); 
const items = document.querySelectorAll('.item'); 


let index = 0;

thumbs.forEach((thumb, ind) => { // Corrected syntax for forEach
    thumb.addEventListener('click', () => { // Corrected typo in addEventListener
        
        document.querySelector('.thumb .selected').classList.remove('selected');
        thumb.classList.add('selected');
        
        index = ind;

        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`; // Use backticks for template literals
        });

        imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`; // Use backticks for template literals
        });

        document.querySelector('.item.active').classList.remove('active');
        items[index].classList.add('active');


    });
});