const btnCalculate = document.getElementById("calculate");
btnCalculate.addEventListener("click", calculatePages);

const btnCopyFirstGroup = document.getElementById('copy-first-group');
btnCopyFirstGroup.addEventListener('click', copyPagesToPrint);

const btnCopySecondGroup = document.getElementById('copy-second-group');
btnCopySecondGroup.addEventListener('click', copyPagesToPrint);

function calculatePages() {

    let firstPage = Number(document.getElementById("first-page").value);
    let lastPage = Number(document.getElementById("last-page").value);

    const numberOfPages = lastPage - firstPage + 1;

    if ((lastPage - firstPage + 1) % 2 > 0) lastPage++;
    
    let firstGroupOfPages = [];
    let secondGroupOfPages = [];
    
    for (let i = firstPage; i <= lastPage; i = i + 2){
        
        firstGroupOfPages.push(i);
        secondGroupOfPages.push(i + 1);
        
    }

    const txtFirstGroupOfPages = document.getElementById('first-group');
    txtFirstGroupOfPages.innerText = firstGroupOfPages.join(',');

    const txtSecondGroupOfPages = document.getElementById('second-group');
    txtSecondGroupOfPages.innerText = secondGroupOfPages.join(',');

}

function copyPagesToPrint(e){
    let idTxtArea = e.target.id.replace('copy-', '');
    navigator.clipboard.writeText(document.getElementById(idTxtArea).value);
}