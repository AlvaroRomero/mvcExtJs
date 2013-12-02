Ext.define('MiMvc5.view.layouts.grids.Rutas', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.rutas',
	itemId: 'gridRutas',
	/*requires: [
		'Ext.selection.CellModel',
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.form.*'
	],*/
	/*xtype: 'cell-editing',
	frame: true,
	*/
	width: 500,
	height: 330,

	bbar: [{
		text: 'Guardar Cambios',
		action: 'guardarCambios'
	}],

	initComponent: function () {
		
		/*this.cellEditing = new Ext.grid.plugin.CellEditing({
			clicksToEdit: 1
		});
		*/
		this.store = {
			autoLoad: true,
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['ruta'],
				proxy: {
					type: 'ajax',
					api: {
						read: 'api/rutas'
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
			{ header: 'Rutas', dataIndex: 'ruta', flex: 1 }
		];

		this.callParent(arguments);
	}


});

