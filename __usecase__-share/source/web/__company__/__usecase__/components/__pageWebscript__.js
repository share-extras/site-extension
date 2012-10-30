if (typeof __Company__ == "undefined" || !__Company__)
{
   var __Company__ = {};
}
__Company__.__usecase__ = __Company__.__usecase__ || {};
__Company__.__usecase__.component = __Company__.__usecase__.component || {};

/**
 * __PageWebscript__ component.
 *
 * @namespace __Company__.__usecase__
 * @class __Company__.__usecase__.__PageWebscript__
 */
(function()
{
   var Dom = YAHOO.util.Dom;

   /**
    * __PageWebscript__ constructor.
    *
    * @param {String} htmlId The HTML id of the parent element
    * @return {__Company__.__usecase__.component.__PageWebscript__} The new component instance
    * @constructor
    */
   __Company__.__usecase__.component.__PageWebscript__ = function(htmlId)
   {
      __Company__.__usecase__.component.__PageWebscript__.superclass.constructor.call(this, "__Company__.__usecase__.component.__PageWebscript__",  htmlId, []);

      // Set instance variables
      this._cssHideClass = "__company__-__usecase__-__pageWebscript__-hidden";

      return this;
   };

   YAHOO.extend(__Company__.__usecase__.component.__PageWebscript__, Alfresco.component.Base,
   {
      /**
       * Object container for initialization options
       *
       * @property options
       * @type object
       */
      options:
      {
         /**
          * Decides if the greeting shall be displayed or not
          *
          * @property displayGreeting
          * @type boolean
          * @default true
          */
         displayGreeting: true
      },

      /**
       * @property _cssHideClass
       * @type string
       * @default "hidden"
       * @private
       */
      _cssHideClass: null,

      /**
       * Called by YUI when parent element is available for scripting
       *
       * @method onReady
       */
      onReady: function()
      {
         // Show message
         Dom.removeClass(this.id + "-greeting", this._cssHideClass);
      }
   });

})();

