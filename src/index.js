document.addEventListener('DOMContentLoaded', () => {

    // Day 0: Hello, World.
    function processData(inputString) {
        console.log("Hello, World.")
        console.log(inputString)
        return "Day 0: Hello, World."
    }

    const sampleInput = "Welcome to 30 Days of Code!"
    div0 = document.querySelector('div[id="0"]');
    div0.innerHTML = processData(sampleInput)
    // => Hello, World. 
    // => Welcome to 30 Days of Code!

})