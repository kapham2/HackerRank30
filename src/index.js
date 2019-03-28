document.addEventListener('DOMContentLoaded', () => {

    // Day 5: Loops

    function main5() {
        const n = 2;
    
        for (let i = 1; i <= 10; i++) {
            console.log(`${n} x ${i} = ${i * n}`)
        }

        return "Day 5: Loops"
    }

    div5 = document.querySelector('div[id="5"]');
    div5.innerHTML = main5()
    console.log(div5.innerHTML)
    // 2 x 1 = 2
    // 2 x 2 = 4
    // 2 x 3 = 6
    // 2 x 4 = 8
    // 2 x 5 = 10
    // 2 x 6 = 12
    // 2 x 7 = 14
    // 2 x 8 = 16
    // 2 x 9 = 18
    // 2 x 10 = 20
    printLine()


    // Day 4: Class vs. Instance
    function Person(initialAge) {
        let age;

        if (initialAge < 0) {
            console.log("Age is not valid, setting age to 0.")
            age = 0;
        } else {
            age = initialAge;
        }

        this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console
            if (age < 13) {
                console.log("You are young.");
            }
            else if (age < 18) {
                console.log("You are a teenager.");
            }
            else {
                console.log("You are old.");
            }

        };
        this.yearPasses=function(){
        // Increment the age of the person in here
            age++;
        };
    
    }

    graham = new Person(32)
    graham.amIOld()
    graham.yearPasses()
    graham.yearPasses()
    graham.yearPasses()
    graham.amIOld()
    
    div4 = document.querySelector('div[id="4"]');
    div4.innerHTML = "Day 4: Class vs Instance"
    console.log(div4.innerHTML)
    printLine()

    // Day 3: Intro to Conditional Statements
    function main3() {
        const N = 3
        const isOdd = N % 2 === 1
        if (isOdd || (!isOdd && N >= 6 && N <= 20)) {
            console.log("Weird")
        } else {
            console.log("Not Weird")
        }
        return "Day 3: Intro to Conditional Statements"
    
    }

    div3 = document.querySelector('div[id="3"]');
    div3.innerHTML = main3()
    console.log(div3.innerHTML)
    // => Weird
    printLine()

    // Day 2: Operators
    function solve(meal_cost, tip_percent, tax_percent) {
        let tip = meal_cost * tip_percent / 100
        let tax = meal_cost * tax_percent / 100
        let total = meal_cost + tip + tax
        console.log(Math.round(total))
        return "Day 2: Operators"
    
    }

    div2 = document.querySelector('div[id="2"]');
    div2.innerHTML = solve(12.00, 20, 8)
    console.log(div2.innerHTML)
    // => 15
    printLine()
    

    // Day 1: Data Types
    function main () {
        let i = 4
        let d = 4.0
        let s = "HackerRank "

        // Declare second integer, double, and String variables.
        let i2
        let d2
        let s2

        // Read and save an integer, double, and String to your variables.
        // i2 = parseInt(readLine())
        // d2 = parseFloat(readLine())
        // s2 = readLine()
        i2 = 12
        d2 = 4.0
        s2 = "is the best place to learn and practice coding!"

        // Print the sum of both integer variables on a new line.
        console.log(i + i2)

        // Print the sum of the double variables on a new line.
        console.log((d + d2).toFixed(1))

        // Concatenate and print the String variables on a new line
        // The 's' variable above should be printed first.
        console.log(s + s2)
        return "Day 1: Data Types"
    }

    div1 = document.querySelector('div[id="1"]');
    div1.innerHTML = main()
    console.log(div1.innerHTML)
    // => 16
    // => 8.0
    // => HackerRank is the best place to learn and practice coding!
    printLine()


    // Day 0: Hello, World.
    function processData(inputString) {
        console.log("Hello, World.")
        console.log(inputString)
        return "Day 0: Hello, World."
    }

    const sampleInput = "Welcome to 30 Days of Code!"
    div0 = document.querySelector('div[id="0"]');
    div0.innerHTML = processData(sampleInput)
    console.log(div0.innerHTML)
    // => Hello, World. 
    // => Welcome to 30 Days of Code!
    printLine()


    function printLine() {
        console.log("====================")
    }

})