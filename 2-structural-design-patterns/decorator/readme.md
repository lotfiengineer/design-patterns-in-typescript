We use this pattern to add additional behavior to an object.

With the decorator pattern, we can add additional behavior to an object.

Note 1: This pattern is easy for me to understand.

<img src="./assets/decorator diagram.png" width=400><br />

Note 2: Whoever creates an instance of the `Encrypted` class, will figure out what type of stream to pass. We can pass a `CloudStream` or a `CompressedStream`. The `Encrypted` class doesn't care.

Note 3: In the above diagram, the `Encrypted` class is a decorator because it is decorating the `CloudStream` object with some additional behavior, in this case encryption.

<br />

<img src="./assets/decorator diagram in gof book.png" width=400><br/>

Note 4: We can also execute the `// additional behavior` after the `component.operation();`
