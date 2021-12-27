﻿using API.Context;
using API.Model;
using API.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Threading.Tasks;

namespace API.Repository.Data
{
    public class EmployeeRepository : GeneralRepository<MyContext, Employee, string>
    {
        private readonly MyContext myContext;
        //Hash hash = new Hash();
        public EmployeeRepository(MyContext myContext) : base(myContext)
        {
            this.myContext = myContext;
        }

        public int Inserted(Employee employee)
        {
            int increment = myContext.Employees.ToList().Count;
            var nikIncrement = DateTime.Now.ToString("yyyy") + "0" + increment.ToString();
            var checkNIK = myContext.Employees.Any(x => x.NIK == nikIncrement);
            var checkEmail = myContext.Employees.Any(x => x.Email == employee.Email);
            var checkPhone = myContext.Employees.Any(x => x.Phone == employee.Phone);
            if (checkNIK)
            {
                return 3;
            }
            else
            {
                if (checkEmail)
                {
                    return 1;
                }
                else
                {
                    if (checkPhone)
                    {
                        return 2;
                    }
                    else
                    {
                        employee.NIK = nikIncrement;
                        myContext.Employees.Add(employee);
                        myContext.SaveChanges();
                        return 0;
                    }

                }
            }
        }
            public int Register(RegisterVM registerVM)
        {
            int hasil = 1;
            int increment = myContext.Employees.ToList().Count;
            var nikIncrement = DateTime.Now.ToString("yyyy") + "0" + increment.ToString();
            var cekNIK = myContext.Employees.Any(e => e.NIK == nikIncrement);
            var cekEmail = myContext.Employees.Any(e => e.Email == registerVM.Email);
            var cekPhone = myContext.Employees.Any(e => e.Phone == registerVM.PhoneNumber);
            if (cekNIK)
            {
                hasil = 2;
            }
            else
            {
                if (cekEmail)
                {
                    hasil = 3;
                }
                else
                {
                    if (cekPhone)
                    {
                        hasil = 4;
                    }
                    else
                    {
                        var employee = new Employee
                        {
                            NIK = nikIncrement,
                            FirstName = registerVM.FirstName,
                            LastName = registerVM.LastName,
                            Email = registerVM.Email,
                            Salary = registerVM.Salary,
                            Phone = registerVM.PhoneNumber,
                            Gender = (Model.Gender)registerVM.Gender,
                            BirthDate = registerVM.BirthDate
                        };
                        var account = new Account
                        {
                            NIK = employee.NIK,
                            Password = BCrypt.Net.BCrypt.HashPassword(registerVM.Password)
                        };

                        var education = new Education
                        {
                            Degree = registerVM.Degree,
                            GPA = registerVM.GPA,
                            UniversityId = registerVM.UniversityId
                        };
                        myContext.Employees.Add(employee);
                        //myContext.SaveChanges();
                        myContext.Account.Add(account);
                        //myContext.SaveChanges();
                        myContext.Educations.Add(education);
                        myContext.SaveChanges();
                        var profiling = new Profilling
                        {
                            NIK = employee.NIK,
                            EducationId = education.EducationId
                        };
                        myContext.Profillings.Add(profiling);
                        myContext.SaveChanges();
                        hasil = 1;
                    }
                }
            }
            return hasil;
        }
        public IEnumerable GetRegisteredData()
        {
            var query = (from employee in myContext.Set<Employee>()
                         join account in myContext.Set<Account>()
                            on employee.NIK equals account.NIK
                         join profiling in myContext.Set<Profilling>()
                            on account.NIK equals profiling.NIK
                         join education in myContext.Set<Education>()
                            on profiling.EducationId equals education.EducationId
                         join university in myContext.Set<University>()
                            on education.UniversityId equals university.UniversityId
                         orderby employee.FirstName
                         select new
                         {
                             employee.NIK,
                             FullName = employee.FirstName + " "+ employee.LastName,
                             employee.Email,
                             employee.Salary,
                             employee.Phone,
                             employee.BirthDate,
                             Gender = employee.Gender.ToString(),
                             education.Degree,
                             education.GPA,
                             university.UniversityName
                         });
            return query.ToList();
        }

        public IEnumerable GetRegisteredData(string NIK)
        {
            var getNIK = myContext.Employees.Find(NIK);
            if (getNIK != null) {
            var query = (from employee in myContext.Set<Employee>()
                         join account in myContext.Set<Account>()
                            on employee.NIK equals account.NIK
                         join profiling in myContext.Set<Profilling>()
                            on account.NIK equals profiling.NIK
                         join education in myContext.Set<Education>()
                            on profiling.EducationId equals education.EducationId
                         join university in myContext.Set<University>()
                            on education.UniversityId equals university.UniversityId
                         where employee.NIK == NIK
                         select new
                         {
                             employee.NIK,
                             FullName = String.Concat(employee.FirstName + " ", employee.LastName),
                             employee.Email,
                             employee.Salary,
                             employee.Phone,
                             employee.BirthDate,
                             Gender = employee.Gender.ToString(),
                             education.Degree,
                             education.GPA,
                             university.UniversityName
                         });
            return query.ToList();
        }
            return null;
        }

        public IEnumerable GetRegisteredData2()
         {
            var studi = myContext.Employees
                        .Include(ac => ac.Account)
                        .ThenInclude(ac => ac.Profilling)
                        .ThenInclude(ed => ed.Education)
                        .ThenInclude(univ => univ.University);
                return studi.ToList();
        }

        public IEnumerable GetRegisteredData2(string NIK)
        {
            var getNIK = myContext.Employees.Find(NIK);
            if (getNIK != null)
            {
                var studi = myContext.Employees
                        .Include(ac => ac.Account)
                        .ThenInclude(ac => ac.Profilling)
                        .ThenInclude(ed => ed.Education)
                        .ThenInclude(univ => univ.University)
                        .Where(nik => nik.NIK == NIK);
                return studi.ToList();
            }
            return null;
        }


        public int Update(string NIK, Employee employee)
        {

            var checkData = myContext.Employees.Find(NIK);
            if (checkData != null)
            {
                myContext.Entry(checkData).State = EntityState.Detached;
            }
            else
            {
                return 3;
            }
            if (checkData.Email == employee.Email)
            {
                if (checkData.Phone == employee.Phone)
                {
                    employee.NIK = NIK;
                    myContext.Entry(employee).State = EntityState.Modified;
                    myContext.SaveChanges();
                    return 0;
                }
                else
                {
                    var checkPhone = myContext.Employees.Any(x => x.Phone == employee.Phone);
                    if (checkPhone)
                    {
                        return 2;
                    }
                    else
                    {
                        employee.NIK = NIK;
                        myContext.Entry(employee).State = EntityState.Modified;
                        myContext.SaveChanges();
                        return 0;
                    }
                }
            }
            else
            {
                if (checkData.Phone == employee.Phone)
                {
                    var checkEmail = myContext.Employees.Any(x => x.Email == employee.Email);
                    if (checkEmail)
                    {
                        return 1;
                    }
                    else
                    {
                        employee.NIK = NIK;
                        myContext.Entry(employee).State = EntityState.Modified;
                        myContext.SaveChanges();
                        return 0;
                    }
                }
                else
                {
                    var checkEmailPhone = myContext.Employees.Any(x => x.Email == employee.Email && x.Phone == employee.Phone);
                    if (checkEmailPhone)
                    {
                        return 4;
                    }
                    else
                    {
                        employee.NIK = NIK;
                        myContext.Entry(employee).State = EntityState.Modified;
                        myContext.SaveChanges();
                        return 0;
                    }
                }

            }
        }

        }
}
