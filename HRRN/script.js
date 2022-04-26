
let btn = document.querySelector("button");
const att = [];
const btt = [];
let n = 5;
let i = 0, j = 0, t = 0, sum_bt = 0, count = 0;

btn.onclick = function array() {
    let avgtt = parseInt(0), avgwt = parseInt(0);
    var arriv = document.getElementsByName('at[]');
    var burst = document.getElementsByName('bt[]');

    for (i = 0; i < arriv.length; i++) {
        att[i] = arriv[i];
        btt[i] = burst[i];
    }

    let d = [
        {name:"A", at:att[0], bt:btt[0], ct:0, wt:0, tt:0, completed:0, ntt:0},
        {name:"B", at:att[1], bt:btt[1], ct:0, wt:0, tt:0, completed:0, ntt:0},
        {name:"C", at:att[2], bt:btt[2], ct:0, wt:0, tt:0, completed:0, ntt:0},
        {name:"D", at:att[3], bt:btt[3], ct:0, wt:0, tt:0, completed:0, ntt:0},
        {name:"E", at:att[4], bt:btt[4], ct:0, wt:0, tt:0, completed:0, ntt:0},
    ];
    
    sum_bt = parseInt(d[0].bt.value) + parseInt(d[1].bt.value) + parseInt(d[2].bt.value) + parseInt(d[3].bt.value) + parseInt(d[4].bt.value);
    let temp1

    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {

            if (d[i].at.value > d[j].at.value) {

                temp1 = d[i];
                d[i] = d[j];
                d[j] = temp1;
            }
        }
    }

    t = parseInt(d[0].at.value);
    while (t < sum_bt) {
        let hrr = parseFloat(-9999);
        let temp = 0;
        let loc = 0;
        for (i = 0; i < n; i++) {

            if (parseInt(d[i].at.value) <= t && parseInt(d[i].completed) <= 0) {

                temp = parseFloat(d[i].bt.value + (t - d[i].at.value)) / parseFloat(d[i].bt.value);

                if (hrr < temp) {

                    hrr = parseFloat(temp);

                    loc = parseInt(i);
                }
            }
        }
        t += parseInt(d[loc].bt.value);

        d[loc].wt = t - parseInt(d[loc].at.value) - parseInt(d[loc].bt.value);

        // Calculation of Turn Around Time
        d[loc].tt = t - parseInt(d[loc].at.value);

        // Sum Turn Around Time for average
        avgtt += parseInt(d[loc].tt);

        // Calculation of Normalized Turn Around Time
        d[loc].ntt = parseFloat(d[loc].tt) / parseFloat(d[loc].bt.value);

        // Updating Completion Status
        count = parseInt(count) + parseInt(d[loc].bt.value);
        d[loc].completed = parseInt(count);

        // Sum Waiting Time for average
        avgwt += parseFloat(d[loc].wt);

        // console.log(d[loc].name)
        // console.log(d[loc].completed)

    }

    let temp2;
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {

            if (d[i].completed > d[j].completed) {

                temp2 = d[i];
                d[i] = d[j];
                d[j] = temp2;
            }
        }
        // console.log(d[i].name);
        // console.log(d[i].completed);
    }
    // console.log(d[4].name);
    // console.log(d[4].completed);

    document.getElementById("name1").innerHTML = d[0].name;
    document.getElementById("name2").innerHTML = d[1].name;
    document.getElementById("name3").innerHTML = d[2].name;
    document.getElementById("name4").innerHTML = d[3].name;
    document.getElementById("name5").innerHTML = d[4].name;

    document.getElementById("at1").innerHTML = d[0].at.value;
    document.getElementById("at2").innerHTML = d[1].at.value;
    document.getElementById("at3").innerHTML = d[2].at.value;
    document.getElementById("at4").innerHTML = d[3].at.value;
    document.getElementById("at5").innerHTML = d[4].at.value;

    document.getElementById("bt1").innerHTML = d[0].bt.value;
    document.getElementById("bt2").innerHTML = d[1].bt.value;
    document.getElementById("bt3").innerHTML = d[2].bt.value;
    document.getElementById("bt4").innerHTML = d[3].bt.value;
    document.getElementById("bt5").innerHTML = d[4].bt.value;

    document.getElementById("wait1").innerHTML = d[0].wt;
    document.getElementById("wait2").innerHTML = d[1].wt;
    document.getElementById("wait3").innerHTML = d[2].wt;
    document.getElementById("wait4").innerHTML = d[3].wt;
    document.getElementById("wait5").innerHTML = d[4].wt;

    document.getElementById("turn1").innerHTML = d[0].tt;
    document.getElementById("turn2").innerHTML = d[1].tt;
    document.getElementById("turn3").innerHTML = d[2].tt;
    document.getElementById("turn4").innerHTML = d[3].tt;
    document.getElementById("turn5").innerHTML = d[4].tt;

    document.getElementById("norma1").innerHTML = d[0].ntt;
    document.getElementById("norma2").innerHTML = d[1].ntt;
    document.getElementById("norma3").innerHTML = d[2].ntt;
    document.getElementById("norma4").innerHTML = d[3].ntt;
    document.getElementById("norma5").innerHTML = d[4].ntt;

    document.getElementById("avgWait").innerHTML = "Average waiting time: " + parseFloat(avgwt) / 5;
    document.getElementById("avgTurn").innerHTML = "Average Turn Around time: " + parseFloat(avgtt) / 5;
}