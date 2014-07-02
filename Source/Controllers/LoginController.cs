using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sigaf.Web.Models;

namespace ExtJsTest.Controllers
{
	public class LoginController : ApiController
	{
		private static List<Dictionary<string, string>> results;

		public object Get()
		{
			results = results ?? (results = new List<Dictionary<string, string>>
			{
				new Dictionary<string, string> {{ "user", "Margarita" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Lucila" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Nicolas" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Damian" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Facundo" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Lautaro" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Ruben" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Alvaro" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Admin" },{ "pass", "qwerty12" }},
				new Dictionary<string, string> {{ "user", "Dvloop" },{ "pass", "qwerty12" }}
			});

			return new ResultContainer(results);
		}


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