/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class CQ.Ext.form.Box
 * @extends CQ.Ext.form.TriggerField
 * Provides some fields for Box
 * @constructor
 * Create a new Box
 * @param {Object} config
 * @xtype box
 */

CQ.Ext.form.Box = CQ.Ext.extend(CQ.Ext.form.TriggerField, {

	BoxDialog : null,
	
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
        CQ.Ext.form.Box.superclass.initComponent.call(this);
    },
	
    // private
    onDestroy : function(){
        if (this.BoxDialog) {
            this.BoxDialog.destroy();
        }
        CQ.Ext.form.Box.superclass.onDestroy.call(this);
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
        
        // declare variable
        var image = fieldName + "_image";
        var title = fieldName + "_title";
        var sortDescription = fieldName + "_sortDescription";
        var tabName = fieldName + "mainTab" ; 
        
        
        //declare value of variable
        var imageValue;
        var titleValue;
        var sortDescriptionValue;
        
        var elem = this.getValue().split(this.separator);
        if(elem[0] != null){
        	imageValue = elem[0];
        }
        if(elem[1] != null){
        	titleValue = elem[1];
        }
        if(elem[2] != null){
        	sortDescriptionValue = elem[2];
        }
        
        
        // lazy creation of browse dialog
        if (this.keyItemDialog == null) {
        	function okHandler() {
        		imageValue = this.getField(image).getValue();
        		titleValue = this.getField(title).getValue();
        		sortDescriptionValue = this.getField(sortDescription).getValue();
        		this.BoxField.setValue(imageValue
        				+ this.BoxField.separator + titleValue
        				+ this.BoxField.separator + sortDescriptionValue);
        		this.hide();
        	}
        	var BoxDialogCfg = {
        		'width':500,
        		'height':400,
        		'ok':okHandler,
        		'title':'Box Item',
        		'BoxField':this,
        		'modal' : true,
        		'items':{
        			'xtype':'tabpanel',
        			'id':tabName,
        			'items':[{
        				'title':'Box',
        				'xtype':'panel',
        				'items':[{
        					'fieldLabel':'Image',
        					'name': image,
        					'value': imageValue,
        					'rootPath':'/content/dam',
        					'xtype':'pathfield'
        				},{
        					'fieldLabel':'Title',
        					'name': title,
        					'value': titleValue,
        					'xtype':'textfield'
        				},{
        					'fieldLabel':'Sort Description',
        					'name': sortDescription,
        					'value': sortDescriptionValue,
        					'xtype':'textarea'
        				}]	
        			}]
        				
        		}
        	};
        	 BoxDialogCfg.buttons = CQ.Dialog.OKCANCEL;
        	 this.BoxDialog = new CQ.Dialog(BoxDialogCfg);
        } else {
        	alert("else!!!");
        }
        this.BoxDialog.show();
    }
});
CQ.Ext.reg('box', CQ.Ext.form.Box);