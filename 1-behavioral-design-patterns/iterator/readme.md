Iterator pattern is a useful and popular pattern that is used in many different languages and frameworks.
<br />

Let's say, we want to build a web browser. Every web browser has the concept of history. So we can visit different websites and click the back button to go back in the history.
<br />

Note 1: Changing the internals of an object should not affect its consumers. <br />
If we change the code inside a class, we should only deal with breaking changes inside that class. We should encapsulate these changes. <br />
<b>We solve this problem using the iterator pattern.</b>
<br />

<img src="./iterator pattern.png" width=400>

The return type of `createIterator()` method is the `Iterator` interface, <br/>
but inside that method we will return a new instance of one of these types: `ListIterator` or `ArrayIterator`.

If currently, we are using a list inside the `BrowseHistory` class (as a field), in the `createIterator()` method, we will return a new instance of the `ListIterator` class.

If we replace that list with an array, we will change the `createIterator()` method to return a new array iterator.
