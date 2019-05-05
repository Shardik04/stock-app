export default {
  SET_ALL_STOCKS: (state, payload) => {
    let data = JSON.parse(payload['data'])

    let uniqueArr = new Map();

    data.forEach(e => {
      let [key, value] = e;
      uniqueArr.set(key, value);
    });

    uniqueArr.forEach(function(value, key) {

      if (state.stocks.length <= 0) {
        let s = {
          name: key,
          price: value,
          update_at: Date.now(),
          last_updated_at: Date.now(),
          background_color: 'white'
        }

        state.stocks.push(s)
      } 
      else {
        let index = state.stocks.findIndex((s) => {
          return s.name == key
        });
        if (index == -1) {
          let s = {
            name: key,
            price: value,
            update_at: Date.now(),
            last_updated_at: Date.now(),
            background_color: 'white'
          }

          state.stocks.push(s);
        } else {
          let sh = state.stocks[index];
          if (sh.name == key) {
            if (sh.price > value) {
              state.stocks[index].price = value;
              state.stocks[index].background_color = 'red'
              state.stocks[index].update_at = Date.now()
              state.stocks[index].last_updated_at = Date.now()
            } else if(sh.price < value) {
              state.stocks[index].price = value;
              state.stocks[index].background_color = 'green'
              state.stocks[index].update_at = Date.now()
              state.stocks[index].last_updated_at = Date.now()
            }
          }
        }
      }
    })
  }
};
