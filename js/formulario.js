const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    nome: '',
    apelido: '',
    email: '',
    mensagem: '',
  });

  React.useEffect(() => {
    // Carrega os dados do armazenamento local ao montar o componente
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Exibe mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    // Limpa os dados do formulário
    setFormData({
      nome: '',
      apelido: '',
      email: '',
      mensagem: '',
    });
    // Salva os dados do formulário no armazenamento local
    localStorage.setItem('formData', JSON.stringify(formData));
  };


  return (

    <div class="formulario">
      <h1>Contacte-nos</h1>
      <form onSubmit={handleSubmit}>
          <p>Para lhe darmos uma melhor resposta aos pedidos de informação, sugestões, elogios ou reclamações, é importante que preencha corretamente todos os campos de dados que solicitamos.</p>
            
          <h1>Informações, Elogios, Reclamações ou Sugestões</h1>

          <div class="informacoes">
            <label for="nome" id="label_info">Nome</label>
            <br />
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} class="input_contacto"/>
            <br />
            <label for="apelido" id="label_info">Apelido</label>
            <br />
            <input type="text" name="apelido" value={formData.apelido} onChange={handleChange}  class="input_contacto"/>
            <br />
            <label for="email" id="label_info">Email</label>
            <br />
            <input type="email" name="email" value={formData.email} onChange={handleChange}  class="input_contacto"/>
            <br />
          </div>

          <div class="mensagem_div">
            <label for="mensagem" id="label_info">Mensagem</label>
            <br />
            <input type="text" name="mensagem" value={formData.mensagem} onChange={handleChange}  id="texto" class="input_contacto_texto"/>
          </div>
          <div class="btns">
              <button class="btn-principal" type="submit">Enviar</button>
              <button class="btn-secundario" type="reset">Apagar</button>
          </div>
      </form>
    </div>

  );
};

ReactDOM.render(<ContactForm />, document.getElementById('root'));