Polymer({

  is: 'cells-demo-mobile',

  properties: {
    /**
     * Skin selected in dropdown
     * @type {String}
     */
    selectedSkin: {
      type: String,
      value: 'nexus5',
      observer: '_selectedSkinChanged'
    },

    /**
     * Orientation selected in dropdown
     * @type {String}
     */
    selectedOrientation: {
      type: String,
      value: 'portrait',
      observer: '_selectedOrientationChanged'
    },

    /**
     * Minimum screen width in pixels to show the mobile shell.
     * Set to 0 to always show the shell.
     */
    shellAtMinWidth: {
      type: Number,
      value: 769
    },

    /**
     * Array of devices in dropdown
     * @type {Array}
     */
    devices: Array,

    /**
     * Array of orientations in dropdown
     * @type {Array}
     */
    orientations: Array
  },

  observers: [ '_toggleMobileVisibilityClass(showShell)' ],

  /**
   * Function to change the skin of screen
   * @param {string} elem - The id of the skin.
   * @private
   */
  _selectedSkinChanged: function(elem) {
    if (elem !== '') {
      Polymer.dom(this.root).querySelector('.marvel-device').classList.toggle(this.selectedSkin);

      this.selectedSkin = elem;
      Polymer.dom(this.root).querySelector('.marvel-device').classList.add(this.selectedSkin);
    }

    Polymer.dom(this.root).querySelector('#select-skin').value = elem;
  },

  /**
   * Function to change the orientation of screen
   * @param {string} elem - The id of the orientation. Must be portrait or landscape
   * @private
   */
  _selectedOrientationChanged: function(elem) {
    if (elem !== '') {
      Polymer.dom(this.root).querySelector('.marvel-device').classList.toggle(this.selectedOrientation);

      this.selectedOrientation = elem;
      Polymer.dom(this.root).querySelector('.marvel-device').classList.add(this.selectedOrientation);
    }

    Polymer.dom(this.root).querySelector('#select-orientation').value = elem;
  },

  /**
   * Event of dropdown changed
   * @param {Object} ev - Event launched when an user selects value in dropdown
   * @private
   */
  onDropdownChanged: function(e) {
    if (e.target.id === 'select-skin') {
      this._selectedSkinChanged(e.target.selected);
    } else {
      this._selectedOrientationChanged(e.target.selected);
    }
    this.fire('changescreen');
  },

  /**
   * Event of attached component
   */
  attached: function() {
    this.devices = [
      {'value': 'nexus5', 'name': 'Nexus 5'},
      {'value': 'iphone6', 'name': 'Iphone 6'},
      {'value': 'iphone6plus', 'name': 'Iphone 6 plus'},
      {'value': 'iphone5s', 'name': 'Iphone 5S'},
      {'value': 'ipad', 'name': 'Ipad Mini'},
      {'value': 'iphone4s', 'name': 'Iphone 4S'},
      {'value': 'lumia920', 'name': 'Lumia 920'},
      {'value': 's5', 'name': 'Samsung Galaxy S5'},
      {'value': 'htc-one', 'name': 'HTC One'},
      {'value': 'macbook', 'name': 'MacBook Pro'}];
    this.orientations = [
      {'value': 'portrait', 'name': 'Portrait'},
      {'value': 'landscape', 'name': 'Landscape'}];
  },

  _toggleMobileVisibilityClass: function(showShell) {
    this._elems = this._elems || Polymer.dom(this.root).querySelectorAll('.js-mobile-unstyled');

    for (var i = 0, len = this._elems.length; i < len; i++) {
      this.toggleClass('mobile-unstyled', !showShell, this._elems[i]);
    }
  }

});
