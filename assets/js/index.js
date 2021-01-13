const phoneFormat = (input) => {
    if (input && !isNaN(input)) {
        if (input.length === 10) document.getElementsByName("phoneNumber")[0].value = input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
}