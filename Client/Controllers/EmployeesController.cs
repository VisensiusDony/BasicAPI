using API.Model;
using Client.Base;
using Client.Models;
using Client.Repositories.Data;
using Client.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
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
        [HttpGet]
        public async Task<JsonResult> GetRegisterData(string NIK)
        {
            var result = await repository.GetRegisterData(NIK);
            return Json(result);
        }
        [HttpPost]
        public JsonResult Register(RegistrationVM registrationVM)
        {
            var result = repository.Register(registrationVM);
            return Json(result);
        }

        /*[HttpPost]
        public JsonResult UpdateNIK(RegistrationVM registrationVM)
        {
            var result = repository.UpdateNIK(registrationVM);
            return Json(result);
        }*/

        /*[HttpPost]
        public JsonResult Insert(Employee employee)
        {
            var result = repository.Post(employee);
            return Json(employee);
        }*/
        [HttpPut]
        public JsonResult UpdateNIK(string nik, Employee employee)
        {
            var result = repository.UpdateNIK(nik, employee);
            return Json(result);
        }
    }
}
