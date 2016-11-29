using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AspNetAndAngular2.Controllers
{
    public class SystemsController : ApiController
    {
        private static List<AngularTestSystem> MySystems = new List<AngularTestSystem>()
        {
            new AngularTestSystem()
            {
                Id = 1,
                SystemName = "1Single line text",
                Description = "1Multiple line text, lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                SelectedMultiDescriptiors = new List<int>(){1,2},
                SelectedPackageId = 1,
            },
            new AngularTestSystem()
            {
                Id = 2,
                SystemName = "2Single line text",
                Description = "2Multiple line text, lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                SelectedMultiDescriptiors = new List<int>(){3,4},
                SelectedPackageId = 1,
            },
        };

        [HttpGet]
        //[Authorize()]//TODO
        public HttpResponseMessage GetSystem(int id)
        {
            return ControllerContext.Request.CreateResponse(HttpStatusCode.OK,
                MySystems
                    .SingleOrDefault(s => s.Id == id));
        }

        [HttpGet]
        [ActionName("All")]
        //[Authorize()]//TODO
        public HttpResponseMessage GetSystems()
        {
            return ControllerContext.Request.CreateResponse(HttpStatusCode.OK, MySystems);
        }

        [HttpPost]
        //[ActionName("Create")]
        public void PostSystem([FromBody]AngularTestSystem model)
        {
            if (MySystems.Any(s => s.Id != model.Id))
            {
                throw new ApplicationException("Already exists");
            }


            MySystems.Add(new AngularTestSystem()
            {
                Id = MySystems.Max(s => s.Id + 1),
                SystemName = model.SystemName,
                Description = model.Description,
                SelectedPackageId = model.SelectedPackageId,
                SelectedMultiDescriptiors = new List<int>(model.SelectedMultiDescriptiors),
            });

            ControllerContext.Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpPut]
        //[ActionName("Update")]
        public void PutSystem([FromBody]AngularTestSystem model)
        {
            if (MySystems.All(s => s.Id != model.Id))
            {
                throw new ApplicationException("Does not exist");
            }

            MySystems.Single(s => s.Id == model.Id)
                .Update(model);
            ControllerContext.Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        //[ActionName("Delete")]
        public void DeleteSystem(int id)
        {
            if (MySystems.All(s => s.Id != id))
            {
                throw new ApplicationException("Does not exist");
            }

            MySystems.RemoveAll(s => s.Id == id);

            ControllerContext.Request.CreateResponse(HttpStatusCode.OK);
        }
    }

    public class AngularTestSystem
    {
        public int Id { get; set; }
        public string SystemName { get; set; }
        public string Description { get; set; }
        public int SelectedPackageId { get; set; }
        public List<int> SelectedMultiDescriptiors { get; set; }

        public void Update(AngularTestSystem model)
        {
            this.SystemName = model.SystemName;
            this.Description = model.Description;
            this.SelectedPackageId = model.SelectedPackageId;

            this.SelectedMultiDescriptiors.Clear();
            this.SelectedMultiDescriptiors.AddRange(model.SelectedMultiDescriptiors);
        }
    }

    public class AngularPackage
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Decription { get; set; }
    }

    public class AngularMultiDescriptor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Decription { get; set; }
    }
}