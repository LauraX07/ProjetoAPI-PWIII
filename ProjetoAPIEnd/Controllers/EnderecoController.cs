using Microsoft.AspNetCore.Mvc;
using ProjetoAPIEnd.Repositorio.Contract;

namespace ProjetoAPIEnd.Controllers
{
    public class EnderecoController : Controller
    {
        private IEnderecoRepositorio _enderecoRepositorio;

        public EnderecoController(IEnderecoRepositorio enderecoRepositorio)
        {
            _enderecoRepositorio = enderecoRepositorio;
        }

        public IActionResult Index()
        {
            return View( _enderecoRepositorio.ObterTodosEnderecos());
        }
    }
}
