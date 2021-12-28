using API.Context;
using API.Model;
using API.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Mail;
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

        public int ForgotPassword(ForgotPasswordVM forgotPasswordVM)
        {
            int hasil = 0;
            if (forgotPasswordVM.Email != "")
            {
                var cekEmail = myContext.Employees.SingleOrDefault(e => e.Email == forgotPasswordVM.Email);
                var cekAccount = myContext.Account.SingleOrDefault(e => e.NIK == cekEmail.NIK);
                Random random = new Random();
                cekAccount.OTP = random.Next(100000, 999999);
                cekAccount.Expired = DateTime.Now.AddMinutes(5);
                cekAccount.IsUsed = false;

                var fromAddress = new MailAddress("lyear855@gmail.com");
                var passwordFrom = "visensius";
                var toAddress = new MailAddress(forgotPasswordVM.Email);
                SmtpClient smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    Credentials = new NetworkCredential(fromAddress.Address, passwordFrom)
                };
                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = "Forgot Password",
                    Body = "Hai, " + cekEmail.FirstName + " berikut OTP kamu yang sekarang : " +cekAccount.OTP+ ". Segera lakukan Change Password.",
                }) smtp.Send(message);

                myContext.Entry(cekAccount).State = EntityState.Modified;
                myContext.SaveChanges();
                hasil = 1;
            }
            else
            {
                hasil = 2;
            }
            return hasil;
        }

        public int ChangePassword(ChangePasswordVM changePasswordVM)
        {
            int hasil = 0;
            var cekEmail = myContext.Employees.SingleOrDefault(e => e.Email == changePasswordVM.Email);
            var cekAccount = myContext.Account.SingleOrDefault(a => a.NIK == cekEmail.NIK);
            if (cekAccount.OTP == changePasswordVM.OTP)
            {
                if (cekAccount.IsUsed == false)
                {
                    if (cekAccount.Expired < DateTime.Now)
                    {
                        cekAccount.Password = BCrypt.Net.BCrypt.HashPassword(changePasswordVM.NewPassword);
                        cekAccount.IsUsed = true;
                        myContext.Entry(cekAccount).State = EntityState.Modified;
                        myContext.SaveChanges();
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
            else
            {
                hasil = 4;
            }
            return hasil;
        }
    }
}
