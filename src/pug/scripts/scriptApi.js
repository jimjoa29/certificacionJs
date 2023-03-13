<script>
    -
        console.log('Desde scriptApi')
        let pagina = 1
        const btnAnterior = document.querySelector('#btnAnterior')
        const btnSiguiente = document.querySelector('#btnSiguiente')

        btnSiguiente.addEventListener('click', () => {
        pagina += 1
        cargarPeliculas()
        })

        btnAnterior.addEventListener('click', () => {
        pagina -= 1
        cargarPeliculas()
        })

        const cargarPeliculas = async () => {
        try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0607842d20cedf1be3feb40da59bde29&language=es-ES&page=${pagina}`);

        // console.log(respuesta);

        if (respuesta.status === 200) {
        const data = await respuesta.json();

        let peliculas = ''
        data.results.forEach(pelicula => {
        peliculas += `
                        <div class='pelicula'>
                            <img class='poster' src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
                            <h3 class='titulo'>${pelicula.title}</h3>
                        </div>

                    `
        });

        document.getElementById('contenedor').innerHTML = peliculas;

        } else if (respuesta.status === 401) {

        console.log("Pusistes la llave mal");

        } else if (respuesta.status === 404) {

        console.log("La Pelicula que buscas no existe");

        }else{
        console.log('Hay un error inesperado')
        }

        } catch (error) {
        console.log(error);
        }
        }

    cargarPeliculas();

</script>