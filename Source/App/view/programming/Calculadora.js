Ext.define('MiMvc5.view.programming.Calculadora', {
	extend: 'Ext.form.Panel',
	alias: 'widget.calculadora',
	title: 'Calculadora',
	defaultType: 'textfield',
	items: [
		{
			fieldLabel: 'Primer dato',
			name: 'first'
		},
		{
			fieldLabel: 'Segundo dato',
			name: 'last'
		}
	],
	/*buttons: [
		{
			text: 'SUMAR',
			action: 'sumar'
		},
		{
			text: 'RESTAR',
			action: 'restar'
		}
	],*/
	bbar: [
		{
			text: 'Menu',
			menu: [
				{
					text: 'sumar',
					handler: function() {
						this.fireEvent('sumar', this);
					}
				},
				{
					text: 'restar'
				}
			]
		}
	]
});