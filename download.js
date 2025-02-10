function downloadPDF() {
    // Hide elements with .no-print to exclude them from the PDF
    const noPrintElems = document.querySelectorAll(".no-print");
    noPrintElems.forEach(el => el.style.display = 'none');

    // Choose the element to export (exclude the download button by selecting body content)
    const element = document.body;
    const opt = {
        margin: 0.5,
        filename: 'ConnorBrown_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        // Restore the display of the no-print elements
        noPrintElems.forEach(el => el.style.display = '');
    });
}