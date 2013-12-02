Ext.define('MiMvc5.view.layouts.grids.Grillas', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.grillas',
	layout: 'column',
	title: 'Grillas',
	
	items: [
		{
			xtype: 'datos',
			title: 'Datos : Nom/Ape/Correo - Array grid',
			columnWidth: 0.3,
			border: 1,
			margin: 5
		},
		{
			xtype: 'rutas',
			title: 'Rutas - Reconfigure grid',
			columnWidth: 0.25,
			border: 1,
			margin: 5
		},
		{
			xtype: 'usuariosRoles',
			title: 'Roles y Permisos',
			columnWidth: 0.3,
			border: 1,
			margin: 5
		}
	]
});