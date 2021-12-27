using API.Context;
using API.Model;
using API.ViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;

namespace API.Repository.Data
{
    public class AccountRepository : GeneralRepository<MyContext, Account, string>
    {
        private readonly MyContext myContext;
        public AccountRepository(MyContext myContext) : base(myContext)
        {
            this.myContext = myContext;
        }
        public int Login(LoginVM loginVM)
        {
            int hasil = 0;
            if (loginVM.Email != "" && loginVM.Password != "")
            {
                var cekEmail = myContext.Employees.SingleOrDefault(e => e.Email == loginVM.Email);
                //var cekmail = myContext.Employees.Where(e => e.Email == loginVM.Email).SingleOrDefault();
                //var cekNIK = myContext.Employees.SingleOrDefault(e => e.NIK == cekEmail.NIK);
                if (cekEmail != null)
                {
                    var cekAccountPass = myContext.Account.SingleOrDefault(e => e.NIK == cekEmail.NIK);
                    bool cekPassword = BCrypt.Net.BCrypt.Verify(loginVM.Password, cekAccountPass.Password);
                    if (cekPassword)
                    {
                        hasil = 1;
                    }
                    else
                    {
                        hasil = 2;
                    }
                }
                else
                {
                    hasil = 3;
                }
            }
            else if (loginVM.Email == "" && loginVM.Password != "")
            {
                hasil = 4;
            }
            else if (loginVM.Email != "" && loginVM.Password == "")
            {
                hasil = 5;
            }
            else
            {
                hasil = 0;
            }
            return hasil;
        }
    }
}
