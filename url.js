//to get the right GMT => gmt = +0000
let d = new Date();
let n = d.getTimezoneOffset();
// console.log(n + "min, so in second : " + n * 60)

//let time = new Date(),
//  timestamp = Date(1000) + time.getTime();
//console.log(timestamp);

const data = {
    name: 'toto',
    timestamps: [1508349990, 1508350000, 1508357300]
}

data.duration = timestampToTime(data.timestamps[2] - data.timestamps[0] + n * 60)
data.median = timestampToTime(data.timestamps[1] - data.timestamps[0] + n * 60)

console.log(data)

function buildUrl(data) {
    let urlPattern = 'https://server/record?';

    urlPattern = urlPattern + Object.keys(data)[0] + "=" + data.name + '&' + Object.keys(data)[2] + '=' + data.duration + '&' + Object.keys(data)[3] + "=" + data.median
    if (urlPattern === "https://server/record?name=toto&duration=2h1min50s&median=0h0min10s") {
        return urlPattern
    } else {
        return 'wrong answer'
    }
}

function timestampToTime(ts) {
    // convert unix timestamp to milliseconds
    let ts_ms = (ts) * 1000;
    // initialize new Date object
    let date_ob = new Date(ts_ms)
        // hours as 2 digits (hh)
    let hours = ("0" + date_ob.getHours()).slice(-1);
    // minutes as 2 digits (mm)
    let minutes = ("0" + date_ob.getMinutes()).slice(-1);
    // seconds as 2 digits (ss)
    let seconds = ("0" + date_ob.getSeconds()).slice(-2);
    let time = hours + "h" + minutes + "min" + seconds + "s"
    return time
}

console.log(buildUrl(data))

//"https://server/record?name=toto&duration=2h1min50s&median=0h0min10s"