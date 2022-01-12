using API.Model;
using Client.Base;
using Client.Models;
using Client.Repositories.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Client.Controllers
{
    public class EmployeesController : BaseController<Employee, EmployeeRepository, string>
    {
         private readonly EmployeeRepository repository;
        public EmployeesController(EmployeeRepository repository) : base(repository)
        {
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }
        
        public async Task<JsonResult> GetRegisteredData()
        {
            var result = await repository.GetRegisteredData();
            return Json(result);
        }
        
        public async Task<JsonResult> GetRegisteredView(string nik)
        {
            var result = await repository.GetRegisteredView(nik);
            return Json(result);
        }
    }
}
