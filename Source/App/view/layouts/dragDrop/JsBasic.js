Ext.define('MiMvc5.view.layouts.dragDrop.JsBasic', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.jsBasic',
	layout: 'hbox',

	items: [
		{
			title: 'JavaScript',
			itemId:'htmlButton',
			html: '<button id="titulo">Boton Html</button>',
			
			bodyPadding: 40,
			border: false
		},
		{
			itemId: 'htmlParrafo',
			html: '<p id="parrafo">Parrafo Html</p>',
			bodyPadding: 40,
			border: true,
		}
	],
	buttons: [
	{
		text: 'Aceptar',
		handler: function() {
			console.log(this.up('panel').items.items[0].itemId);
			console.log(this.up('panel').items.items[1].itemId);
			
			console.log(this.up('panel').contains('button'));
			
			console.log(this.up('panel').items.items[0].title);
			console.log(this.up('panel').items.items[0].html);
		}
	},
	{
		text: 'Cambiar texto',
		handler: function() {
			//this.up('panel').items.items[0];
		}
		
	}
]

});

