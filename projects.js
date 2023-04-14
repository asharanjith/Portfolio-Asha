const projectDetails = [
  {
    descriptionTitle: 'Awesome Books',
    descriptionItem: 'In this project, we were able to build an application that stores a list of books added to the browsers localstorage and display their title and authors on the page.',
    tagBtn: ['Html', 'Css', 'Javascript', ''],
    headerImgM: './Assets/AwesomeBookMobile.png',
    headerImgD: './Desktop/AwesomeBook.png',
    subHead: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
  },
  {
    descriptionTitle: 'Money Minder App',
    descriptionItem: 'The Budget Tracker app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tagBtn: ['Ruby on Rails', 'Bootstrap', 'Postgres SQL', 'Render'],
    headerImgM: './Desktop/MoneyMinder.png',
    headerImgD: './Desktop/MoneyMinder.png',
    subHead: 'Backend',
    job: 'Full Stack Dev',
    year: 2023,
  },
  {
    descriptionTitle: 'Facebook 360',
    descriptionItem: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    tagBtn: ['Html', 'Css', 'Javascript', ''],
    headerImgM: './Assets/SnapshootPortfolio2.png',
    headerImgD: './Desktop/SnapshootDesktop3.svg',
    subHead: 'Facebook',
    job: 'Back End Dev',
    year: 2015,
  },
  {
    descriptionTitle: 'Uber Navigation',
    descriptionItem: 'A smart assistant to make driving more safe,efficient, and fun by unlocking your most expensive computer: your car.',
    tagBtn: ['Html', 'Css', 'Javascript', 'Ruby on rails'],
    headerImgM: './Assets/SnapshootPortfolio3.png',
    headerImgD: './Desktop/SnapshootDesktop4.svg',
    subHead: 'Uber',
    job: 'Lead Developer',
    year: 2018,
  },
];
const works = document.querySelector('.projects');

for (let i = 0; i < projectDetails.length; i += 1) {
  const work = document.createElement('div');
  work.classList.add('project');
  work.innerHTML = `
    <div class="sample-project ">
        <div class="project-header ">
            <div class="image-holder">
                <img src="${projectDetails[i].headerImgD}" alt="Project Sample Image" class="header-img desktop">
                <img src="${projectDetails[i].headerImgM}" alt="Project Sample Image" class="header-img mobile">
            </div>
        </div>

        <div class="project-content">
            <div class="project-description">
                <div class="title-container">
                    <h2 class="description-title">${projectDetails[i].descriptionTitle}</h2>
                </div>
                <div class="subtitle-container">
                    <ul class="subtitle-items">
                        <li class="list-less">${projectDetails[i].subHead}</li>
                        <li class="list">${projectDetails[i].job}</li>
                        <li class="list">${projectDetails[i].year}</li>
                    </ul>
                </div>
                <div class="article-container">

                    <p class="description-item">${projectDetails[i].descriptionItem}</p>
                </div>
                <div class="tag-container">            
                    <ul class="tag-item">
                        <li class="tag-btn tag-list-item">${projectDetails[i].tagBtn[0]}</li>
                        <li class="tag-btn tag-list-item">${projectDetails[i].tagBtn[1]}</li>
                        <li class="tag-btn tag-list-item">${projectDetails[i].tagBtn[2]}</li>
                        <li class="tag-btn tag-list-item fourth">${projectDetails[i].tagBtn[3]}</li>
                        
                    </ul>
            </div>
            <div class="buttom-container">
                <button class="project-buttom" onclick="modalOpen(${i})">See Project</button>
            </div>
        </div>
    </div>
    `;
  works.appendChild(work);
}

const cards = document.querySelectorAll('.sample-project');
const removeitem = document.querySelectorAll('.fourth');
for (let j = 0; j < cards.length; j += 1) {
  if (j % 2 === 1) {
    cards[j].classList.add('project-reverse');
  } else {
    cards[j].classList.add('project-normal');
    removeitem[j].classList.add('nodisplay');
  }
}