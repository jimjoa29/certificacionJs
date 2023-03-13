<script>
    -
      //-alert('Hello World');
      console.log('Hello World');


          function main(){
            let pagina
            return {

            url: `https://api.themoviedb.org/3/movie/popular?api_key=0607842d20cedf1be3feb40da59bde29&language=es-ES&page=${pagina}`,
            peliculas: [],
            pagina: 0,
            changePage: async function(type){

            if(type === 'next'){
            this.pagina += 1
            }
            else if( type === 'prev'){
            this.pagina -= 1;
            }

            const response = await fetch(`${this.url}?pagina=${this.pagina}`)
            this.peliculas = ( await response.json() ).results

            }

    }

    }
</script>