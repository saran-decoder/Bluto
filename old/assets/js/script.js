document.addEventListener("DOMContentLoaded", function () {
    var whatsappButtons = document.getElementsByClassName("js-whatsapp");
    var phoneNumber = "+91960031737"; // WhatsApp Business phone number with country code
    var message = "Hello, I would like to know more about your services."; // Initial message sent to user

    Array.prototype.forEach.call(whatsappButtons, function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault;
            var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
            )}`;
            window.open(whatsappUrl, "_blank");
        });
    });
});