Ext.define('MiMvc5.view.layouts.dragDrop.DragB', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.dragB',

	columns: [
		{header:'Planta Alta',dataIndex:'nombre',flex:true}
	],
	viewConfig: {
		plugins: {
			ptype: 'gridviewdragdrop',
			ddGroup: 'dvloop',
			dragText: 'bajar'
		}
	},

	//title: 'B: DvLoop Team',
	//border: true,
	html: 'algo de contenido',
	height: 190,
	width: 140,
	
	store: new Ext.data.Store({
		storeId: 'dvloop',
		fields: ['nombre'],
		autoLoad: true,
		data: [['Lucila' ], ["Damian"]],
		proxy: {
			type: 'memory',
			reader: 'array'
		}
	}),
	
	/*
	tbar:[
		{
			xtype: 'button',
			text: 'pruebas',
			handler: function () {
				console.log(this.up('grid').store);
				}
		}
	]
	*/
});