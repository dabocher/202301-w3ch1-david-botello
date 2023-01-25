const generateCardHtml = (parentElement: Element) => {
  const containerCard: Element = document.createElement("div");
  const cardAppended: Element = parentElement.appendChild(containerCard);
  containerCard.className = "card character__card";

  const imageElement: HTMLImageElement = document.createElement("img");
  containerCard.innerHTML = `<img src="img/joffrey.webp" alt="description" width="300" height="451">`;

  const cardBodyElement: Element = document.createElement("div");
  const cardBody: Element = cardAppended.appendChild(cardBodyElement);
  cardBody.className = "card-body";

  const titleCardElement: HTMLHeadingElement = document.createElement("h2");
  const titleCard: HTMLHeadingElement = cardBody.appendChild(titleCardElement);
  titleCard.innerHTML = "Name & family";

  const characterInfoElement: Element = document.createElement("div");
  const characterInfo: Element = cardBody.appendChild(characterInfoElement);
  characterInfo.className = "character__info";

  const ulListElement: HTMLUListElement = document.createElement("ul");
  const ulList: HTMLUListElement = characterInfo.appendChild(ulListElement);
  ulList.className = "list-unstyled";

  const characterOverlayElement: Element = document.createElement("div");
  const characterOverlay: Element = cardBody.appendChild(
    characterOverlayElement
  );
  characterOverlay.className = "character__Overlay";

  const characterActionsElement: Element = document.createElement("div");
  const characterActions: Element = cardBody.appendChild(
    characterActionsElement
  );
  characterActions.className = "character__Actions";

  const buttonSpeakElement: HTMLButtonElement =
    document.createElement("button");
  const buttonSpeak: HTMLButtonElement =
    characterActions.appendChild(buttonSpeakElement);
  buttonSpeak.textContent = "Speak";

  const buttonDieElement: HTMLButtonElement = document.createElement("button");
  const buttonDie: HTMLButtonElement =
    characterActions.appendChild(buttonDieElement);
  buttonDie.textContent = "Die";
};

export default generateCardHtml;
/*      <div class="character__info"> */
