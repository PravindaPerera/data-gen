const fs = require('fs');

function generateYesValues() {
    return Math.floor(Math.random() * (100 - 80 + 1)) + 80;
}

function generateNoValues() {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

function generateShortValues() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function generateLongValues() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

function generateVeryLongValues() {
    return Math.floor(Math.random() * (60 - 20 + 1)) + 20;
}


const data = [];
// generating Impulsive Buyer values
for (let i = 0; i < 250; i++) {
    const row = [];
    for (let j = 1; j < 6; j++) {
        switch (j) {
            case 1:
                row.push(generateNoValues());
                break;
            case 2:
                row.push(generateNoValues());
                break;
            case 3:
                row.push(generateYesValues());
                break;
            case 4:
                row.push(generateYesValues());
                break;
            case 5:
                row.push(generateShortValues());
                break;
            default:
                console.log('Loop Error - generating Impulsive Buyer values');
        }
    }
    data.push(row);
}
// generating Browsing Customer values
for (let i = 0; i < 300; i++) {
    const row = [];
    for (let j = 1; j < 6; j++) {
        switch (j) {
            case 1:
                row.push(generateNoValues());
                break;
            case 2:
                row.push(generateYesValues());
                break;
            case 3:
                row.push(generateYesValues());
                break;
            case 4:
                row.push(generateYesValues());
                break;
            case 5:
                row.push(generateVeryLongValues());
                break;
            default:
                console.log('Loop Error - generating Browsing Customer values');
        }
    }
    data.push(row);
}

// generating Loyal Customer values
for (let i = 0; i < 150; i++) {
    const row = [];
    for (let j = 1; j < 6; j++) {
        switch (j) {
            case 1:
                row.push(generateNoValues());
                break;
            case 2:
                row.push(generateYesValues());
                break;
            case 3:
                row.push(generateYesValues());
                break;
            case 4:
                row.push(generateYesValues());
                break;
            case 5:
                row.push(generateShortValues());
                break;
            default:
                console.log('Loop Error - generating Loyal Customer values');
        }
    }
    data.push(row);
}

// generating Bargain Hunter values
for (let i = 0; i < 300; i++) {
    const row = [];
    for (let j = 1; j < 6; j++) {
        switch (j) {
            case 1:
                row.push(generateYesValues());
                break;
            case 2:
                row.push(generateYesValues());
                break;
            case 3:
                row.push(generateNoValues());
                break;
            case 4:
                row.push(generateYesValues());
                break;
            case 5:
                row.push(generateLongValues());
                break;
            default:
                console.log('Loop Error - generating Bargain Hunter values');
        }
    }
    data.push(row);
}


const filename = 'data.csv';

const csvData = data.map(row => row.join(',')); // Convert data rows to CSV format

const csvContent = csvData.join('\n'); // Join rows with newline characters

fs.writeFile(filename, csvContent, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to CSV file:', err);
        return;
    }

    console.log(`Data has been written to ${filename} successfully.`);
});