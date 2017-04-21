cells-i18n-behavior
=======================

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`CellsBehaviors.i18nBehavior` provides a normalized interface for translate strings.

 #### Import

 1) Import the behavior in your component:

 ```html
 <link rel="import" href="../cells-i18n-behavior/cells-i18n-behavior.html">
 ```

 2) Add CellsBehaviors.i18nBehavior to the behaviors list in the JS file or script of your component:

 ```js
 behaviors: [CellsBehaviors.i18nBehavior]
 ```

 #### Usage

 1. To translate a string, just do the following:

    ```html
    {{doTranslation('string-to-translate')}}
    ```

    or, in a shorter but equivalent way (t() is just an alias of doTranslation()):

    ```html
    {{t('string-to-translate')}}
    ```

 2. Define an optional 'fallback' string with the second parameter:

    ```html
    {{t('string-to-translate', 'fallback-string')}}
     ```

 3. For asynchronous translation on attached:

    ```js
    attached: function() {
      this.getMsg('string-to-translate').then(function(translation) {
        this.set('readyTranslation', translation);
      }.bind(this));
    }
    ```

 4. Define an optional 'interpolation' string object with the third parameter::

    ```html
    {{t('string-to-translate', '', '{"attribute": "value"}')}}
     ```

 Where **string-to-translate** is the name of the string or message to be translated in your **locales/[en|es].json** files,
 **fallback-string** is a message string to display if **string-to-translate** is not present in the dictionary, although,
 if fallback is not defined then the string to display is the key (string-to-translate) itself.

 Note: If **string-to-translate** contains a comma (,) it must be escaped by preceding it with a '\'.

 #### Example:

 ```html
 <p>
   {{t('Welcome')}}
   <input type="text" placeholder="{{t('Username\, Email or UserID')}}">
 </p>
 ```

 Finally, have the translations on the *locales* folder. This folder will have one JSON file for each supported language (en.json, es.json, en-US.json, etc).

 For every language the Object defined contains all translated strings indexed by a unique ID, which is the same across all languages.

 ***en.json:***

```json
{
  "your-component-name-cancel": {
    "message": "Cancel"
  },
  "your-component-name-info": "Information", //simple syntax
  "explicitText": {
    "message": "${interpolated} text"
  },
  "arrayText": ["part1", "part2", "...", "partN"]
}
```

 ***es.json:***

```json
{
  "your-component-name-cancel": "Cancelar", //simple syntax
  "your-component-name-info": {
    "message": "Informacion"
  },
  "explicitText": {
    "message": "${interpolated} text"
  },
  "arrayText": ["part1", "part2", "...", "partN"]
}
```
