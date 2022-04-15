const btnCalculate = document.getElementById("calculate");
btnCalculate.addEventListener("click", calculatePages);

const btnCopyFirstGroup = document.getElementById('copy-first-group');
btnCopyFirstGroup.addEventListener('click', copyPagesToPrint);

const btnCopySecondGroup = document.getElementById('copy-second-group');
btnCopySecondGroup.addEventListener('click', copyPagesToPrint);

function calculatePages() {
    const firstPage = Number(document.getElementById("first-page").value);
    //const secondPage = firstPage + 1;
    let lastPage = Number(document.getElementById("last-page").value);

    const numberOfPages = lastPage - firstPage + 1;

    if ((lastPage - firstPage + 1) % 2 > 0) lastPage++;
    let firstGroupOfPages = '';
    let secondGroupOfPages = '';
    let separator = ',';

    for (let i = firstPage; i <= lastPage; i = i + 2){
        
        firstGroupOfPages += i + (i + 1 === lastPage ? '': separator);
        secondGroupOfPages += i + 1 + (i + 1 === lastPage ? '': separator);
        
    }

    const txtFirstGroupOfPages = document.getElementById('first-group');
    txtFirstGroupOfPages.innerText = firstGroupOfPages;

    const txtSecondGroupOfPages = document.getElementById('second-group');
    txtSecondGroupOfPages.innerText = secondGroupOfPages;

}

function copyPagesToPrint(e){
    let idTxtArea = e.target.id.replace('copy-', '');
    navigator.clipboard.writeText(document.getElementById(idTxtArea).value);
}