function showMessage(){
    alert("Thank you for visiting my portfolio!");
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e){
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    const data = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value
    };

    const response = await fetch('https://portfolio-website-135t.onrender.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);

    form.reset();
});