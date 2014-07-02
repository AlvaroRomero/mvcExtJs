Ext.define('MiMvc5.view.layouts.grids.UsuariosRoles', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.usuariosRoles',
	itemId: 'resultadosGrid',

	bbar: {
		ui: 'footer',
		items: [
			'->',
			{
				text: 'Mostrar Seleccion',
				handler: function () {

					var record = this.up('grid').getSelectionModel().getSelection()[0];

					if (!record) {
						Ext.Msg.alert('Atencion !', 'Debe seleccionar un usuario', Ext.emptyFn);
					} else {
						var window = Ext.widget('edicionUsuariosRoles', { renderTo: Ext.getBody() });
						window.down('form').loadRecord(record);
						window.show();
					}

					/*
					//console.log(this.up('grid').store.data.items[0].data.nombre);
					//console.log(this.up('grid').getSelectionModel().getSelection()[0]);
					
					var view = Ext.widget('edicionUsuarios');
					view.down('form').loadRecord(record);

					console.log(this.$);

					//console.log(this.$.resultadosGrid.down('grid'));

					//console.log('Resultados de la Grilla : ' + this.$.resultadosGrid);

					/*
					console.log('Grilla -> Model ->Selection ' + this.$.getSelectionModel().getSelection());
					console.log(this.$.getSelectionModel().getSelection());

					console.log('ID : ' + this.$.getSelectionModel().getSelection());
					console.log(this.$.getSelectionModel().getSelection());

					var window = Ext.widget('edicionUsuariosRoles', { renderTo: Ext.getBody() });
					window.down('container').loadRecord(record);

					console.log('mi Window : ' + window.$);
					console.log(window.$);

					window.show();*/
				}
			}
		
		]
	},

	initComponent: function () {

		this.store = {
			autoLoad: true,
			model: Ext.define('MiMvc3.model.User', {
				extend: 'Ext.data.Model',
				fields: ['nombre', 'permisos', 'roles'],
				proxy: {
					type: 'ajax',
					api: {
						read: 'api/roles'
					},
					reader: {
						type: 'json',
						root: 'results',
						successProperty: 'success',
						totalProperty: 'totalCount'
					}
				}
			})
		};

		this.columns = [
			{ header: 'Nombre', dataIndex: 'nombre', flex: 1 },
			{ header: 'Permisos', dataIndex: 'permisos', flex: 1 },
			{ header: 'Roles', dataIndex: 'roles', flex: 1 }
		];

		this.callParent(arguments);
	},
	showException: function (msg, callback, scope) {

			Ext.Msg.show({
				width: 500,
				title: 'Hubo un error al ejecutar la operación seleccionada',
				msg: Ext.isObject(msg) ? msg.exception : msg ? Ext.JSON.decode(msg).exception : 'No hay mas detalles del error',
				buttons: Ext.Msg.OK,
				icon: Ext.Msg.ERROR,
				scope: scope,
				callback: callback || function () { }
			});
	}
});