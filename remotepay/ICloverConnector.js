/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");


 /**
 *  Interface to the Clover remote-pay API.
 *
 *  Defines the interface used to interact with remote pay
 *  adapters.
 */
  /**
  * @constructor
  */
  ICloverConnector = Class.create( {
    /**
    * Send a signature acceptance
    * @param {VerifySignatureRequest} request 
    * @return void
    */
    acceptSignature: function(request) {
    },

    /**
    * Request an authorization operation.
    * @param {AuthRequest} authRequest 
    * @return void
    */
    auth: function(authRequest) {
    },

    /**
    * Request a preauth operation.
    * @param {PreAuthRequest} preAuthRequest 
    * @return void
    */
    preAuth: function(preAuthRequest) {
    },

    /**
    * Request a cancel be sent to the device.
    * @return void
    */
    cancel: function() {
    },

    /**
    * Request a preauth be captured.
    * @param {CapturePreAuthRequest} capturePreAuthRequest 
    * @return void
    */
    capturePreAuth: function(capturePreAuthRequest) {
    },

    /**
    * Request a closeout.
    * @param {CloseoutRequest} closeoutRequest 
    * @return void
    */
    closeout: function(closeoutRequest) {
    },

    /**
    * Show the customer facing receipt option screen for the specified payment
    * @param {String} orderId 
    * @param {String} paymentId 
    * @return void
    */
    showPaymentReceiptOptions: function(orderId, paymentId) {
    },

    /**
    * Display order information on the screen. Calls to this method will cause the DisplayOrder
  * to show on the clover device. If a DisplayOrder is already showing on the Clover device,
  * it will replace the existing DisplayOrder on the device.
    * @param {DisplayOrder} order 
    * @return void
    */
    showDisplayOrder: function(order) {
    },

    /**
    * Removes the Display order information on the screen.
    * @param {DisplayOrder} order 
    * @return void
    */
    removeDisplayOrder: function(order) {
    },

    /**
    * Notify device of a discount being added to the order. The discount will then reflect in the displayOrder.
  * Note: This is independent of a discount being added to a display line item.
    * @param {DisplayDiscount} discount 
    * @param {DisplayOrder} order 
    * @return void
    */
    discountAddedToDisplayOrder: function(discount, order) {
    },

    /**
    * Notify device of a discount being removed to the order. The discount will then reflect in the displayOrder.
  * Note: This is independent of a discount being removed to a display line item.
    * @param {DisplayDiscount} discount 
    * @param {DisplayOrder} order 
    * @return void
    */
    discountRemovedFromDisplayOrder: function(discount, order) {
    },

    /**
    * Notify device of a line item being added to the order. The line item will then reflect in the displayOrder.
  * Note: This is independent of a line item being added to a display line item.
    * @param {DisplayLineItem} lineItem 
    * @param {DisplayOrder} order 
    * @return void
    */
    lineItemAddedToDisplayOrder: function(lineItem, order) {
    },

    /**
    * Notify device of a line item being removed to the order. The line item will then reflect in the displayOrder.
  * Note: This is independent of a line item being removed to a display line item.
    * @param {DisplayLineItem} lineItem 
    * @param {DisplayOrder} order 
    * @return void
    */
    lineItemRemovedFromDisplayOrder: function(lineItem, order) {
    },

    /**
    * Destroy the connector.  After this is called, the connection to the device is severed, and this object is
  * no longer usable
    * @return void
    */
    dispose: function() {
    },

    /**
    * Send a keystroke to the device.  When in non secure displays are on the device, this can be used to
  * act in the role of the user to 'press' available keys.
    * @param {InputOption} io 
    * @return void
    */
    invokeInputOption: function(io) {
    },

    /**
    * Do a refund to a card.
    * @param {ManualRefundRequest} request 
    * @return void
    */
    manualRefund: function(request) {
    },

    /**
    * Do a refund on a previously made payment.
    * @param {RefundPaymentRequest} request 
    * @return void
    */
    refundPayment: function(request) {
    },

    /**
    * Open the first cash drawer that is found connected to the clover device.
    * @param {String} reason 
    * @return void
    */
    openCashDrawer: function(reason) {
    },

    /**
    * Print the passed image. bitmap is a language specific object that represents an image.
    * @param {Img} bitmap 
    * @return void
    */
    printImage: function(bitmap) {
    },

    /**
    * Print an image on the clover device that is found at the passed url.
    * @param {String} imgUrl 
    * @return void
    */
    printImageFromURL: function(imgUrl) {
    },

    /**
    * Print text on the clover device printer.
    * @param {Array.<String>} messages An array of 
    * @return void
    */
    printText: function(messages) {
    },

    /**
    * Reject a signature
    * @param {VerifySignatureRequest} request 
    * @return void
    */
    rejectSignature: function(request) {
    },

    /**
    * Send a message to the device to reset back to the welcome screen.  Can be used when the device is in
  * an unknown state.
    * @return void
    */
    resetDevice: function() {
    },

    /**
    * Begin a sale transaction.
    * @param {SaleRequest} request 
    * @return void
    */
    sale: function(request) {
    },

    /**
    * Show a text message on the device.
    * @param {String} message 
    * @return void
    */
    showMessage: function(message) {
    },

    /**
    * Show the thank you display on the device.
    * @return void
    */
    showThankYouScreen: function() {
    },

    /**
    * Show the welcome display on the device.
    * @return void
    */
    showWelcomeScreen: function() {
    },

    /**
    * Tip adjust an existing auth
    * @param {TipAdjustAuthRequest} request 
    * @return void
    */
    tipAdjustAuth: function(request) {
    },

    /**
    * Vault a card using optional cardEntryMethods
    * @param {Number} cardEntryMethods must be an integer
    * @return void
    */
    vaultCard: function(cardEntryMethods) {
    },

    /**
    * Void a payment
    * @param {VoidPaymentRequest} request 
    * @return void
    */
    voidPayment: function(request) {
    },

    /**
    * Starts communication with the device.  This is called after the connector is created and listeners are added to the connector.
    * @return void
    */
    initializeConnection: function() {
    }
  });


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ICloverConnector;
}

