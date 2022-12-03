 const drawingLineFn = () => {
   modeDrawing = "line";

   canvas.on("mouse:down", startDrawingLine);
   canvas.on("mouse:move", drawingLine);
   canvas.on("mouse:up", stopDrawingLine);
};

const startDrawingLine = (obj) => {
   mouseDown = true;
   // const pointer = canvas.getPointer(o.e);
   const pointer = obj.pointer;

   line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
      stroke: "black",
      strokeWidth: 1,
   });

   canvas.add(line);
   canvas.requestRenderAll();
};

const drawingLine = (obj) => {
   if (!mouseDown || modeDrawing !== "line") return;
   // const pointer=canvas.getPointer(o.e)
   const pointer = obj.pointer;
   canvas.isDrawingMode = false;

   line.set({
      x2: pointer.x,
      y2: pointer.y,
   });

   canvas.requestRenderAll();
};

const stopDrawingLine = (obj) => {
   mouseDown = false;
   canvas.isDrawingMode = false;
   canvas.renderAll();
   
   const dataSaveToServer = canvas.toJSON();
   socket.emit("drawing", dataSaveToServer);
};
