document.addEventListener('DOMContentLoaded', () => {
    const speakersSlider = document.querySelector('.speakers-slider');
    const leftButton = document.querySelector('.carousel-control.left');
    const rightButton = document.querySelector('.carousel-control.right');
    
    const speakerCards = Array.from(document.querySelectorAll('.speaker-card'));

    if (speakerCards.length === 0) {
        console.error("No speaker cards found.");
        return;
    }

    const cardWidth = speakerCards[0].offsetWidth + 16;  

    leftButton.addEventListener('click', () => {
        speakersSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        speakersSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
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



