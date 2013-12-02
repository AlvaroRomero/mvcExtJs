Ext.define('MiMvc5.view.layouts.grids.GrillasAbm', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.grillasAbm',
	layout: 'column',
	title: 'grillas ABM',

	items: [
		{
			xtype: 'grillaAbm',
			title: 'CeldasEditables - ABM usuarios',
			columnWidth: 0.4,
			margin: 10
		},
		{
			xtype: 'abmDos',
			title: 'ABM DOS',
			columnWidth: 0.3,
			margin: 10
		},
		{
			xtype: 'paginado',
			title: 'Paginado',
			columnWidth: 0.25,
			margin: 10
		}
	]

});