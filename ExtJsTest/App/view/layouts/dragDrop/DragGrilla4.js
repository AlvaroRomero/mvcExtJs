Ext.define('MiMvc5.view.layouts.dragDrop.DragGrilla4', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.dragGrilla4',

	viewConfig: {
		plugins: {
			ptype: 'gridviewdragdrop',
			dragText: 'Reordenar la Familia'
		}
	},
	width: 350,
	height: 200,
	border: true,
	
	myData: [
		{ name: 'Rec 0', column1: '0', column2: '0' },
		{ name: 'Rec 1', column1: '1', column2: '1' },
		{ name: 'Rec 2', column1: '2', column2: '2' },
		{ name: 'Rec 3', column1: '3', column2: '3' },
		{ name: 'Rec 4', column1: '4', column2: '4' },
		{ name: 'Rec 5', column1: '5', column2: '5' },
		{ name: 'Rec 6', column1: '6', column2: '6' },
		{ name: 'Rec 7', column1: '7', column2: '7' }
	],

	title: 'The Simpsons 4',
	tools: [{
		type: 'refresh',
		tooltip: 'Orden inicial',
		scope: this,
		handler: this.onResetClick
	}],
	
	initComponent: function () {
		
		this.store = {
			autoLoad: true,
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['nombre', 'funcion'],
				proxy: {
					type: 'ajax',
					api: {
						read: 'api/drags'
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
			{ header: 'Nombres', dataIndex: 'nombre', flex: 1 },
			{ header: 'Funcion', dataIndex: 'funcion', flex: 1 }
		];

		this.callParent(arguments);
	},
	onResetClick: function () {
		
		//como recargo los datos iniciales?
		
		//this.down('grid').getStore().loadData(data);
		//grid.store.load();
		//this.down('grid').store.load();
	}


});