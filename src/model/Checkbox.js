(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './MergeField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./MergeField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.MergeField);
  }
}(this, function(module, ErrorDetails, MergeField) {
  'use strict';

  
  

  
  var Checkbox = function Checkbox() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.tabLabel) {
        self.tabLabel = data.tabLabel;
      }
      
      if (data.selected) {
        self.selected = data.selected;
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.requireInitialOnSharedChange) {
        self.requireInitialOnSharedChange = data.requireInitialOnSharedChange;
      }
      
      if (data.required) {
        self.required = data.required;
      }
      
      if (data.locked) {
        self.locked = data.locked;
      }
      
      if (data.documentId) {
        self.documentId = data.documentId;
      }
      
      if (data.recipientId) {
        self.recipientId = data.recipientId;
      }
      
      if (data.pageNumber) {
        self.pageNumber = data.pageNumber;
      }
      
      if (data.xPosition) {
        self.xPosition = data.xPosition;
      }
      
      if (data.yPosition) {
        self.yPosition = data.yPosition;
      }
      
      if (data.anchorString) {
        self.anchorString = data.anchorString;
      }
      
      if (data.anchorXOffset) {
        self.anchorXOffset = data.anchorXOffset;
      }
      
      if (data.anchorYOffset) {
        self.anchorYOffset = data.anchorYOffset;
      }
      
      if (data.anchorUnits) {
        self.anchorUnits = data.anchorUnits;
      }
      
      if (data.anchorIgnoreIfNotPresent) {
        self.anchorIgnoreIfNotPresent = data.anchorIgnoreIfNotPresent;
      }
      
      if (data.anchorCaseSensitive) {
        self.anchorCaseSensitive = data.anchorCaseSensitive;
      }
      
      if (data.anchorMatchWholeWord) {
        self.anchorMatchWholeWord = data.anchorMatchWholeWord;
      }
      
      if (data.anchorHorizontalAlignment) {
        self.anchorHorizontalAlignment = data.anchorHorizontalAlignment;
      }
      
      if (data.tabId) {
        self.tabId = data.tabId;
      }
      
      if (data.templateLocked) {
        self.templateLocked = data.templateLocked;
      }
      
      if (data.templateRequired) {
        self.templateRequired = data.templateRequired;
      }
      
      if (data.conditionalParentLabel) {
        self.conditionalParentLabel = data.conditionalParentLabel;
      }
      
      if (data.conditionalParentValue) {
        self.conditionalParentValue = data.conditionalParentValue;
      }
      
      if (data.customTabId) {
        self.customTabId = data.customTabId;
      }
      
      if (data.mergeField) {
        self.mergeField = new data.mergeField.constructor();
        self.mergeField.constructFromObject(data.mergeField);
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get Specifies the tool tip text for the tab.
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set Specifies the tool tip text for the tab.
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get The label string associated with the tab.
     * @return {String}
     **/
    self.getTabLabel = function() {
      return self.tabLabel;
    }

    /**
     * set The label string associated with the tab.
     * @param {String} tabLabel
     **/
    self.setTabLabel = function (tabLabel) {
      self.tabLabel = tabLabel;
    }
    
    /**
     * get When set to **true**, the checkbox is selected.
     * @return {String}
     **/
    self.getSelected = function() {
      return self.selected;
    }

    /**
     * set When set to **true**, the checkbox is selected.
     * @param {String} selected
     **/
    self.setSelected = function (selected) {
      self.selected = selected;
    }
    
    /**
     * get When set to **true**, this custom tab is shared.
     * @return {String}
     **/
    self.getShared = function() {
      return self.shared;
    }

    /**
     * set When set to **true**, this custom tab is shared.
     * @param {String} shared
     **/
    self.setShared = function (shared) {
      self.shared = shared;
    }
    
    /**
     * get Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
     * @return {String}
     **/
    self.getRequireInitialOnSharedChange = function() {
      return self.requireInitialOnSharedChange;
    }

    /**
     * set Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
     * @param {String} requireInitialOnSharedChange
     **/
    self.setRequireInitialOnSharedChange = function (requireInitialOnSharedChange) {
      self.requireInitialOnSharedChange = requireInitialOnSharedChange;
    }
    
    /**
     * get When set to **true**, the signer is required to fill out this tab
     * @return {String}
     **/
    self.getRequired = function() {
      return self.required;
    }

    /**
     * set When set to **true**, the signer is required to fill out this tab
     * @param {String} required
     **/
    self.setRequired = function (required) {
      self.required = required;
    }
    
    /**
     * get When set to **true**, the signer cannot change the data of the custom tab.
     * @return {String}
     **/
    self.getLocked = function() {
      return self.locked;
    }

    /**
     * set When set to **true**, the signer cannot change the data of the custom tab.
     * @param {String} locked
     **/
    self.setLocked = function (locked) {
      self.locked = locked;
    }
    
    /**
     * get Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @return {String}
     **/
    self.getDocumentId = function() {
      return self.documentId;
    }

    /**
     * set Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @param {String} documentId
     **/
    self.setDocumentId = function (documentId) {
      self.documentId = documentId;
    }
    
    /**
     * get Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @return {String}
     **/
    self.getRecipientId = function() {
      return self.recipientId;
    }

    /**
     * set Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @param {String} recipientId
     **/
    self.setRecipientId = function (recipientId) {
      self.recipientId = recipientId;
    }
    
    /**
     * get Specifies the page number on which the tab is located.
     * @return {String}
     **/
    self.getPageNumber = function() {
      return self.pageNumber;
    }

    /**
     * set Specifies the page number on which the tab is located.
     * @param {String} pageNumber
     **/
    self.setPageNumber = function (pageNumber) {
      self.pageNumber = pageNumber;
    }
    
    /**
     * get This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {String}
     **/
    self.getXPosition = function() {
      return self.xPosition;
    }

    /**
     * set This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {String} xPosition
     **/
    self.setXPosition = function (xPosition) {
      self.xPosition = xPosition;
    }
    
    /**
     * get This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {String}
     **/
    self.getYPosition = function() {
      return self.yPosition;
    }

    /**
     * set This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {String} yPosition
     **/
    self.setYPosition = function (yPosition) {
      self.yPosition = yPosition;
    }
    
    /**
     * get Anchor text information for a radio button.
     * @return {String}
     **/
    self.getAnchorString = function() {
      return self.anchorString;
    }

    /**
     * set Anchor text information for a radio button.
     * @param {String} anchorString
     **/
    self.setAnchorString = function (anchorString) {
      self.anchorString = anchorString;
    }
    
    /**
     * get Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
     * @return {String}
     **/
    self.getAnchorXOffset = function() {
      return self.anchorXOffset;
    }

    /**
     * set Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
     * @param {String} anchorXOffset
     **/
    self.setAnchorXOffset = function (anchorXOffset) {
      self.anchorXOffset = anchorXOffset;
    }
    
    /**
     * get Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
     * @return {String}
     **/
    self.getAnchorYOffset = function() {
      return self.anchorYOffset;
    }

    /**
     * set Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
     * @param {String} anchorYOffset
     **/
    self.setAnchorYOffset = function (anchorYOffset) {
      self.anchorYOffset = anchorYOffset;
    }
    
    /**
     * get Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
     * @return {String}
     **/
    self.getAnchorUnits = function() {
      return self.anchorUnits;
    }

    /**
     * set Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
     * @param {String} anchorUnits
     **/
    self.setAnchorUnits = function (anchorUnits) {
      self.anchorUnits = anchorUnits;
    }
    
    /**
     * get When set to **true**, this tab is ignored if anchorString is not found in the document.
     * @return {String}
     **/
    self.getAnchorIgnoreIfNotPresent = function() {
      return self.anchorIgnoreIfNotPresent;
    }

    /**
     * set When set to **true**, this tab is ignored if anchorString is not found in the document.
     * @param {String} anchorIgnoreIfNotPresent
     **/
    self.setAnchorIgnoreIfNotPresent = function (anchorIgnoreIfNotPresent) {
      self.anchorIgnoreIfNotPresent = anchorIgnoreIfNotPresent;
    }
    
    /**
     * get When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * @return {String}
     **/
    self.getAnchorCaseSensitive = function() {
      return self.anchorCaseSensitive;
    }

    /**
     * set When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * @param {String} anchorCaseSensitive
     **/
    self.setAnchorCaseSensitive = function (anchorCaseSensitive) {
      self.anchorCaseSensitive = anchorCaseSensitive;
    }
    
    /**
     * get When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * @return {String}
     **/
    self.getAnchorMatchWholeWord = function() {
      return self.anchorMatchWholeWord;
    }

    /**
     * set When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * @param {String} anchorMatchWholeWord
     **/
    self.setAnchorMatchWholeWord = function (anchorMatchWholeWord) {
      self.anchorMatchWholeWord = anchorMatchWholeWord;
    }
    
    /**
     * get Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * @return {String}
     **/
    self.getAnchorHorizontalAlignment = function() {
      return self.anchorHorizontalAlignment;
    }

    /**
     * set Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * @param {String} anchorHorizontalAlignment
     **/
    self.setAnchorHorizontalAlignment = function (anchorHorizontalAlignment) {
      self.anchorHorizontalAlignment = anchorHorizontalAlignment;
    }
    
    /**
     * get The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].
     * @return {String}
     **/
    self.getTabId = function() {
      return self.tabId;
    }

    /**
     * set The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].
     * @param {String} tabId
     **/
    self.setTabId = function (tabId) {
      self.tabId = tabId;
    }
    
    /**
     * get When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * @return {String}
     **/
    self.getTemplateLocked = function() {
      return self.templateLocked;
    }

    /**
     * set When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * @param {String} templateLocked
     **/
    self.setTemplateLocked = function (templateLocked) {
      self.templateLocked = templateLocked;
    }
    
    /**
     * get When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * @return {String}
     **/
    self.getTemplateRequired = function() {
      return self.templateRequired;
    }

    /**
     * set When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * @param {String} templateRequired
     **/
    self.setTemplateRequired = function (templateRequired) {
      self.templateRequired = templateRequired;
    }
    
    /**
     * get For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
     * @return {String}
     **/
    self.getConditionalParentLabel = function() {
      return self.conditionalParentLabel;
    }

    /**
     * set For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
     * @param {String} conditionalParentLabel
     **/
    self.setConditionalParentLabel = function (conditionalParentLabel) {
      self.conditionalParentLabel = conditionalParentLabel;
    }
    
    /**
     * get For conditional fields, this is the value of the parent tab that controls the tab's visibility.\n\nIf the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active.
     * @return {String}
     **/
    self.getConditionalParentValue = function() {
      return self.conditionalParentValue;
    }

    /**
     * set For conditional fields, this is the value of the parent tab that controls the tab's visibility.\n\nIf the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active.
     * @param {String} conditionalParentValue
     **/
    self.setConditionalParentValue = function (conditionalParentValue) {
      self.conditionalParentValue = conditionalParentValue;
    }
    
    /**
     * get The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
     * @return {String}
     **/
    self.getCustomTabId = function() {
      return self.customTabId;
    }

    /**
     * set The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
     * @param {String} customTabId
     **/
    self.setCustomTabId = function (customTabId) {
      self.customTabId = customTabId;
    }
    
    /**
     * @return {MergeField}
     **/
    self.getMergeField = function() {
      return self.mergeField;
    }

    /**
     * @param {MergeField} mergeField
     **/
    self.setMergeField = function (mergeField) {
      self.mergeField = mergeField;
    }
    
    /**
     * get Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @return {String}
     **/
    self.getStatus = function() {
      return self.status;
    }

    /**
     * set Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @param {String} status
     **/
    self.setStatus = function (status) {
      self.status = status;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Checkbox = Checkbox;
  }

  return Checkbox;
  
  
}));
