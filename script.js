const menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
  menu.querySelectorAll('li').forEach(node => {
    node.firstChild.classList.remove('mark')
  });
  event.target.classList.add('mark');
});

//-------------Конец переключения меню---------------------

const pictureList = document.getElementById('slider-images');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right'),
  sliderBackground = document.querySelector(".slider");


const rightHandler = (event) => {
  arrowRight.removeEventListener("click", rightHandler);
  const firstPicture = pictureList.querySelectorAll('.slider-pic-container')[0];
  const secondPicture = pictureList.querySelectorAll('.slider-pic-container')[1];

  if (firstPicture.id === 'first-pic') {
    sliderBackground.style.background = "#648BF0"
  } else sliderBackground.style.background = "#F06C64";
  firstPicture.style.marginLeft = "-100%";
  const firstPictureClone = firstPicture.cloneNode(true);
  firstPictureClone.style.marginLeft = "0";
  firstPicture.addEventListener("transitionend", () => {
    firstPicture.remove();
    arrowRight.addEventListener("click", rightHandler)
  });
  pictureList.append(firstPictureClone);

};


const leftHandler = (event) => {
  arrowLeft.removeEventListener("click", leftHandler);
  const firstPicture = pictureList.querySelectorAll('.slider-pic-container')[0];
  const secondPicture = pictureList.querySelectorAll('.slider-pic-container')[1];

  const secondPictureClone = secondPicture.cloneNode(true);
  secondPictureClone.style.marginLeft = "-100%";
  pictureList.prepend(secondPictureClone);

  setTimeout(() => {
    if (firstPicture.id === 'first-pic') {
      sliderBackground.style.background = "#648BF0"
    } else sliderBackground.style.background = "#F06C64";
    secondPictureClone.addEventListener("transitionend", () => {
      secondPicture.remove();
      arrowLeft.addEventListener("click", leftHandler)
    });
    secondPictureClone.style.marginLeft = "0";
  }, 0)
};

arrowRight.addEventListener("click", rightHandler);
arrowLeft.addEventListener("click", leftHandler);


//-------------------- Конец слайдера ------------------------------


const phoneVertical = document.getElementById("phone-vertical"),
  phoneHorizontal = document.getElementById("phone-horizontal"),
  screenVertical = document.getElementById("screen-vertical"),
  screenHorizontal = document.getElementById("screen-horizontal");

phoneVertical.addEventListener("click", () => {
  getComputedStyle(screenVertical).display === "none" ? screenVertical.style.display = "block" :
    screenVertical.style.display = "none";
});

phoneHorizontal.addEventListener("click", () => {
  getComputedStyle(screenHorizontal).display === "none" ? screenHorizontal.style.display = "block" :
    screenHorizontal.style.display = "none";
});

//----------------------Конец переключения экранов---------------------------

const labels = document.querySelector('.portfolio-labels'),
  labelsElements = [...labels.querySelectorAll('span')];
const portfolioGallery = document.querySelector('.portfolio-gallery');

labels.addEventListener('click', (event) => {
  labels.querySelectorAll('span').forEach(node => {
    node.classList.remove('checked')
  });
  const images = portfolioGallery.querySelectorAll('img');
  images.forEach((img, index) => {
    img.style.order = ((index + labelsElements.indexOf(event.target)) % images.length).toString()
  });
  event.target.classList.add('checked');
});

document.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'IMG') {
    galleryBorder.style.display = "none"
  }
});

const gallery = document.querySelector('.portfolio-gallery'),
  galleryBorder = document.getElementById('gallery-border');
gallery.addEventListener('click', (event) => {
  galleryBorder.style.top = event.target.offsetTop - 5 + 'px';
  galleryBorder.style.left = event.target.offsetLeft - 5 + 'px';
  galleryBorder.style.display = "block"
});

//----------------------Конец блока галереи---------------------------

const contactForm = document.querySelector(".contact-form"),
  contactSend = document.querySelector(".contact-send");
contactSend.addEventListener("click", (event) => {
  event.preventDefault();
  let subject = document.getElementById('subject'),
    descriptionProject = document.getElementById('description-project'),
    subjectText = '',
    descriptionProjectText = '';

  if (subject.value === "Singolo") {
    subjectText = "Тема: Singolo"
  } else if (subject.value === "") subjectText = "Без темы";

  if (descriptionProject.value === "Portfolio project") {
    descriptionProjectText = "Описание: Portfolio project"
  } else if (descriptionProject.value === "") descriptionProjectText = "Без описания";

  alert(`Письмо отправлено \n${subjectText} \n${descriptionProjectText}`)
});




