using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Sigaf.Web.Models
{

	public class ResultContainer
	{

		private string _queryInfo;

		public bool Success { get { return true; } }
		public IEnumerable<object> Results { get; private set; }
		public int? TotalCount { get; private set; }

		public string QueryInfo
		{
			get { return _queryInfo; }
		}

		public ResultContainer(object result)
			: this(new List<object> { result })
		{
		}

		public ResultContainer(IEnumerable<object> results)
		{

			Results = results;

			if (results == null || !results.Any()) return;

			var firstResult = results.First();

			if (firstResult is IDictionary<string, object>)
			{

				Results = results.Select(x =>
				{
					var item = (IDictionary<string, object>)x;

					if (item.ContainsKey("QTOTAL"))
					{
						if (!TotalCount.HasValue)
						{
							TotalCount = Convert.ToInt32(item["QTOTAL"]);
						}
						item.Remove("QTOTAL");
					}

					if (item.ContainsKey("RNUM"))
					{
						item.Remove("RNUM");
					}

					return item;

				});

				return;

			}

			var qTotalProperty = firstResult.GetType().GetProperties().FirstOrDefault(x => x.Name.Equals("QTOTAL", StringComparison.OrdinalIgnoreCase));

			if (qTotalProperty != null)
			{
				TotalCount = TotalCount = Convert.ToInt32(qTotalProperty.GetValue(firstResult, null));
			}

		}

	}

}