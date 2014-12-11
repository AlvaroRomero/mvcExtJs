Ext.define('MiMvc5.controller.ProgrammingController', {
	extend: 'Ext.app.Controller',
	
	views: [
		
		'programming.Calculadora'

	],
	
	init: function() {

		this.control({
			'*': {
				
				sumar: this.sumar

			},
			
			'calculadora  menu button[action=sumar]' : {

				click: this.sumar
			}

		});

	},
	
	sumar: function() {

		console.log('SUMAR item');

		debugger;

	}
	
});