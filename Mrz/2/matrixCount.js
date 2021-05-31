"use strict";

var kYFromN = [], kYFromR = [], eFromN = [], eFromR = [], dFromN = [], dFromR = [];

var parTime, consTime;

function main(){
    var p = document.getElementById("p_value").value;
    var m = document.getElementById("m_value").value;
    var q = document.getElementById("q_value").value;
    var less = document.getElementById("if_else").value;
    var minus = document.getElementById("minus").value;
    var multi = document.getElementById("multi").value;
    var plus = document.getElementById("plus").value;
    var abs = document.getElementById("abs").value;
    var n = document.getElementById("n_value").value;

    var aArray = [];
    var bArray = [];
    var eArray = [];
    var cArray = [];

    google.charts.load('current', {'packages':['corechart']});

    var lessAmount = 0, minusAmount = 0, multiAmount = 0, plusAmount = 0, absAmount = 0;

    var newRow, newCell;

    var aTable = document.createElement("table");
    aTable.setAttribute("border","1");
    newRow = aTable.insertRow();
    newRow.innerHTML = "Массив значений A";

    var bTable = document.createElement("table");
    bTable.setAttribute("border","1");
    newRow = bTable.insertRow();
    newRow.innerHTML = "Массив значений B";

    var eTable = document.createElement("table");
    eTable.setAttribute("border","1");
    newRow = eTable.insertRow();
    newRow.innerHTML = "Массив значений E";

    var cTable = document.createElement("table");
    cTable.setAttribute("border","1");
    newRow = cTable.insertRow();
    newRow.innerHTML = "Массив значений C";

    for(var rowIndex = 0; rowIndex < p; rowIndex++){
        newRow = aTable.insertRow();
        var tempArray = [];
        for(var columnIndex = 0; columnIndex < m; columnIndex++){
            newCell = newRow.insertCell(columnIndex);
            tempArray[columnIndex] = Math.random()*2+(-1);
            newCell.innerHTML = tempArray[columnIndex];
        }
        aArray.push(tempArray);
    }

    for(rowIndex = 0; rowIndex < m; rowIndex++){
        newRow = bTable.insertRow();
        tempArray = []
        for(columnIndex = 0; columnIndex < q; columnIndex++){
            newCell = newRow.insertCell(columnIndex);
            tempArray[columnIndex] = Math.random()*2+(-1);
            newCell.innerHTML = tempArray[columnIndex];
        }
        bArray.push(tempArray);
    }

    newRow = eTable.insertRow();
    for(columnIndex = 0; columnIndex < m; columnIndex++){
        newCell = newRow.insertCell(columnIndex);
        eArray[columnIndex] = Math.random()*2+(-1);
        newCell.innerHTML = eArray[columnIndex];
    }

    consTime = -5;
    parTime = -5;
    for (var i = 0; i < p; i++) {
        newRow = cTable.insertRow();
        tempArray.size = 0;
        for (var j = 0; j < q; j++) {
            minusAmount = 0;
            lessAmount = 0;
            absAmount = 0;
            multiAmount = 0;
            plusAmount = 0;
            newCell = newRow.insertCell(j);
            var tempResult = 0;
            for (var k = 0; k < m; k++) {
                var d = 0;
                minusAmount++;
                lessAmount++;
                absAmount += 3;
                if (Math.abs(Math.abs(aArray[i][k]) - Math.abs(bArray[k][j])) < eArray[k]) {
                    multiAmount++;
                    d = aArray[i][k]*aArray[i][k];
                }
                else {
                    multiAmount += 2;
                    d = aArray[i][k]*aArray[i][k] * bArray[k][j];
                }
                plusAmount++;
                tempResult += d;
            }
            consTime += minusAmount * minus + lessAmount * less + multiAmount * multi + plusAmount * plus
                + absAmount * abs;
            parTime += Math.ceil(minusAmount/n)*minus;
            parTime += Math.ceil(lessAmount/n)*less;
            parTime += Math.ceil(multiAmount/n)*multi;
            parTime += Math.ceil(plusAmount/n)*plus;
            parTime += Math.ceil(absAmount/n)*abs;

            tempArray.push(tempResult);
            newCell.innerHTML = tempResult;
        }
        cArray.push(tempArray);
    }

    var kY = consTime/parTime;
    var e = kY/n;
    var D = ((parTime / ((2 * minus * minusAmount + 3 * less * lessAmount + 2 * abs * absAmount +
        multi * 3 * multiAmount + plus * 3 * plusAmount) / (3 * m * p * q))))+1;

    var timeResult = document.createElement("table");
    timeResult.setAttribute("border","1");

    newRow = timeResult.insertRow();
    newCell = newRow.insertCell(0);
    newCell.innerHTML = "При последовательном выполнении всей программы";
    newCell = newRow.insertCell(1);
    newCell.innerHTML = "При параллельном выполнении на" + " " + n + " " + "процессорных элементах";
    newCell = newRow.insertCell(2);
    newCell.innerHTML = "коэффициент ускорения kY";
    newCell = newRow.insertCell(3);
    newCell.innerHTML = "эффективность e";
    newCell = newRow.insertCell(4);
    newCell.innerHTML = "коэффициент расхождения D";

    newRow = timeResult.insertRow();
    newCell = newRow.insertCell(0);
    newCell.innerHTML = consTime;
    newCell = newRow.insertCell(1);
    newCell.innerHTML = parTime;
    newCell = newRow.insertCell(2);
    newCell.innerHTML = kY;
    newCell = newRow.insertCell(3);
    newCell.innerHTML = e;
    newCell = newRow.insertCell(4);
    newCell.innerHTML = D;

    configureFirstChart();
    configureSecondChart();
    configureThirdChart();
    configureForthChart();
    configurePentaChart();
    configureHexChart();

    google.charts.setOnLoadCallback(drawFirstChart);
    google.charts.setOnLoadCallback(drawSecondChart);
    google.charts.setOnLoadCallback(drawThirdChart);
    google.charts.setOnLoadCallback(drawForthChart);
    google.charts.setOnLoadCallback(drawPentaChart);
    google.charts.setOnLoadCallback(drawHexChart);

    document.body.appendChild(aTable);
    document.body.appendChild(bTable);
    document.body.appendChild(eTable);
    document.body.appendChild(cTable);
    document.body.appendChild(timeResult);
}

