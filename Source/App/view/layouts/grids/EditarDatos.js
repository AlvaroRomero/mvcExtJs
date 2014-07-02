Ext.define('MiMvc5.view.layouts.grids.EditarDatos', {
	extend: 'Ext.window.Window',
	alias: 'widget.edicionDatosUsuario',

	title: 'Editar Usuario',
	layout: 'fit',
	autoShow: 'true',
	
	
	initComponent: function () {
		this.items = [
			{
				xtype: 'form',
				
				items:[
					{
						xtype: 'textfield',
						name: 'nombre',
						fieldLabel: 'Nombre :'
					},
					{
						xtype: 'textfield',
						name: 'apellido',
						fieldLabel: 'Apellido :'
					},
					{
						xtype: 'textfield',
						name: 'correo',
						fieldLabel: 'Correo Electronico :'
					}
				]
				
			}
		];

		this.buttons = [
			{
				text: 'Guardar',
				action:'save'
			},
			{
				text: 'Cancelar',
				scope: this,
				handler:this.close
			},
		];

		this.callParent(arguments);

	}
	
});