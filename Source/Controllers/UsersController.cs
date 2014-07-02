using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using Sigaf.Web.Models;

namespace ExtJsTest.Controllers
{

	public class UsersController : ApiController
	{

		private static List<Dictionary<string, string>> results;
		
		// GET api/vistas
		public object Get()
		{
			results = results ?? ( results = new List<Dictionary<string, string>>
			{
				new Dictionary<string, string>
				{
					{ "nombre", "Margarita" },
					{ "apellido", "Perez" },
					{ "correo", "marga@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Nicolas" },
					{ "apellido", "Perez" },
					{ "correo", "nicolas@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Juan" },
					{ "apellido", "Perez" },
					{ "correo", "juanPerez@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Jose" },
					{ "apellido", "Perez" },
					{ "correo", "jose@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "correo", "pedro@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "correo", "pedrito@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pepe" },
					{ "apellido", "Sanchez" },
					{ "correo", "pepe@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pancho" },
					{ "apellido", "Sanchez" },
					{ "correo", "pancho@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Margarita" },
					{ "apellido", "Perez" },
					{ "correo", "marga@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Nicolas" },
					{ "apellido", "Perez" },
					{ "correo", "nicolas@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Juan" },
					{ "apellido", "Perez" },
					{ "correo", "juanPerez@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Jose" },
					{ "apellido", "Perez" },
					{ "correo", "jose@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "correo", "pedro@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "correo", "pedrito@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pepe" },
					{ "apellido", "Sanchez" },
					{ "correo", "pepe@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pancho" },
					{ "apellido", "Sanchez" },
					{ "correo", "pancho@dvloop.com" }
				}

			});

			return new ResultContainer(results);
		}


		// GET api/users/5
		public string Get(int id)
		{
			return "value";
		}

		// POST api/users
		public void Post(List<Dictionary<string, string>> values)
		{
			results = values;
		}

		// PUT api/users/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/users/5
		public void Delete(int id)
		{
		}

	}

}
