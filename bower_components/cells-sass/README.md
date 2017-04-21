# cells-sass

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

Brief set of functions and mixins which help in the development of the components' SCSS.

* **main**
    * mixins
    * utils
    * breakpoint


# mixins
Focused in typography, reset and accessibility.

## Available mixins and functions

### function `rem()`

Converts pixels to rems.

Usage:

```
font-size: rem(14px);
```

### mixin `clearfix`

Clears floated elements in a parent container.

Usage:

```
.parent { @include clearfix; }
.parent .child { float: left; }
```

### mixin `visuallyhidden`

Hides on-screen elements without hiding them to screen readers.
We recommend to apply this mixin to classes named `visuallyhidden` or `sr-only`.

Usage:

```
.visuallyhidden {
  @include visuallyhidden;
}
```

### mixin `ellipsis`

Truncates text adding an ellipsis.

Usage:

```
.ellipsis { @include ellipsis; }
```

### mixin `list-unstyled`

Removes margin, padding and list-style. This mixin should be applied to `<ul>` or `<ol>` elements.

Usage:

```
ul { @include list-unstyled; }
```

### mixin `reset`

Resets margin and padding to the elements passed as param.

Usage:

```
@include reset(h1, h2, p, blockquote, "ul.my-class");
```

### mixin `reset-user-select`

Resets user-select property to its initial value to allow text selection in some elements.

Usage:

```
.selectable-element { @include reset-user-select; }
```

# breakpoint
* **mobile first** `640px`
* **medium screens** `641px`
* **large screens** `1025px`
* **xlarge screens** `1441px`
* **xxlarge screens** `1921px`
* **medium screens only** `641 - 1024`
* **large screens only** `1025 -1440`
* **xxlarge screens only** `1441 -1920`
