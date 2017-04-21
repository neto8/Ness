# cells-demo-lang-switcher

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-demo-lang-switcher>` is a dropdown menu
that changes the language of a component, which uses `CellsBehaviors.i18nBehavior`


Examples:

__With default configuration:__
```
<cells-demo-lang-switcher></cells-demo-lang-switcher>
```

__With custom label, path to locales and langs:__
```
<cells-demo-lang-switcher
  label="Idioma"
  locales-path="custom-path-to-locales"
  langs='["en","es","de","fr"]'>
</cells-demo-lang-switcher>
```
