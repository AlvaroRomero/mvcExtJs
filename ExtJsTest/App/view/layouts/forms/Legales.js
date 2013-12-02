Ext.define('MiMvc5.view.layouts.forms.Legales', {
	extend: 'Ext.window.Window',
	alias: 'widget.legales',
	layout: 'fit',
	autoShow: true,
	//id: 'legales',
	
	initComponent: function() {
		this.items=[
			{
				html: '<h1>Condiciones de Uso</h1>'
			}
			
		];
		this.callParent(arguments);
	}
});