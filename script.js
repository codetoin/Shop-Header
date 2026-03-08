const navList = ['Shop', 'About', 'Lookbook', 'Visit Us', 'Contact'];

// Declares
const header = document.createElement('header');
const logo = document.createElement('h1');
const nav = document.createElement('nav');
const headerDiv = document.createElement('div');
const headerButton = document.createElement('button');
const bodyContainer = document.createElement('div');
const imageContainer = document.createElement('div');
const image = document.createElement('img');
const circleContainer = document.createElement('div');
const contentContainer = document.createElement('div');
const contentTitle = document.createElement('h1');
const content = document.createElement('p');
const contentButton = document.createElement('button');

//Appends
document.body.appendChild(header);
document.body.appendChild(bodyContainer);
header.appendChild(logo);
header.appendChild(headerDiv);
headerDiv.appendChild(nav);
headerDiv.appendChild(headerButton);

bodyContainer.appendChild(imageContainer);
imageContainer.appendChild(image);
bodyContainer.appendChild(circleContainer);
bodyContainer.appendChild(contentContainer);
contentContainer.appendChild(contentTitle);
contentContainer.appendChild(content);
contentContainer.appendChild(contentButton);

navList.forEach((item) => {
  const link = document.createElement('a');
  link.innerText = item;
  link.href = '#';
  link.style.textDecoration = 'none';
  link.style.fontSize = '15px';
  link.style.color = '#1E2329';

  link.style.display = 'flex';
  link.style.alignItems = 'center';
  link.style.gap = '4px';

  if (item === 'Shop') {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('class', 'size-6');
    svg.style.width = '15px';
    svg.style.height = '15px';

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('d', 'm19.5 8.25-7.5 7.5-7.5-7.5');

    svg.appendChild(path);
    link.appendChild(svg);
  }

  nav.appendChild(link);
});

// Addding Contents
logo.innerText = 'Blush.';

const bag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
bag.setAttribute('fill', 'none');
bag.setAttribute('viewBox', '0 0 24 24');
bag.setAttribute('stroke-width', '1.5');
bag.setAttribute('stroke', 'currentColor');
bag.style.width = '36px';
bag.style.height = '36px';

const bagPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
bagPath.setAttribute('stroke-linecap', 'round');
bagPath.setAttribute('stroke-linejoin', 'round');
bagPath.setAttribute(
  'd',
  'M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z',
);

bag.appendChild(bagPath);
headerButton.appendChild(bag);

image.src = './images/man.png';

contentTitle.innerText = 'New Fall-Winter \nCollection';
content.innerText = 'Shop the latest fashion';
contentButton.innerText = 'Shop Now';

// Styles
document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.boxSizing = "border-box";
document.body.style.fontFamily = `Arial, Helvetica, sans-serif`;
document.body.style.backgroundColor = '#F0EEEE';
document.body.style.height = '100%';

header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
header.style.margin = '20px';

logo.style.fontFamily = "'Playfair Display', serif";
logo.style.fontStyle = 'italic';

headerDiv.style.display = 'flex';
headerDiv.style.alignItems = 'center';
headerDiv.style.gap = '40px';

nav.style.display = 'flex';
nav.style.gap = '20px';

headerButton.style.background = 'none';
headerButton.style.border = 'none';
headerButton.style.cursor = 'pointer';

bodyContainer.style.marginTop = '100px';
bodyContainer.style.display = 'flex';
bodyContainer.style.alignItems = 'center';
bodyContainer.style.justifyContent = 'center';
bodyContainer.style.position = 'relative';

circleContainer.style.backgroundColor = '#E6E4E4';
circleContainer.style.borderRadius = '50%';
circleContainer.style.width = '350px';
circleContainer.style.height = '350px';
circleContainer.style.position = 'absolute';
circleContainer.style.zIndex = '-2';

contentContainer.style.position = 'relative';
contentContainer.style.right = '3%';
contentContainer.style.display = 'flex';
contentContainer.style.flexDirection = 'column';
contentContainer.style.gap = '30px';

contentTitle.style.fontFamily = "'Playfair Display', serif";
contentTitle.style.fontSize = '45px';
contentTitle.style.color = '#1E2329';

content.style.color = '#c0c0c0';

contentButton.style.width = '200px';
contentButton.style.height = '45px';
contentButton.style.backgroundColor = '#2F2F2F';
contentButton.style.color = '#FFFFFF';
contentButton.style.border = 'none';
contentButton.style.cursor = 'pointer';
