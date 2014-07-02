using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sigaf.Web.Models;

namespace ExtJsTest.Controllers
{
	public class CeldasController : ApiController
	{
		private static List<Dictionary<string, string>> results;

		//api/celdas
		public object Get()
		{
			results = results ?? (results = new List<Dictionary<string, string>>
			{
				new Dictionary<string, string>
				{
					{ "nombre", "Celdas" },
					{ "apellido", "Editables" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Nicolas" },
					{ "apellido", "Perez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Juan" },
					{ "apellido", "Perez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Jose" },
					{ "apellido", "Perez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pepe" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pancho" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Margarita" },
					{ "apellido", "Perez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Nicolas" },
					{ "apellido", "Perez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Juan" },
					{ "apellido", "Perez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Jose" },
					{ "apellido", "Perez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pedro" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pepe" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Pancho" },
					{ "apellido", "Sanchez" },
					{ "fecha", "12/12/12" }
				}

			});

			return new ResultContainer(results);
		}


		// GET api/<controller>
		/*public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}*/

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
		/*public void Post([FromBody]string value)
		{
		}
		*/

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