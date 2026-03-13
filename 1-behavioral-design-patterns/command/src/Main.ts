import AddCustomerCommand from "./AddCustomerCommand";
import CustomerService from "./CustomerService";
import Button from "./fx/Button";

// Write code here
const service = new CustomerService();
const command = new AddCustomerCommand(service);
const button = new Button(command);
button.click();
