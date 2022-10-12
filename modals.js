const modals = [
  {
    descriptionTitle: 'Tonic',
    descriptionItem: 'lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tagBtn: ['Html', 'Css', 'Javascript', 'Github', 'Ruby', 'Bootstrap'],
    headerImgM: './Assets/SnapshootPortfolio.png',
    headerImgD: './Desktop/SnapshootDesktop.svg',
    subHead: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,

  },
  {
    descriptionTitle: 'Multi-Post Stories',
    descriptionItem: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tagBtn: ['Html', 'Css', 'Javascript', 'Github', 'Ruby', 'Bootstrap'],
    headerImgM: './Assets/SnapshootPortfolio1.png',
    headerImgD: './Desktop/SnapshootDesktop2.svg',
    subHead: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,

  },
  {
    descriptionTitle: 'Facebook 360',
    descriptionItem: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tagBtn: ['Html', 'Css', 'Javascript', 'Github', 'Ruby', 'Bootstrap'],
    headerImgM: './Assets/SnapshootPortfolio2.png',
    headerImgD: './Desktop/SnapshootDesktop3.svg',
    subHead: 'Facebook',
    job: 'Back End Dev',
    year: 2015,
  },
  {
    descriptionTitle: 'Uber Navigation',
    descriptionItem: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tagBtn: ['Html', 'Css', 'Javascript', 'Github', 'Ruby', 'Bootstrap'],
    headerImgM: './Assets/SnapshootPortfolio3.png',
    headerImgD: './Desktop/SnapshootDesktop4.svg',
    subHead: 'Uber',
    job: 'Lead Developer',
    year: 2018,

  },
];

const modalsection = document.querySelector('.projects');
for (let i = 0; i < modals.length; i += 1) {
  modalsection.innerHTML += `
    <div class="modal"></div>
    <div class=" modal-background">
        <div class="project-header ">
            <div class="title-container">
                <h2 class="description-title">${modals[i].descriptionTitle}</h2>
                <i class="fa-solid fa-xmark modal-close"></i>
            </div>
            <div class="subtitle-container">
                <ul class="subtitle-items">
                    <li class="list-less">${modals[i].subHead}</li>
                    <li class="list">${modals[i].job}</li>
                    <li class="list">${modals[i].year}</li>
                </ul>
            </div>
            
        </div>
        <div class="modal-image-holder">
            <img src="${modals[i].headerImgD}" alt="Project Sample Image" class="modal-img desktop">
            <img src="${modals[i].headerImgM}" alt="Project Sample Image" class="modal-img mobile">
        </div>

        
            <div class="modal-desc">
                
                <div class="modal-article-container">
                    <p class=" modal-para">${modals[i].descriptionItem}</p>
                </div>
                <div class="modal-tag-container">
                    <div class="tag-container">            
                        <ul class="tag-item">
                            <li class="tag-btn tag-list-item">${modals[i].tagBtn[0]}</li>
                            <li class="tag-btn tag-list-item">${modals[i].tagBtn[1]}</li>
                            <li class="tag-btn tag-list-item">${modals[i].tagBtn[2]}</li>
                            <li class="tag-btn tag-list-item desktop">${modals[i].tagBtn[3]}</li>
                            <li class="tag-btn tag-list-item desktop">${modals[i].tagBtn[4]}</li>
                            <li class="tag-btn tag-list-item desktop">${modals[i].tagBtn[5]}</li>
                                                
                        </ul>
                    </div>
                    <div class="line"></div>
                    <div class="modal-buttom-container buttom-container">
                        <button class="project-buttom" onClick="">See Live<i class="fa-sharp fa-solid fa-earth-americas"></i></button>
                        <button class="project-buttom" onClick="">See Source<i class="fab fa-sharp fa-solid fa-github"></i></button>
                    </div>
                </div>
            </div>
        
    
    </div>
    `;
}

const modal = document.querySelectorAll('.modal');

function modalOpen(index) {
  if (index >= 0) {
    document.querySelectorAll('.modal')[index].style.display = 'block';
    document.querySelectorAll('.modal-background')[index].style.display = 'flex';
    const modalClose = document.querySelectorAll('.modal-close')[index];
    modalClose.addEventListener('click', () => {
      modal[index].style.display = 'none';
      document.querySelectorAll('.modal-background')[index].style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal[index]) {
        modal[index].style.display = 'none';
        document.querySelectorAll('.modal-background')[index].style.display = 'none';
      }
    });
    return -1;
  }
  return 0;
}

modalOpen(-1);
