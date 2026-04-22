import Group from "./Group";
import Shape from "./Shape";

const group1 = new Group();
group1.add(new Shape()); // square
group1.add(new Shape()); // square

const group2 = new Group();
group2.add(new Shape()); // circle
group2.add(new Shape()); // circle

const group = new Group();
group.add(group1);
group.add(group2);
group.render();
group.move();
