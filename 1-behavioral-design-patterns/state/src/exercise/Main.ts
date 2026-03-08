import DirectionService from "./DirectionService";
import Bicycling from "./Bicycling";
import Driving from "./Driving";
import Transit from "./Transit";
import Walking from "./Walking";


const directionService = new DirectionService(new Driving());
console.log(directionService.getEta())
console.log(directionService.getDirection());

directionService.setTravelMode(new Bicycling());
console.log(directionService.getEta())
console.log(directionService.getDirection());


directionService.setTravelMode(new Transit());
console.log(directionService.getEta())
console.log(directionService.getDirection());


directionService.setTravelMode(new Walking());
console.log(directionService.getEta())
console.log(directionService.getDirection());


