Ext.define('MiMvc5.view.layouts.Column', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.column',
	
	bodyPadding: 10,
	title: 'Column Layout - Form FileTypes',
	layout: 'column',
	
	items: [
		{
			xtype: 'panel',
			title: 'mi  Panel 1',
			html: '<p>HELLO World!</p>',
			border: 1,
			bodyPadding: 10,
		},
		//{ xtype: 'splitter' },
		{
			title: 'Form with FieldSets',
			labelWidth: 75, // label settings here cascade unless overridden
			//url: 'save-form.php',
			frame: true,
			bodyStyle: 'padding: 5px',
			width: 550,
			height: 200,
			layout: 'column', // arrange fieldsets side by side
			border: 1,
			margin: 5,
			items: [
					{
						// Fieldset in Column 1 - collapsible via toggle button
						xtype: 'fieldset',
						columnWidth: 0.5,
						title: 'Fieldset 1',
						collapsible: true,
						defaultType: 'textfield',
						defaults: { anchor: '100%' },
						layout: 'anchor',
						//margin:5,
						items: [
							{
								fieldLabel: 'CampoTexto 1',
								name: 'field1'
							},
							{
								fieldLabel: 'CampoTexto 2',
								name: 'field2'
							},
							{
								xtype: 'button',
								text:'Boton'
							}
						]
					},
					{
						// Fieldset in Column 2 - collapsible via checkbox, collapsed by default, contains a panel
						xtype: 'fieldset',
						title: 'Show Panel', // title or checkboxToggle creates fieldset header
						columnWidth: 0.5,
						checkboxToggle: true,
						collapsed: true, // fieldset initially collapsed
						layout: 'anchor',
						margin: 5,
						items: [
							{
								xtype: 'panel',
								anchor: '100%',
								title: 'Panel inside a fieldset',
								frame: true,
								height: 100
							}
						]
					}
			]
		},
		{
			xtype: 'tipoCampos',
		}
	]
});