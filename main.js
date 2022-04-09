//creating <div> with jquery
let div = $('<div>Hello World!</div>');

//add div to body of document
let body = $('body');
body.append(div);

//add click listener to div
div.on("click", function(){
    alert("Hello World!");
})

//=====================================================================

//Line Chart:

let div2 = $('<div> </div>');
let canvas = $('<canvas id="myChart"> </canvas>');
div2.append(canvas);

//div2.style.width = "100px"

//append div2 to body
body.append(div2);

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul"
]

let data = {
    labels: months,
    datasets: [{
        label: 'My First dataset',//labeling the chart itself
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

let config = { //configuring the chart in a certain
    type: "line",
    data: data, //data is inside the data object (in above)
    options: {}
};

let lineChart = new Chart(
    document.getElementById('myChart'),
    config
    );


//=====================================================================

//bar area chart:

//create new div for bar chart
let div3 = $('<div> </div>');
let canvas2 = $('<canvas id="barChart"> </canvas>');
div3.append(canvas2);


//append div2 to body
body.append(div3);


//let labels = Utils.months({count: 7});
let data2 = {
  labels: months,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',      
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

let barConfig = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

let barChart = new Chart(
    document.getElementById('barChart'),
    barConfig
);
