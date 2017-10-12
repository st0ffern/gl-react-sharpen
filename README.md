# gl-react-sharpen ![](https://img.shields.io/npm/v/gl-react-sharpen.svg) ![](https://img.shields.io/badge/gl--react->= 2.1-05F561.svg) ![](https://img.shields.io/badge/gl--react-dom%20%7C%20native-f90.svg)

[![Greenkeeper badge](https://badges.greenkeeper.io/stoffern/gl-react-sharpen.svg)](https://greenkeeper.io/)

## Props

- `children` **(required)**: the content to negate.
- `width` **(required)**: width of the image.
- `height` **(required)**: height of the image.
- `factor`: optionally the intensity of the effect. 0 is disabled.

## Usage Examples

```js
var Sharpen = require("gl-react-sharpen").Sharpen;
// or
import {Sharpen} from "gl-react-sharpen";
```

```html
<Sharpen>...</Sharpen>
```

```html
<Sharpen factor={2.1} width={450} height={300}>...</Sharpen>
```
