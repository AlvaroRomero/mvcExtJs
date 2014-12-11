Ext.define('MiMvc5.view.Home', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.home',//identificador de la vista
	
	activeTab: 6,
	items: [
		{
			title: 'Home',
			html: 'Hello world'
		},
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
			title:'Componentes de ExtsJS'
			//xtype: 'themes'
		},
		{
			xtype: 'calculadora'
		}
	]
});