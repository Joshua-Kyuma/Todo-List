exports.getDate = function() {

const today = new Date();

const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
return day = today.toLocaleDateString("en-Us", options);
}

exports.getDay = function () {

const today = new Date();

const options = {
  weekday: 'long'

};
return day = today.toLocaleDateString("en-Us", options);

}
