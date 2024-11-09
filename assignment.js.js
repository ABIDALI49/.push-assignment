let students = [
    {
        firstName : "Ali",
        lastName : "Khan",
        age : "29",
        profileImage : "dasfasdfsadfsadfasdf",
        birthYear : "1998",
        degree : "Computer Science",
        rollNo: 1,
        courses : [
            {
           courseName : "DSA",
           obtainedMarks: "70",
           classroom : "BT10" 
           
        } , 
        {
            courseName : "OOP",
            obtainedMarks: "68",
           classroom : "BT11" 
        } , {
            courseName : "AI",
            obtainedMarks: "82",
           classroom : "BT12" 
        }],
    },
    {
        firstName : "saboor",
        lastName : "Khan",
        age : "29",
        profileImage : "dasfasdfsadfsadfasdf",
        birthYear : "1998",
        degree : "Computer Science",
        rollNo: 1,
        courses : [
            {
           courseName : "DSA",
           obtainedMarks: "67",
           classroom : "BT10" 
        } , 
        {
            courseName : "OOP",
            obtainedMarks: "85",
           classroom : "BT11" 
        } , {
            courseName : "AI",
            obtainedMarks: "92",
           classroom : "BT12" 
        }]
    
    },
    {
        firstName : "Azam",
        lastName : "Khan",
        age : "29",
        profileImage : "dasfasdfsadfsadfasdf",
        birthYear : "1998",
        degree : "Computer Science",
        rollNo: 1,
        courses : [
            {
           courseName : "DSA",
           obtainedMarks: "77",
           classroom : "BT10" 
        } , 
        {
            courseName : "OOP",
            obtainedMarks: "59",
           classroom : "BT11" 
        } , {
            courseName : "AI",
            obtainedMarks: "68",
           classroom : "BT12" 
        }]
    
    },
    {
        firstName : "Azam",
        lastName : "Khan",
        age : "29",
        profileImage : "dasfasdfsadfsadfasdf",
        birthYear : "1998",
        degree : "Computer Science",
        rollNo: 1,
        courses : [
            {
           courseName : "DSA",
           obtainedMarks: "77",
           classroom : "BT10" 
        } , 
        {
            courseName : "OOP",
            obtainedMarks: "59",
           classroom : "BT11" 
        } , {
            courseName : "AI",
            obtainedMarks: "68",
           classroom : "BT12" 
        }]
    
    },
    {
        firstName : "Azam",
        lastName : "Khan",
        age : "29",
        profileImage : "dasfasdfsadfsadfasdf",
        birthYear : "1998",
        degree : "Computer Science",
        rollNo: 1,
        courses : [
            {
           courseName : "DSA",
           obtainedMarks: "77",
           classroom : "BT10" 
        } , 
        {
            courseName : "OOP",
            obtainedMarks: "59",
           classroom : "BT11" 
        } , {
            courseName : "AI",
            obtainedMarks: "68",
           classroom : "BT12" 
        }]
    
    },
]
for(i =0;i<students.length; i++){
    students[i].courses.push({
        courseName: "statistical interfrence",   
        obtainedMarks: "20",           
        classroom: "BT13"                
    });
    for(j =0;j<students[i].courses.length;j++){
        
        // console.log("students:",students[i].firstName)
        // console.log("students:",students[i].lastName)
        // console.log("students:",students[i].age)
        // console.log("students:",students[i].birthYear)
        // console.log("students:",students[i].rollNo)
        console.log("courses:",students[i].courses[j].courseName)
        console.log("courses:",students[i].courses[j].obtainedMarks)
        console.log("courses:",students[i].courses[j].classroom)
    }
}