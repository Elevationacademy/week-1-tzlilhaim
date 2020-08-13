// ----------------- Learn -----------------
// 03 For... Of
let companies = ["Studio Ghibli", "HeR Interactive", "Square Enix", "Waves"]

for (let company of companies) {
    console.log("One day I'll work at " + company)
}

// ----------------- Apply -----------------
// Exercise 1
let names = ["Alvin", "Simon", "Theodore"]
let ages = ["9", "8", "6"]

for (let i in names) {
    console.log(names[i] + " is " + ages[i] + " years old.")
}

// Exercise 2
let numbers = [4, 8, 15, 16, 23, 42]
let sum = 0

// Loop to combine all numbers in the array
for (number of numbers) {
    sum += number
}

// Exercise 3
avg = sum / numbers.length

// Exercise 4
let nums = []

// Loop to add numbers 1-100
let n = 1
for (let i = 0; i < 100; i++) {
    nums[i] = n
    n++
}

// Exercise 5
for (num of nums) {
    if (num % 2) {
        console.log(num + " is an odd number.")
    }
}

// Exercise 6
let nums_arr = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for (i in nums_arr) {
    if (nums_arr[i] === 709) {
        console.log("the index of number 709 is " + i)
    }
}

// Exercise 7
const names_arr = ["Ashley", "Donovan", "Lucas"]
const ages_arr = [23, 47, 18]
const people_arr = []

for (i in names_arr) {
    people_arr.push({ 'name': names_arr[i], 'age': ages_arr[i] })
}

// Exercise 8
for (person in people_arr) {
    console.log(people_arr[person].name + " is " + people_arr[person].age + " years old.")
}

// Exercise 9
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

for (post of posts) {
    if (post.id === 2) {
        let badReviewIndex = posts.indexOf(post)
        posts.splice(badReviewIndex, 1)
    }
}

// Exercise 10
const posts_arr = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for (post of posts_arr) {
    if (post.id === 2) {
        for (comment of post.comments) {
            if (comment.id === 3) {
                let postIndex = posts_arr.indexOf(post)
                let commentIndex = post.comments.indexOf(comment)
                posts_arr[postIndex].comments.splice(commentIndex, 1)
            }
        }
    }
}

// Exercise 11
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

// Store dictionary object's keys in array of letters
let letters = Object.keys(dictionary)

for(letter of letters){
    console.group("Words that begin with " + letter + ":")
    for(word of dictionary[letter]){
        console.log(word)   
    }
    console.groupEnd()
}