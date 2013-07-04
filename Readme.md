
# Event Spy

  WIP event spy. Useful for debugging purposes. Must be initialized at the top of your script.

## Example

```js
spy('click', function(e, fn) {
  console.log('caught', e.type, e.target);

  // pass through
  fn.call(this, e);
});
```

## Installation

    $ component install matthewmueller/event-spy

## API

### `spy(type, fn)`

Spy on events. `type` can either be a string or a regex. If no `type` given, spy watches all events.

- `mouseover` and `mousedown` events:

```js
spy(/(mouseover|mousedown)/, fn);
```

- All events:

```js
spy(fn);
```

### `spy#destroy()`

Removes the spy

## TODO

- fix removeEventListener()
- tests

## License

  MIT
