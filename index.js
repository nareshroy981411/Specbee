document.addEventListener('DOMContentLoaded', () => {
const speakersSlider = document.querySelector('.speakers-slider');
const leftButton = document.querySelector('.carousel-control.left');
const rightButton = document.querySelector('.carousel-control.right');

const speakerCards = Array.from(document.querySelectorAll('.speaker-card'));

if (speakerCards.length === 0) {
  console.error("No speaker cards found.");
  return;
}

const cardWidth = speakerCards[0].offsetWidth + 16;  // Adjust based on your margin

// Carousel control logic
leftButton.addEventListener('click', () => {
  speakersSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
  speakersSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

function showSpeakerDetails(element) {
  const name = element.getAttribute("data-name");
  const title = element.getAttribute("data-title");
  const company = element.getAttribute("data-company");
  const description = element.getAttribute("data-description");
  const imageSrc = element.querySelector("img").src;

  document.getElementById("selectedSpeakerName").textContent = name;
  document.getElementById("selectedSpeakerTitle").textContent = title;
  document.getElementById("selectedSpeakerCompany").textContent = company;
  document.getElementById("selectedSpeakerDescription").textContent = description;
  document.getElementById("selectedSpeakerImage").src = imageSrc;

  document.getElementById("selectedSpeaker").hidden = false;
}

document.querySelectorAll(".speaker-card").forEach(card => {
  card.addEventListener("click", function() {
    showSpeakerDetails(card);
  });
});

function closeCard() {
  document.getElementById("selectedSpeaker").hidden = true;
}

document.querySelector(".close-icon").addEventListener("click", closeCard);
});

function displaySpeakers() {
const speakersData = [
  ["John Doe", "Chief Marketing Officer", "Acme Corp", "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.", "./images/Ellipse 24 (1).png"],
  ["Jane Smith", "Chief Engagement Officer", "Acquia", "Has over 15 years of experience in tech.Is a keynote speaker at several international conferences.Authored multiple articles in industry-leading journals.", "./images/Ellipse 24 (2).png"],
  ["Alice Brown", "Chief Technical Developer", "Pantheon", "Has a passion for artificial intelligence and machine learning.Worked with over 100 Fortune 500 companies.Loves to mentor young professionals in the field.", "./images/Ellipse 24 (3).png"],
  ["Tom White", "Chief Marketing Officer", "Specbee", "Published a book on digital marketing strategies.Is known for creative problem-solving and innovation.Has a passion for artificial intelligence and machine learning.", "./images/Ellipse 24.png"],
  ["John Doe", "Chief Marketing Officer", "Acme Corp", "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.", "./images/Ellipse 24 (1).png"],
  ["Jane Smith", "Chief Engagement Officer", "Acquia", "Has over 15 years of experience in tech.Is a keynote speaker at several international conferences.Authored multiple articles in industry-leading journals.", "./images/Ellipse 24 (2).png"],
  ["Alice Brown", "Chief Technical Developer", "Pantheon", "Has a passion for artificial intelligence and machine learning.Worked with over 100 Fortune 500 companies.Loves to mentor young professionals in the field.", "./images/Ellipse 24 (3).png"],
  ["Tom White", "Chief Marketing Officer", "Specbee", "Published a book on digital marketing strategies.Is known for creative problem-solving and innovation.Has a passion for artificial intelligence and machine learning.", "./images/Ellipse 24.png"],  

];

const speakersSlider = document.getElementById('speakersSlider');

speakersSlider.innerHTML = '';

speakersData.forEach(speaker => {
  const [name, title, company, description, imageSrc] = speaker;

  const card = document.createElement('div');
  card.className = 'speaker-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${name}, ${title} at ${company}`);
  card.setAttribute('data-name', name);
  card.setAttribute('data-title', title);
  card.setAttribute('data-company', company);
  card.setAttribute('data-description', description);

  card.innerHTML = `
    <img src="${imageSrc}" alt="${name}" />
    <h3>${name}</h3>
    <p>${title}</p>
    <p>${company}</p>
  `;

  speakersSlider.appendChild(card);

  card.addEventListener("click", function() {
    showSpeakerDetails(card);
  });
});
}

displaySpeakers();
