# cells-demo-mobile

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-demo-mobile>` is a device shell to showcase a component with different screen layouts and orientations.

Wrap the component to be showcased with `<cells-demo-mobile>`:

```html
<cells-demo-mobile selected-skin="nexus5" selected-orientation="portrait">
  <molecule-checkbox>Label</molecule-checkbox>
</cells-demo-mobile>
```

Use `shell-at-min-width` attribute to show the device shell at specific screen width:

```html
<cells-demo-mobile shell-at-min-width="601">
  <molecule-checkbox>Label</molecule-checkbox>
</cells-demo-mobile>
```

___Warning:___
By default this value is 769px so the device shell will be hidden in screens that are smaller than that value.
__Hence, you migth want to hide some elements of your demo that are not part of your component itself__, such as lang-selector or tabs for choosing among different mocks.
To do that, add the class `hidden-mobile` to those elements. This class should be defined in your demo css if you have create the component with modern versions of cells-generator, in any case it looks like:

```css
‌‌ @media (max-width: 768px) {
  .hidden-mobile {
    display: none !important;
  }
 }
```

So add it if needed. If your component doesn't collide with those elements you might not have to hide anything.

Available screens:
- Nexus 5
- Iphone 6
- Iphone 6 plus
- Iphone 5S
- Ipad Mini
- Iphone 4S
- Lumia 920
- Samsung Galaxy S5
- HTC One
- MacBook Pro

Available orientations:
- Portrait
- Landscape

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------:|:---------------:| :-------------:|
| --cells-demo-mobile-screen  | empty mixin for .screen section     | {}             |
| --cells-demo-mobile  | empty mixin     | {}             |
