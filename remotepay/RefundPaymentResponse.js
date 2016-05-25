/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var payments_Refund = require("../payments/Refund");

  /**
  * @constructor
  */
  RefundPaymentResponse = Class.create(remotepay_BaseResponse, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = RefundPaymentResponse;
      this.refundObj = undefined;
    },

    /**
    * Set the field value
    * The actual refund from the request
    *
    * @param {Refund} refundObj 
    */
    setRefundObj: function(refundObj) {
      this.refundObj = refundObj;
    },

    /**
    * Get the field value
    * The actual refund from the request
      * @return {Refund} 
    */
    getRefundObj: function() {
      return this.refundObj;
    }
  });

RefundPaymentResponse._meta_ =  {fields:  {}};
RefundPaymentResponse._meta_.fields["refundObj"] = {};
RefundPaymentResponse._meta_.fields["refundObj"].type = payments_Refund;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RefundPaymentResponse;
}
