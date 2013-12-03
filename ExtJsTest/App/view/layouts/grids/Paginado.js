Ext.define('MiMvc5.view.layouts.grids.Paginado', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.paginado',
	itemId: 'paginado',
	//loadMask: true,
	
	/*
	requires: [
		'Ext.selection.CellModel',
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.form.*',
		'Ext.panel.Panel',
		'Ext.Action',
		'Ext.button.Button',
		'Ext.window.MessageBox',
		'Ext.grid.*',
		'Ext.toolbar.Paging',
		'Ext.ModelManager'
	],*/
	/*tbar: {
		items: [
			{
				xtype: 'button',
				text: 'Agregar Nuevo',
				margin:'20 0 0 20',
				handler: function () {
					
					var rec = new MiMvc5.model.User({
						nombre: 'Nuevo',
						apellido: 'Algo',
						availDate: Ext.Date.clearTime(new Date())
					});
					var grilla = this.up('grid');
					grilla.getStore().insert(0, rec);
					grilla.cellEditing.startEditByPosition({
						row: 0,
						column: 0
					});
				}
			},
			'->',
			{
				xtype: 'button',
				text: 'Guardar Cambios',
				action: 'guardarCambios'
			}
		]
	},
	*/
	//Ext.create('Ext.PagingToolbar', {
	//store: this.up('grid').store,
	//displayInfo: true,
	//displayMsg: 'Displaying topics {0} - {1} of {2}',
	//emptyMsg: "No topics to display",
	
	initComponent: function () {
		
		var miStore = new Ext.data.Store({
			autoLoad: false,
			//remoteSort: true,
			fields: ['nombre', 'apellido', 'fecha'],
			pageSize: 5,
			proxy: {
				type: 'ajax',
				api: {
					read: 'api/abmdos'
				},
				reader: {
					type: 'json',
					root: 'results',
					successProperty: 'success',
					totalProperty: 'totalCount'
				}
			}
			/*,
			sorters: [{
				property: 'nombre',
				direction: 'ASC'
			}]*/
			//autoLoad: { start: 0, limit: 5 },
		});

		miStore.load();
		/*
		miStore.load({
			params: {
				start: 0,
				limit: 5
				//foo: 'bar'
			}
			//callback: function() {console.log(arguments);}
		});
		*/
	//	miStore.loadPage(1);
		
		Ext.apply(this, {
			frame:true,
			store: miStore,

			columns: [
				{
					header: 'Nombre',
					dataIndex: 'nombre',
					flex: 1
				},
				{
					header: 'Apellido',
					dataIndex: 'apellido',
					flex: 1
				},
				{
					header: 'Fecha',
					dataIndex: 'fecha',
					flex: 0.6
				}
			],
			height: 300,
			dockedItems: [{
				xtype: 'pagingtoolbar',
				store: miStore,
				dock: 'bottom',
				displayInfo:true
			}]

			/*
			bbar: Ext.create('Ext.PagingToolbar', {
				store: miStore,
				displayInfo: true,
				displayMsg: 'Datos {0} - {1} de {2}',
				emptyMsg: "No hay datos"
			})
			*/


			/*bbar: {
				items: [
					{
						xtype: 'pagingtoolbar',
						store: miStore,
						displayInfo: true,
						displayMsg: 'Datos en vista {0} - {1} de {2}',
						emptyMsg: "No hay datos"
					}
				]
			},*/
		});
		this.callParent(arguments);
	}
});