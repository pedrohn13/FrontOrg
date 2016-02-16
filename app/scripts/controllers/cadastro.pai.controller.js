angular.module('app')
    .controller('CadastroPaiController', function ($scope, $http) {

        var root = 'https://leonardoads.pythonanywhere.com/OrganizeBaby/default/api';
        this.createNovoPai = create;

        function create() {
            var novoPai = {
                p_nome: this.nome,
                p_telefone: this.telefone,
                p_cpf: this.cpf,
                p_senha: this.senha
            }
            console.log(novoPai);

            $http({
                method: "POST",
                url: root + '/pais.json',
                data: novoPai,
            }).then(function mySucces(response) {
                console.log("OK!!!!!!!!!");
            }, function myError(response) {
                console.log("FAIL!!!!!!!!!");
            });
        }

    });