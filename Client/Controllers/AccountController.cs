using API.Model;

using API.ViewModel;
using Client.Base;
using Client.Repositories.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Client.Controllers
{
    public class AccountController : BaseController<Account, AccountRepository, string>
    {
        private readonly AccountRepository repository;
       
        public AccountController(AccountRepository repository): base(repository)
        {
            this.repository = repository;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Login(LoginVM login)
        {
            var result = repository.Login(login);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> Auth(LoginVM login)
        {
            
            var JWToken = await repository.Auth(login);
            var token = JWToken.IdToken;

            if (token == null)
            {
                TempData["Message"] = JWToken.Message;
                return RedirectToAction("index", "login");
            }

            HttpContext.Session.SetString("JWToken", token);
            /*HttpContext.Session.SetString("Name", jwtHandler.GetName(token));
            HttpContext.Session.SetString("ProfilePicture", "assets/img/theme/user.png");*/
            TempData["name"] = repository.JwtName(JWToken.IdToken);
            //HttpContext.Session.SetString("name", repository.JwtName(JWToken.IdToken));

            return RedirectToAction("index", "employee");
           /* return Json(token);*/
        }
        [Authorize]
        [HttpGet]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("index","login");
        }
    }
}