function configureFirstChart(){
    var p = document.getElementById("p_value").value;
    var q = document.getElementById("q_value").value;
    var less = document.getElementById("if_else").value;
    var minus = document.getElementById("minus").value;
    var multi = document.getElementById("multi").value;
    var plus = document.getElementById("plus").value;
    var abs = document.getElementById("abs").value;

    var aArray = [];
    var bArray = [];
    var eArray = [];

    var lessAmount = 0, minusAmount = 0, multiAmount = 0, plusAmount = 0, absAmount = 0;

    var temporaryArray = [];

    var kY = 0;
    for(var n = 1; n <= 40; n++){
        temporaryArray = [];
        temporaryArray.push(n);
        for(var m = 1; m <= 30; m++){
            for(var rowIndex = 0; rowIndex < p; rowIndex++){
                var tempArray = [];
                for(var columnIndex = 0; columnIndex < m; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                aArray.push(tempArray);
            }

            for(rowIndex = 0; rowIndex < m; rowIndex++){
                tempArray = [];
                for(columnIndex = 0; columnIndex < q; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                bArray.push(tempArray);
            }

            for(columnIndex = 0; columnIndex < m; columnIndex++){
                eArray[columnIndex] = Math.random()*2+(-1);
            }

            consTime = 0;
            parTime = 0;

            for (var i = 0; i < p; i++) {
                for (var j = 0; j < q; j++) {
                    minusAmount = 0;
                    lessAmount = 0;
                    absAmount = 0;
                    multiAmount = 0;
                    plusAmount = 0;
                    for (var k = 0; k < m; k++) {
                        minusAmount++;
                        lessAmount++;
                        absAmount += 3;
                        if (Math.abs(Math.abs(aArray[i][k]) - Math.abs(bArray[k][j])) < eArray[k]) {
                            multiAmount++;
                        }
                        else {
                            multiAmount += 2;
                        }
                        plusAmount++;
                    }
                    consTime += minusAmount * minus + lessAmount * less + multiAmount * multi + plusAmount * plus
                        + absAmount * abs;
                    parTime += Math.ceil(minusAmount/n)*minus;
                    parTime += Math.ceil(lessAmount/n)*less;
                    parTime += Math.ceil(multiAmount/n)*multi;
                    parTime += Math.ceil(plusAmount/n)*plus;
                    parTime += Math.ceil(absAmount/n)*abs;
                }
            }
            kY = consTime/parTime;
            temporaryArray.push(kY);
        }
        kYFromN.push(temporaryArray);
    }
}

function configureSecondChart(){
    var p = document.getElementById("p_value").value;
    var q = document.getElementById("q_value").value;
    var less = document.getElementById("if_else").value;
    var minus = document.getElementById("minus").value;
    var multi = document.getElementById("multi").value;
    var plus = document.getElementById("plus").value;
    var abs = document.getElementById("abs").value;

    var aArray = [];
    var bArray = [];
    var eArray = [];

    var lessAmount = 0, minusAmount = 0, multiAmount = 0, plusAmount = 0, absAmount = 0;

    var temporaryArray = [];

    var kY = 0;
    for(var m = 1; m <= 30; m++){
        temporaryArray = [];
        temporaryArray.push(m);
        for(var n = 1; n <= 40; n++){
            for(var rowIndex = 0; rowIndex < p; rowIndex++){
                var tempArray = [];
                for(var columnIndex = 0; columnIndex < m; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                aArray.push(tempArray);
            }

            for(rowIndex = 0; rowIndex < m; rowIndex++){
                tempArray = [];
                for(columnIndex = 0; columnIndex < q; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                bArray.push(tempArray);
            }

            for(columnIndex = 0; columnIndex < m; columnIndex++){
                eArray[columnIndex] = Math.random()*2+(-1);
            }

            consTime = 0;
            parTime = 0;

            for (var i = 0; i < p; i++) {
                for (var j = 0; j < q; j++) {
                    minusAmount = 0;
                    lessAmount = 0;
                    absAmount = 0;
                    multiAmount = 0;
                    plusAmount = 0;
                    for (var k = 0; k < m; k++) {
                        minusAmount++;
                        lessAmount++;
                        absAmount += 3;
                        if (Math.abs(Math.abs(aArray[i][k]) - Math.abs(bArray[k][j])) < eArray[k]) {
                            multiAmount++;
                        }
                        else {
                            multiAmount += 2;
                        }
                        plusAmount++;
                    }
                    consTime += minusAmount * minus + lessAmount * less + multiAmount * multi + plusAmount * plus
                        + absAmount * abs;
                    parTime += Math.ceil(minusAmount/n)*minus;
                    parTime += Math.ceil(lessAmount/n)*less;
                    parTime += Math.ceil(multiAmount/n)*multi;
                    parTime += Math.ceil(plusAmount/n)*plus;
                    parTime += Math.ceil(absAmount/n)*abs;
                }
            }
            kY = consTime/parTime;
            temporaryArray.push(kY);
        }
        kYFromR.push(temporaryArray);
    }
}

function configureThirdChart(){
    var p = document.getElementById("p_value").value;
    var q = document.getElementById("q_value").value;
    var less = document.getElementById("if_else").value;
    var minus = document.getElementById("minus").value;
    var multi = document.getElementById("multi").value;
    var plus = document.getElementById("plus").value;
    var abs = document.getElementById("abs").value;

    var aArray = [];
    var bArray = [];
    var eArray = [];

    var lessAmount = 0, minusAmount = 0, multiAmount = 0, plusAmount = 0, absAmount = 0;

    var temporaryArray = [];

    var kY = 0, e = 0;
    for(var n = 1; n <= 40; n++){
        temporaryArray = [];
        temporaryArray.push(n);
        for(var m = 1; m <= 30; m++){
            for(var rowIndex = 0; rowIndex < p; rowIndex++){
                var tempArray = [];
                for(var columnIndex = 0; columnIndex < m; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                aArray.push(tempArray);
            }

            for(rowIndex = 0; rowIndex < m; rowIndex++){
                tempArray = [];
                for(columnIndex = 0; columnIndex < q; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                bArray.push(tempArray);
            }

            for(columnIndex = 0; columnIndex < m; columnIndex++){
                eArray[columnIndex] = Math.random()*2+(-1);
            }

            consTime = 0;
            parTime = 0;

            for (var i = 0; i < p; i++) {
                for (var j = 0; j < q; j++) {
                    minusAmount = 0;
                    lessAmount = 0;
                    absAmount = 0;
                    multiAmount = 0;
                    plusAmount = 0;
                    for (var k = 0; k < m; k++) {
                        minusAmount++;
                        lessAmount++;
                        absAmount += 3;
                        if (Math.abs(Math.abs(aArray[i][k]) - Math.abs(bArray[k][j])) < eArray[k]) {
                            multiAmount++;
                        }
                        else {
                            multiAmount += 2;
                        }
                        plusAmount++;
                    }
                    consTime += minusAmount * minus + lessAmount * less + multiAmount * multi + plusAmount * plus
                        + absAmount * abs;
                    parTime += Math.ceil(minusAmount/n)*minus;
                    parTime += Math.ceil(lessAmount/n)*less;
                    parTime += Math.ceil(multiAmount/n)*multi;
                    parTime += Math.ceil(plusAmount/n)*plus;
                    parTime += Math.ceil(absAmount/n)*abs;
                }
            }
            kY = consTime/parTime;
            e = kY/n;
            temporaryArray.push(e);
        }
        eFromN.push(temporaryArray);
    }
}

function configureForthChart(){
    var p = document.getElementById("p_value").value;
    var q = document.getElementById("q_value").value;
    var less = document.getElementById("if_else").value;
    var minus = document.getElementById("minus").value;
    var multi = document.getElementById("multi").value;
    var plus = document.getElementById("plus").value;
    var abs = document.getElementById("abs").value;

    var aArray = [];
    var bArray = [];
    var eArray = [];

    var lessAmount = 0, minusAmount = 0, multiAmount = 0, plusAmount = 0, absAmount = 0;

    var temporaryArray = [];

    var kY = 0, e = 0;
    for(var m = 1; m <= 30; m++){
        temporaryArray = [];
        temporaryArray.push(m);
        for(var n = 1; n <= 40; n++){
            for(var rowIndex = 0; rowIndex < p; rowIndex++){
                var tempArray = [];
                for(var columnIndex = 0; columnIndex < m; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                aArray.push(tempArray);
            }

            for(rowIndex = 0; rowIndex < m; rowIndex++){
                tempArray = [];
                for(columnIndex = 0; columnIndex < q; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                bArray.push(tempArray);
            }

            for(columnIndex = 0; columnIndex < m; columnIndex++){
                eArray[columnIndex] = Math.random()*2+(-1);
            }

            consTime = 0;
            parTime = 0;

            for (var i = 0; i < p; i++) {
                for (var j = 0; j < q; j++) {
                    minusAmount = 0;
                    lessAmount = 0;
                    absAmount = 0;
                    multiAmount = 0;
                    plusAmount = 0;
                    for (var k = 0; k < m; k++) {
                        minusAmount++;
                        lessAmount++;
                        absAmount += 3;
                        if (Math.abs(Math.abs(aArray[i][k]) - Math.abs(bArray[k][j])) < eArray[k]) {
                            multiAmount++;
                        }
                        else {
                            multiAmount += 2;
                        }
                        plusAmount++;
                    }
                    consTime += minusAmount * minus + lessAmount * less + multiAmount * multi + plusAmount * plus
                        + absAmount * abs;
                    parTime += Math.ceil(minusAmount/n)*minus;
                    parTime += Math.ceil(lessAmount/n)*less;
                    parTime += Math.ceil(multiAmount/n)*multi;
                    parTime += Math.ceil(plusAmount/n)*plus;
                    parTime += Math.ceil(absAmount/n)*abs;
                }
            }
            kY = consTime/parTime;
            e = kY/n;
            temporaryArray.push(e);
        }
        eFromR.push(temporaryArray);
    }
}

function configurePentaChart(){
    var p = document.getElementById("p_value").value;
    var q = document.getElementById("q_value").value;
    var less = document.getElementById("if_else").value;
    var minus = document.getElementById("minus").value;
    var multi = document.getElementById("multi").value;
    var plus = document.getElementById("plus").value;
    var abs = document.getElementById("abs").value;

    var aArray = [];
    var bArray = [];
    var eArray = [];

    var lessAmount = 0, minusAmount = 0, multiAmount = 0, plusAmount = 0, absAmount = 0;

    var temporaryArray = [];

    var D = 0;
    for(var n = 1; n <= 40; n++){
        temporaryArray = [];
        temporaryArray.push(n);
        for(var m = 1; m <= 30; m++){
            for(var rowIndex = 0; rowIndex < p; rowIndex++){
                var tempArray = [];
                for(var columnIndex = 0; columnIndex < m; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                aArray.push(tempArray);
            }

            for(rowIndex = 0; rowIndex < m; rowIndex++){
                tempArray = [];
                for(columnIndex = 0; columnIndex < q; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                bArray.push(tempArray);
            }

            for(columnIndex = 0; columnIndex < m; columnIndex++){
                eArray[columnIndex] = Math.random()*2+(-1);
            }

            consTime = 0;
            parTime = 0;

            for (var i = 0; i < p; i++) {

                for (var j = 0; j < q; j++) {
                    minusAmount = 0;
                    lessAmount = 0;
                    absAmount = 0;
                    multiAmount = 0;
                    plusAmount = 0;

                    for (var k = 0; k < m; k++) {
                        minusAmount++;
                        lessAmount++;
                        absAmount += 3;
                        if (Math.abs(Math.abs(aArray[i][k]) - Math.abs(bArray[k][j])) < eArray[k]) {
                            multiAmount++;
                        }
                        else {
                            multiAmount += 2;
                        }
                        plusAmount++;
                    }
                    parTime += Math.ceil(minusAmount/n)*minus;
                    parTime += Math.ceil(lessAmount/n)*less;
                    parTime += Math.ceil(multiAmount/n)*multi;
                    parTime += Math.ceil(plusAmount/n)*plus;
                    parTime += Math.ceil(absAmount/n)*abs;
                }
            }
            D = ((parTime / ((2 * minus * minusAmount + 3 * less * lessAmount + 2 * abs * absAmount +
                multi * 3 * multiAmount + plus * 3 * plusAmount) / (3 * m * p * q))))+1;
            temporaryArray.push(D);
        }
        dFromN.push(temporaryArray);
    }
}

function configureHexChart(){
    var p = document.getElementById("p_value").value;
    var q = document.getElementById("q_value").value;
    var less = document.getElementById("if_else").value;
    var minus = document.getElementById("minus").value;
    var multi = document.getElementById("multi").value;
    var plus = document.getElementById("plus").value;
    var abs = document.getElementById("abs").value;

    var aArray = [];
    var bArray = [];
    var eArray = [];

    var lessAmount = 0, minusAmount = 0, multiAmount = 0, plusAmount = 0, absAmount = 0;

    var temporaryArray = [];

    var D = 0;
    for(var m = 1; m <= 30; m++){
        temporaryArray = [];
        temporaryArray.push(m);
        for(var n = 1; n <= 40; n++){
            for(var rowIndex = 0; rowIndex < p; rowIndex++){
                var tempArray = [];
                for(var columnIndex = 0; columnIndex < m; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                aArray.push(tempArray);
            }

            for(rowIndex = 0; rowIndex < m; rowIndex++){
                tempArray = [];
                for(columnIndex = 0; columnIndex < q; columnIndex++){
                    tempArray[columnIndex] = Math.random()*2+(-1);
                }
                bArray.push(tempArray);
            }

            for(columnIndex = 0; columnIndex < m; columnIndex++){
                eArray[columnIndex] = Math.random()*2+(-1);
            }

            consTime = 0;
            parTime = 0;

            for (var i = 0; i < p; i++) {

                for (var j = 0; j < q; j++) {
                    minusAmount = 0;
                    lessAmount = 0;
                    absAmount = 0;
                    multiAmount = 0;
                    plusAmount = 0;

                    for (var k = 0; k < m; k++) {
                        minusAmount++;
                        lessAmount++;
                        absAmount += 3;
                        if (Math.abs(Math.abs(aArray[i][k]) - Math.abs(bArray[k][j])) < eArray[k]) {
                            multiAmount++;
                        }
                        else {
                            multiAmount += 2;
                        }
                        plusAmount++;
                    }
                    parTime += Math.ceil(minusAmount/n)*minus;
                    parTime += Math.ceil(lessAmount/n)*less;
                    parTime += Math.ceil(multiAmount/n)*multi;
                    parTime += Math.ceil(plusAmount/n)*plus;
                    parTime += Math.ceil(absAmount/n)*abs;
                }
            }
            D = parTime / ((2 * minus * minusAmount + 3 * less * lessAmount + 2 * abs * absAmount +
                multi * 3 * multiAmount + plus * 3 * plusAmount) / (3 * m * p * q))+1;
            temporaryArray.push(D);
        }
        dFromR.push(temporaryArray);
    }
}

function drawFirstChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "n");
    for(var counter = 1; counter <= 30; counter++){
        data.addColumn("number", "n="+counter);
    }
    data.addRows(kYFromN);

    var options = {
        chart: {
            title: 'Коэффициент ускорения Ky',
            subtitle: 'от количества процессорных элементов n'
        },
        width: 1200,
        height: 700
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

function drawSecondChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "r");
    for(var counter = 1; counter <= 40; counter++){
        data.addColumn("number", "r="+counter);
    }
    data.addRows(kYFromR);

    var options = {
        chart: {
            title: 'Коэффициент ускорения Ky',
            subtitle: 'от ранга задачи r'
        },
        width: 1200,
        height: 700
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

    chart.draw(data, options);
}

function drawThirdChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "n");
    for(var counter = 1; counter <= 30; counter++){
        data.addColumn("number", "n="+counter);
    }
    data.addRows(eFromN);

    var options = {
        chart: {
            title: 'Эффективность e',
            subtitle: 'от количества процессорных элементов n'
        },
        width: 1200,
        height: 700
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart3'));

    chart.draw(data, options);
}

function drawForthChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "r");
    for(var counter = 1; counter <= 40; counter++){
        data.addColumn("number", "r="+counter);
    }
    data.addRows(eFromR);

    var options = {
        chart: {
            title: 'Эффективность e',
            subtitle: 'от ранга задачи r'
        },
        width: 1200,
        height: 700
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart4'));

    chart.draw(data, options);
}

function drawPentaChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "n");
    for(var counter = 1; counter <= 30; counter++){
        data.addColumn("number", "n="+counter);
    }
    data.addRows(dFromN);

    var options = {
        chart: {
            title: 'Коэффициент расхождения D',
            subtitle: 'от количества процессорных элементов n'
        },
        width: 1200,
        height: 700
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart5'));

    chart.draw(data, options);
}

function drawHexChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "r");
    for(var counter = 1; counter <= 40; counter++){
        data.addColumn("number", "r="+counter);
    }
    data.addRows(dFromR);

    var options = {
        chart: {
            title: 'Коэффициент расхождения D',
            subtitle: 'от ранга задачи r'
        },
        width: 1200,
        height: 700
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart6'));

    chart.draw(data, options);
}