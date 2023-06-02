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
        especie_op: ['Gato', 'Cachorro'],
        sexo_op: ['Femea', 'Macho'],
        idade_op: ['FIlhote', 'Adulto', 'Idoso'],
        porte_op: ['Pequeno', 'Médio', 'Grande'],
        opcoes: [
          { id: 1, label: 'Castrado', checked: false },
          { id: 2, label: 'Vermifugado', checked: false },
          { id: 3, label: 'Vacinado', checked: false },
          { id: 4, label: 'Cuidados Especiais', checked: false }
        ],
        opcoesSelecionadas: []
      },
      methods: {
        handleFileChange(event) {
          this.arquivo_selecionado = event.target.files[0];
        },
        mostrar() {
          //colocando informações com base em seu número de ordem

          // especie
          if (this.especie_op == 0) {
            this.especie_op = 'Gato'
          }
          else {
            this.especie_op = 'Cachorro'
          }

          //sexo
          if (this.sexo_op == 0) {
            this.sexo_op = 'Femea'
          }
          else {
            this.sexo_op = 'Macho'
          }

          //idade
          if (this.idade_op == 0) {
            this.idade_op = 'Filhote'
          }
          else if (this.idade_op == 1) {
            this.idade_op = 'Adulto'
          }
          else {
            this.idade_op = 'Idoso'
          }

          //porte
          if (this.porte_op == 0) {
            this.porte_op = 'Pequeno'
          }
          else if (this.porte_op == 1) {
            this.porte_op = 'Médio'
          }
          else {
            this.porte_op = 'Grande'
          }

          let castradoValue = this.opcoes.find(opcao => opcao.label === 'Castrado')?.selecionado ? 'sim' : 'não';
          let vermifugadoValue = this.opcoes.find(opcao => opcao.label === 'Vermifugado')?.selecionado ? 'sim' : 'não';
          let vacinadoValue = this.opcoes.find(opcao => opcao.label === 'Vacinado')?.selecionado ? 'sim' : 'não';
          let cuidadoValue = this.opcoes.find(opcao => opcao.label === 'Cuidados Especiais')?.selecionado ? 'sim' : 'não';

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

        },
        async cadastro() {
          //colocando informações com base em seu número de ordem

          if (this.especie_op == 0) {
            this.especie_op = 'Gato'
          }
          else {
            this.especie_op = 'Cachorro'
          }

          //sexo
          if (this.sexo_op == 0) {
            this.sexo_op = 'Femea'
          }
          else {
            this.sexo_op = 'Macho'
          }

          //idade
          if (this.idade_op == 0) {
            this.idade_op = 'Filhote'
          }
          else if (this.idade_op == 1) {
            this.idade_op = 'Adulto'
          }
          else {
            this.idade_op = 'Idoso'
          }

          //porte
          if (this.porte_op == 0) {
            this.porte_op = 'Pequeno'
          }
          else if (this.porte_op == 1) {
            this.porte_op = 'Médio'
          }
          else {
            this.porte_op = 'Grande'
          }

          let castradoValue = this.opcoes.find(opcao => opcao.label === 'Castrado')?.selecionado ? 'sim' : 'não';
          let vermifugadoValue = this.opcoes.find(opcao => opcao.label === 'Vermifugado')?.selecionado ? 'sim' : 'não';
          let vacinadoValue = this.opcoes.find(opcao => opcao.label === 'Vacinado')?.selecionado ? 'sim' : 'não';
          let cuidadoValue = this.opcoes.find(opcao => opcao.label === 'Cuidados Especiais')?.selecionado ? 'sim' : 'não';

          const form = new FormData();

          form.append('nome_animal', this.nome_animal);
          form.append('especie_op', this.especie);
          form.append('sexo_op', this.sexo);
          form.append('porte_op', this.porte_op);
          form.append('idade_op', this.idade_op);
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
                // console.log(response.data)
                alert('Cadastro efetuado com sucesso!')
              } else {
                response.status(500).send('Erro ao inserir as informações');
              }
            })
        }
      }
    });