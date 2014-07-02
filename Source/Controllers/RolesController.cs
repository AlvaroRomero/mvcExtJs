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

	public class RolesController : ApiController
	{

		private static List<Dictionary<string, string>> results;
		
		// GET api/users
		public object Get()
		{
			//Thread.Sleep(500);

			results = results ?? ( results = new List<Dictionary<string, string>>
			{
				new Dictionary<string, string>
				{
					{ "nombre", "Alguien" },
					{ "permisos", "A" },
					{ "roles", "4" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Nicolas" },
					{ "permisos", "B" },
					{ "roles", "3" }
				},
				new Dictionary<string, string>
				{
					{ "nombre", "Juan" },
					{ "permisos", "C" },
					{ "roles", "2" }
				}
				,
				new Dictionary<string, string>
				{
					{ "nombre", "Juan" },
					{ "permisos", "D" },
					{ "roles", "1" }
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
