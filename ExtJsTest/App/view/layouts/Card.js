Ext.define('MiMvc5.view.layouts.Card', {
	extend: ('Ext.panel.Panel'),
	alias: 'widget.card',
	title: 'Card Layout - Forms',
	layout: 'card',
	itemId:'cardLayout',
	activeItem: 0,
	
	bodyStyle: 'padding:15px',
	defaults: {
		// applied to each contained panel
		border: false
	},
	
	bbar: [
	   {
	   	id: 'move-prev',
	   	text: 'Anterior',
	   	handler: function(btn) {
	   		this.up('panel').navigate(btn.up("panel"), "prev");
	   	},
	   	disabled: true
	   },
	   '->', // greedy spacer so that the buttons are aligned to each side
	   {
	   	id: 'move-next',
	   	text: 'Siguiente',
	   	handler: function (btn) {
	   		this.up('panel').navigate(btn.up("panel"), "next");
	   	}
	   }
	],
	items: [
		{
			id: 'card-0',
			layout: 'column',
			
			items: [
				{
					xtype: 'login',
					columnWidth: 0.2,
					margin: 10
				},
				{
					xtype: 'listaLogin',
					columnWidth: 0.12,
					margin: 10
				},
				{
					xtype: 'contacto',
					columnWidth: 0.2,
					margin: 10
				}
			],
			dockedItems: [
				{
					xtype: 'ejercicios',
					dock: 'bottom'
				}
			]

			//html: '<h1>Step 1 of 3</h1><img src="assets/images/welcome.jpg">',
		},
		{
			id: 'card-1',
			layout:'hbox',
			margin: 10,
			xtype: 'image',
			src: 'http://www.sencha.com/img/20110215-feat-html5.png',
			width: 500
		},
		{
			id: 'card-2',
			html: '<h1>Felicitaciones!</h1><p>Paso 3 of 3 - Complete</p>'
		}
	],

	navigate: function (panel, direction) {
		// This routine could contain business logic required to manage the navigation steps.
		// It would call setActiveItem as needed, manage navigation button state, handle any
		// branching logic that might be required, handle alternate actions like cancellation
		// or finalization, etc.  A complete wizard implementation could get pretty
		// sophisticated depending on the complexity required, and should probably be
		// done as a subclass of CardLayout in a real-world implementation.
		var layout = panel.getLayout();
		layout[direction]();
		Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
		Ext.getCmp('move-next').setDisabled(!layout.getNext());
	}
	
});