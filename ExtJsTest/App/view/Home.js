Ext.define('MiMvc5.view.Home', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.home',//identificador de la vista
	
	activeTab: 3,
	items: [
		{
			xtype: 'column'
		},
		{
			xtype: 'card'
		},
		{
			xtype: 'border'
		},
		{
			xtype: 'acordeon'
		},
		{
			xtype: 'inOutExcel'
		}
	]
});