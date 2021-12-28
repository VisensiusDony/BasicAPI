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
            if (getData == 1)
            {
                /*var fromAddress = new MailAddress("dony.9a.40@gmail.com", "Aplikasi API");
                var toAddress = new MailAddress(forgotPasswordVM.Email, "user");
                const string fromPassword = "XROSS@BLAST";
                string subject = "Reset Password " + DateTime.Now.ToString("dddd, dd MMMM yyyy HH:mm:ss");
                string body = "Hai, " + "user" + " berikut password kamu yang sekarang : " + ". Segera lakukan Change Password.";

                var smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = new NetworkCredential(fromAddress.Address, fromPassword);
                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = body
                })
                {
                    smtp.Send(message);
                }*/
                return Ok(new { status = HttpStatusCode.OK, getData, message = "Email telah terkirim" });
            }
            else
            {
                return BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "Email tidak terdaftar dalam database" });
            }
        }

        [HttpPut("/ChangePassword")]
        public ActionResult ChengePassword(ChangePasswordVM changePasswordVM)
        {
            var getData = accountRepository.ChangePassword(changePasswordVM);
            return getData switch
            {
                1 => Ok(new { status = HttpStatusCode.OK, getData, message = "Change Password Success" }),
                2 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "OTP expired" }),
                3 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "OTP already used" }),
                4 => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "OTP incorrect" }),
                _ => BadRequest(new { status = HttpStatusCode.BadRequest, getData, message = "Change Password Failed" }),
            };
        }

    }
}
