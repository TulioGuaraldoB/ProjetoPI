const app = new Vue({
  el: "#App",
  data: {
    nome_animal: '',
    cidade_animal: '',
    estado_animal: '',
    especie: '',
    sexo: '',
    idade: '',
    porte: '',
    arquivo_selecionado: null,
    opcoes: [
      { id: 1, label: 'Castrado', checked: false },
      { id: 2, label: 'Vermifugado', checked: false },
      { id: 3, label: 'Vacinado', checked: false },
      { id: 4, label: 'Cuidados Especiais', checked: false }
    ],
    opcoes_s: [
      { id: 0, label: 'Macho', selecionado: false },
      { id: 1, label: 'Femea', selecionado: false }
    ],
    opcoes_e: [
      { id: 0, label: 'Gato', selecionado: false },
      { id: 1, label: 'Cachorro', selecionado: false }
    ],
    opcoes_i: [
      { id: 0, label: 'Filhote', selecionado: false },
      { id: 1, label: 'Adulto', selecionado: false },
      { id: 2, label: 'Idoso', selecionado: false }
    ],
    opcoes_p: [
      { id: 0, label: 'Pequeno', selecionado: false },
      { id: 1, label: 'Médio', selecionado: false },
      { id: 2, label: 'Grande', selecionado: false }
    ],
    opcoesSelecionadas: []
  },
  methods: {
    handleFileChange(event) {
      this.arquivo_selecionado = event.target.files[0];
    },
    mostrar() {
      //colocando informações com base em seu número de ordem

      this.sexo = this.opcoes_s.find(opcao => opcao.selecionado)?.label || '';
      this.especie = this.opcoes_e.find(opcao => opcao.selecionado)?.label || '';
      this.idade = this.opcoes_i.find(opcao => opcao.selecionado)?.label || '';
      this.porte = this.opcoes_p.find(opcao => opcao.selecionado)?.label || '';

      let castradoValue = this.opcoes.find(opcao => opcao.label === 'Castrado')?.selecionado ? 'sim' : 'não';
      let vermifugadoValue = this.opcoes.find(opcao => opcao.label === 'Vermifugado')?.selecionado ? 'sim' : 'não';
      let vacinadoValue = this.opcoes.find(opcao => opcao.label === 'Vacinado')?.selecionado ? 'sim' : 'não';
      let cuidadoValue = this.opcoes.find(opcao => opcao.label === 'Cuidados Especiais')?.selecionado ? 'sim' : 'não';

      console.log(
        this.nome_animal,
        this.especie,
        this.sexo,
        this.porte,
        this.idade,
        this.cidade_animal,
        this.estado_animal,
        castradoValue,
        vacinadoValue,
        vermifugadoValue,
        cuidadoValue,
        this.arquivo_selecionado
      );

    },
    async cadastro() {
      //colocando informações com base em seu número de ordem

      this.sexo = this.opcoes_s.find(opcao => opcao.selecionado)?.label || '';
      this.especie = this.opcoes_e.find(opcao => opcao.selecionado)?.label || '';
      this.idade = this.opcoes_i.find(opcao => opcao.selecionado)?.label || '';
      this.porte = this.opcoes_p.find(opcao => opcao.selecionado)?.label || '';

      let castradoValue = this.opcoes.find(opcao => opcao.label === 'Castrado')?.selecionado ? 'sim' : 'não';
      let vermifugadoValue = this.opcoes.find(opcao => opcao.label === 'Vermifugado')?.selecionado ? 'sim' : 'não';
      let vacinadoValue = this.opcoes.find(opcao => opcao.label === 'Vacinado')?.selecionado ? 'sim' : 'não';
      let cuidadoValue = this.opcoes.find(opcao => opcao.label === 'Cuidados Especiais')?.selecionado ? 'sim' : 'não';

      const form = new FormData();

      form.append('nome_animal', this.nome_animal);
      form.append('especie_op', this.especie);
      form.append('sexo_op', this.sexo);
      form.append('porte_op', this.porte);
      form.append('idade_op', this.idade);
      form.append('cidade_animal', this.cidade_animal);
      form.append('estado_animal', this.estado_animal);
      form.append('castradoValue', castradoValue);
      form.append('vacinadoValue', vacinadoValue);
      form.append('vermifugadoValue', vermifugadoValue);
      form.append('cuidadoValue', cuidadoValue);
      form.append('imagem', this.arquivo_selecionado);

      // let body = {
      //   nome_animal: this.nome_animal,
      //   especie_op: this.especie,
      //   sexo_op: this.sexo,
      //   porte_op: this.porte,
      //   idade_op: this.idade,
      //   cidade_animal: this.cidade_animal,
      //   estado_animal: this.estado_animal,
      //   castradoValue: castradoValue,
      //   vacinadoValue: vacinadoValue,
      //   vermifugadoValue: vermifugadoValue,
      //   cuidadoValue: cuidadoValue,
      //   imagem: this.arquivo_selecionado
      // };


      await axios.post('http://localhost:3001/inserir', form)
        .then(response => {
          if (response.status == 200) {
            console.log(
              this.nome_animal,
              this.especie_op,
              this.sexo_op,
              this.porte_op,
              this.idade_op,
              this.cidade_animal,
              this.estado_animal,
              castradoValue,
              vacinadoValue,
              vermifugadoValue,
              cuidadoValue,
              this.arquivo_selecionado
            );
            alert('Cadastro efetuado com sucesso!')
          } else {
            response.status(500).send('Erro ao inserir as informações');
          }
        })
    }
  }
});