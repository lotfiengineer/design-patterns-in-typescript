import Caramel from "./avaFilters/Caramel";
import CaramelFilter from "./CaramelFilter";
import Image from "./Image";
import ImageView from "./ImageView";
import VividFilter from "./VividFilter";

const imageView = new ImageView(new Image());
imageView.apply(new CaramelFilter(new Caramel()));

