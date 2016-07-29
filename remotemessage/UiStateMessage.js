/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_UiDirection = require("../remotemessage/UiDirection");
var remotemessage_InputOption = require("../remotemessage/InputOption");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_UiState = require("../remotemessage/UiState");

  /**
  * @constructor
  * @augments remotemessage.Message
  * @memberof remotemessage
  */
  UiStateMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.UiStateMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = UiStateMessage;
      this.setMethod(remotemessage_Method["UI_STATE"]);
      this.uiText = undefined;
      this.uiDirection = undefined;
      this.inputOptions = undefined;
      this.uiState = undefined;
    },

    /**
    * Set the field value
    * The text for the UI
    *
    * @memberof remotemessage.UiStateMessage
    * @param {String} uiText 
    */
    setUiText: function(uiText) {
      this.uiText = uiText;
    },

    /**
    * Get the field value
    * The text for the UI
    * @memberof remotemessage.UiStateMessage
    * @return {String} 
    */
    getUiText: function() {
      return this.uiText;
    },

    /**
    * Set the field value
    * @memberof remotemessage.UiStateMessage
    * @param {remotemessage.UiDirection} uiDirection 
    */
    setUiDirection: function(uiDirection) {
      this.uiDirection = uiDirection;
    },

    /**
    * Get the field value
    * @memberof remotemessage.UiStateMessage
    * @return {remotemessage.UiDirection} 
    */
    getUiDirection: function() {
      return this.uiDirection;
    },

    /**
    * Set the field value
    * @memberof remotemessage.UiStateMessage
    * @param {Array.<remotemessage.InputOption>} inputOptions An array of 
    */
    setInputOptions: function(inputOptions) {
      this.inputOptions = inputOptions;
    },

    /**
    * Get the field value
    * @memberof remotemessage.UiStateMessage
    * @return {Array.<remotemessage.InputOption>} An array of 
    */
    getInputOptions: function() {
      return this.inputOptions;
    },

    /**
    * Set the field value
    * @memberof remotemessage.UiStateMessage
    * @param {remotemessage.UiState} uiState 
    */
    setUiState: function(uiState) {
      this.uiState = uiState;
    },

    /**
    * Get the field value
    * @memberof remotemessage.UiStateMessage
    * @return {remotemessage.UiState} 
    */
    getUiState: function() {
      return this.uiState;
    }
  });

UiStateMessage._meta_ =  {fields:  {}};
UiStateMessage._meta_.fields["uiText"] = {};
UiStateMessage._meta_.fields["uiText"].type = String;
UiStateMessage._meta_.fields["uiDirection"] = {};
UiStateMessage._meta_.fields["uiDirection"].type = remotemessage_UiDirection;
UiStateMessage._meta_.fields["inputOptions"] = {};
UiStateMessage._meta_.fields["inputOptions"].type = Array;
UiStateMessage._meta_.fields["inputOptions"].elementType = remotemessage_InputOption;
UiStateMessage._meta_.fields["uiState"] = {};
UiStateMessage._meta_.fields["uiState"].type = remotemessage_UiState;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = UiStateMessage;
}

