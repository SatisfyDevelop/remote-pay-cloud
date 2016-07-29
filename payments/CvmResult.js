/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof payments
* @enum {string}
*/
CvmResult = {
  NO_CVM_REQUIRED : "NO_CVM_REQUIRED",
  SIGNATURE : "SIGNATURE",
  PIN : "PIN",
  ONLINE_PIN : "ONLINE_PIN",
  SIGNATURE_AND_PIN : "SIGNATURE_AND_PIN",
  CVM_FAILED : "CVM_FAILED",
  DEVICE : "DEVICE"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CvmResult;
}

