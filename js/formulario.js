const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    nome: '',
    apelido: '',
    email: '',
    mensagem: '',
  });

  const [errors, setErrors] = React.useState({}); // Estado para erros

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

  const validateForm = () => {
    const newErrors = {};

    // Validações
    if (!formData.nome.trim()) newErrors.nome = 'O nome é obrigatório.';
    if (!formData.apelido.trim()) newErrors.apelido = 'O apelido é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'O email não é válido.';
    }
    if (!formData.mensagem.trim()) newErrors.mensagem = 'A mensagem é obrigatória.';

    setErrors(newErrors);

    // Retorna true se não houver erros
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida o formulário antes de enviar
    if (!validateForm()) {
      return;
    }

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
    <div className="formulario">
      <h1>Contacte-nos</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Para lhe darmos uma melhor resposta aos pedidos de informação,
          sugestões, elogios ou reclamações, é importante que preencha
          corretamente todos os campos de dados que solicitamos.
        </p>

        <h1>Informações, Elogios, Reclamações ou Sugestões</h1>

        <div className="informacoes">
          <label htmlFor="nome" id="label_info">
            Nome
          </label>
          <br />
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="input_contacto"
          />
          {errors.nome && <span className="error">{errors.nome}</span>}
          <br />
          <label htmlFor="apelido" id="label_info">
            Apelido
          </label>
          <br />
          <input
            type="text"
            name="apelido"
            value={formData.apelido}
            onChange={handleChange}
            className="input_contacto"
          />
          {errors.apelido && <span className="error">{errors.apelido}</span>}
          <br />
          <label htmlFor="email" id="label_info">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input_contacto"
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <br />
        </div>

        <div className="mensagem_div">
          <label htmlFor="mensagem" id="label_info">
            Mensagem
          </label>
          <br />
          <input
            type="text"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            id="texto"
            className="input_contacto_texto"
          />
          {errors.mensagem && (
            <span className="error">{errors.mensagem}</span>
          )}
        </div>
        <input type="submit" className="btn-principal" value="Enviar mensagem" />
        <button
          type="button"
          className="btn-secundario"
          onClick={() =>
            setFormData({
              nome: '',
              apelido: '',
              email: '',
              mensagem: '',
            })
          }
        >
          Apagar
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<ContactForm />, document.getElementById('root'));
