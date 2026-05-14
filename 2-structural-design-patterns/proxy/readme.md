The proxy pattern allows us to create a proxy or an agent for a real object.

So if we want to talk to an object, we'll talk to it through its proxy or agent.<br />
This agent takes our message and forwards it to the target object. <br />
<img src="./assets/what is a proxy.png" width=500>

Proxy = نماینده / واسط
<br />

<div style="height: 0.5px; background: #ababab;"></div>
<br />

The problem we have: <br />
Creating an ebook object is costly. Every time we create an ebook object, we have to read the ebook file from the disk and load it into the memory.<br />
To solve this problem, we need to come up with a structure like this:

<img src="./assets/ebook proxy.png" width=500>

Our library class should talk to `EbookProxy` which should talk to `Ebook` class.

The proxy pattern diagrams: <br />
<img src='./assets/proxy diagram for EbookProxy.png' width=500>
<br />
<img src='./assets/proxy pattern in the GOF book.png' width=500>
