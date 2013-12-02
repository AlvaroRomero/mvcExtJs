Ext.define('MiMvc5.view.layouts.grids.CeldasEditables', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.grillaAbm',
	itemId: 'grillaAbm',
	
	requires: [
		'Ext.selection.CellModel',
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.form.*'
	],
	//width: 600,
	//xtype: 'cell-editing',
	//frame: 'true',
	
	tbar: {
		//layout:'fit',
		
		items: [
			{
				xtype: 'form',
				//title:'Nuevo Usuario',
				defaultType: 'textfield',
				bodyPadding: 5,
				fieldDefaults: {
					anchor: '100%',
					labelAlign: 'top'
				},
				layout: 'hbox',
				
				items: [{
					fieldLabel: 'Nombre',
					name: 'nombre',
					allowBlank: false,
					//vtype: 'email'
				}, {
					fieldLabel: 'Apellido',
					name: 'apellido',
					allowBlank: false
				}, {
					fieldLabel: 'Fecha Ingreso',
					name: 'fecha',
					xtype: 'datefield',
					format: 'm/d/y',
					altFormats: 'd/m/y',
					minValue: '01/01/01',
					disabledDays: [0, 6],
					disabledDaysText: 'NO trabajamos los fines de semana!!!!',
					allowBlank: false
				},
				{
					xtype: 'button',
					text: 'Agregar',
					margin:'20 0 0 20',
					handler: function () {
						//console.log(this.up('form').getValues());
						var form = this.up('form');
						var datos = form.getValues();
						var grilla = this.up('grid');
						
						if (form.isValid()) {
							grilla.store.insert(0, datos);
						} else {
							Ext.Msg.alert('Cuidado!!', 'Debe ingresar datos');
						}
						/*
							var form = this.getForm();

							if (form.isValid()) {
								this.fireEvent('create', this, form.getValues());
								form.reset();
							}*/
					}
				},
				{
					xtype: 'button',
					text: 'Limpiar',
					margin: '20 0 0 20',
					handler: function () {
						this.up('form').getForm().reset();
						//this.up('form').removeAll(); elimina todo el componente
					}
				}
			]
			}
		]
	},
	
	bbar:{
		items:[
			{
				xtype:'button',
				text: 'Guardar Cambios',
				action: 'guardarCambios'
			},
			{
				xtype: 'button',
				text: 'Eliminar',
				handler:function() {
					//console.log(arguments);
					//console.log(this.up('grid'));
					//grid.getStore().removeAt(rowIndex);
					var grid = this.up('grid');
					var select = grid.getSelectionModel().getSelection()[0];
					
					//console.log(select);
					
					if (select) {
						grid.store.remove(select);
					} else {
						Ext.Msg.alert('Cuidado!!', 'Debe seleccionar un registro a eliminar');
					}
					
					
				}
			}
		]

		//scope:this,
		//handler: this.guardarCambios //xq no funciona el llamado a una funcion?
		
		/*handler: function () {
			
			var grid = this.up('grid');
			store = grid.store;
			var data = Ext.Array.map(store.data.items, function (x) { return x.data; });

			Ext.Ajax.request({
				url: 'api/celdas',
				method: 'POST',
				jsonData: data,
				scope: this,
				success: function (response) {
					grid.store.load();

					//Ext.Msg.alert('Status', 'Los cambios fueron guardados',
						//function () { grid.store.load(); }
					//);
				}
			});
		}
		*/
	},
	
	initComponent: function () {
		this.cellEditing = new Ext.grid.plugin.CellEditing({
			clicksToEdit: 2
		});

		Ext.apply(this, {
			frame:true,
			plugins: [this.cellEditing],
			store: new Ext.data.Store({
				autoDestroy: true, // q hace esto?
				autoLoad:true,
				model: Ext.define('MiMvc5.model.User', {
					extend: 'Ext.data.Model',
					fields: ['nombre', 'apellido', 'fecha'],
					proxy: {
						type: 'ajax',
						api: {
							read: 'api/celdas'
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
					property: 'common',
					direction:'ASC'
				}]
			}),
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
					renderer: Ext.util.Format.dateRenderer('d M Y'),
					editor: {
						xtype: 'datefield',
						format: 'm/d/y',
						altFormats: 'd/m/y',
						minValue: '01/01/01',
						disabledDays: [0, 6],
						disabledDaysText: 'NO trabajamos los fines de semana!!!!'
					}
				}, {
					xtype: 'actioncolumn',
					width: 30,
					sortable: false,
					menuDisabled: true,
					items: [{
						icon: 'assets/images/eliminar.png',
						tooltip: 'Eliminar FILA',
						handler: function (grid, rowIndex) {
							//console.log(arguments); //devuelve todos los argumentos
							
							//var rec = grid.getStore().getAt(rowIndex);
							grid.getStore().removeAt(rowIndex);
							
							//console.log(rec);
							//alert("Terminate " + rec.get('nombre'));

							//if (rec) {
								//grid.remove(rec);
							//}
						}					
						
							//var grid = this.up('cell-editing');
							//var row = grid.rowIndex;
							//grid.getStore().removeAt(row);
							//var grid = this.up('cell-editing');
							//var grid=this.up('grid');
							//var selection = grid.getSelectionModel().getSelection()[0];
							//if (selection) {
								//this.store.remove(selection);
							//}
							//}
					}]
				}
			],

			selModel: {
				selType: 'cellmodel'
			}
		});
		this.callParent(arguments);//cual es la diferencia si va vacio?
	},
	
	guardarCambios: function () {
		var grid = this.up('grid');
			store = grid.store;
			var data = Ext.Array.map(store.data.items, function (x) { return x.data; });

			Ext.Ajax.request({

				url: 'api/celdas',
				method: 'POST',
				jsonData: data,
				scope: this,
				success: function (response) {
					Ext.Msg.alert('Status', 'Los cambios fueron guardados',
						function () { grid.store.load(); }
					);
				}
			});
	}
	
	

});