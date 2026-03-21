
We use the observer pattern in situations where the state of an object changes and we need to notify other objects about these changes.

Understanding the observer pattern was easy for me.<br/>
I create an object and when I change the state of that object, other objects that inherited the `Observer` interface get notified about the changes. <br/>
In the runtime, we can add, remove and notify observers.

This is an example of how observer pattern works: <br />
<img src="./observer-1.png" width=650>

The structure of the observer pattern in GOF book:<br />
<img src="./observer pattern in gof book.png" width=500>


Passing the value: