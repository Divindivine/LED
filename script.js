var rowValue;
var delayValue;
var rounds;
var interval_Id;
var forStart = false;
let rowSub = 0;
let delSub = 0;

function rowFunction(){
    rowSub = 1;
    if(delSub === 1){
        forStart = true;
    }    let row = document.getElementById('rowinput');
    if(row.value === ""){
        row.value = 5;
    }
    rowValue = row.value;
    mainBodyBuilding(rowValue);
}

function mainBodyBuilding(row,delay){
    
    if(delay === undefined || delay === ""){
        delay = 1;
    }

    if(row === ""){
        row = 5;
    }
    let roundOutput = ` <div class="round"></div>`;
    let output = "";
    let rowIncr = 1;

    for(let i = 1; i <= row; i++){
        
        output +=
        `
            <div class="rows">
                ${roundOutput}
            </div>
        `;
        while(rowIncr <= i){
            roundOutput += `
                <div class="round"></div>
                <div class="round"></div>
            `
            rowIncr += 1;
        }
        
    }
    document.querySelector(".main_container").innerHTML = output;

}

function delayFunction(){
    delSub = 1;
    if(rowSub === 1){
        forStart = true;
    }
    let delay = document.getElementById('delayinput');
    if(delay.value === ""){
        delay.value = 1;
    }
    delayValue = delay.value;
}


function startFunction() {
    if(forStart){
        forStart = false;
        var startview = document.getElementById('start_button');
        startview.style.opacity = '0';
        var mainview = document.getElementsByClassName('main_container');
        mainview[0].style.display = 'flex';
        var stopview = document.getElementById('stop_button');
        stopview.style.opacity = '1';
        let totalRows = document.getElementsByClassName('rows');
        let currentRow = 0;

        function coloringred(row) {
        
            for (let rows of totalRows) {
                for (let elem of rows.children) {
                    elem.style.background = 'white';
                }
            }

            rounds = row.children;
            for (let elem of rounds) {
                elem.style.background = 'red';
         
            }
            // if(totalRows.length === 1){
            //     function forSingle(){
            //         for(let elem of rounds){
            //             elem.style.background = 'white';
            //         }
            //     }
            //     function forSingle2(){
            //         for(let elem of rounds){
            //             elem.style.background = 'red';
            //         }
            //         setInterval(forSingle, delayValue * 100);
            //     }
            
            //     setInterval(forSingle2, delayValue * 100);
            
            // }
        }
    
    

        function changeRow() {
            coloringred(totalRows[currentRow]); 
            currentRow = (currentRow + 1) % totalRows.length
            // if (currentRow < totalRows.length) {
            //     coloringred(totalRows[currentRow]);           
            //     currentRow++;
            // } 
            // else {
            //     currentRow = 0;
            // }
        }
        interval_Id = setInterval(changeRow, delayValue * 100);
    }

}
function stopFunction(){
    clearInterval(interval_Id);
    var stopview = document.getElementById('stop_button');
    stopview.style.opacity = '0';
    forStart = true;
    var startview = document.getElementById('start_button');
    startview.style.opacity = '1';
}


