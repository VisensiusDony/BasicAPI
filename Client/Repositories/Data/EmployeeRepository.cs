using API.Model;
using Client.Base;
using Client.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Client.Repositories.Data
{
    public class EmployeeRepository : GeneralRepository<Employee, string>
    {
        
        public EmployeeRepository(Address address, string request = "Employees/") : base(address, request)
        {
           
        }
    }
}
