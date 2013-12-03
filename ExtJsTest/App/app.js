Ext.application({
	requires: ['Ext.container.Viewport'],
	name: 'MiMvc5',//Nombre de la aplicacion
	appFolder: 'app',//carpeta raiz del proyecto

	//declaracion de controladores
	controllers: [
		'DragDropController',
		'FormController',
		'GrillasController',
		'AppController',
		'ExcelController'
	],

	launch: function () {
		
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: { xtype: 'home' }
			
		});
	}
});