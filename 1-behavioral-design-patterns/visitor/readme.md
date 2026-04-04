The visitor pattern allows us to add new operations to an object structure without modifying it.

This pattern blew my mind. How could this even work in programming?<br/>
Why I wasn't aware of it? What did the university even teach me?

In the visitor pattern, we create an `Operation` interface and make other operations implement that interface.<br/>
This way:

1. All the logic for a given operation is in a single place.
2. Our implementation follows the open-closed principle.

The operation interface:<br/>
<img src="./operation interface.png" width=400><br />

Note 1: We should use this pattern only if our object structure is stable and doesn't change. That's why we use it in the Html Document example. In Html, we don't have unlimited types of nodes. We have about 20 to 30 types of nodes (like h1, h2, p, div, img tags). But quite often, we need to support new types of operations (like syntax highlighting operation, plain text operation and so on).

Visitor pattern for html document: <br/>
<img src="./visitor pattern for html document.png" width=500>

Visitor pattern in the GOF book: <br/>
<img src="./visitor pattern in GOF book.png" width=500>
