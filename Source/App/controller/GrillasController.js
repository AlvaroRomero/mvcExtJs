Ext.define('MiMvc5.controller.GrillasController', {
	extend: 'Ext.app.Controller',
	
	views: [
		'layouts.grids.UsuariosRoles',
		'layouts.grids.Datos',
		'layouts.grids.Grillas',
		'layouts.grids.Rutas',
		'layouts.grids.EditarDatos',
		'layouts.grids.EditarUsuarios',
		'layouts.grids.EditarRutas',
		'layouts.grids.CeldasEditables',
		'layouts.grids.Abm2',
		'layouts.grids.Paginado',
		'layouts.grids.GrillasAbm'
		],
	refs: [
		{	ref: 'rutasListGrid', selector: '#gridRutas'},
		{	ref: 'datosListGrid', selector: '#gridDatos'},
		{	ref: 'celdasListGrid', selector: '#grillaAbm' },
		{	ref: 'abmListGrid', selector: '#abmDos' }
	],

	init: function () {

		this.control({
			'datos': { itemdblclick: this.editDatos },
			'edicionDatosUsuario button[action=save]': { click: this.updateDatos },
			'datos button[action=guardaCambiosDatos]': { click: this.saveChangesDatos },
			
			'rutas': { itemdblclick: this.editarRutas },
			'edicionRutas button[action=guardarRuta]': { click: this.updateRuta },
			'rutas button[action=guardarCambios]': { click: this.saveRutas },
			
			'usuariosRoles': { itemdblclick: this.editRoles },
			
			'grillaAbm button[action=guardarCambios]': { click: this.saveCeldas },
			
			'abmDos button[action=guardarCambios]': { click: this.saveAbmDos }
		});
	},
	
	editDatos: function (grid, record) {
		var view = Ext.widget('edicionDatosUsuario');
		view.down('form').loadRecord(record);
	},
	updateDatos: function (button) {
		var win = button.up('window'),
		form = win.down('form'),
		record = form.getRecord(),
		values = form.getValues();
		record.set(values);
		win.close();
	},
	saveChangesDatos: function () {
		
		var grid = this.getDatosListGrid(),
			store = grid.store;

		var data = Ext.Array.map(store.data.items, function (x) { return x.data; });

		Ext.Ajax.request({

			url: 'api/users',
			method: 'POST',
			jsonData: data,
			scope: this,
			success: function (response) {
				Ext.Msg.alert('Status', 'Los cambios fueron guardados',
					function () { grid.store.load(); }
				);
			}
		});
	},

	editarRutas: function(grid, record) {
		var view = Ext.widget('edicionRutas');
		view.down('form').loadRecord(record);
	},
	updateRuta: function (button) {
		var win = button.up('window'),
		form = win.down('form'),
		record = form.getRecord(),
		values = form.getValues();
		record.set(values);
		win.close();
	},
	saveRutas: function () {
		//console.log(this);
		//console.log(button);
		//console.log(button);
		//console.log(button.up('grid'));
		
		//var grid = button.up('grid'),
		var grid = this.getRutasListGrid(), //el metodo solo existe si referenciamos el ItemId #gridRutas
		store = grid.store;
		//console.log(store);
		
		var data = Ext.Array.map(store.data.items, function (x) { return x.data; });
		//console.log(data);
		Ext.Ajax.request({

			url: 'api/rutas',
			method: 'POST',
			jsonData: data,
			scope: this,
			success: function(response) {grid.store.load();}
			/*success: function (response) {
				Ext.Msg.alert('Status', 'Cambios Guardados.',
					function () { grid.store.load(); }
				);*/
				//debugger;
				//console.log(grid.store);
			//grid.store.load(); 
			//xq carga los datos iniciales? xq en el metodo POST del controller no retornaba los nuevos valores
			//}
		});
	},
	
	editRoles: function(grid, record) {
		var vista = Ext.widget('edicionUsuariosRoles');
		vista.down('form').loadRecord(record);
	},
	
	saveCeldas: function () {

		var grid = this.getCeldasListGrid(),
		store = grid.store;
		var data = Ext.Array.map(store.data.items, function (x) { return x.data; });

		Ext.Ajax.request({
			
			url: 'api/celdas',
			method: 'POST',
			jsonData: data,
			scope: this,
			success: function (response) {
				grid.store.load();
				//Ext.Msg.alert('Status', 'Los cambios fueron guardados',
					//function () { grid.store.load(); }
				//);
			}
		});
	},
	
	saveAbmDos: function () {
		var grid = this.getAbmListGrid(),
		store = grid.store;
		var data = Ext.Array.map(store.data.items, function (x) { return x.data; });

		Ext.Ajax.request({

			url: 'api/abmdos',
			method: 'POST',
			jsonData: data,
			scope: this,
			success: function (response) {
				grid.store.load();
				//Ext.Msg.alert('Status', 'Los cambios fueron guardados',
				//function () { grid.store.load(); }
				//);
			}
		});
	}

	
	//editUser: function (grid, record) {
	//	var view = Ext.widget('edicionUsuarios');
	//	view.down('form').loadRecord(record);
	//},

	//updateUser:function(button) {
	//	//console.log('Click en guardar');

	//	var win = button.up('window'),
	//		form = win.down('form'),
	//		record = form.getRecord(),
	//		values = form.getValues();
	//	record.set(values);
	//	win.close();

	//	//this.getUsersStore().sync();
	//},

	//saveChanges: function () {
	//	//console.log('Save changes');

	//	var grid = this.getUserListGrid(), //de donde sale? como levanto los datos de la grilla?
	//		store = grid.store;

	//	var data = Ext.Array.map(store.data.items, function (x) { return x.data; });

	//	Ext.Ajax.request({

	//		url: 'api/users',
	//		method: 'POST',
	//		jsonData: data,
	//		scope: this,
	//		success: function (response) {
	//			Ext.Msg.alert('Status', 'Changes saved successfully.');
	//			grid.store.load();
	//		}
	//	});
	//}
	
});