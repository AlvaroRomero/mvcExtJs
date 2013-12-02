Ext.define('MiMvc5.view.layouts.dragDrop.SolapaInferior', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.solapaInf',
	
	tabPosition:'bottom',
	activeTab: 0,
	items: [
		{
			title: 'Drag & Drop',
			bodyPadding: 10,
			//html: 'Tab Anidado dentro de un Border'
			items: [
				{
					xtype: 'panel',
					layout: 'column',
					margin:10,
					items: [
						{xtype:'dragA'},
						{xtype:'dragB'}
					]
				},
				{
					xtype:'panel',
					layout: 'column',
					items: [
						{ xtype: 'dragGrilla'},
						{ xtype: 'dragGrilla2' },
						{ xtype: 'dragGrilla3' },
						{ xtype: 'dragGrilla4' }
					]
				},
				{
					xtype: 'dragDosGrillas'
				}
			]
		},
		{
			title: 'jsBasic',
			bodyPadding: 10,
			items: [
				{ xtype: 'jsBasic' }
			]
		},
		{
			title: 'Master',
			bodyPadding: 10,
			html: 'Ejercicios'
		}
	],

});