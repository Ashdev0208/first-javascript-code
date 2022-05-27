"use strict";

const choose = document.querySelector(".choose"),
  chooseItem = document.querySelectorAll(".choose-item"),
  chooseOpenOrClose = document.querySelector(".choose__openOrClose"),
  hiddenOrShow = document.querySelector(".hiddenOrShow"),
  title = document.querySelector(".title"),
  input = document.querySelectorAll("input"),
  width = document.querySelector("#width"),
  height = document.querySelector("#height"),
  borderRadius = document.querySelector("#borderRadius"),
  btn = borderRadius.nextElementSibling,
  parentShape = document.querySelector(".shapes");

choose.addEventListener("click", () => {
  title.style.cssText = `opacity: 0;visible: hidden;pointer-events: none;`;
  chooseOpenOrClose.classList.toggle("active");
  hiddenOrShow.classList.add("active");
});

chooseItem[0].addEventListener("click", () => {
  chooseItem[0].style.marginTop = "85px";
  width.value = 100;
  height.value = 100;
  borderRadius.value = 50;
});
chooseItem[1].addEventListener("click", () => {
  chooseItem[0].style.marginTop = "-25px";
  width.value = "";
  height.value = "";
  borderRadius.value = "";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (width.value < 10 || width.value == null || height.value < 10 || height.value == null) {
    alert("Iltimos to'lding");
  } else {
    let shape = document.createElement("div");
    shape.classList.add("shape");
    shape.style.cssText = `width: ${width.value}px;height: ${height.value}px;border-radius: ${borderRadius.value}%;`;
    parentShape.append(shape);
  }
});
