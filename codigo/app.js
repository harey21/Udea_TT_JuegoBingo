angular.module("JuegoBingo", [])
    .controller("ControladorJuegoBingo",
        function ($scope) {

            $scope.cantor = new Cantor();
            $scope.jugadores = [];
            $scope.juegoIniciado = false;

            $scope.iniciarJuego = function () {
                const totalJugadores = 7;
                $scope.jugadores = [];
                for (let i = 0; i < totalJugadores; i++) {
                    $scope.jugadores.push({
                        nombre: "Jugador " + (i + 1),
                        tablaJugador: new Tabla(),
                        ganador: false
                    });
                }
                $scope.juegoIniciado = true;
                $scope.cantor.iniciar();
            }

            $scope.sacarBalota = function () {
                $scope.cantor.sacarBalota();

                for (i = 0; i < $scope.jugadores.length; i++) {
                    $scope.jugadores[i].tablaJugador.taparNumero($scope.cantor.ultimaBalota);
                }
                if($scope.cantor.pendientes == 0){
                $scope.juegoIniciado = false;
                }
            }
        }
    );