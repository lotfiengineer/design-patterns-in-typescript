Let's say in our imaginary application, we want to have the ability to store the images that our users upload.

<div style="display: flex; gap: 1rem; margin-bottom: 0.25rem;">
<img src='./strategy - compressor.png' width=350>
<img src='./strategy - filter.png' width=350>
</div>

We want our `ImageStorage` to behave differently depending on the type of the compressor or the filter we use.<br />
So, we can introduce an interface called `Compressor`, and another interface called `Filter`.<br />

Note 1: We are using the open-closed principle. Open for extension and closed for modification.

Official diagram on GOF book: <br />
<img src="./strategy - official diagram.png" width=350 style="margin: 0.25rem 0;" />

`Context` maintains a reference to a strategy object (For example Compressor or Filter).<br />
The strategy is an interface or an abstract class that represents an algorithm, like an image compression algorithm.

<br />

Strategy vs State pattern difference:

<div style="display: flex; gap: 1rem; margin-bottom: 0.6rem;">
<img src='./reminder - state pattern.png' width=350>
<img src='./strategy - compressor and filter strategies.png' width=350>
</div>

In `Canvas`, we have a single state that is the `currentTool`. And all the behaviors (`mouseDown()` and `mouseUp()`) are represented by a subclass (`Selection` and `Brush`) of this `Tool` interface.

In contrast, in the strategy pattern, we don't have a single state. <br />
Different behaviors are represented using different strategy objects.<br />
Strategy objects: `compressor: new Compressor()` and `filter: new Filter()`
