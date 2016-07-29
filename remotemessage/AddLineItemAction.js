/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var order_DisplayLineItem = require("../order/DisplayLineItem");

  /**
  * @constructor
  * @memberof remotemessage
  */
  AddLineItemAction = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.AddLineItemAction
    * @private
    */
    initialize: function() {
      this._class_ = AddLineItemAction;
      this.discount = undefined;
      this.taxable = undefined;
    },

    /**
    * Set the field value
    * @memberof remotemessage.AddLineItemAction
    * @param {order.DisplayLineItem} discount 
    */
    setDiscount: function(discount) {
      this.discount = discount;
    },

    /**
    * Get the field value
    * @memberof remotemessage.AddLineItemAction
    * @return {order.DisplayLineItem} 
    */
    getDiscount: function() {
      return this.discount;
    },

    /**
    * Set the field value
    * @memberof remotemessage.AddLineItemAction
    * @param {Boolean} taxable 
    */
    setTaxable: function(taxable) {
      this.taxable = taxable;
    },

    /**
    * Get the field value
    * @memberof remotemessage.AddLineItemAction
    * @return {Boolean} 
    */
    getTaxable: function() {
      return this.taxable;
    },

    /**
    * @memberof remotemessage.AddLineItemAction
    * @private
    */
    getMetaInfo: function(fieldName) {
      var curclass = this._class_;
      do {
        var fieldMetaInfo = curclass._meta_.fields[fieldName];
        if(fieldMetaInfo) {
          return fieldMetaInfo;
        }
        curclass = curclass.superclass;
      } while(curclass);
      return null;
    },

    toString: function() {
      return JSON.stringify(this);
    }

  });

AddLineItemAction._meta_ =  {fields:  {}};
AddLineItemAction._meta_.fields["discount"] = {};
AddLineItemAction._meta_.fields["discount"].type = order_DisplayLineItem;
AddLineItemAction._meta_.fields["taxable"] = {};
AddLineItemAction._meta_.fields["taxable"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = AddLineItemAction;
}

