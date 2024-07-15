const mockQuizzes: Quiz[] = [
    {
        id: "a1b2c3d4",
        question: "คำสั่งในการประกาศตัวแปรในภาษา JavaScript ใช้คำสั่งใด?",
        choices: [
            { id: "e5f6g7h8", choice: "var" },
            { id: "i9j0k1l2", choice: "let" },
            { id: "m3n4o5p6", choice: "const" },
            { id: "q7r8s9t0", choice: "all of the above" }
        ],
        answer: "q7r8s9t0"
    },
    {
        id: "u1v2w3x4",
        question: "ฟังก์ชันใดใน JavaScript ที่ใช้ในการแปลงข้อความเป็นตัวพิมพ์ใหญ่ทั้งหมด?",
        choices: [
            { id: "y5z6a7b8", choice: "toUpperCase()" },
            { id: "c9d0e1f2", choice: "toLowerCase()" },
            { id: "g3h4i5j6", choice: "capitalize()" },
            { id: "k7l8m9n0", choice: "upper()" }
        ],
        answer: "y5z6a7b8"
    },
    {
        id: "o1p2q3r4",
        question: "คำสั่งใดใน Python ที่ใช้ในการเพิ่มสมาชิกเข้าไปใน List?",
        choices: [
            { id: "s5t6u7v8", choice: "append()" },
            { id: "w9x0y1z2", choice: "add()" },
            { id: "a3b4c5d6", choice: "insert()" },
            { id: "e7f8g9h0", choice: "push()" }
        ],
        answer: "s5t6u7v8"
    },
    {
        id: "i1j2k3l6",
        question: "ในภาษา HTML แท็กใดใช้สำหรับสร้างลิงก์?",
        choices: [
            { id: "m5n6o7p8", choice: "<a>" },
            { id: "q9r0s1t2", choice: "<link>" },
            { id: "u3v4w5x6", choice: "<href>" },
            { id: "y7z8a9b0", choice: "<url>" }
        ],
        answer: "m5n6o7p8"
    },
    {
        id: "c1d2e3f4",
        question: "CSS ย่อมาจากอะไร?",
        choices: [
            { id: "g5h6i7j8", choice: "Cascading Style Sheets" },
            { id: "k9l0m1n2", choice: "Computer Style Sheets" },
            { id: "o3p4q5r6", choice: "Creative Style Sheets" },
            { id: "s7t8u9v0", choice: "Colorful Style Sheets" }
        ],
        answer: "g5h6i7j8"
    },
    {
        id: "w1x2y3z4",
        question: "เครื่องมือใดใน Git ที่ใช้ในการรวมการเปลี่ยนแปลงจากสาขาต่าง ๆ?",
        choices: [
            { id: "a5b6c7d8", choice: "merge" },
            { id: "e9f0g1h2", choice: "commit" },
            { id: "i3j4k5l6", choice: "push" },
            { id: "m7n8o9p0", choice: "pull" }
        ],
        answer: "a5b6c7d8"
    },
    {
        id: "q1r2s3t4",
        question: "ภาษาโปรแกรมใดที่นิยมใช้ในการพัฒนาแอปพลิเคชันมือถือสำหรับ iOS?",
        choices: [
            { id: "u5v6w7x8", choice: "Swift" },
            { id: "y9z0a1b2", choice: "Kotlin" },
            { id: "c3d4e5f6", choice: "Java" },
            { id: "g7h8i9j0", choice: "C#" }
        ],
        answer: "u5v6w7x8"
    },
    {
        id: "k1l2m3n4",
        question: "ใน React คำสั่งใดใช้ในการสร้าง component?",
        choices: [
            { id: "o5p6q7r8", choice: "function" },
            { id: "s9t0u1v2", choice: "class" },
            { id: "w3x4y5z6", choice: "component" },
            { id: "a7b8c9d0", choice: "module" }
        ],
        answer: "o5p6q7r8"
    },
    {
        id: "e1f2g3h4",
        question: "ในภาษา SQL คำสั่งใดใช้ในการเลือกข้อมูลจากฐานข้อมูล?",
        choices: [
            { id: "i5j6k7l8", choice: "SELECT" },
            { id: "m9n0o1p2", choice: "UPDATE" },
            { id: "q3r4s5t6", choice: "INSERT" },
            { id: "u7v8w9x0", choice: "DELETE" }
        ],
        answer: "i5j6k7l8"
    },
    {
        id: "y1z2a3b5",
        question: "ภาษาโปรแกรมใดที่นิยมใช้ในการพัฒนาเว็บไซต์ฝั่งเซิร์ฟเวอร์?",
        choices: [
            { id: "c5d6e7f8", choice: "PHP" },
            { id: "g9h0i1j2", choice: "HTML" },
            { id: "k3l4m5n6", choice: "CSS" },
            { id: "o7p8q9r0", choice: "JavaScript" }
        ],
        answer: "c5d6e7f8"
    },
    {
        id: "s1t2u3v4",
        question: "คำสั่งใดใช้ในการแสดงข้อความในคอนโซลในภาษา Python?",
        choices: [
            { id: "w5x6y7z8", choice: "print()" },
            { id: "a9b0c1d2", choice: "echo()" },
            { id: "e3f4g5h6", choice: "console.log()" },
            { id: "i7j8k9l0", choice: "write()" }
        ],
        answer: "w5x6y7z8"
    },
    {
        id: "m1n2o3p4",
        question: "ภาษาโปรแกรมใดที่ใช้สำหรับการวิเคราะห์ข้อมูลและวิทยาการข้อมูล?",
        choices: [
            { id: "q5r6s7t8", choice: "Python" },
            { id: "u9v0w1x2", choice: "JavaScript" },
            { id: "y3z4a5b6", choice: "PHP" },
            { id: "c7d8e9f0", choice: "Ruby" }
        ],
        answer: "q5r6s7t8"
    },
    {
        id: "g1h2i3j4",
        question: "ใน HTML แท็กใดใช้ในการสร้างภาพ?",
        choices: [
            { id: "k5l6m7n8", choice: "<img>" },
            { id: "o9p0q1r2", choice: "<image>" },
            { id: "s3t4u5v6", choice: "<src>" },
            { id: "w7x8y9z0", choice: "<pic>" }
        ],
        answer: "k5l6m7n8"
    },
    {
        id: "a1b2c3d5",
        question: "คำสั่งใดใน JavaScript ที่ใช้ในการตรวจสอบเงื่อนไข?",
        choices: [
            { id: "e5f6g7h8", choice: "if" },
            { id: "i9j0k1l2", choice: "for" },
            { id: "m3n4o5p6", choice: "while" },
            { id: "q7r8s9t0", choice: "switch" }
        ],
        answer: "e5f6g7h8"
    },
    {
        id: "u1v2w3x5",
        question: "ฟังก์ชันใดใน JavaScript ที่ใช้ในการแปลงสตริงเป็นตัวเลข?",
        choices: [
            { id: "y5z6a7b8", choice: "parseInt()" },
            { id: "c9d0e1f2", choice: "toString()" },
            { id: "g3h4i5j6", choice: "Number()" },
            { id: "k7l8m9n0", choice: "parseFloat()" }
        ],
        answer: "y5z6a7b8"
    },
    {
        id: "o1p2q3r5",
        question: "ในภาษา SQL คำสั่งใดใช้ในการเพิ่มข้อมูลใหม่ในฐานข้อมูล?",
        choices: [
            { id: "s5t6u7v8", choice: "INSERT" },
            { id: "w9x0y1z2", choice: "UPDATE" },
            { id: "a3b4c5d6", choice: "SELECT" },
            { id: "e7f8g9h0", choice: "DELETE" }
        ],
        answer: "s5t6u7v8"
    },
    {
        id: "i1j2k3l4",
        question: "ในภาษา CSS คำสั่งใดใช้ในการเปลี่ยนสีพื้นหลังขององค์ประกอบ?",
        choices: [
            { id: "m5n6o7p8", choice: "background-color" },
            { id: "q9r0s1t2", choice: "color" },
            { id: "u3v4w5x6", choice: "background" },
            { id: "y7z8a9b0", choice: "border-color" }
        ],
        answer: "m5n6o7p8"
    },
    {
        id: "c1d2e3f5",
        question: "ภาษาโปรแกรมใดที่เป็นที่รู้จักในการพัฒนาแอปพลิเคชัน Android?",
        choices: [
            { id: "g5h6i7j8", choice: "Kotlin" },
            { id: "k9l0m1n2", choice: "Swift" },
            { id: "o3p4q5r6", choice: "Objective-C" },
            { id: "s7t8u9v0", choice: "Dart" }
        ],
        answer: "g5h6i7j8"
    },
    {
        id: "w1x2y3z5",
        question: "ใน JavaScript คำสั่งใดใช้ในการเรียกใช้ฟังก์ชันหลังจากเวลาที่กำหนด?",
        choices: [
            { id: "a5b6c7d8", choice: "setTimeout()" },
            { id: "e9f0g1h2", choice: "setInterval()" },
            { id: "i3j4k5l6", choice: "delay()" },
            { id: "m7n8o9p0", choice: "wait()" }
        ],
        answer: "a5b6c7d8"
    },
    {
        id: "q1r2s3t5",
        question: "ในภาษา HTML แท็กใดใช้สำหรับสร้างตาราง?",
        choices: [
            { id: "u5v6w7x8", choice: "<table>" },
            { id: "y9z0a1b2", choice: "<tr>" },
            { id: "c3d4e5f6", choice: "<td>" },
            { id: "g7h8i9j0", choice: "<th>" }
        ],
        answer: "u5v6w7x8"
    },
    {
        id: "k1l2m3n5",
        question: "คำสั่งใดใน Git ที่ใช้ในการส่งการเปลี่ยนแปลงไปยังรีโมตรีโพสิทอรี?",
        choices: [
            { id: "o5p6q7r8", choice: "push" },
            { id: "s9t0u1v2", choice: "pull" },
            { id: "w3x4y5z6", choice: "commit" },
            { id: "a7b8c9d0", choice: "clone" }
        ],
        answer: "o5p6q7r8"
    },
    {
        id: "e1f2g3h5",
        question: "ภาษาโปรแกรมใดที่นิยมใช้ในการสร้างการจำลองแบบเซิร์ฟเวอร์?",
        choices: [
            { id: "i5j6k7l8", choice: "Node.js" },
            { id: "m9n0o1p2", choice: "Python" },
            { id: "q3r4s5t6", choice: "Java" },
            { id: "u7v8w9x0", choice: "Ruby" }
        ],
        answer: "i5j6k7l8"
    },
    {
        id: "y1z2a3b4",
        question: "ฟังก์ชันใดใน JavaScript ที่ใช้ในการวนซ้ำในอาร์เรย์?",
        choices: [
            { id: "c5d6e7f8", choice: "forEach()" },
            { id: "g9h0i1j2", choice: "map()" },
            { id: "k3l4m5n6", choice: "filter()" },
            { id: "o7p8q9r0", choice: "reduce()" }
        ],
        answer: "c5d6e7f8"
    },
    {
        id: "s1t2u3v5",
        question: "ในภาษา CSS คำสั่งใดใช้ในการจัดการความกว้างขององค์ประกอบ?",
        choices: [
            { id: "w5x6y7z8", choice: "width" },
            { id: "a9b0c1d2", choice: "height" },
            { id: "e3f4g5h6", choice: "size" },
            { id: "i7j8k9l0", choice: "length" }
        ],
        answer: "w5x6y7z8"
    },
    {
        id: "m1n2o3p5",
        question: "ใน React คำสั่งใดใช้ในการอัพเดตสถานะของ component?",
        choices: [
            { id: "q5r6s7t8", choice: "setState()" },
            { id: "u9v0w1x2", choice: "useState()" },
            { id: "y3z4a5b6", choice: "updateState()" },
            { id: "c7d8e9f0", choice: "changeState()" }
        ],
        answer: "q5r6s7t8"
    },
    {
        id: "g1h2i3j5",
        question: "ภาษาโปรแกรมใดที่นิยมใช้ในการพัฒนาซอฟต์แวร์สำหรับการเรียนรู้ของเครื่อง?",
        choices: [
            { id: "k5l6m7n8", choice: "Python" },
            { id: "o9p0q1r2", choice: "Java" },
            { id: "s3t4u5v6", choice: "C++" },
            { id: "w7x8y9z0", choice: "JavaScript" }
        ],
        answer: "k5l6m7n8"
    },
    {
        id: "a1b2c3d6",
        question: "ใน HTML แท็กใดใช้ในการสร้างหัวข้อ?",
        choices: [
            { id: "e5f6g7h8", choice: "<h1>" },
            { id: "i9j0k1l2", choice: "<title>" },
            { id: "m3n4o5p6", choice: "<header>" },
            { id: "q7r8s9t0", choice: "<head>" }
        ],
        answer: "e5f6g7h8"
    },
    {
        id: "u1v2w3x6",
        question: "ฟังก์ชันใดใน JavaScript ที่ใช้ในการรวมอาร์เรย์?",
        choices: [
            { id: "y5z6a7b8", choice: "concat()" },
            { id: "c9d0e1f2", choice: "join()" },
            { id: "g3h4i5j6", choice: "push()" },
            { id: "k7l8m9n0", choice: "splice()" }
        ],
        answer: "y5z6a7b8"
    },
    {
        id: "o1p2q3r6",
        question: "ในภาษา SQL คำสั่งใดใช้ในการลบข้อมูลจากฐานข้อมูล?",
        choices: [
            { id: "s5t6u7v8", choice: "DELETE" },
            { id: "w9x0y1z2", choice: "DROP" },
            { id: "a3b4c5d6", choice: "REMOVE" },
            { id: "e7f8g9h0", choice: "CLEAR" }
        ],
        answer: "s5t6u7v8"
    },
    {
        id: "i1j2k3l5",
        question: "ในภาษา CSS คำสั่งใดใช้ในการจัดการระยะห่างระหว่างองค์ประกอบ?",
        choices: [
            { id: "m5n6o7p8", choice: "margin" },
            { id: "q9r0s1t2", choice: "padding" },
            { id: "u3v4w5x6", choice: "spacing" },
            { id: "y7z8a9b0", choice: "gap" }
        ],
        answer: "m5n6o7p8"
    }
];

export default mockQuizzes;