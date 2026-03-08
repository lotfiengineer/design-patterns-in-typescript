import BrushTool from "./BrushTool";
import Canvas from "./Canvas";
import EraserTool from "./EraserTool";
import SelectionTool from "./SelectionTool";

const canvas = new Canvas();

canvas.setCurrentTool(new EraserTool());
canvas.mouseDown();
canvas.mouseUp();

canvas.setCurrentTool(new BrushTool());
canvas.mouseDown();
canvas.mouseUp();