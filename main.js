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

//polar area chart:
