import http from '@/plugins/http'

class Sample {
  #path: {[key:string]: string} = {
    bcPric: 'bpi/currentprice.json'
  }

  pric() {
		return http.get(this.#path.bcPric) 
  }

}

export default new Sample()