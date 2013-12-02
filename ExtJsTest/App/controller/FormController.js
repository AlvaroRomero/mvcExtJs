Ext.define('MiMvc5.controller.FormController', {
	extend: 'Ext.app.Controller',
	
	views: [
		'layouts.forms.Login',
		'layouts.forms.ListaLogin',
		'layouts.forms.Contacto',
		'layouts.forms.Registro',
		'layouts.forms.Ejercicios',
		'layouts.forms.Legales',
		'layouts.forms.TipoCampos'
	],
	init: function() {
		this.control({
			'login button[action=registrar]': { click: this.registrar }
		});
	},
	registrar: function () {
		//console.log('me quiero registrar');
		var view = Ext.widget('registro');
		view.show();
	}
	
});