import FontFactory from "./FontFactory";
import FontService from "./FontService";
import SpreadSheet from "./SpreadSheet";

const service = new FontService(new FontFactory());

var sheet = new SpreadSheet(service);
sheet.setContent(0, 0, "Hello");
sheet.setContent(1, 0, "World");
sheet.setFontFamily(0, 0, "Arial");
sheet.setFontFamily(1, 1, "Arial");
sheet.render();
