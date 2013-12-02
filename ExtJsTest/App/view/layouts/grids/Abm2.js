Ext.define('MiMvc5.view.layouts.grids.Abm2', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.abmDos',
	itemId: 'abmDos',
	loadMask: true,
	//width: 700,
	height: 450,
	
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
	],
	tbar: {
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
	
	//Ext.create('Ext.PagingToolbar', {
	//store: this.up('grid').store,
	//displayInfo: true,
	//displayMsg: 'Displaying topics {0} - {1} of {2}',
	//emptyMsg: "No topics to display",
		
	/*items: [
		'-', {
			text: 'Show Preview',
			//pressed: pluginExpanded,
			enableToggle: true,
			toggleHandler: function (btn, pressed) {
				var preview = Ext.getCmp('gv').getPlugin('preview');
				preview.toggleExpanded(pressed);
			}
		}
	]*/
	//}),
	
	initComponent: function () {
		this.cellEditing = new Ext.grid.plugin.CellEditing({
			clicksToEdit: 2
		});
		
		var miStore = new Ext.data.Store({
			
			//remoteSort: true,
			//autoDestroy: true, // q hace esto?
			//autoLoad: false,
			//queryMode: 'remote',
			//remoteSort: true,
			pageSize: 10,
			//autoLoad: { start: 0, limit: 5 },
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['nombre', 'apellido', 'fecha'],
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
			}),
			sorters: [{
				property: 'nombre',
				direction: 'ASC'
			}]
		});
		/*
		miStore.load({
			params: {
				start: 0,
				limit: 5,
				foo: 'bar'
			}
		});
		*/
		miStore.loadPage(1);
		Ext.apply(this, {
			frame:true,
			plugins: [this.cellEditing],
			/*
			store: new Ext.data.Store({
				pageSize: 5,
				autoDestroy: true, // q hace esto?
				autoLoad:true,
				model: Ext.define('MiMvc5.model.User', {
					extend: 'Ext.data.Model',
					fields: ['nombre', 'apellido', 'fecha'],
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
				}),
				sorters:[{
					property: 'nombre',
					direction:'ASC'
				}]
			}),
			*/
			store: miStore,

			columns: [
				{
					header: 'Nombre',
					dataIndex: 'nombre',
					flex: 1,
					editor: {allowBlank: false}
				},
				{
					header: 'Apellido',
					dataIndex: 'apellido',
					flex: 1,
					editor: new Ext.form.field.ComboBox({
						typeAhead: true,
						triggerAction: 'all',
						store: [
							['Shade', 'Shade'],
							['Mostly Shady', 'Mostly Shady'],
							['Sun or Shade', 'Sun or Shade'],
							['Mostly Sunny', 'Mostly Sunny'],
							['Sunny', 'Sunny']
						]
					})
				},
				{
					header: 'Fecha Ingreso',
					dataIndex: 'fecha',
					flex:0.5,
					renderer: Ext.util.Format.dateRenderer('d M, Y'),
					editor: {
						xtype: 'datefield',
						format: 'd/m/y',
						minValue: '01/01/01',
						disabledDays: [0, 6],
						disabledDaysText: 'NO trabajamos los fines de semana!!!!'
					}
				},
				{
					xtype: 'actioncolumn',
					width: 30,
					sortable: false,
					menuDisabled: true,
					items: [{
						icon: 'assets/images/eliminar.png',
						tooltip: 'Eliminar FILA',
						handler: function (grid, rowIndex) {
							
							grid.getStore().removeAt(rowIndex);
						}					
					}]
				}
			],
			
			bbar: Ext.create('Ext.PagingToolbar', {
				store: miStore,
				displayInfo: true,
				displayMsg: 'Datos en vista {0} - {1} de {2}',
				emptyMsg: "No hay datos"
			})

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
			},
			*/
			/*
			selModel: {
				selType: 'cellmodel'
			}*/
		});

		this.callParent(arguments);//cual es la diferencia si va vacio?
		
	}
	
});