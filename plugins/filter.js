import Vue from 'vue';
Vue.filter('timeFilter', function(value) {
  return formatTime(value);
});

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
  }
}
