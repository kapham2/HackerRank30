document.addEventListener('DOMContentLoaded', () => {

    // Day 12: Inheritance

    class Personn {
        constructor(firstName, lastName, identification) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.idNumber = identification;
        }
        
        printPerson() {
            console.log(
                "Name: " + this.lastName + ", " + this.firstName 
                + "\nID: " + this.idNumber
            )
        }
    }

    class Student extends Personn {

        constructor(firstName, lastName, id, scores) {
            super(firstName, lastName, id)
            this.scores = scores
        }

        calculate() {
            let sum = 0
            const length = this.scores.length
            for (let i = 0; i < length; i++) {
                sum += this.scores[i]
            }
            const average = sum / length
    
            if (average < 40) {
                return "T"
            } else if (average < 55) {
                return "D"
            } else if (average < 70) {
                return "P"
            } else if (average < 80) {
                return "A"
            } else if (average < 90) {
                return "E"
            } else {
                return "O"
            }
        }
    }

    function main12() {
        let firstName = "Heraldo"
        let lastName = "Memelli"
        let id = 8135627
        let numScores = 2
        let testScores = new Array(numScores)
        testScores = [100, 80]
    
        let s = new Student(firstName, lastName, id, testScores)
        s.printPerson()
        s.calculate()
        console.log('Grade: ' + s.calculate())

        return "Day 12: Inheritance"
    }

    div12 = document.querySelector('div[id="12"]');
    div12.innerHTML = main12()
    console.log(div12.innerHTML)
    // Name: Memelli, Heraldo
    // ID: 8135627
    // Grade: O
    printLine()


    // Day 11: 2D Arrays

    function main11() {
        let arr = [ 
            [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0 ],
            [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 0, 2, 4, 4, 0 ],
            [ 0, 0, 0, 2, 0, 0 ],
            [ 0, 0, 1, 2, 4, 0 ] 
        ]
    
        // console.log(arr)
        const rows = arr.length
        const cols = arr[0].length
        let largestSum = -9 * 7
        let sum
    
        for (let j = 0; j < rows - 2; j++) {
            for (let k = 0; k < cols - 2; k++) {
                sum = arr[j][k] + arr[j][k + 1] + arr[j][k + 2]
                sum += arr[j + 1][k + 1]
                sum += arr[j + 2][k] + arr[j + 2][k + 1] + arr[j + 2][k + 2]
                if (sum > largestSum) {
                    largestSum = sum
                }
            }
        }
    
        console.log(largestSum)

        return "Day 11: 2D Arrays"
    }

    div11 = document.querySelector('div[id="11"]');
    div11.innerHTML = main11(13)
    console.log(div11.innerHTML)
    // 19
    printLine()


    // Day 10: Binary Numbers

    function main10(n) {
        let binary = ""
        let num = n
    
        while (num > 0) {
            binary = num % 2 + binary
            num = parseInt(num / 2)
        }
    
        const onesArray = binary.split("0")
    
        let count = 0
        for (let i = 0; i < onesArray.length; i++) {
            const length = onesArray[i].length
            if (length > count) {
                count = length
            }
        }
    
        console.log(count)

        return "Day 10: Binary Numbers"
    }

    div10 = document.querySelector('div[id="10"]');
    div10.innerHTML = main10(13)
    console.log(div10.innerHTML)
    // 2
    printLine()
    
    // Day 9: Recursion

    function factorial(n) {
        if (n === 1) {
            return 1
        }
        else {
            return n * factorial(n - 1)
        }
    } 

    div9 = document.querySelector('div[id="9"]');
    div9.innerHTML = "Day 9: Recursion"
    console.log(factorial(3))
    console.log("Day 9: Recursion")
    // 6
    printLine()


    // Day 8: Dictionaries and Maps

    function processData8(input) {
        const inputArray = input.split("\n")
        const numEntries = inputArray[0]
        const phoneBook = {}
    
        for (let i = 1; i <= numEntries; i++) {
            const entry = inputArray[i].split(" ")
            phoneBook[entry[0]] = entry[1]
        }
    
        for (let j = parseInt(numEntries) + 1; j < inputArray.length; j++) {
            const name = inputArray[j]
            if (phoneBook[name]) {
                console.log(`${name}=${phoneBook[name]}`)
            }
            else {
                console.log("Not found")
            }
        }

        return "Day 8: Dictionaries and Maps"
    } 

    div8 = document.querySelector('div[id="8"]');
    div8.innerHTML = processData8("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry")
    console.log(div8.innerHTML)
    // sam=99912222
    // Not found
    // harry=12299933
    printLine()


    // Day 7: Arrays

    function main7() {
        const arr = "1 4 3 2".split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const reverseArr = []

        for (let i = arr.length - 1; i >= 0; i--) {
            reverseArr.push(arr[i])
        }

        const reverseStr = reverseArr.join(" ")

        console.log(reverseStr)

        return "Day 7: Arrays"
    }

    div7 = document.querySelector('div[id="7"]');
    div7.innerHTML = main7()
    console.log(div7.innerHTML)
    // 2 3 4 1
    printLine()

    // Day 6: Let's Review

    function processData6(input) {
        const inputArray = input.split("\n")
        const testCases = inputArray[0]
        let testCase = 1;

        while (testCase <= testCases) {
            let string = inputArray[testCase]
            let evenIndices = ""
            let oddIndices = ""

            for (let i = 0; i < string.length; i++) {
                if (i % 2 == 0) {
                    evenIndices += string[i]
                }
                else {
                    oddIndices += string[i]
                }
            }

            console.log(evenIndices + " " + oddIndices)
            testCase++
        }

        return "Day 6: Let's Review"
    }

    div6 = document.querySelector('div[id="6"]');
    div6.innerHTML = processData6("2\nHacker\nRank")
    console.log(div6.innerHTML)
    // Hce akr
    // Rn ak
    printLine()


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