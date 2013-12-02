Ext.define('MiMvc5.view.layouts.grids.Datos', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.datos',
	itemId:'gridDatos',
	
	requires: [
		'Ext.grid.column.Action'
	],
	xtype: 'array-grid',
	//store: 'Companies',
	stateful: true,
	collapsible: true,
	multiSelect: true,
	stateId: 'stateGrid',
	height: 300,
	//title: 'Array Grid',
	viewConfig: {
		stripeRows: true,
		//enableTextSelection: true
	},
	
	bbar: [{
		text: 'Guardar Cambios',
		action: 'guardaCambiosDatos'
	}],
	
	initComponent: function () {

		this.store = {
			autoLoad: true,
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['nombre', 'apellido', 'correo'],
				proxy: {
					type: 'ajax',
					api: {
						read: 'api/users'
					},
					reader: {
						type: 'json',
						root: 'results',
						successProperty: 'success',
						totalProperty: 'totalCount'
					}
				}
			})
		};

		this.columns = [
			{ header: 'Nombre', dataIndex: 'nombre', flex: 1 },
			{ header: 'Apellido', dataIndex: 'apellido', flex: 1 },
			{ header: 'Correo', dataIndex: 'correo', flex: 1 }
		];

		this.callParent(arguments);
	}


});