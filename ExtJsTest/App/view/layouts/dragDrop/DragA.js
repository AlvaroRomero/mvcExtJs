Ext.define('MiMvc5.view.layouts.dragDrop.DragA', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.dragA',

	columns: [
		{header:'Planta Baja',dataIndex:'nombre',flex:true}
	],
	viewConfig: {
		plugins: {
			ptype: 'gridviewdragdrop',
			ddGroup: 'dvloop',
			dragText:'subir'
		}
	},

	title: 'DvLoop Team',
	icon: 'assets/images/dvloop.png',
	//border: true,
	//html: 'algo de contenido',
	height:190,
	width: 140,
	headerPosition: 'left',
	
	store: new Ext.data.Store({
		storeId: 'dvloop',
		fields: ['nombre'],
		autoLoad: true,
		data: [['Nicolas' ], ["Margarita"],['Facundo'],['Lautaro'],['Ruben'],['Alvaro']],
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