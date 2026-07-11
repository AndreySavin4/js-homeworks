const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let width = 30;
let height = 30;

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.append(div);

    width += 10;
    height += 10;
  }
};

const destroyBoxes = () => (boxes.innerHTML = "");

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();

  width = 30;
  height = 30;
});
