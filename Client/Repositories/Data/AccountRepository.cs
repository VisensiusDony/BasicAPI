using API.Model;
using API.ViewModel;
using Client.Base;
using Client.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Client.Repositories.Data
{
    public class AccountRepository : GeneralRepository<Account, string>
    {
        private readonly Address address;
        private readonly string request;
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly HttpClient httpClient;
        public AccountRepository(Address address, string request = "Account/") : base(address, request)
        {
            this.address = address;
            this.request = request;
            _contextAccessor = new HttpContextAccessor();
            httpClient = new HttpClient
            {
                BaseAddress = new Uri(address.link)
            };
            //JWT
            //httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", _contextAccessor.HttpContext.Session.GetString("JWToken"));
        }
       /* public Object Login(LoginVM loginVM)
        {
            StringContent content = new StringContent(JsonConvert.SerializeObject(loginVM), Encoding.UTF8, "application/json");

            Object entities = new Object();

            using (var response = httpClient.PostAsync(request + "Login", content).Result)
            {
                string apiResponse = response.Content.ReadAsStringAsync().Result;
                entities = JsonConvert.DeserializeObject<Object>(apiResponse);
            }

            return entities;
        }*/
        public string JwtName(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            JwtSecurityToken result = tokenHandler.ReadJwtToken(token);

            return result.Claims.FirstOrDefault(claim => claim.Type.Equals("name")).Value;
        }
        public async Task<JWTokenVM> Auth(LoginVM login)
        {
            JWTokenVM token = null;

            StringContent content = new StringContent(JsonConvert.SerializeObject(login), Encoding.UTF8, "application/json");
            var result = await httpClient.PostAsync(request + "Login", content);

            string apiResponse = await result.Content.ReadAsStringAsync();
            token = JsonConvert.DeserializeObject<JWTokenVM>(apiResponse);

            return token;
        }
    }
}
