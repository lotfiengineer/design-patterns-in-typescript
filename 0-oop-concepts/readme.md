1. How to build loosely coupled applications?<br />
   Using interfaces

Interface: A contract that specifies the capabilities that a class should provide.

4 core principles of OOP:<br />

1. Encapsulation -> private/public fields (Access modifiers) | It is about bundling the data and methods that operate on the data within one unit or one class and hiding the values or state of an object inside a class.
2. Abstraction -> Reduce complexity by hiding unnecessary details in our classes | With a remote control, I only use change volume and change channel buttons, I don't care how they are implemented or how transistors work inside of the remote control.
3. Inheritance -> A mechanism for reusing code. | Implement common behaviors in a parent or base class and have other classes inherit those behaviors.
4. Polymorphism -> An object can take on many different forms

<br />
An interface class is like a contract. <br />
We can't instantiate from abstract and interface classes.
<br />

UML: Unified Modeling Language <br />
It is an official language to model our systems. <br />
In the course, we use it to represent our classes and the relationship. <br />
In the course, assume: 1. All the fields are private and 2. All of the methods are public. <br />

Three relationships between classes:

1. Inheritance: Shown with an arrow with empty triangle (->)

```
// Rectangle inherits from (or extends) Shape class
class Rectangle extends Shape {}
```

2. Composition:

```
// The shape class is composed of the Size class.
class Shape {
   private Size size;
}
```

3. Dependency: Indicated by dashed arrow

```
// Somewhere in the shape class, we have a reference to the
class Shape {
   public render = (doc: Document): void => {
   }
}
```

<img src="./relationships between classes.png" />
