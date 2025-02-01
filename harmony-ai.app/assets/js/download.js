function downloadFile(url) {
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = url;
    anchor.download = ""; // Optional: Specify a custom filename here
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
}



const DOWNLOAD_FORM = document.querySelector("#download-form");
DOWNLOAD_FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(DOWNLOAD_FORM);
    const enteredCode = formData.get("code"); // Get the entered Room ID

    // Validate the entered Room ID
    if (enteredCode === "2654782") {
        const fileUrl = "./assets/HarmonyAI.exe"; // Path to the file in your directory
        downloadFile(fileUrl);
    } else {
        // Show an error message if the ID is invalid
        $(".form-download").addClass("error");
        $(".report-err").text("Invalid Room ID");
    }
});




$('.input-download').on('input', function () {
    $(".form-download").removeClass("error");
    $(".report-err").text("");
});
