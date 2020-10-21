using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SCP.ViewModels
{
    public class RegistrationViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<RegistrationViewDetails> RegistrationList { get; set; }
    }
    public class RegistrationViewDetails
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
