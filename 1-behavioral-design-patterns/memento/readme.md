Memento pattern: <br />
Use this pattern to implement undo mechanism. <br />
Example: Building a code editor that supports the undo mechanism.

<br />
How it works: <br />
<img src="./memento pattern.png" width=400 />
<br />

When calling createState() -> The Editor saves its current state inside an EditorState object and return it.
