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
	public class RutasController : ApiController
	{
		private static List<Dictionary<string, string>> results;

		public object Get()
		{
			
			results = results ?? (results = new List<Dictionary<string, string>>
			{
				new Dictionary<string, string>
				{
					{ "ruta", "Ruta/A/B" }
					//{ "apellido", "Perez" },
					//{ "correo", "Apellido@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "ruta", "Ruta/B/B" }
					//{ "apellido", "Perez" },
					//{ "correo", "otroApellido@dvloop.com" }
				},
				new Dictionary<string, string>
				{
					{ "ruta", "Ruta/C/B" }
					//{ "apellido", "Perez" },
					//{ "correo", "juanPerez@dvloop.com" }
				}
				,
				new Dictionary<string, string>
				{
					{ "ruta", "Ruta/D/B" }
					//{ "apellido", "Perez" },
					//{ "correo", "juanPerez@dvloop.com" }
				}
			});

			return new ResultContainer(results);
		}

		// GET api/<controller>
		/*public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}
		*/

		// GET api/<controller>/5
		public string Get(int id)
		{
			return "value";
		}

		// POST api/<controller>
		public void Post(List<Dictionary<string, string>> values)
		{
			results = values;
		}

		// PUT api/<controller>/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/<controller>/5
		public void Delete(int id)
		{
		}
	}
}