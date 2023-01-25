import generateCardHtml from "./component/CardHtml/CardHtml";

const container: Element = document.querySelector(".app")!;
const ulListElement: HTMLUListElement = document.createElement("ul")!;

ulListElement.className = "characters-list row list-unstyled flex";

const ulList: Element = container?.appendChild(ulListElement);

const generateElements = (parentElement: Element, childElement: string) => {
  for (let i = 0; i < 5; i++) {
    const liListElement = document.createElement(childElement)!;
    const liList: Element = parentElement.appendChild(liListElement)!;
    liList.className = `character col`;
    generateCardHtml(liList);
  }
};

generateElements(ulList, "li");
