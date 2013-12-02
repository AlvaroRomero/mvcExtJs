Ext.define('MiMvc5.view.layouts.dragDrop.DragDosGrillas', {
	extend: 'Ext.container.Container',
	alias: 'widget.dragDosGrillas',
	title:'Drag & Drop',

	requires: [
		'Ext.grid.*',
		'Ext.layout.container.HBox',
		'MiMvc5.model.Simple'
	],    
	xtype: 'dd-grid-to-grid',
	
	
	width: 650,
	height: 300,
	layout: {
		type: 'hbox',
		align: 'stretch',
		padding: 5
	},
	
	myData: [
		{ name : 'Rec 0', column1 : '0', column2 : '0' },
		{ name : 'Rec 1', column1 : '1', column2 : '1' },
		{ name : 'Rec 2', column1 : '2', column2 : '2' },
		{ name : 'Rec 3', column1 : '3', column2 : '3' },
		{ name : 'Rec 4', column1 : '4', column2 : '4' },
		{ name : 'Rec 5', column1 : '5', column2 : '5' },
		{ name : 'Rec 6', column1 : '6', column2 : '6' },
		{ name : 'Rec 7', column1 : '7', column2 : '7' }
	],
	myData2: [
		{ name: 'Dato 0', column1: 'A', column2: '0' },
		{ name: 'Dato 1', column1: 'B', column2: '1' },
		{ name: 'Dato 2', column1: 'C', column2: '2' },
		{ name: 'Dato 3', column1: 'D', column2: '3' }
	],
	
	initComponent: function(){
		var group1 = this.id + 'group1',
			group2 = this.id + 'group2',
			columns = [{
				text: 'Record Name', 
				flex: 1, 
				sortable: true, 
				dataIndex: 'name'
			}, {
				text: 'column1', 
				width: 80, 
				sortable: true, 
				dataIndex: 'column1'
			}, {
				text: 'column2', 
				width: 80, 
				sortable: true, 
				dataIndex: 'column2'
			}];
			
		this.items = [{
			itemId: 'grid1',
			flex: 1,
			xtype: 'grid',
			multiSelect: true,
			viewConfig: {
				plugins: {
					ptype: 'gridviewdragdrop',
					dragGroup: group1,
					dropGroup: group2
				},
				listeners: {
					drop: function(node, data, dropRec, dropPosition) {
						var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
						//Ext.example.msg('Drag from right to left', 'Dropped ' + data.records[0].get('name') + dropOn);
						//alert('Drag from right to left', 'Dropped ' + data.records[0].get('name') + dropOn);
						Ext.Msg.alert('Drag from right to left', 'Dropped ' + data.records[0].get('name') + dropOn, Ext.emptyFn);
					}
				}
			},
			store: new Ext.data.Store({
				model: MiMvc5.model.Simple,
				data: this.myData
			}),
			columns: columns,
			stripeRows: true,
			title: 'First Grid',
			tools: [{
				type: 'refresh',
				tooltip: 'Reset both grids',
				scope: this,
				handler: this.onResetClick
			}],
			margins: '0 5 0 0'
		}, {
			itemId: 'grid2',
			flex: 1,
			xtype: 'grid',
			viewConfig: {
				plugins: {
					ptype: 'gridviewdragdrop',
					dragGroup: group2,
					dropGroup: group1
				},
				listeners: {
					drop: function(node, data, dropRec, dropPosition) {
						var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
						//Ext.example.msg('Drag from left to right', 'Dropped ' + data.records[0].get('name') + dropOn);
						//alert('Drag from right to left', 'Dropped ' + data.records[0].get('name') + dropOn);
						Ext.Msg.alert('Drag from right to left', 'Dropped ' + data.records[0].get('name') + dropOn, Ext.emptyFn);
					}
				}
			},
			store: new Ext.data.Store({
				model: MiMvc5.model.Simple,
				data: this.myData2
			}),
			columns: columns,
			stripeRows: true,
			title: 'Second Grid'
		}];

		this.callParent();
	},
	
	onResetClick: function(){
		//refresh source grid
		this.down('#grid1').getStore().loadData(this.myData);

		//purge destination grid
		this.down('#grid2').getStore().removeAll();
	}
});