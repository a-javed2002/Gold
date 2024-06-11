document.addEventListener("DOMContentLoaded", function () {
    console.log('Report loaded');
    

    // Function to print the report
    function printReport() {
        window.print();
    }

    // Add event listener to the print button
    var printButton = document.getElementById('printButton');
    printButton.addEventListener('click', function () {
        printReport();
    });
});