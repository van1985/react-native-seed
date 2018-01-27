// add optional support for older browsers
import es6promise from 'es6-promise';
es6promise.polyfill();

// require the module
import Frisbee from 'frisbee';

class Api {

  // create a new instance of Frisbee
  static apiFn = new Frisbee({
    baseURI: 'https://itunes.apple.com',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  static get(route,term){
    // log in to our API with a user/pass
    try {

      // now let's get a list of messages filtered by page and limit
      let res = this.apiFn.get(route, {
      });
      
      // handle HTTP or API errors
      if (res.err) throw res.err;
      
      return res;
      
      } catch (err) {
        throw err;
      }
  }

  }
  export default Api