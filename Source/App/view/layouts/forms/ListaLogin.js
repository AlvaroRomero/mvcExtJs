Ext.define('MiMvc5.view.layouts.forms.ListaLogin', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.listaLogin',
	itemId: 'listaLogin',
	id:'listadoLogin',
	
	initComponent: function () {
		this.store = new Ext.data.Store({
			autoLoad: true,
			//model: new Ext.data.Model({
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['user', 'pass'],
				proxy: {
					type: 'ajax',
					api: { read: 'api/login' },
					reader: {
						type: 'json',
						root: 'results',
						successProperty: 'success',
						totalProperty:'totalCount'
					}
				}
				
			})
		});

		this.columns = [
			{header:'Usuario',dataIndex:'user'},
			{header:'Password',dataIndex:'pass'},
		];

		this.callParent(arguments);
	},
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			layout: {
				type: 'vbox',
				align: 'middle'
				
			},
			items: [
				{
					xtype: 'tbtext',
					text: 'textoUno',
					id: 'textoUno',
					itemId: 'textoListaGrilla'
				},
				{
					xtype: 'tbtext',
					text: 'textoDos',
					id: 'textoDos'
				}
			]

		}

	],


});