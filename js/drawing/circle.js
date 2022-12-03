 const drawingCircleFn = () => {
   modeDrawing = "circle";
   canvas.isDrawingMode = false;
   canvas.on("mouse:down", startDrawingCircle);
   canvas.on("mouse:move", drawingCircle);
   canvas.on("mouse:up", stopDrawingCircle);
};
let pointerStart = {};
let circle;
const startDrawingCircle = (obj) => {
   mouseDown = true;
   pointerStart = obj.pointer;
   circle = new fabric.Circle({ radius: 0,fill:'', stroke: "black", strokeWidth: 1, top: pointerStart.y, left: pointerStart.x });
   canvas.add(circle);
   canvas.renderAll();
};

const drawingCircle = (obj) => {
   if (!mouseDown || modeDrawing !== "circle") return;
   const pointer = obj.pointer;
   const radius = Math.sqrt(Math.pow(Math.abs(pointer.x - pointerStart.x), 2) + Math.pow(Math.abs(pointer.y - pointerStart.y), 2));
   circle.set("radius", radius);
   circle.set("top", pointerStart.y - radius);
   circle.set("left", pointerStart.x - radius);
   canvas.renderAll();
};

const stopDrawingCircle = (obj) => {
   // 
   mouseDown = false;
   const pointerEnd = obj.pointer;
   canvas.renderAll();

   const dataSaveToServer = canvas.toJSON();
   socket.emit("drawing", dataSaveToServer);
};

