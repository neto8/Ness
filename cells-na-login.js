(function() {

  'use strict';


    Polymer({
      is: 'cells-na-login',

      properties: {
        disabled: {
          type: Boolean,
          reflectToAttribute: true,
          value: false
        },

        signedIn: {
          type: Boolean,
          reflectToAttribute: true,
          value: false
        }
      },

      signIn: function() {
        this.fire('sign-in', null, { bubbles: false });
      }
    });
 

}());
