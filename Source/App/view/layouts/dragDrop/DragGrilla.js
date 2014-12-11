Ext.define('MiMvc5.view.layouts.dragDrop.DragGrilla', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.dragGrilla',

	columns: [
		{ header: 'Nombre', dataIndex: 'nombre', flex: true }
	],
	viewConfig: {
		plugins: {
			ptype: 'gridviewdragdrop',
			//ddGroup: 'familia'
		}
	},
	width: 200,
	height: 200,
	border: true,
	title:'Proxy :Memory/Array',
	store: new Ext.data.Store({
		//storeId: 'simpsons',
		fields: ['nombre'],//array de objetos
		autoLoad: true,
		data: [['Moe'], ['Barnie'], ['Smithers'], ['Burns'], ['Skinner']],
		proxy: {
			type: 'memory',
			reader: 'array'
		}
	})
});