using API.Model;
using API.Repository.Data;
using API.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : BaseController<Account, AccountRepository, string>
    {
        private readonly AccountRepository accountRepository;

        //public EmployeesController(EmployeeRepository employeeRepository)
        public AccountController(AccountRepository accountRepository) : base(accountRepository)
        {
            this.accountRepository = accountRepository;
        }

        [HttpPost("/Login")]
        public ActionResult Login(LoginVM loginVM)
        {
            var login = accountRepository.Login(loginVM);
            return login switch
            {
                1 => Ok(new { status = HttpStatusCode.OK, login, message = "Login Success" }),
                2 => BadRequest(new { status = HttpStatusCode.BadRequest, login, message = "Password incorrect" }),
                3 => BadRequest(new { status = HttpStatusCode.BadRequest, login, message = "Email is not registered" }),
                4 => BadRequest(new { status = HttpStatusCode.BadRequest, login, message = "The email you entered is empty" }),
                5 => BadRequest(new { status = HttpStatusCode.BadRequest, login, message = "The password you entered is empty" }),
                _ => BadRequest(new { status = HttpStatusCode.BadRequest, login, message = "Login Failed" }),
            };
        }
    }

    
}
