I like the Facade pattern personally.<br/>
Because it solves a very important problem.

We use this pattern to provide a simple interface to a complex system.

Note 1: We want to reduce coupling. And that's the problem that the Facade pattern aims to solve.

<img src="./assets/the facade design pattern.png" width=400/><br />
<img src="./assets/coupling reduces to only one class.png" width=400/><br />

Note 2: All of the complexity for sending a notification will be implemented in the `send` method inside the `NotificationService` class.

Note 3: Facade means front or face.

Note 4: We can create a wrapper around our complex system (in this case, notification system) which is easy for us developers to use.

Note 5: Hide all the complexity behind a Facade.