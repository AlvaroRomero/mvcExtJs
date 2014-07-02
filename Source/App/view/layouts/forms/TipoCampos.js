Ext.define('MiMvc5.view.layouts.forms.TipoCampos', {
	extend: 'Ext.form.Panel',
	alias: 'widget.tipoCampos',
	itemId: 'tipoCamposForm',
	title: 'Tipo de Campos de un Form',
	padding: 20,
	frame: true,
	margin:5,
	
	items: [
		{
			xtype: 'textfield',
			fieldLabel: 'Textfield'
		},
		{
			xtype: 'textarea',
			fieldLabel: 'TextArea'
		},
		{
			xtype: 'fieldcontainer',
			fieldLabel: 'CheckBox',
			defaultType: 'checkboxfield',
			items: [
				{
					boxLabel: 'Opcion 1',
					name: 'topping',
					inputValue: '1',
					id: 'checkbox1'
				},
				{
					boxLabel: 'Opcion 2',
					name: 'topping',
					inputValue: '2',
					id: 'checkbox2'
				},
				{
					boxLabel: 'Opcion 3',
					name: 'topping',
					inputValue: '3',
					id: 'checkbox3',
					checked: true
				}
			]
		},
		{
			xtype: 'combobox',
			fieldLabel: 'ComboBox',
			shadow:true,
			store: [
					[0,'Opcion1'],
					[1,'Opcion2'],
					[2,'Opcion3'],
					[3,'Opcion4']
			]
		},
		{
			xtype: 'datefield',
			fieldLabel: 'Datefield',
			name: 'from_date',
			maxValue: new Date()
		},
		{
			xtype: 'displayfield',
			fieldLabel: 'DisplayField',
			name: 'home_score',
			value: '10'
		},
		{
			xtype: 'filefield',
			name: 'photo',
			fieldLabel: 'FileField',
			//labelWidth: 50,
			//msgTarget: 'side',
			//allowBlank: false,
			//anchor: '100%',
			buttonText: 'Examinar...'
		},
		{
			xtype: 'textfield',
			fieldLabel: 'HiddenField',
			name: 'text_field',
			//value: 'value from text field'
		}, {
			xtype: 'hiddenfield',
			name: 'hidden_field_1',
			value: 'value from hidden field'
		},
		{
			xtype: 'htmleditor',
			enableColors: false,
			enableAlignments: false
		},
		{
			xtype: 'numberfield',
			//anchor: '100%',
			//name: 'bottles',
			fieldLabel: 'Numberfield',
			value: 10,
			maxValue: 10,
			minValue: 0
		},
		{
			xtype: 'fieldcontainer',
			fieldLabel: 'Size',
			defaultType: 'radiofield',
			defaults: {
				flex: 1
			},
			layout: 'hbox',
			items: [
				{
					boxLabel: 'M',
					name: 'size',
					inputValue: 'm',
					id: 'radio1'
				}, {
					boxLabel: 'L',
					name: 'size',
					inputValue: 'l',
					id: 'radio2'
				}, {
					boxLabel: 'XL',
					name: 'size',
					inputValue: 'xl',
					id: 'radio3'
				}
			]
		},
		Ext.create('Ext.form.field.Spinner', {
			fieldLabel: 'Spinner',
			step: 6
		}),
		{
			xtype: 'timefield',
			name: 'in',
			fieldLabel: 'TimeField',
			minValue: '6:00 AM',
			maxValue: '8:00 PM',
			increment: 30,
			anchor: '100%'
		}
		
	],
	
	onSpinUp: function () {
		console.log(this.down('spinner'));
		var me = this;
		if (!me.readOnly) {
			var val = parseInt(me.getValue().split(' '), 10) || 0; // gets rid of " Pack", defaults to zero on parse failure
			me.setValue((val + me.step) + ' Pack');
		}
	},

	// override onSpinDown
	onSpinDown: function () {
		var me = this;
		if (!me.readOnly) {
			var val = parseInt(me.getValue().split(' '), 10) || 0; // gets rid of " Pack", defaults to zero on parse failure
			if (val <= me.step) {
				me.setValue('Dry!');
			} else {
				me.setValue((val - me.step) + ' Pack');
			}
		}
	}
});