Ext.define('MiMvc5.controller.AppController', {
	extend: 'Ext.app.Controller',
	
	views: [
		'Home',
		'layouts.Acordeon',
		'layouts.Border',
		'layouts.Card',
		'layouts.Column'
	],
	models: ['Simple', 'User']
});