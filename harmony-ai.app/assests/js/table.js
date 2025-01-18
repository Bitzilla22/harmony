function toggleColumns(activeId, columnNumber) {
    if (window.innerWidth > 550) return; 

    const allColumns = document.querySelectorAll('.table-comparison tbody tr td:nth-child(2), .table-comparison tbody tr td:nth-child(3), .table-comparison tbody tr td:nth-child(4)');
    allColumns.forEach((column) => {
        column.style.display = 'none';
        column.style.width = '0%';
    });

    const activeColumns = document.querySelectorAll(`.table-comparison tbody tr td:nth-child(${columnNumber})`);
    activeColumns.forEach((column) => {
        column.style.display = 'table-cell';
        column.style.width = '50%';
    });

    document.querySelectorAll('#harmony, #twilio, #zoom').forEach((btn) => {
        btn.classList.remove('active');
    });

    document.getElementById(activeId).classList.add('active');
}

function resetStyles() {
    if (window.innerWidth > 550) {
        const allColumns = document.querySelectorAll('.table-comparison tbody tr td');
        allColumns.forEach((column) => {
            column.style.display = ''; 
            column.style.width = ''; 
        });
        document.querySelectorAll('#harmony, #twilio, #zoom').forEach((btn) => {
            btn.classList.remove('active');
        });
        document.getElementById('harmony').classList.add('active');
    }
}

window.addEventListener('resize', resetStyles);

window.addEventListener('load', resetStyles);
