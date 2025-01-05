const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

// total-distance?distance1=10&distance2=20
app.get('/total-distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

// total-time?time1=10&time2=20&time3=30
app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);

  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

// total-average?totalDistance=100&totalTime=30
app.get('/total-average', (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);

  let totalAverage = totalDistance / totalTime;
  res.send(totalAverage.toString());
});

// eta?totalSpeed=100&totalTime=30
app.get('/eta', (req, res) => {
  let totalSpeed = parseFloat(req.query.totalSpeed);
  let totalTime = parseFloat(req.query.totalTime);

  let eta = totalSpeed / totalTime;
  res.send(eta.toString());
});

// total-calories?ditsance1=30&ditsance2=20&caloriesPerMinute=10
app.get('/total-calories', (req, res) => {
  let ditsance1 = parseFloat(req.query.ditsance1);
  let ditsance2 = parseFloat(req.query.ditsance2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);

  let totalCalories = (ditsance1 + ditsance2) * caloriesPerMinute;
  res.send(totalCalories.toString());
});

// interest-earned?principal=1000&rate=5&time=2
app.get('/interest-earned', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);

  let interestEarned = (principal * rate * time) / 100;
  res.send(interestEarned.toString());
});

// check-number?number=10
app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'Positive';
  } else {
    result = 'negative';
  }

  res.send('Number is ' + result);
});

// check-even-odd?number=10
app.get('/check-even-odd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 === 0) {
    result = 'even';
  } else {
    result = 'Odd';
  }

  res.send('Number is ' + result);
});

// check-login?isLoggedIn=true
app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User Logged in';
  } else {
    result = 'User Not Logged in';
  }
  res.send(result);
});

// check-discount?age=70
app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = 'User is eligible for discount';
  } else {
    result = 'User is not eligible for discount';
  }
  res.send(result);
});

// check-number-type?number=70
app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'positive';
  } else if (number < 0) {
    result = 'negative';
  } else {
    result = 'zero';
  }
  res.send('Number is ' + result);
});

// check-temprature?temprature=70
app.get('/check-temprature', (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) {
    result = 'cold';
  } else if (temperature < 25) {
    result = 'warm';
  } else {
    result = 'hot';
  }
  res.send('Temprature is ' + result);
});

//welcome
function getWelcomeMessage() {
  return 'Welcome to our service!';
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}

// greet?username=John
app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  console.log(password.length);
  if (password.length > 15) {
    return 'password is strong';
  } else {
    return 'password is weak';
  }
}

// check-password?password=fdkjhgknfbdfknfgkf1
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

// sum?num1=10&num2=20
app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  res.send(calculateSum(num1, num2));
});

function CheckSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === 'true') {
    return username + 'is subscribed';
  } else {
    return username + 'not subscribed';
  }
}

// subscription-status?username=John&num2=20
app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;

  res.send(CheckSubscriptionStatus(username, isSubscribed));
});

function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

// discounted-price?price=100&discount=10
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(calculateDiscountedPrice(price, discount));
});

function getGreeting(name, age, gender) {
  return 'Hello, ' + name + ' ! You are a ' + age + ' year old ' + gender + '.';
}

// personalized-greeting?name=John&age=25&gender=male
app.get('/personalized-greeting', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;

  res.send(getGreeting(name, age, gender));
});

function calculateFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

// discounted-price?price=100&discount=10&tax=5
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(calculateFinalPrice(price, discount, tax));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
