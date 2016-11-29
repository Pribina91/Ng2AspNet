using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Routing;

namespace AspNetAndAngular2.Config
{
    public class RouteConfig
    {
        public static void Start()
        {
            RouteTable.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new {id = System.Web.Http.RouteParameter.Optional});

            RouteTable.Routes.MapHttpRoute(
                name: "ByActionName",
                routeTemplate: "api/{controller}/{action}",
                defaults: new {}
            );

            GlobalConfiguration.Configuration.Formatters.Clear();
            GlobalConfiguration.Configuration.Formatters.Add(new JsonMediaTypeFormatter());
        }
    }
}