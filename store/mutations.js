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
          update_at: "Just Now",
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
            update_at: "Just Now",
            last_updated_at: Date.now(),
            background_color: 'white'
          }

          state.stocks.push(s);
        } else {
          let sh = state.stocks[index];
          if (sh.name == key) {
            if (sh.price > value) {
              state.stocks[index].background_color = 'red'
              state.stocks[index].update_at = "Just Now"
              state.stocks[index].last_updated_at = Date.now()
            } else if(sh.price < value) {
              state.stocks[index].price = value;
              state.stocks[index].background_color = 'green'
              state.stocks[index].update_at = "Just Now" 
              state.stocks[index].last_updated_at = Date.now()
            }
          }

          state.stocks.forEach((e, i) => {
            if (i == index) {
              return;
            } else {
              state.stocks[i].update_at = formatTime(state.stocks[i].last_updated_at)
            }
          });

        }
      }
    })

  }
};

const periods = {
  year: 365 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
};

function formatTime(timeCreated) {
  let diff = Date.now() - timeCreated;

  if (diff > periods.year) {
    return Math.round(diff / periods.year) + ' year';
  } else if (diff > periods.month) {
    return Math.round(diff / periods.month) + ' months';
  } else if (diff > periods.day) {
    return Math.round(diff / periods.day) + ' days';
  } else if (diff > periods.hour) {
    return Math.round(diff / periods.hour) + ' hours';
  } else if (diff > periods.minute) {
    return Math.round(diff / periods.minute) + ' minutes';
  } else if (diff > periods.second) {
    return Math.round(diff / periods.second) + ' seconds';
  } else {
    return 'Just now'
  }
}
