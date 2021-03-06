﻿Ext.define('MiMvc5.view.layouts.forms.Contacto', {
	extend: 'Ext.form.Panel',
	alias: 'widget.contacto',
	layout: {
		type: 'hbox',
		pack: 'center'
	},
	
	
	//title: 'Contacto',
	items: [
		{
			xtype: 'button',
			cls: 'contactBtn',
			scale: 'large',
			text: 'Contacto',
			//scope:this,
			handler: function(btn) {
				//console.log('msj desde funcion');
				//this.up('form').mostrarFuncion;
				this.up('form').showContactForm(btn);
			}
				
				//this.up('form').mostrarFuncion
				//console.log(this.up('form'));
		}
	],
	mostrarFuncion: function () {
		console.log('msj desde funcion');
	},
	showContactForm: function (btn) {
		var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
		win;
		var form = Ext.widget('form', {
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			border: false,
			bodyPadding: 10,

			fieldDefaults: {
				labelAlign: 'top',
				labelWidth: 100,
				labelStyle: 'font-weight:bold'
			},
			items: [{
				xtype: 'fieldcontainer',
				fieldLabel: 'Your Name',
				labelStyle: 'font-weight:bold;padding:0;',
				layout: 'hbox',
				defaultType: 'textfield',

				fieldDefaults: {
					labelAlign: 'top'
				},

				items: [{
					flex: 1,
					name: 'firstName',
					itemId: 'firstName',
					afterLabelTextTpl: required,
					fieldLabel: 'First',
					allowBlank: false
				}, {
					width: 30,
					name: 'middleInitial',
					fieldLabel: 'MI',
					margins: '0 0 0 5'
				}, {
					flex: 2,
					name: 'lastName',
					afterLabelTextTpl: required,
					fieldLabel: 'Last',
					allowBlank: false,
					margins: '0 0 0 5'
				}]
			}, {
				xtype: 'textfield',
				fieldLabel: 'Your Email Address',
				afterLabelTextTpl: required,
				vtype: 'email',
				allowBlank: false
			}, {
				xtype: 'textfield',
				fieldLabel: 'Subject',
				afterLabelTextTpl: required,
				allowBlank: false
			}, {
				xtype: 'textareafield',
				fieldLabel: 'Message',
				labelAlign: 'top',
				flex: 1,
				margins: '0',
				afterLabelTextTpl: required,
				allowBlank: false
			}],

			buttons: [{
				text: 'Cancel',
				handler: function () {
					this.up('form').getForm().reset();
					this.up('window').hide();
				}
			}, {
				text: 'Send',
				handler: function () {
					if (this.up('form').getForm().isValid()) {
						// In a real application, this would submit the form to the configured url
						// this.up('form').getForm().submit();
						this.up('form').getForm().reset();
						this.up('window').hide();
						Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
					}
				}
			}]
		});

			win = Ext.widget('window', {
				title: 'Contact Us',
				closeAction: 'hide',
				width: 400,
				height: 400,
				minWidth: 300,
				minHeight: 300,
				layout: 'fit',
				resizable: true,
				modal: true,
				items: form,
				defaultFocus: 'firstName'
			});
			
		win.show();
	}

});

