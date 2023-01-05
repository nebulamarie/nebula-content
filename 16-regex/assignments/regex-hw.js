// 1.   Write a function that tests if a string contains the string of '123' within it

let string = 0123456789
RegExp[012345678911142678943]

[
  [
    {
      "content": "1",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 1,
      "endPos": 2
    }
  ],
  [
    {
      "content": "2",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 2,
      "endPos": 3
    }
  ],
  [
    {
      "content": "3",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 3,
      "endPos": 4
    }
  ],
  [
    {
      "content": "1",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 10,
      "endPos": 11
    }
  ],
  [
    {
      "content": "1",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 11,
      "endPos": 12
    }
  ],
  [
    {
      "content": "1",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 12,
      "endPos": 13
    }
  ],
  [
    {
      "content": "2",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 14,
      "endPos": 15
    }
  ],
  [
    {
      "content": "3",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 20,
      "endPos": 21
    }
  ]
]

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
let string = "watch a chess match"
RegExp(?(?=...)a|([c]))

[
  [
    {
      "content": "a",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 1,
      "endPos": 2
    },
    {
      "content": "",
      "isParticipating": false,
      "groupNum": 1,
      "startPos": -1,
      "endPos": -1
    }
  ],
  [
    {
      "content": "a",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 6,
      "endPos": 7
    },
    {
      "content": "",
      "isParticipating": false,
      "groupNum": 1,
      "startPos": -1,
      "endPos": -1
    }
  ],
  [
    {
      "content": "a",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 15,
      "endPos": 16
    },
    {
      "content": "",
      "isParticipating": false,
      "groupNum": 1,
      "startPos": -1,
      "endPos": -1
    }
  ],
  [
    {
      "content": "c",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 17,
      "endPos": 18
    },
    {
      "content": "c",
      "isParticipating": true,
      "groupNum": 1,
      "startPos": 17,
      "endPos": 18
    }
  ]
]


// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'
let string = "However, a name can be provided with a function expression. 
"Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces."
RegExp(function)

[
  [
    {
      "content": "function",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 39,
      "endPos": 47
    },
    {
      "content": "function",
      "isParticipating": true,
      "groupNum": 1,
      "startPos": 39,
      "endPos": 47
    }
  ],
  [
    {
      "content": "function",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 89,
      "endPos": 97
    },
    {
      "content": "function",
      "isParticipating": true,
      "groupNum": 1,
      "startPos": 89,
      "endPos": 97
    }
  ],
  [
    {
      "content": "function",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 159,
      "endPos": 167
    },
    {
      "content": "function",
      "isParticipating": true,
      "groupNum": 1,
      "startPos": 159,
      "endPos": 167
    }
  ]
]

// 4.   Write a function that checks if all characters in a string are lowercase letters
let string = "Marie"
[[:lower:]]
[
  [
    {
      "content": "a",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 1,
      "endPos": 2
    }
  ],
  [
    {
      "content": "r",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 2,
      "endPos": 3
    }
  ],
  [
    {
      "content": "i",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 3,
      "endPos": 4
    }
  ],
  [
    {
      "content": "e",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 4,
      "endPos": 5
    }
  ]
]

// 5.   Write a function that checks if a string has an uppercase letter

let string = "Marie"
[[:upper:]]
[
  [
    {
      "content": "M",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 0,
      "endPos": 1
    }
  ]
]
// 6.   Write a function that checks if a string contains a dash or underscore 

let string = "mepps-1115@gmail.com"
RegExp [[:punct:]]
[
  [
    {
      "content": "-",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 5,
      "endPos": 6
    }
  ],
  [
    {
      "content": "@",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 10,
      "endPos": 11
    }
  ],
  [
    {
      "content": ".",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 16,
      "endPos": 17
    }
  ]
]

// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
let string = "mepps-1115@gmail.com"
RegExp \.+com
[
  [
    {
      "content": ".com",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 16,
      "endPos": 20
    }
  ]
]

// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning

let string = "https://www.youtube.com"
RegExp (http|https)+[[[:punct:]]
[
  [
    {
      "content": "https:",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 0,
      "endPos": 6
    },
    {
      "content": "https",
      "isParticipating": true,
      "groupNum": 1,
      "startPos": 0,
      "endPos": 5
    }
  ]
]


// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not

let string = "Marie"

RegExp ^[[:upper:]]
[
  [
    {
      "content": "M",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 0,
      "endPos": 1
    }
  ]
]
// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
let string = '  string  '
RegExp [^ and ']+(ng)
[
  [
    {
      "content": "string",
      "isParticipating": true,
      "groupNum": 0,
      "startPos": 3,
      "endPos": 9
    },
    {
      "content": "ng",
      "isParticipating": true,
      "groupNum": 1,
      "startPos": 7,
      "endPos": 9
    }
  ]
]
