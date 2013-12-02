Ext.define('MiMvc5.view.layouts.forms.Login', {
	extend: 'Ext.form.Panel',
	alias: 'widget.login',
	itemId:'loginForm',
	require: [
		'Ext.form.*',
		'Ext.Img',
		'Ext.tip.QuickTipManager'
	],
	title: 'Login',
	frame: true,
	padding:10,
	
	defaultType: 'textfield',
	
	items: [
		{
			allowBlank: false,
			fieldLabel: 'User ID',
			name: 'user',
			emptyText:'user id'
		},
		{
			allowBlank: false,
			fieldLabel: 'Password',
			name: 'pass',
			emptyText: 'user id',
			inputType:'password'
		},
		{
			xtype:'checkbox',
			fieldLabel: 'Remember me',
			name: 'user',
			
		}
	],
	bbar: [
		{
			//xtype: 'button',
			text: 'Registrarse',
			action:'registrar'
			//handler: function () {
				//console.log('msj desde funcion');
				//this.up('form').mostrarFuncion;
				//this.up('form').showContactForm();
			//}
		},
		{
			text: 'Login',
			handler: function () {
				//var miForm = this.up('form').getForm().submit({});
				//this.up('form').loginModulo(miForm);
				
				var datos = this.up('form').getValues();
				//console.log(miForm.getValues());
				//var datos = miForm.getSelectionModel().getSelection()[0];
				this.up('form').loginModulo(datos);

			}
		}
	],
	loginModulo: function(datos) {
		//console.log(datos.user);

		//var usuario = 'admin';
		//var pass = '1234';
		
		//esto se hace ServerSide
		
		/*var store = new Ext.data.Store({
			autoLoad: true,
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['user', 'pass'],
				proxy: {
					type: 'ajax',
					api: { read: 'api/login' },
					reader: {
						type: 'json',
						root: 'results',
						successProperty: 'success',
						totalProperty: 'totalCount'
					}
				}

			})
		});
		*/

		var users = [
			{ user: 'Admin', pass: '1234' },
			{ user: 'Admin2', pass: '1234' },
			{ user: 'Admin3', pass: '1234' },
			{ user: 'Admin4', pass: '1234' },
			{ user: 'Admin5', pass: '1234' }
		];
		
		var obj = { user: 'Admin4', pass: '1234' };
		//console.log(obj);
		//var data = Ext.Array.map(users, function (x) { return x.object; });
		//console.log(obj);
		//console.log(users);
		
		//var existe = Ext.Array.contains(users, obj);
		//var nombre = obj.user;
		var esta = Ext.Array.each(users, function(name,index, usersItself) {
			//console.log(arguments);
			//console.log(name);
			console.log(name.user);
			//console.log('OBJ : '+obj.user);
			if (name.user == 'Admin') { return false; }
		}
		);
		console.log(esta);
		
		
		

		//if ((usuario == datos.user) && (pass == datos.pass)) {
		//	console.log('login CORRECTO');
		//} else {
		//	console.log('NO CORRECTO');
		//}
		
	},


	showContactForm: function () {
		
		//console.log('msj desde funcion');
		var win;
		var formPanel = Ext.widget('form',
			{
				//frame: true,
				width: 400,
				bodyPadding: 10,
				//border:false,
				//bodyBorder: false,
				defaults: {
					anchor: '100%'
				},
				fieldDefaults: {
					labelWidth: 110,
					labelAlign: 'left',
					msgTarget: 'none',
					//invalidCls: '' //unset the invalidCls so individual fields do not get styled as invalid
				},

				//Listen for validity change on the entire form and update the combined error icon
			
				/*listeners: {
					fieldvaliditychange: function() {	this.updateErrorState();},
						fielderrorchange: function() {this.updateErrorState();
					}
				},
			*/
			/*updateErrorState: function() {
				var me = this,
					errorCmp, fields, errors;

				if (me.hasBeenDirty || me.getForm().isDirty()) { //prevents showing global error when form first loads
					errorCmp = me.down('#formErrorState');
					fields = me.getForm().getFields();
					errors = [];
					fields.each(function(field) {
						Ext.Array.forEach(field.getErrors(), function(error) {
							errors.push({ name: field.getFieldLabel(), error: error });
						});
					});
					errorCmp.setErrors(errors);
					me.hasBeenDirty = true;
				}
			},*/

			items: [
				{
					xtype: 'textfield',
					name: 'username',
					fieldLabel: 'User Name',
					allowBlank: false,
					minLength: 6
				},
				{
					xtype: 'textfield',
					name: 'email',
					fieldLabel: 'Email Address',
					vtype: 'email',
					allowBlank: false
				},
				{
					xtype: 'textfield',
					name: 'password1',
					fieldLabel: 'Password',
					inputType: 'password',
					style: 'margin-top:15px',
					allowBlank: false,
					minLength: 8
				},
				{
					xtype: 'textfield',
					name: 'password2',
					fieldLabel: 'Repeat Password',
					inputType: 'password',
					allowBlank: false,
					/**
				 * Custom validator implementation - checks that the value matches what was entered into
				 * the password1 field.
				 */
					/*
					validator: function (value) {
						var password1 = this.previousSibling('[name=password1]');
						return (value === password1.getValue()) ? true : 'Passwords do not match.'
					}*/
				},
				/*
			 * Terms of Use acceptance checkbox. Two things are special about this:
			 * 1) The boxLabel contains a HTML link to the Terms of Use page; a special click listener opens this
			 *    page in a modal Ext window for convenient viewing, and the Decline and Accept buttons in the window
			 *    update the checkbox's state automatically.
			 * 2) This checkbox is required, i.e. the form will not be able to be submitted unless the user has
			 *    checked the box. Ext does not have this type of validation built in for checkboxes, so we add a
			 *    custom getErrors method implementation.
			 */
				{
					xtype: 'checkboxfield',
					name: 'acceptTerms',
					fieldLabel: 'Terms of Use',
					hideLabel: true,
					margin: '15 0 0 0',
					boxLabel: 'I have read and accept the <a href="#" class="terms">Terms of Use</a>.',

					// Listener to open the Terms of Use page link in a modal window
					/*listeners: {
						click: {
							element: 'boxLabelEl',
							fn: function(e) {
								var target = e.getTarget('.terms'),
									win;

								e.preventDefault();

								if (target) {
									win = Ext.getCmp('termsWindow') || Ext.widget('window', {
										id: 'termsWindow',
										closeAction: 'hide',
										title: 'Terms of Use',
										modal: true,
										contentEl: Ext.getDom('legalese'),
										width: 700,
										height: 400,
										bodyPadding: '10 20',
										autoScroll: true,

										buttons: [{
												text: 'Decline',
												handler: function() {
													this.up('window').close();
													formPanel.down('[name=acceptTerms]').setValue(false);
												}
											}, {
												text: 'Accept',
												handler: function() {
													this.up('window').close();
													formPanel.down('[name=acceptTerms]').setValue(true);
												}
											}]
									});
									win.show();
								}
							}
						}
					},*/

					// Custom validation logic - requires the checkbox to be checked
					/*getErrors: function() {
						return this.getValue() ? [] : ['You must accept the Terms of Use']
					}*/
				}
			],

			dockedItems: [
				{
					//cls: Ext.baseCSSPrefix + 'dd-drop-ok',
					xtype: 'container',
					dock: 'bottom',
					layout: {
						type: 'hbox',
						align: 'middle'
					},
					padding: '10 10 5',

					items: [
						{
							xtype: 'button',
							formBind: true,
							disabled: true,
							text: 'Submit Registration',
							width: 140,
							handler: function () {
								var form = this.up('form').getForm();

								/* Normally we would submit the form to the server here and handle the response...
						form.submit({
							clientValidation: true,
							url: 'register.php',
							success: function(form, action) {
							   //...
							},
							failure: function(form, action) {
								//...
							}
						});
						*/
								/*
								if (form.isValid()) {
									var out = [];
									Ext.Object.each(form.getValues(), function(key, value) {
										out.push(key + '=' + value);
									});
									Ext.Msg.alert('Submitted Values', out.join('<br />'));
								}*/
							}
						}

						/*{
							xtype: 'component',
							id: 'formErrorState',
							//invalidCls: Ext.baseCSSPrefix + 'form-invalid-icon',
							//validCls: Ext.baseCSSPrefix + 'dd-drop-icon',
							//baseCls: 'form-error-state',
							flex: 1,
							validText: 'Form is valid',
							invalidText: 'Form has errors',
							//tipTpl: Ext.create('Ext.XTemplate', '<ul class="' + Ext.plainListCls + '"><tpl for="."><li><span class="field-name">{name}</span>: <span class="error">{error}</span></li></tpl></ul>'),

							/*getTip: function() {
								var tip = this.tip;
								if (!tip) {
									tip = this.tip = Ext.widget('tooltip', {
										target: this.el,
										title: 'Error Details:',
										minWidth: 200,
										autoHide: false,
										anchor: 'top',
										mouseOffset: [-11, -2],
										closable: true,
										constrainPosition: false,
										cls: 'errors-tip'
									});
									tip.show();
								}
								return tip;
							},*/
							
						
							/*setErrors: function(errors) {
								var me = this,
									tip = me.getTip();

								errors = Ext.Array.from(errors);

								// Update CSS class and tooltip content
								if (errors.length) {
									me.addCls(me.invalidCls);
									me.removeCls(me.validCls);
									me.update(me.invalidText);
									tip.setDisabled(false);
									tip.update(me.tipTpl.apply(errors));
								} else {
									me.addCls(me.validCls);
									me.removeCls(me.invalidCls);
									me.update(me.validText);
									tip.setDisabled(true);
									tip.hide();
								}
							}
						},*/
						
					]
				}
			]
			});
		
		win = Ext.widget('window', {
			title: 'Account Registration',
			//closeAction: 'hide',
			//bodyBorder: false,
			//width: 400,
			//height: 400,
			//minWidth: 300,
			//minHeight: 300,
			//layout: 'fit',
			//resizable: true,
			//modal: true,
			//boder:false,
			items: formPanel,
			//defaultFocus: 'username'
		});
		
		win.show();
	}
	
});