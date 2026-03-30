using ProjetoAPIEnd.Models;

namespace ProjetoAPIEnd.Repositorio.Contract
{
    public interface IEnderecoRepositorio
    {
        void Cadastrar(Endereco endereco);

        void Atualizar(Endereco endereco);

        void Excluir(int Id);

        Endereco ObterEndereco(int Id);

        IEnumerable<Endereco> ObterTodosEnderecos();
    }
}
