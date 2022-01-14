using API.Model;
using API.ViewModel;
using Client.Base;
using Client.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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
        public Object Login(LoginVM loginVM)
        {
            StringContent content = new StringContent(JsonConvert.SerializeObject(loginVM), Encoding.UTF8, "application/json");

            Object entities = new Object();

            using (var response = httpClient.PostAsync(request + "Login", content).Result)
            {
                string apiResponse = response.Content.ReadAsStringAsync().Result;
                entities = JsonConvert.DeserializeObject<Object>(apiResponse);
            }

            return entities;
        }
    }
}
