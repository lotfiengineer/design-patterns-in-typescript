import AddCustomerCommand from "./AddCustomerCommand";
import BlackAndWhiteCommand from "./BlackAndWhiteCommand";
import CompositeCommand from "./CompositeCommand";
import CustomerService from "./CustomerService";
import Button from "./fx/Button";
import ResizeCommand from "./ResizeCommand";

//* command pattern demo
// const service = new CustomerService();
// const command = new AddCustomerCommand(service);
// const button = new Button(command);
// button.click();

//* Composite commands demo
const composite = new CompositeCommand();
composite.addCommand(new ResizeCommand());
composite.addCommand(new BlackAndWhiteCommand());
composite.execute();
