setInterval(() => {
    const cards = document.getElementsByClassName("js-num-cards");

    for(const card of cards)
        card.classList.remove("hide");
}, 1000);
