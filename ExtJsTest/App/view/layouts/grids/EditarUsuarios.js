Ext.define('MiMvc5.view.layouts.grids.EditarUsuarios', {
	extend: 'Ext.window.Window',
	alias: 'widget.edicionUsuariosRoles',
	//itemId:'edicionVista',

	title: 'Usuario seleccionado',
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
						name: 'nombre',
						fieldLabel: 'Nombre :'
					},
					{
						xtype: 'textfield',
						name: 'permisos',
						fieldLabel: 'Permisos :'
					},
					{
						xtype: 'textfield',
						name: 'roles',
						fieldLabel: 'Roles :'
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
				//handler: function() { this.$.window.destroy(); }
			}
		];

		this.callParent(arguments);

	}
	
});