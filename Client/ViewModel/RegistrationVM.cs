using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Client.ViewModel
{
    public class RegistrationVM
    {
        
            public string NIK { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }
            public int Salary { get; set; }
            public string PhoneNumber { get; set; }
            public Gender Gender { get; set; }
            public DateTime BirthDate { get; set; }
            public string Password { get; set; }
            public string Degree { get; set; }
            public float GPA { get; set; }
            public int UniversityId { get; set; }
            public int RoleId { get; set; }

        
    }
}
