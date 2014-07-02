using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sigaf.Web.Models;

namespace ExtJsTest.Controllers
{
	public class DragsController : ApiController
	{
		private static List<Dictionary<string, string>> results;

		public object Get()//api/drags
		{
			results = results ?? (results = new List<Dictionary<string, string>>
				{
					new Dictionary<string, string>{{"nombre", "Homero"},{"funcion","Padre"}},
					new Dictionary<string, string>{{"nombre", "Marge"},{"funcion","Madre"}},
					new Dictionary<string, string>{{"nombre", "Bart"},{"funcion","Hijo Mayor"}},
					new Dictionary<string, string>{{"nombre", "Lisa"},{"funcion","Hija"}},
					new Dictionary<string, string>{{"nombre", "Magie"},{"funcion","Hija menor"}}
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
		public void Post([FromBody]string value)
		{
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