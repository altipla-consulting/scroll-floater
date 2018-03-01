
# scroll-floater

Float an element when the scroll touches it.


### Docs

Simple usage:

```js
let floater = new altipla.ScrollFloater(document.querySelector('#foo'));
```


Limit to a parent container:

```js
let floater = new altipla.ScrollFloater(document.querySelector('#foo'), 0, document.querySelector('#container'));
```

Other options and methods see [the source](src/scroll-floater.js) docs directly.
