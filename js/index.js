
const canvas = new fabric.Canvas("canvas", {
   width: window.innerWidth,
   heigh: window.innerHeight,
});

let line, modeDrawing;
let mouseDown = false;

document.getElementById("drawing-line").addEventListener("click", () => drawingLineFn());

document.getElementById("drawing-free").addEventListener("click", () => drawingFreeFn());

document.getElementById("drawing-circle").addEventListener("click", () => drawingCircleFn());

document.getElementById("text-box").addEventListener("click", () => textBoxFn());

document.getElementById("save-json").addEventListener("click", () => saveJsonFn());

document.getElementById("load-json").addEventListener("click", () => document.getElementById("input-file").click());

document.getElementById("clear").addEventListener("click", (e) => {
   canvas.clear();
});

document.getElementById("eraser").addEventListener("click", (e) => eraserFn(e));

