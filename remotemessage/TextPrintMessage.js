/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

  /**
  * @constructor
  * @augments remotemessage.Message
  * @memberof remotemessage
  */
  TextPrintMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.TextPrintMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = TextPrintMessage;
      this.setMethod(remotemessage_Method["PRINT_TEXT"]);
      this.textLines = undefined;
    },

    /**
    * Set the field value
    * @memberof remotemessage.TextPrintMessage
    * @param {Array.<String>} textLines An array of 
    */
    setTextLines: function(textLines) {
      this.textLines = textLines;
    },

    /**
    * Get the field value
    * @memberof remotemessage.TextPrintMessage
    * @return {Array.<String>} An array of 
    */
    getTextLines: function() {
      return this.textLines;
    }
  });

TextPrintMessage._meta_ =  {fields:  {}};
TextPrintMessage._meta_.fields["textLines"] = {};
TextPrintMessage._meta_.fields["textLines"].type = Array;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TextPrintMessage;
}

