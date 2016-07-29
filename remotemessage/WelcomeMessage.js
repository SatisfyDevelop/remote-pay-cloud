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
  WelcomeMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.WelcomeMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = WelcomeMessage;
      this.setMethod(remotemessage_Method["SHOW_WELCOME_SCREEN"]);
    }
  });

WelcomeMessage._meta_ =  {fields:  {}};

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = WelcomeMessage;
}
