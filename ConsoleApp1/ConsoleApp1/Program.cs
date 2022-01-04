using System;  //Nama Library

//Tambahkan Library
using System.Collections.Generic;

namespace BasicProgramming  //Nama Lembar Kerja
{
    class Program //Nama Class
    {
        static void Main(string[] args)           
        {                                          
            Console.WriteLine("Hello World!");

            // List dengan kapasitas default
            List<int> employeeId = new List<int>();
            employeeId.Add(1);
            employeeId.Add(2);
            employeeId.Add(3);
            employeeId.Add(4);
            employeeId.Add(5);
            employeeId.Insert(3, 2);
            foreach (int a in employeeId)
                Console.WriteLine(a);


            List<string> firstName = new List<string>();
            firstName.Add("Gery");
            firstName.Add("Kevin");
            firstName.Insert(1, "Alex");
            foreach (string b in firstName)
                Console.WriteLine(b);

            // firstName.Remove("Alex"); // item to remove is string

            //firstName.RemoveAt(2); //menghapus elemen pada index 2 di List

            //menghapus item mulai dari posisi index = 1, sejumlah 2 item
            //firstName.RemoveRange(1,2);

            //firstName.Clear();


            /*int x = 3;
            int y = 0;
            int z = x / y;*/
            try
            {
                int x = 3;
                int y = 0;
                int z = x / y;
            }
            catch
            {
                Console.WriteLine("angka tidak dapat dibagi dengan 0.silahkan coba lagi...");
            }
            finally
            {
                Console.WriteLine("Inner finally block");
            }


            /*try
            {
                Arithmetic obj = new Arithmetic();
                int result = obj.GetResult(20, 0);
                Console.WriteLine($"Hasil: {result}");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
            }*/

            /*int result = Division(20, 0);

            System.Console.WriteLine($"Hasil: {result}");*/
        }
        /*static int Division(int numerator, int denominator)
        {
            return numerator / denominator;
        }*/

    }
    /*public class Arithmetic
    {
        public int GetResult(int x, int y)
        {
            return Division(x, y);
        }

        private int Division(int numerator, int denominator)
        {
            return numerator / denominator;
        }

    }*/

    
}
