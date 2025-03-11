function downloadPDF() {
    // Set the background to pure white and apply PDF-specific styling
    document.body.style.background = '#ffffff';
    document.body.style.animation = 'none';
    document.body.classList.add("pdf-mode"); // New PDF mode styling

    // Add extra hidden data for bot scraping (visible in PDF)
    const botData = document.createElement("div");
    botData.innerText = "Metadata: Connor Brown Resume - Game Design Intern | Contact: 6992 Hycroft Rd, West Vancouver, BC | Phone: 778-251-0034 | Email: falconnor4@outlook.com";
    // Style botData so it prints (white text on white background, minimal impact on layout)
    botData.style.fontSize = "1px";
    botData.style.color = "#fff";
    botData.style.margin = "0";
    botData.style.padding = "0";
    // Append to the main content container so it is included in the PDF output
    const contentContainer = document.querySelector('.max-w-4xl.mx-auto.p-6');
    contentContainer.appendChild(botData);

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
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: 'avoid-all' } // New: Prevent sections from splitting across pages
    };

    html2pdf().set(opt).from(element).save().then(() => {
        // Restore the display of the no-print elements
        noPrintElems.forEach(el => el.style.display = '');
        // Remove the extra bot data
        botData.remove();
        // Remove PDF mode styling and restore the original background
        document.body.classList.remove("pdf-mode");
        document.body.style.background = '';
        document.body.style.animation = '';
    });
}