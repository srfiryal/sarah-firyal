const dummyData = {
    title: 'Project Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg',
    url: 'https://www.google.com/'
};
const portfolioData = [
    dummyData,
    dummyData,
    dummyData,
    dummyData,
    dummyData,
];

createPortfolioItem = (data) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'h-[18rem] w-full bg-[url(\'' + data.image + '\')] bg-cover cursor-pointer rounded-3xl relative';

    const overlay = document.createElement('div');
    overlay.className = 'absolute top-0 left-0 w-full h-full bg-gray-700 opacity-0 transition-opacity duration-300 rounded-3xl';
    portfolioItem.appendChild(overlay);

    const content = document.createElement('div');
    content.className = 'absolute top-0 opacity-0 left-0 px-8 h-full w-full flex flex-col transition-opacity duration-300 justify-center';
    portfolioItem.appendChild(content);

    const title = document.createElement('div');
    title.className = 'text-3xl text-white';
    title.textContent = data.title;
    content.appendChild(title);

    const description = document.createElement('div');
    description.className = 'text-lg mt-2 text-white';
    description.textContent = data.description;
    content.appendChild(description);

    portfolioItem.addEventListener('mouseenter', () => {
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-50');
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
    });

    portfolioItem.addEventListener('mouseleave', () => {
        overlay.classList.add('opacity-0');
        overlay.classList.remove('opacity-50');
        content.classList.add('opacity-0');
        content.classList.remove('opacity-100');
    });

    return portfolioItem;
};

const portfolioContainer = document.querySelector('.portfolio-container');
for (const data of portfolioData) {
    const portfolioItem = createPortfolioItem(data);
    portfolioContainer.appendChild(portfolioItem);
}
