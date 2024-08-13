var rowValue;
var delayValue;
var rounds;
var interval_Id;

function rowFunction(){
    let row = document.getElementById('rowinput');
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
    let delay = document.getElementById('delayinput');
    if(delay.value === ""){
        delay.value = 1;
    }
    delayValue = delay.value;
}

// function startFunction(){
//     let totalRows = document.getElementsByClassName('rows');
//     function coloring(rounds){
//         for(elem of rounds){
//             elem.style.background = 'red';
//         }
//     }
//     for(let item of totalRows){
//         let rounds = item.children;
//         for(elem of rounds){
//             setInterval(() => coloring(rounds), 2000);
//         }
        
//     }
// }

function startFunction() {
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
        if(totalRows.length === 1){
            function forSingle(){
                for(let elem of rounds){
                    elem.style.background = 'white';
                }
            }
            function forSingle2(){
                for(let elem of rounds){
                    elem.style.background = 'red';
                }
                setInterval(forSingle, delayValue * 1000);
            }
            
            setInterval(forSingle2, delayValue * 1000);
            
        }
    }

    function changeRow() {

        if (currentRow < totalRows.length) {
            coloringred(totalRows[currentRow]);           
            currentRow++;
        } else {
            currentRow = 0;
        }
    }
    interval_Id = setInterval(changeRow, delayValue * 1000);
}


function stopFunction(){
    clearInterval(interval_Id);
}

