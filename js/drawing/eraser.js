 const eraserFn = () => {
   modeDrawing = "eraser";
  //  if (!mouseDown || modeDrawing !== "eraser") return;
   console.log(` eraser`, )
   canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
   console.log(` fabric`, fabric)
   canvas.isDrawingMode = true;
   canvas.freeDrawingCursor = "not-allowed";

    //  const cursorUrl = "https://ossrs.net/wiki/images/figma-cursor.png";
    //  const cursorUrl = "http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur";
    //  canvas.freeDrawingCursor  = `url(" ${cursorUrl} "), auto`;
    //  canvas.hoverCursor = `url(" ${cursorUrl} "), auto`;
    //  canvas.moveCursor = `url(" ${cursorUrl} "), auto`;
   //  optional

   canvas.freeDrawingBrush.width = 10;

   //  undo erasing
   //   canvas.freeDrawingBrush.inverted = true;

   const dataSaveToServer = canvas.toJSON();
   socket.emit("drawing", dataSaveToServer);
};
