<template>
    <div class="temp">
        Hello test div
        {{resp_from_api}}
    </div>
</template>

    <script>
    import axios from 'axios'

  //let apiPath = 'https://api.coindesk.com/v1/bpi/currentprice.json'
  let apiPath2 = 'http://localhost:8081/items'

        export default {
            data(){
                return{
                    resp_from_api: []
                }
            },
            props: {
            },
            mounted(){
                axios
                .get(apiPath2)
                     .then(response => (this.resp_from_api = JSON.stringify(response)))
                     .catch(error => console.log(error));
            }
        };
</script>
