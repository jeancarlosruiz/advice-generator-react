# Website Starter Template React

## Table of contents

- [Components](#components)
  - [Visually Hidden](#visually-hidden)
  - [Range Utility](#range-utility)
- [Acknowledgments](#acknowledgments)

## Components

### Visually Hidden

#### What's a screen reader?

A screen reader is a piece of software that parses the DOM and reads its contents aloud, using a synthetic voice. It's a vital tool used by folks who have poor or no vision (although screen readers are more broadly used by all sorts of people, including those who have dyslexia or other reading disorders).

#### Code:

These styles will make sure the component is not visible, but will still be announced by screen readers.

Adding “display: none” would hide the element from ALL users, including those using screen-readers.

Source: https://www.joyofreact.com
Section: Supporting screen readers exercises

```js
const hiddenStyles = {
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};
```

### Range Utility

Range is a utility function. It's not part of the JavaScript language (unfortunately), but it is a staple of utility libraries like lodash.

Range(n) will produce an array from 0 to n, where n is the supplied rating.

#### Code:

```js
const range = (start, end, step = 1) => {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
```

range(2);
Create an array from 0 (inclusive) to 2 (exclusive):
Produces: [0, 1]

range(5);
Create an array from 0 (inclusive) to 5 (exclusive):
Produces: [0, 1, 2, 3, 4]

range(2, 6);
Create an array from 2 (inclusive) to 6 (exclusive):
Produces: [2, 3, 4, 5]

range(2, 10, 2);
Create an array from 2 to 10, picking every 2nd number
Produces: [2, 4, 6, 8]

Source: https://www.joyofreact.com
Section: Range Utility

## Acknowledgments

More than grateful to these amazing people who have been helping me throughout this process and building my template based on their references:

- [Josh W Comeau](https://www.joyofreact.com/)
- [Desarrollo Útil](https://www.youtube.com/@DesarrolloUtil)
