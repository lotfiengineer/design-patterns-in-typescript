The state pattern allows an object to behave differently
when its state changes.

This is how the state pattern works: <br />

<div style="display: flex; gap: 1rem">

<img src="./state pattern diagram.png" width=350 />
->
<img src="./state pattern official diagram.png" width=350 />
</div>

<br />

This pattern was easy to me to learn.

Note 1: The base class doesn't get modified.

Note 2: We add more concrete class implementation to support new functionality. <br />
That is open closed principle (OCP).

<br />
<br />

Note 3: If I can solve a problem with a simple ```if else``` statement, don't overcomplicate it by applying the state pattern to solve that problem.<br />
Understand the problem first, then apply design patterns when needed.<br />
Don't abuse patterns.