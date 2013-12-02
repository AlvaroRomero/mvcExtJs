Ext.define('MiMvc5.view.layouts.grids.EditarRutas', {
	extend: 'Ext.window.Window',
	alias: 'widget.edicionRutas',
	//itemId:'edicionVista',

	title: 'Ruta eleccionada',
	layout: 'fit',
	autoShow: 'true',
	
	
	initComponent: function () {
		this.items = [
			{
				xtype: 'form',
				itemId: 'actividadDataView',
				
				items:[
					{
						xtype: 'textfield',
						name: 'ruta',
						fieldLabel: 'Ruta :'
					}
				]
				
			}
		];

		this.buttons = [
			{
				text: 'Guardar',
				action:'guardarRuta'
			},
			{
				text: 'Cancelar',
				scope: this,
				handler:this.close
			}
		];

		this.callParent(arguments);

	}
	
});