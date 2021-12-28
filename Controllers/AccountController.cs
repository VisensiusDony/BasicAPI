using API.Model;
using API.Repository.Data;
using API.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
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

        [HttpPut("/ForgotPassword")]
        public ActionResult ForgotPassword(ForgotPasswordVM forgotPasswordVM)
        {
            var getData = accountRepository.ForgotPassword(forgotPasswordVM);
            return getData switch
            {
                1 => Ok(new { status = HttpStatusCode.OK, getData, message = "Email has been sent, please check the OTP code in your email!" }),
                2 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "Email is not registered" }),
                _ => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "Your email is empty" }),
            };
        }

        [HttpPut("/ChangePassword")]
        public ActionResult ChengePassword(ChangePasswordVM changePasswordVM)
        {
            var getData = accountRepository.ChangePassword(changePasswordVM);
            return getData switch
            {
                1 => Ok(new { status = HttpStatusCode.OK, getData, message = "Change Password Success" }),
                2 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "OTP expired, Please request OTP again!" }),
                3 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "OTP already used, Please request OTP again!" }),
                4 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "Wrong OTP, please re-enter the OTP code!" }),
                5 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "Email is not registered, please register first!" }),
                _ => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "Change Password Failed, your email is empty!" }),
            };
        }

    }
}
