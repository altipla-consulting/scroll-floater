'use strict';

goog.provide('altipla.ScrollFloater');

goog.require('goog.ui.ScrollFloater');
goog.require('goog.dom.classlist');
goog.require('goog.events');



/**
 * Element that floats when the scroll reaches it.
 * @param {Element} element Element to float.
 * @param {number=} opt_offset Offset from the top edge of the browser to leave
 * room to other floaters.
 * @param {Element=} opt_container Container element that will limit the
 * space the floater will move.
 * @constructor
 * @struct
 * @export
 */
altipla.ScrollFloater = function(element, opt_offset, opt_container) {
  /**
   * Element to float.
   * @type {Element}
   * @private
   */
  this.element_ = element;

  goog.dom.classlist.add(element, altipla.ScrollFloater.CLASS_NAME);

  /**
   * Floater widget.
   * @type {goog.ui.ScrollFloater}
   * @private
   */
  this.floater_ = new goog.ui.ScrollFloater();
  if (opt_offset) {
    this.floater_.setViewportTopOffset(opt_offset);
  }
  this.floater_.decorate(element);

  if (opt_container) {
    this.floater_.setContainerElement(opt_container);
  }

  goog.events.listen(this.floater_, goog.ui.ScrollFloater.EventType.FLOAT,
      goog.bind(this.onFloat_, this));
  goog.events.listen(this.floater_, goog.ui.ScrollFloater.EventType.DOCK,
      goog.bind(this.onDock_, this));

  if (this.floater_.isFloating()) {
    this.onFloat_();
  } else {
    this.onDock_();
  }
};


goog.scope(function() {
var _ = altipla.ScrollFloater;


/**
 * Class added to the element permanently.
 * @type {string}
 * @const
 */
_.CLASS_NAME = 'scroll-floater';


/**
 * Class added to the element when is docked.
 * @type {string}
 * @const
 */
_.DOCKED_CLASS_NAME = 'scroll-floater-docked';


/**
 * Class added to the element when is floating.
 * @type {string}
 * @const
 */
_.FLOATING_CLASS_NAME = 'scroll-floater-floating';


/**
 * Called when the navbar floats. It will update the CSS classes.
 * @private
 */
_.prototype.onFloat_ = function() {
  goog.dom.classlist.addRemove(this.element_, _.DOCKED_CLASS_NAME,
      _.FLOATING_CLASS_NAME);
};


/**
 * Called when the navbar docks. It will update the CSS classes.
 * @private
 */
_.prototype.onDock_ = function() {
  goog.dom.classlist.addRemove(this.element_, _.FLOATING_CLASS_NAME,
      _.DOCKED_CLASS_NAME);
};


/**
 * Enables or disables the floater.
 * @param {boolean} enabled Whether it should be enabled or not.
 * @export
 */
_.prototype.setEnabled = function(enabled) {
  this.floater_.setScrollingEnabled(enabled);
};


/**
 * Remove the floater.
 * @export
 */
_.prototype.destroy = function() {
  this.setEnabled(false);
  this.floater_.dispose();
};


});  // goog.scope
