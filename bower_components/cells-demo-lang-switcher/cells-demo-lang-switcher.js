(function() {
  Polymer({
    /* global I18nMsg */
    is: 'cells-demo-lang-switcher',

    properties: {
      /**
       * Label for the lang selector.
       */
      label: {
        type: String,
        value: 'Lang'
      },

      /**
       * Available langs for a component.
       */
      langs: {
        type: Array,
        value: function() {
          return ['en', 'es'];
        }
      },

      /**
       * Default lang selected.
       */
      selected: {
        type: Number,
        value: 0,
        observer: '_setDocumentLang'
      },

      /**
       * Path to locales folder.
       */
      localesPath: {
        type: String,
        value: '../locales',
        observer: '_setLocalesPath'
      }
    },

    _setLocalesPath: function(localesPath) {
      I18nMsg.url = localesPath;
    },

    _setDocumentLang: function(selected) {
      this.ownerDocument.lang = this.langs[selected];
      I18nMsg.lang = this.ownerDocument.lang;
    }
  });
}());
