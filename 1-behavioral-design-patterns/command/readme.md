<img src="./composition pattern.png" width=350 ><br />
We are designing a framework of UI elements. in this image, I created a `Button` that is part of the framework. Then other developers use that framework to develop Apps.<br />

There is a class named `CustomerService` that has the logic for `addCustomer()`, `deleteCustomer()` and so on and for each method, I create a new concrete implementation from command interface like `AddCustomer`.<br />
Then, I create a new object of `AddCustomer` and pass it to the `Button` object.

<br />

Official diagram in GOF book: <br />
<img src="./command pattern in GOF book.png" width=350>

Note 1: We are decoupling Invoker from Receiver. With this structure, The invoker can talk to the receiver without being aware of it. This is the point of the command pattern.

Benefits of this pattern:

1. We can pass around the commands in the code
2. We can pass them as arguments to our methods
3. We can add them to a list.
4. We can replay or undo the commmands.
5. We can store commands in a database and execute them in the future.
