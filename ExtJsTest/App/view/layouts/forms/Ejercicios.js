Ext.define('MiMvc5.view.layouts.forms.Ejercicios', {
	extend: 'Ext.form.Panel',
	alias: 'widget.ejercicios',
	//isTopLevel:true,
	title: 'Ejercicios',
	//frame: true,
	//padding: 20,
	//defaultType: 'textfield',
	itemId: 'ejerciciosForm',
	headerPosition: 'bottom',
	//width:900,
	
	items: [
		{
			xtype:'textfield',
			allowBlank: false,
			fieldLabel: 'Dato 1',
			name: 'datoUno',
			emptyText: 'Ingrese dato'
		},
		{
			xtype: 'textfield',
			allowBlank: false,
			fieldLabel: 'Dato 2',
			name: 'datoDos',
			emptyText: 'Ingrese dato'
		}
	],
	bbar: [
		{
			xtype: 'button',
			text: 'Mostrar Datos Ingresados',
			handler: function () {
				var miForm = this.up('form');
				var datos = miForm.getValues();
				miForm.mostrarDatos(datos);
			}
		},
		{
			xtype: 'button',
			text: 'Buscar Dato 1 en Array',
			handler: function () {
				var miForm = this.up('form');
				var datos = miForm.getValues();
				//console.log(datos.datoUno);
				miForm.buscarEnArray(datos.datoUno);
			}
		},
		{
			xtype: 'button',
			text: 'Buscar en Store ?',
			handler: function() {
				var miForm = this.up('form');
				var datos = miForm.getValues();
				//console.log(datos.datoUno);
				miForm.buscarEnStore(datos.datoUno);
			}
		},
		'-',
		{
			xtype: 'button',
			text: 'Comparar',
			handler: function () {
				var miForm = this.up('form');
				var datos = miForm.getValues();
				//console.log(datos.datoUno);
				miForm.compararDatos(datos);
			}
		},
		{
			xtype: 'button',
			text: 'FireEvent ?',
			handler: function () {
				console.log(this);
				console.log('sale');
				var obj = { nombre: 'algunNombre' };
				console.log(obj);
				
				this.fireEvent('mostrarFireEvent', obj);
				//this.up('form').mostrarFireEvent(obj);
			}
		},
		{
			xtype: 'button',
			text: 'Referencias',
			handler: function () {
				this.up('form').mostrarReferencia();
			}
		},
		{
			xtype: 'button',
			text: 'Cambia textoUno en Grilla',
			handler: function () {
				var texto = this.up('form').getValues().datoUno;
				//console.log(texto);
				this.up('form').cambiaTextoObjeto(texto);
			}
		},
		{
			xtype: 'button',
			text: 'Inserta en Grilla',
			handler: function () {
				var miForm = this.up('form');
				var datos = miForm.getValues();
				miForm.insertaEnGrilla(datos);
			}
		}
	],
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			layout: {
				type: 'hbox',
				align: 'middle'
			},
			items:[
				{
					xtype:'tbtext',
					text: '',
					id:'toolText'
				}
			]
		
		}
		
	],

	//funciones
	
	mostrarDatos: function (datos) {
		//console.log(datos);
		var miObj = this.down('#toolText');
		//console.log(miObj);
		var textoUno = datos.datoUno;
		var textoDos = datos.datoDos;
		miObj.setText('Texto ingresado : ' + textoUno + ' - ' + textoDos);
	},
	
	buscarEnArray: function (dato) {
		
		var users = [
			{ user: 'Admin', pass: '1234' },
			{ user: 'Admin2', pass: '1234' },
			{ user: 'Admin3', pass: '1234' },
			{ user: 'Admin4', pass: '1234' },
			{ user: 'Admin5', pass: '1234' }
		];

		var existe = Ext.Array.each(users,
			function (name, index, usersItself) {
				if (name.user == dato) { return false; }
			}
		);
		//console.log(existe);
		var miObj = this.down('#toolText');

		if (existe === true) {
			miObj.setText('Dato : <b>' + dato + '</b> NO existe ');
		}else {
			miObj.setText('Dato : <b>' + dato + '</b> existe');
		}
	},

	buscarEnStore: function (dato) {
		
		var store = new Ext.data.Store({
			autoLoad: true,
			model: Ext.define('MiMvc5.model.User', {
				extend: 'Ext.data.Model',
				fields: ['user', 'pass'],
				proxy: {
					type: 'ajax',
					api: { read: 'api/login' },
					reader: {
						type: 'json',
						root: 'results',
						successProperty: 'success',
						totalProperty: 'totalCount'
					}
				}

			})
		});

		console.log(store.data.items);
		//console.log(store.each(console.log()));
		
		var esta = Ext.Array.each(store.data.items, function (name, index, usersItself) {
			if (name.user == dato) { return false; }
		}
		);
		console.log(esta);
		var miObj = this.down('#toolText');
		if (esta === true) {
			miObj.setText('Dato : ' + dato + ' NO existe ');
		} else {
			miObj.setText('Dato : ' + dato + ' existe');
		}
	},
	
	compararDatos: function(dato) {
		
		var miObj = this.down('#toolText');
		
		if (dato.datoUno == dato.datoDos) {
			miObj.setText('Son iguales ');
		} else {
			miObj.setText('Distintos');
		}
	},

	mostrarFireEvent: function (dato) {
		
		console.log('llega fireEvent');
		console.log(dato);

		//var miObj = this.down('#toolText');
		//miObj.setText('FireEvent');
	},

	mostrarReferencia: function () {
		console.log(Ext.ComponentQuery.query("#listaLogin")); //referencia a un objeto por su itemId
		console.log(Ext.getCmp('listadoLogin')); //referencia por id
		console.log(this.up('panel'));
	},

	cambiaTextoObjeto: function (t) {
		//var obj = Ext.ComponentQuery.query("#loginForm");
		//console.log(obj[0].getDockedItems());

		var obj = Ext.ComponentQuery.query("#textoListaGrilla");
		//console.log(obj[0].text);
		obj[0].setText(t);//

	},

	insertaEnGrilla: function (datos) {
		var obj = Ext.ComponentQuery.query("#listaLogin");
		//var obj = Ext.getCmp('gridview');
		//console.log(obj[0].items.items[0].store);
		
		var grillaStore = obj[0].items.items[0].store;
		var grilla = obj[0].items.items[0];
		
		//grillaStore.insert('nuevo','nuevopass');
		
		
		var rec = new MiMvc5.model.User({
			user: datos.datoUno,
			pass: datos.datoDos,
			
		});
		//console.log(rec);
		grilla.getStore().add(rec);//agrega la instacia de model al final de la grilla
		//grilla.getStore().insert(0,rec);//agrega la instacia de model en la primer fila de la grilla

		//rec.save(); para usar este metodo se nec setear el proxy

		//grillaStore.reload();//recarga la grilla
		//grillaStore.load();//carga la grilla
		//console.log(grillaStore);

		//grilla.cellEditing.startEditByPosition({
		//	row: 0,
		//	column: 0
		//});

		//myStore.add({ some: 'data' }, { some: 'other data' });

	}

});