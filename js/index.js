let setRandomColour = () => {
    let ColourR = Math.round(Math.random() * 256);
    let ColourG = Math.floor(Math.random() * 256);
    let ColourB = Math.floor(Math.random() * 256);
    let RGBcolour = `rgb(${ColourR},${ColourG},${ColourB})`;
    let ColourRtitle = ColourR + 128 % 256 ;
    let ColourGtitle = ColourG + 128 % 256 ;
    let ColourBtitle = ColourB + 128 % 256 ;
    let RGBcolourTitle = `rgb(${ColourRtitle},${ColourGtitle},${ColourBtitle})`;
    document.querySelector('body').style.backgroundColor = RGBcolour;
    document.querySelector('h1').style.color = RGBcolourTitle ;
    let hi = `hello`;
    console.log(hi);
};


document.querySelector('.randomize').addEventListener('mouseenter', setRandomColour)
document.querySelector('.randomize').addEventListener('click', setRandomColour)
document.querySelector('.randomize').addEventListener('mouseleave', setRandomColour)
document.querySelector('body').addEventListener('mousemove', setRandomColour)