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

The Command pattern allows us to implement the undo mechanisms. <br />
This is how: <br />
<img src="./undoable command.png" width=300>

The difference between Command and Memento in undo operations: <br />
In memento -> We store changes in the state of an object. We store multiple snapshots over time. Sometimes storing these snapshots can be expensive.
In Command -> every command knows how to undo itself. So we don't have to store multiple snapshots of an object. <br />
Example: Resize operation. If the user resizes a video, all we have to store is the original dimension of the video (In command pattern), not the entire snapshot of the video object (In memento).

Full undo mechanism in command pattern: <br />
<img src="./full undo mechanism in command pattern.png" width=400>

In this pattern, I learned how passing the references of objects to other clases (composition) can be super useful and powerful. I truly learned and enjoyed. <br />
Now I understand object oriented programming.
