/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");

  /**
  * @constructor
  * @memberof order
  */
  SystemOrderType = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof order.SystemOrderType
    * @private
    */
    initialize: function() {
      this._class_ = SystemOrderType;
      this.id = undefined;
      this.labelKey = undefined;
      this.isQsr = undefined;
      this.isFsr = undefined;
      this.isRetail = undefined;
    },

    /**
    * Set the field value
    * Unqiue identifier
    *
    * @memberof order.SystemOrderType
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * Unqiue identifier
    * @memberof order.SystemOrderType
    * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * Label Key
    *
    * @memberof order.SystemOrderType
    * @param {String} labelKey 
    */
    setLabelKey: function(labelKey) {
      this.labelKey = labelKey;
    },

    /**
    * Get the field value
    * Label Key
    * @memberof order.SystemOrderType
    * @return {String} 
    */
    getLabelKey: function() {
      return this.labelKey;
    },

    /**
    * Set the field value
    * Is for quick service restraunts?
    *
    * @memberof order.SystemOrderType
    * @param {Boolean} isQsr 
    */
    setIsQsr: function(isQsr) {
      this.isQsr = isQsr;
    },

    /**
    * Get the field value
    * Is for quick service restraunts?
    * @memberof order.SystemOrderType
    * @return {Boolean} 
    */
    getIsQsr: function() {
      return this.isQsr;
    },

    /**
    * Set the field value
    * Is for full service restraunts?
    *
    * @memberof order.SystemOrderType
    * @param {Boolean} isFsr 
    */
    setIsFsr: function(isFsr) {
      this.isFsr = isFsr;
    },

    /**
    * Get the field value
    * Is for full service restraunts?
    * @memberof order.SystemOrderType
    * @return {Boolean} 
    */
    getIsFsr: function() {
      return this.isFsr;
    },

    /**
    * Set the field value
    * Is for retail stores?
    *
    * @memberof order.SystemOrderType
    * @param {Boolean} isRetail 
    */
    setIsRetail: function(isRetail) {
      this.isRetail = isRetail;
    },

    /**
    * Get the field value
    * Is for retail stores?
    * @memberof order.SystemOrderType
    * @return {Boolean} 
    */
    getIsRetail: function() {
      return this.isRetail;
    },

    /**
    * @memberof order.SystemOrderType
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

SystemOrderType._meta_ =  {fields:  {}};
SystemOrderType._meta_.fields["id"] = {};
SystemOrderType._meta_.fields["id"].type = String;
SystemOrderType._meta_.fields["labelKey"] = {};
SystemOrderType._meta_.fields["labelKey"].type = String;
SystemOrderType._meta_.fields["isQsr"] = {};
SystemOrderType._meta_.fields["isQsr"].type = Boolean;
SystemOrderType._meta_.fields["isFsr"] = {};
SystemOrderType._meta_.fields["isFsr"].type = Boolean;
SystemOrderType._meta_.fields["isRetail"] = {};
SystemOrderType._meta_.fields["isRetail"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = SystemOrderType;
}

