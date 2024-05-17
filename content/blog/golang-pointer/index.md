---
title: Understanding Pointers, Structs and Slices in Go
date: '2024-05-17T12:00:00.00Z'
description: 'Have Pointers been a mystery to you? Lets break it down with Go'
---



![Frontend](./gopher.gif)

## Have Pointers Been a Mystery to You? Let's Break It Down with Go!

Hey there, fellow Gophers! Today, we're diving into the magical world of Go, where we'll uncover the mysteries of **pointers**, **structs**, and **slices**. If you've ever felt like pointers are as mysterious as your neighbor's cat, don't worry. By the end of this, you'll be a pointer pro!

### Problem

Let's kick things off with some code. Imagine you're building a student management system, and here's what you've got:

```go
// A struct is a composite data type that groups together zero or more values with different types. 
// Each value is called a field.
type Student struct {
  ID      uuid.UUID  `json:"id"`
  Name    string     `json:"name"`
  ClassID *uuid.UUID `json:"class_id"`
}

type ValidStudent struct {
  ID      *uuid.UUID `json:"id"` // Beware of the pointer here, reason is that i dont want uuid.Nil() value
  Name    string     `json:"name"`
  ClassID *uuid.UUID `json:"class_id"`
}

var (
  classA = uuid.New()
  classB = uuid.New()

  NewStudent = []Student{
    {
      ID:      uuid.New(),
      Name:    "Alice",
      ClassID: &classA, // a pointer to a uuid.UUID value. 
        // The & operator is used to get the memory address of a variable.
    }, {
      ID:      uuid.New(),
      Name:    "Won",
      ClassID: &classB,   
    },
  }
)

func main() {
  validStudents := make([]ValidStudent, 0)
  for _, student := range NewStudent {
    validStudents = append(validStudents, ValidStudent{
      ID:      &student.ID,
      ClassID: student.ClassID,
      Name:    student.Name,
    })
  }

  for _, student := range validStudents {
    fmt.Printf("name: %s\n", student.Name)
    fmt.Printf("class_id: %s\n", student.ClassID)
    fmt.Printf("id: %s\n", student.ID)
  }

    // Insert validStudents to database
    // ...
    // Just a simple program to get the validStudents from list of students and insert to database
}
```

### Output

But when you run the program, you notice that the `ID` field is not being printed correctly. The `ClassID` and `Name` fields are working fine, but the `ID` field is always the same for all students!

*What's going on here?*

```go
name: Alice
class_id: '3532f061-72dc-4003-95db-b9a7330d386b'
id: 'b708d5d8-f625-49a2-8013-30553e340a8b'       // <-- same student_id, why?
---
name: Won
class_id: '475255a0-6dfa-49c5-9ab3-53b06c69174c'
id: 'b708d5d8-f625-49a2-8013-30553e340a8b'      // <-- same student_id, why?
---
```

### Explanation

Alright, folks, let's put on our detective hats and solve this mystery! The issue here is related to how pointers and slices work in Go.

#### Looping Over a Slice

When you take the address of a field in a loop variable, you're getting the **address of a temporary location** in memory that is **reused in each iteration** of the loop. This can lead to unexpected behavior. It's like reusing the same notepad to take notes on different meetings – by the end, all your notes are just a jumble!
```go
for _, student := range NewStudent {  
  // student is the loop variable. 
  // It is a copy of the current slice element
  // its memory address is reused in each iteration of the loop.

  fmt.Printf("id: %p\t", &student) // &student and &student.ID will giving the same address
  fmt.Printf("class_id %p\t", &student.ClassID)
  fmt.Printf("name %p\n", &student.Name)

  // Output:
  // id:         '0xc0000667b0'    <-- b0 the start struct in memory
  // class_id:   '0xc0000667d0'    <-- d0
  // name:       '0xc0000667c0'    <-- c0 the end of struct in memory
  // ---
  // id:         '0xc0000667b0'    <-- notice how the address not change in each iteration 
  // class_id:   '0xc0000667d0'
  // name:       '0xc0000667c0'
}
```

#### Pointers and Loop Variables

This means that all `ID` fields in the `validStudents` slice end up pointing to the same memory address and having the same value, usually the value of the last element in the slice. It's like copying your friend's homework but forgetting to change the name – not a good look!

To fix this issue, you need to create a new variable to store the address of the `ID` field for each `student`. Here's the updated code:
```go
for _, student := range NewStudent {
  id := student.ID
  validStudents = append(validStudents, ValidStudent{
    ID:      &id,
    ClassID: student.ClassID,
    Name:    student.Name,
  })
}
```

With this change, each `ID` field in the `validStudents` slice now points to a unique memory address, and the program works as expected.

### Conclusion

And there you have it! We've journeyed through **structs**, **slices**, and **pointers** in Go, uncovered the mystery behind our pointer issue, and came out wiser on the other side. Remember, taking the address of a field in a loop variable can lead to unexpected behavior, much like asking your cat to fetch – it’s just not gonna work as you expect!

By creating a new variable to store the address of the field, we ensured that each field in the slice points to a unique memory address. 

I hope this explanation helps you understand these concepts better and avoid similar issues in your own code. Happy coding, and may the Go force be with you!