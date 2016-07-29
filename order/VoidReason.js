/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
Symbols beginning with USER_ or REJECT_ are user-initiated.  Others are client- or server-initiated.
* @memberof order
* @enum {string}
*/
VoidReason = {
  USER_CANCEL : "USER_CANCEL",
  TRANSPORT_ERROR : "TRANSPORT_ERROR",
  REJECT_SIGNATURE : "REJECT_SIGNATURE",
  REJECT_PARTIAL_AUTH : "REJECT_PARTIAL_AUTH",
  NOT_APPROVED : "NOT_APPROVED",
  FAILED : "FAILED",
  AUTH_CLOSED_NEW_CARD : "AUTH_CLOSED_NEW_CARD",
  DEVELOPER_PAY_PARTIAL_AUTH : "DEVELOPER_PAY_PARTIAL_AUTH",
  REJECT_DUPLICATE : "REJECT_DUPLICATE",
  REJECT_OFFLINE : "REJECT_OFFLINE"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VoidReason;
}

