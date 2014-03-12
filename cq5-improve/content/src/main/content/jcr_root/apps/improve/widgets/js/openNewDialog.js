/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class CQ.Ext.form.BrandhubText
 * @extends CQ.Ext.form.TriggerField
 * Provides some fields for Brandhub Text
 * @constructor
 * Create a new Brandhub Text
 * @param {Object} config
 * @xtype brandhubtext
 */

CQ.Ext.form.BrandhubText = CQ.Ext.extend(CQ.Ext.form.TriggerField, {

	BrandhubTextDialog : null,
	
    "triggerClass" : "x-form-search-trigger",
    
    "separator" : "#!",
    
    "readOnly" : false,
    
    updateEditState: function(){
		if(this.rendered){
		    if (this.readOnly) {
		        this.el.dom.readOnly = true;
		    } else {
		        if (!this.editable) {
		            this.el.dom.readOnly = true;
		            this.el.addClass('x-trigger-noedit');
		            this.mon(this.el, 'click', this.onTriggerClick, this);
		        } else {
		            this.el.dom.readOnly = false;
		            this.el.removeClass('x-trigger-noedit');
		            this.mun(this.el, 'click', this.onTriggerClick, this);
		        }
		        this.trigger.setDisplayed(!this.hideTrigger);
		    }
		    this.onResize(this.width || this.wrap.getWidth());
		}
    },   
     
    initComponent : function(){
        CQ.Ext.form.BrandhubText.superclass.initComponent.call(this);
    },
	
    // private
    onDestroy : function(){
        if (this.BrandhubTextDialog) {
            this.BrandhubTextDialog.destroy();
        }
        CQ.Ext.form.BrandhubText.superclass.onDestroy.call(this);
    },
    
    /**
     * @method onTriggerClick
     * @hide
     */
    // private
    // Implements the default empty TriggerField.onTriggerClick function to display the DatePicker
        
    onTriggerClick : function(){
    	
        var parentDialog = this.findParentByType("dialog");
        fieldName = this.getName();
        

        var textName = fieldName + "_text";
        var colorName = fieldName + "_color";
        var fontSizeName = fieldName + "_fontSize";
        var styleName = fieldName + "_style";
        var shadowName = fieldName + "_shadow";
        
        var tabName = fieldName + "mainTab" ; 
        
        var textValue;
        var colorValue;
        var fontSizeValue = 'default';        
        var styleValue = 'default';
        var shadowValue;
        
        var elem = this.getValue().split(this.separator);
        if(elem[0] != null){
        	textValue = elem[0];
        }
        if(elem[1] != null){
        	colorValue = elem[1];
        }
        if(elem[2] != null){
        	fontSizeValue = elem[2];
        }
        if(elem[3] != null){
        	styleValue = elem[3];
        }
        if(elem[4] != null){
        	shadowValue = elem[4];
        }
        
        // lazy creation of browse dialog
        if (this.keyItemDialog == null) {
        	 function okHandler() {
        		 textValue = this.getField(textName).getValue();
        		 textValue = textValue.replace(/\n/g, '<br/>');
        		 colorValue = this.getField(colorName).getValue();
        		 fontSizeValue = this.getField(fontSizeName).getValue();
        		 styleValue = this.getField(styleName).getValue();
        		 shadowValue = this.getField(shadowName).getValue();

        		 this.BrandhubTextField.setValue(textValue
        				 +this.BrandhubTextField.separator+colorValue
        				 +this.BrandhubTextField.separator+fontSizeValue
        				 +this.BrandhubTextField.separator+styleValue
        				 +this.BrandhubTextField.separator+shadowValue);
        	
        		 this.hide();
        	 }
        	 
        	 var BrandhubTextDialogCfg = {
                     'width' : 500, 
                     'height' : 400,
                     'ok' : okHandler,
                     'title': 'Brandhub Text',
                     'BrandhubTextField' : this,
					 'modal':'true',
                     'items' : {
                         'xtype' : 'tabpanel',
                         'id' : tabName,
                         'items' : [{
                             'title' : "General",
                             'xtype' : 'panel',
                             'items' : [{'fieldLabel' : 'Text',   
                            	 'labelStyle' : 'font-weight:bold;',
                                 'name' : textName ,
                                 'value' : textValue,
                                 'xtype' : 'textarea',
                                 'height' : '45'
                             },{
                            	 'fieldLabel' : 'Color',
                            	 'labelStyle' : 'font-weight:bold;',
                            	 'fieldDescription' : 'Eg : #000000',
                                 'name' : colorName ,
                                 'value' : colorValue,
                                 'xtype' : 'textfield'
                             },{
                            	 'fieldLabel' : 'Size',
                            	 'labelStyle' : 'font-weight:bold;',
                                 'name' : fontSizeName ,
                                 'value' : fontSizeValue,
                                 'xtype' : 'selection',
                                 'type' : 'select',
                                 'defaultValue' : 'default',
	            				 'options' : [{
	            					 'text' : 'Default',
	            					 'value' : 'default'
	            				 },{
	            					 'text' : 'Small',
	            					 'value' : 'small'
	            				 },{
	            					 'text' : 'Medium',
	            					 'value' : 'medium'
	            				 },{
	            					 'text' : 'Big',
	            					 'value' : 'big'
	            				 }]
                             },{
                            	 'fieldLabel' : 'Style',
                            	 'labelStyle' : 'font-weight:bold;',
                                 'name' : styleName ,
                                 'value' : styleValue,
                                 'xtype' : 'selection',
                                 'type' : 'select',
                                 'defaultValue' : 'default',
	            				 'options' : [{
	            					 'text' : 'Default',
	            					 'value' : 'default'
	            				 },{
	            					 'text' : 'Normal',
	            					 'value' : 'normal'
	            				 },{
	            					 'text' : 'Bold',
	            					 'value' : 'bold'
	            				 },{
	            					 'text' : 'Italic',
	            					 'value' : 'italic'
	            				 },{
	            					 'text' : 'Bold Italic',
	            					 'value' : 'bold italic'
	            				 }]
                             },{
                            	 'fieldLabel' : 'Shadow',
                            	 'labelStyle' : 'font-weight:bold;',
                                 'name' : shadowName ,
                                 'value' : shadowValue,
                                 'xtype' : 'selection',
                                 'type' : 'select',
	            				 'options' : [{
	            					 'text' : 'No shadow',
	            					 'value' : ''
	            				 },{
	            					 'text' : 'Shadow Light',
	            					 'value' : 'shadow-light'
	            				 },{
	            					 'text' : 'Shadow Dark',
	            					 'value' : 'shadow-dark'
	            				 }]
                             }]
                        	 
                	 
	                     }]
	                	 
	                 }
	    	 };
        	 BrandhubTextDialogCfg.buttons = CQ.Dialog.OKCANCEL;
        	 this.BrandhubTextDialog = new CQ.Dialog(BrandhubTextDialogCfg);
        
        } else {
        	//Update value of fields on edit keyItem dialog in case this dialog has been rendered

        	var textLabel = this.BrandhubTextDialog.getField(textLabelName);
        	textLabel.setValue(textLabelValue);
        	var colorLabel = this.BrandhubTextDialog.getField(colorName);
        	colorLabel.setValue(colorValue);
        	var fontSizeLabel = this.BrandhubTextDialog.getField(fontSizeLabelName);
        	fontSizeLabel.setValue(fontSizeLabelValue);        	
        	var styleLabel = this.BrandhubTextDialog.getField(styleLabelName);
        	styleLabel.setValue(styleLabelValue);
        	var shadowLabel = this.BrandhubTextDialog.getField(shadowName);
        	shadowLabel.setValue(shadowValue);
        	
        
        }
        this.BrandhubTextDialog.show();
    }
});
CQ.Ext.reg('openNewDialog', CQ.Ext.form.BrandhubText);