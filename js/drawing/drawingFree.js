 const drawingFreeFn= () => {
   modeDrawing = "free";
   canvas.on("mouse:down", startDrawingFree());
   canvas.on("mouse:move", drawingFree);
   canvas.on("mouse:up", stopDrawingLine);
}

const startDrawingFree = () => {
   if (modeDrawing !== "free") return;
   mouseDown = true;
   canvas.renderAll();
};

const drawingFree = (obj) => {
   if (modeDrawing !== "free" || !mouseDown ) return;
   canvas.isDrawingMode = true;
   canvas.renderAll();
   
   const dataSaveToServer = canvas.toJSON();
   socket.emit("drawing", dataSaveToServer);
};



