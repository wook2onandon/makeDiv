const btn = document.querySelector('button')

const cardList = document.querySelector('#card_list')

const addCard = (e) => {
  const createCard = document.createElement('div');

  createCard.setAttribute("class", "card");
  cardList.appendChild(createCard);
}


btn.addEventListener('click', addCard)



