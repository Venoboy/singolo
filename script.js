const menu = document.getElementById('menu');

let phoneVertical = document.querySelector(".first-pic-click"),
  phoneHorizontal = document.querySelector(".second-pic-click"),
  screenVertical = document.getElementById("screen-vertical"),
  screenHorizontal = document.getElementById("screen-horizontal");

//-------------------Переменные-----------------------------

menu.addEventListener('click', (event) => {
  document.removeEventListener('scroll', scrollHandler);
  menu.querySelectorAll('li').forEach(node => {
    node.firstChild.classList.remove('mark')
  });
  event.target.classList.add('mark');
  setTimeout(() => {
    document.addEventListener("scroll", scrollHandler);
  }, 1000)
});

const scrollHandler = () => {
  const current = window.scrollY + 90,
  blocks = document.querySelectorAll('.wrapper section'),
  links = menu.querySelectorAll('a');
  blocks.forEach((block, index) => {
    if (block.offsetTop < current && (block.offsetTop + block.clientHeight) > current) {
      if (current + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        index += 1;
      }
      links.forEach(link => {
        link.classList.remove('mark')
      });
      links[index].classList.add('mark');
    }
  } );
};

document.addEventListener("scroll", scrollHandler);

//-------------Конец переключения меню---------------------

const pictureList = document.getElementById('slider-images');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right'),
  sliderBackground = document.querySelector(".slider");


const rightHandler = () => {
  arrowRight.removeEventListener("click", rightHandler);
  const firstPicture = pictureList.querySelectorAll('.slider-pic-container')[0];

  if (firstPicture.id === 'first-pic') {
    sliderBackground.style.background = "#648BF0"
  } else {
    sliderBackground.style.background = "#F06C64";
  }
  firstPicture.style.marginLeft = "-100%";
  const firstPictureClone = firstPicture.cloneNode(true);
  firstPictureClone.style.marginLeft = "0";
  firstPicture.addEventListener("transitionend", () => {
    firstPicture.remove();
    arrowRight.addEventListener("click", rightHandler)
  });
  pictureList.append(firstPictureClone);

  phoneVertical = document.querySelector(".first-pic-click");
  phoneHorizontal = document.querySelector(".second-pic-click");
  screenVertical = document.getElementById("screen-vertical");
  screenHorizontal = document.getElementById("screen-horizontal");

  phoneVertical.addEventListener("click", clickVerticalHandler);
  phoneHorizontal.addEventListener("click", clickHorizontalHandler);
};


const leftHandler = () => {
  arrowLeft.removeEventListener("click", leftHandler);
  const firstPicture = pictureList.querySelectorAll('.slider-pic-container')[0];
  const secondPicture = pictureList.querySelectorAll('.slider-pic-container')[1];

  const secondPictureClone = secondPicture.cloneNode(true);
  secondPictureClone.style.marginLeft = "-100%";
  pictureList.prepend(secondPictureClone);
  phoneVertical = document.querySelector(".first-pic-click");
  phoneHorizontal = document.querySelector(".second-pic-click");
  screenVertical = document.getElementById("screen-vertical");
  screenHorizontal = document.getElementById("screen-horizontal");

  phoneVertical.addEventListener("click", clickVerticalHandler);
  phoneHorizontal.addEventListener("click", clickHorizontalHandler);


  setTimeout(() => {
    secondPictureClone.addEventListener("transitionend", () => {
      secondPicture.remove();
      arrowLeft.addEventListener("click", leftHandler)
    });
    secondPictureClone.style.marginLeft = "0";
    if (firstPicture.id === 'first-pic') {
      sliderBackground.style.background = "#648BF0"
    } else {
      sliderBackground.style.background = "#F06C64";
    }
  }, 0)
};

arrowRight.addEventListener("click", rightHandler);
arrowLeft.addEventListener("click", leftHandler);


//-------------------- Конец слайдера ------------------------------

const clickVerticalHandler = () => {
  getComputedStyle(screenVertical).display === "none" ? screenVertical.style.display = "block" :
    screenVertical.style.display = "none";
};
const clickHorizontalHandler = () => {
  getComputedStyle(screenHorizontal).display === "none" ? screenHorizontal.style.display = "block" :
    screenHorizontal.style.display = "none";
};

phoneVertical.addEventListener("click", clickVerticalHandler);
phoneHorizontal.addEventListener("click", clickHorizontalHandler);

//----------------------Конец переключения экранов---------------------------


const portfolioGallery = document.querySelector('.portfolio-gallery');
const images = [...portfolioGallery.querySelectorAll('img')];
const labels = document.querySelector('.portfolio-labels'),
  labelsElements = [...labels.querySelectorAll('span')];


labels.addEventListener('click', (event) => {
  labels.querySelectorAll('span').forEach(node => {
    node.classList.remove('checked')
  });

  let labelNumber = labelsElements.indexOf(event.target),
  imagesNew = images.concat();
  for (let i = 0; i < labelNumber; i++) {
    imagesNew.push(imagesNew.shift())
  }
  portfolioGallery.innerHTML = '';
  portfolioGallery.append(...imagesNew);
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
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let subject = document.getElementById('subject'),
    descriptionProject = document.getElementById('description-project'),
    subjectText = '',
    descriptionProjectText = '';

  if (subject.value === "") {
    subjectText = "Без темы"
  } else {
    subjectText = "Тема: " + subject.value
  }


  if (descriptionProject.value === "") descriptionProjectText = "Без описания";
  else descriptionProjectText = "Описание: " + descriptionProject.value;

  alert(`Письмо отправлено \n${subjectText} \n${descriptionProjectText}`);
  contactForm.reset()
});




