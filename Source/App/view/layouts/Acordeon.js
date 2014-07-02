Ext.define('MiMvc5.view.layouts.Acordeon', {
	extend: ('Ext.panel.Panel'),
	alias: 'widget.acordeon',
	title: 'Accordion Layout - Grids',
	layout: 'accordion',
	layoutConfig: {
		titleCollapse: false,
		animate: true,
		activeOnTop: true
	},
	items: [
		{
			title: 'Grillas Abm',
			xtype: 'grillasAbm'
			
		},
		{
			title: 'Grillas',
			xtype: 'grillas',
		},
		{
			title: 'Importar Excel',
			html: 'Panel content!'
		}
	]
});