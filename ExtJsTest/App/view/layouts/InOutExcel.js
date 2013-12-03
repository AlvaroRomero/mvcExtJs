Ext.define('MiMvc5.view.layouts.InOutExcel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.inOutExcel',
	
	title: 'importar Excel',
	//html:'<h1>Algo</h1>',
	
	//layout: 'column',
	
	tbar: {
		//layout:'fit',

		items: [
			{
				xtype: 'form',
				defaultType: 'textfield',
				//bodyPadding: 5,
				//fieldDefaults: {
				//	anchor: '100%',
				//	labelAlign: 'top'
				//},
				layout: 'hbox',

				items: [{
					fieldLabel: 'Nombre',
					name: 'nombre',
					allowBlank: false,
					//vtype: 'email'
				}, {
					fieldLabel: 'Apellido',
					name: 'apellido',
					allowBlank: false
				}, {
					fieldLabel: 'Fecha Ingreso',
					name: 'fecha',
					xtype: 'datefield',
					format: 'm/d/y',
					altFormats: 'd/m/y',
					minValue: '01/01/01',
					disabledDays: [0, 6],
					disabledDaysText: 'NO trabajamos los fines de semana!!!!',
					allowBlank: false
				},
				{
					xtype: 'button',
					text: 'Buscar'
				},
				{
					xtype: 'button',
					text: 'Limpiar'
				}
				]
			}
		]
	},
	
	bbar: {
		items: [
			{
				xtype: 'button',
				text: 'Importar',
				action: 'guardarCambios'
			},
			{
				xtype: 'button',
				text: 'Exportar'
			}
		]

		
	}
	


});