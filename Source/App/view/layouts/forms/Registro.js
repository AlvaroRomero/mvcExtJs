Ext.define('MiMvc5.view.layouts.forms.Registro', {
	extend: 'Ext.window.Window',
	alias: 'widget.registro',
	itemId: 'formRegistro',
	title: 'Registro',
	//modal: true, no se puede usar xq tapa el tooltip de errores
	
	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				itemId:'formularioRegistro',
				width: 400,
				bodyPadding: 10,
				
				defaults: {
					anchor: '100%'
				},
				fieldDefaults: {
					labelWidth: 120,
					labelAlign: 'left',
					msgTarget: 'none',
					//invalidCls: '' //unset the invalidCls so individual fields do not get styled as invalid
				},
				
				//Listen for validity change on the entire form and update the combined error icon
		 
				listeners: {
					fieldvaliditychange: function () {
						this.updateErrorState();
					},
					fielderrorchange: function () {
						this.updateErrorState();
					}
				},

				updateErrorState: function () {
					var me = this,
						errorCmp, fields, errors;

					if (me.hasBeenDirty || me.getForm().isDirty()) { //prevents showing global error when form first loads
						errorCmp = me.down('#formErrorState');
						fields = me.getForm().getFields();
						errors = [];
						fields.each(function (field) {
							Ext.Array.forEach(field.getErrors(), function (error) {
								errors.push({ name: field.getFieldLabel(), error: error });
							});
						});
						errorCmp.setErrors(errors);
						me.hasBeenDirty = true;
					}
				},


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

						
					//Custom validator implementation - checks that the value matches what was entered into the password1 field.
						 
						validator: function (value) {
							//console.log('validacion?');
							var password1 = this.previousSibling('[name=password1]');
							return (value === password1.getValue()) ? true : 'No coindiden las Passwords.';
						}
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
						boxLabel: 'I have read and accept the <a href="#" class="terms">Condiciones de uso</a>.',

						// Listener to open the Terms of Use page link in a modal window
						listeners: {
							click: {
								element: 'boxLabelEl',
								fn: function(e) {
									var target = e.getTarget('.terms'),win;
	
									e.preventDefault();
									var miForm = Ext.ComponentQuery.query("#formularioRegistro");
	
									if (target) {
										win = Ext.getCmp('condicionesUso') || Ext.widget('legales', {
											id: 'condicionesUso',
											closeAction: 'hide',
											title: 'Condiciones de Uso',
											modal: true,
											//contentEl: Ext.getDom('legalese'),
											width: 400,
											height: 400,
											bodyPadding: '10 20',
											autoScroll: true,
											
	
											buttons: [{
													text: 'Rechazar',
													handler: function() {
														this.up('window').close();
														miForm[0].down('[name=acceptTerms]').setValue(false);
													}
												}, {
													text: 'Aceptar',
													handler: function() {
														this.up('window').close();
														miForm[0].down('[name=acceptTerms]').setValue(true);
													}
												}]
										});
										win.show();
									}
								}
							}
						},

						// Custom validation logic - requires the checkbox to be checked
						getErrors: function() {
							return this.getValue() ? [] : ['Debe aceptar las Condiciones'];
						}
					}
				],
				dockedItems: [
					{
						cls: Ext.baseCSSPrefix + 'dd-drop-ok',
						xtype: 'container',
						dock: 'bottom',
						layout: {
							type: 'hbox',
							align: 'middle'
						},
						padding: '10 10 5',

						items: [
							{
								xtype: 'component',
								id: 'formErrorState',
								invalidCls: Ext.baseCSSPrefix + 'form-invalid-icon',
								validCls: Ext.baseCSSPrefix + 'dd-drop-icon',
								baseCls: 'form-error-state',
								flex: 1,
								validText: ' Formulario Correcto ',
								invalidText: ' Atencion!! ',
								tipTpl: Ext.create('Ext.XTemplate', '<ul class="' + Ext.plainListCls + '"><tpl for="."><li><span class="field-name"><b>{name}</b></span>: <span class="error">{error}</span></li></tpl></ul>'),
	
								getTip: function() {
									var tip = this.tip;
									if (!tip) {
										tip = this.tip = Ext.widget('tooltip', {
											target: this.el,
											title: 'Lista de Errores en formulario:',
											minWidth: 300,
											autoHide: false,
											anchor: 'top',
											mouseOffset: [-10, 15],
											closable: true,
											//constrainPosition: true,
											cls: 'errors-tip'
											
										});
										tip.show();
									}
									return tip;
								},


								setErrors: function(errors) {
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
							},
							{
								xtype: 'button',
								formBind: true,
								disabled: true,
								text: 'Registrarse',
								width: 140,
								handler: function() {
									var datos = this.up('form').getForm().getValues();
									console.log(datos);

									//var login = this.up('#cardLayout');
									//console.log(panel);
									var obj = Ext.ComponentQuery.query("#listaLogin");
									//var obj = Ext.getCmp('gridview');
									//console.log(obj);
									
									var grilla = obj[0].items.items[0];

									var rec = new MiMvc5.model.User({
										user:datos.username,
										pass:datos.password1
									});

									grilla.getStore().add(rec);

									var miStore = grilla.getStore();

									var data = Ext.Array.map(miStore.data.items, function (x) { return x.data; });
									
									console.log(data);
									
									Ext.Ajax.request({

										url: 'api/login',
										method: 'POST',
										jsonData: data,
										scope: this,
										success: function (response) {
											Ext.Msg.alert('Registro Exitoso', 'Bienvenido : <b>' + datos.username +'</b>'
												//function () {grilla.store.load();}
											);
										}
									});
									
									this.up('window').close();


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
										Ext.Object.each(form.getValues(), function(key, value) {out.push(key + '=' + value);});
										Ext.Msg.alert('Submitted Values', out.join('<br />'));
									}
									*/
								}
							}
						]
					}
				]
			}
		];
		
		this.callParent(arguments);
	}
});