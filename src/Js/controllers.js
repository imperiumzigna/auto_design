/** Arquivos para conter todos os controladores
 * */


/** Controlador Principal
 * */
app.controller('MainCtrl', function ($scope) {
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };
});


