setInterval(() => {
    const cards = document.getElementsByClassName("js-num-cards");

    if(cards.length > 0)
        for(const card of cards)
            card.classList.remove("hide");

    console.log(cards);
}, 1000);
