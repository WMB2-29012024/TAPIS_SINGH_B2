import { userData } from "./data.js";



const tableHeadElement = document.getElementById('table-head');
const tableBodyElement = document.getElementById('table-body');



function createTableHeader(tableData){
    // console.log(tableData);
    const tableHeaderKeys = Object.keys(tableData[0]);
    tableHeaderKeys.forEach((HeaderKey) => {
        const tableHeaderKeyElement = document.createElement("th");
        tableHeaderKeyElement.innerText = HeaderKey;
        tableHeadElement.appendChild(tableHeaderKeyElement);
    })
    
    console.log(tableHeaderKeys);


}


function createTableBody(tableData){
    tableData.forEach((rowData) => {
        const tableRowElement = document.createElement("tr");
        const tableRowValue = Object.values(rowData);

        tableRowValue.forEach((descriptionText) => {
            const tableDescriptionElement = document.createElement("td");
            tableDescriptionElement.innerText = descriptionText;
           tableRowElement.appendChild(tableDescriptionElement);
            
        })
        tableBodyElement.appendChild(tableRowElement);
    })
}
createTableHeader(userData);
createTableBody(userData);
