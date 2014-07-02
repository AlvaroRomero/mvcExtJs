Ext.define('MiMvc5.view.layouts.Border', {
	extend: 'Ext.panel.Panel',
	alias:'widget.border',
	
	title: 'Border Layout - Drag&Drop',
	layout: 'border',
	items: [{
		title: 'Informacion Adicional',
		region: 'south',     // position for region
		xtype: 'panel',
		height: 100,
		split: true,         // enable resizing
		margins: '0 5 5 5'
	}, {
		// xtype: 'panel' implied by default
		title: 'Menu Desplegable',
		region: 'west',
		xtype: 'panel',
		margins: '5 0 0 5',
		width: 200,
		collapsible: true,   // make collapsible
		id: 'west-region-container',
		layout: 'fit',
		border: 1,
		
		items:[{
			xtype: 'menu',
			width: 100,
			margin: '10 10 10 10',
			transitionType: 'slide',
			direction: 'horizontal', // default
			delay: 0.2,              // default
			autoWidth: false,         // default
			transitionDuration: 0.3, // default
			animate: true,           // default
			currentClass: 'current',  // default
			floating: false,  // usually you want this set to True (default)
			//renderTo: Ext.getBody(),  // usually rendered by it's containing component

			items: [{
				text: 'Basic exercises'
			},{
				text: 'Advanced exercises'
			},{
				text: 'Master Level'
			}]
	}
		],
	}, {
		xtype: 'solapaInf',
		
		title: 'Exercises',
		region: 'center',     // center region is required, no width/height specified
		//xtype: 'panel',
		layout: 'fit',
		margins: '5 5 0 0'
		
	}]


});