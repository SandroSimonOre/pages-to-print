const btnCalculate = document.getElementById('onepagemode');
btnCalculate.addEventListener('click', calculatePages);

const bntTwoPagesMode = document.getElementById('twopagesmode');
bntTwoPagesMode.addEventListener('click', calculatePages)

const btnCopyFirstGroup = document.getElementById('copy-first-group');
btnCopyFirstGroup.addEventListener('click', copyPagesToPrint);

const btnCopySecondGroup = document.getElementById('copy-second-group');
btnCopySecondGroup.addEventListener('click', copyPagesToPrint);

const lblMensaje = document.getElementById('mensaje');

function calculatePages(e) {
    
    let firstPage = Number(document.getElementById("first-page").value);
    let lastPage = Number(document.getElementById("last-page").value);

    const numberOfPages = lastPage - firstPage + 1;

    if ((lastPage - firstPage + 1) % 2 > 0) lastPage++;
    
    let firstGroupOfPages = [];
    let secondGroupOfPages = [];
    
    switch(e.target.id){
        case 'onepagemode':
            for (let i = firstPage; i <= lastPage; i = i + 2){
        
                firstGroupOfPages.push(i);
                secondGroupOfPages.push(i + 1);
                
            }
            lblMensaje.textContent = `Se necesitarán ${firstGroupOfPages.length} hojas`
            break;

        case 'twopagesmode':
            
            for (let i = firstPage; i <= lastPage; i = i + 4){
        
                firstGroupOfPages.push(i);
                firstGroupOfPages.push(i + 1);
                secondGroupOfPages.push(i + 2);
                secondGroupOfPages.push(i + 3);
                
            }

            lblMensaje.textContent = `Se necesitarán ${firstGroupOfPages.length / 2} hojas`

            break;
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