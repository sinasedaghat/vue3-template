import http from '@/plugins/http'

// import { AxiosError, AxiosResponse } from "axios";

class Sample {
  #path: {[key:string]: string} = {
    bcPric: 'bpi/currentprice.json'
  }

  async pric() {
		// return await http.get(this.#path.bcPric) 
    await http.get(this.#path.bcPric)
		.then(async (response) => {
			console.log('response', response)
			return await response.data
		})
		.catch((error) => {
			return error
		})
		.finally(() => {
			console.log('finally')
		})
  }

}

export default new Sample()