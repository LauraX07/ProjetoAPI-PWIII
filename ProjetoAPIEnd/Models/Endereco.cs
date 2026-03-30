using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ProjetoAPIEnd.Models
{
    public class Endereco
    {
        [Display(Name = "Código", Description = "Código")]
        public int Id { get; set; }

        [Display(Name = "CEP")]
        public string CEP
    }
}
