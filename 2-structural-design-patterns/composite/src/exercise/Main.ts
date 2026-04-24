import HumanResource from "./HumanResource";
import Team from "./Team";
import Truck from "./Truck";

const subTeam1 = new Team();
subTeam1.add(new Truck());
subTeam1.add(new HumanResource());
subTeam1.add(new HumanResource());

const subTeam2 = new Team();
subTeam2.add(new Truck());
subTeam2.add(new HumanResource());
subTeam2.add(new HumanResource());

const team = new Team();
team.add(subTeam1);
team.add(subTeam2);

team.deploy();
