We use this pattern in applications where we have a large number of objects and these objects take a significant amount of memory. <br />
With the flyweight pattern we can reduce the amount of memory consumed by our objects (application).

<img src="./assets/flyweight pattern diagram.png" width=400 /><br />
Note 1: A flyweight is an object that we can share (`PointIcon` acts as a flyweight).

Note 2: To implement the flyweight pattern, we need to seperate the data that we want to share from other data, store it in a flyweight class and then implement a factory for caching these objects.