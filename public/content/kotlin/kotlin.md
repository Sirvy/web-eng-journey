# Kotlin

A modern, concise and safe alternative to Java.

## Introduction

Use cases
- Backend
- Cross-platform
- Android
- Data analysis

Runs on Java JVM. 

Backend frameworks: 
- Spring (Spring boot, REST, Web apps)
- Ktor (lightweight HTTP API, WebSocket)

Data analysis:
- Kotlin Notebook
- DataFrame - library
- Kandy - data visualisation

## Basics

Main function

```Kotlin
fun main() {
    println("Hello, world!")
}
```

Variables

```Kotlin
const val TITLE = "Hello" // compile-time const
val readOnly = "mememe" // runtime const
var foo = "bar" // variable
var str: String = "pepe"
```

String

```Kotlin
val x = 5
println("There are ${x + 1} values")
```

Types

```
Byte, Short, Int, Long
UByte, UShort, UInt, ULong
Floag, Double
Boolean
Char
String
```

## Collections

Types
- Lists (ordered)
- Sets (non duplicate, unordered)
- Maps (key-value)

List

```Kotlin

val readOnlyList = listOf("1", "2", "4") // read-only
val mutableList: MutableList<String> = mutableListOf("1", "2", "4") // modifieable
val lockedList: List<String> = mutableList // read-only

println(mutableList) // [1, 2, 4]
println("first item is ${readOnlyList[0]}")
println("last item is ${readOnlyList.last()}")

mutableList.add("5")
println("4" in mutableList) // true
```

Set

```Kotlin
val readOnlySet = setOf("1", "3", "5")
val mutableSet: MutableSet<String> = mutableSetOf("1", "3", "5")
```

Map

```Kotlin
val readOnlyMap = mapOf("apple" to 100, "kiwi" to 190)
val mutableMap: MutableMap<String, Int> = mutableMapOf("apple" to 100, "kiwi" to 190)

mutableMap.put("coconut" to 280)

println(readOnlyMap) // {apple=100, kiwi=190}
println(readOnlyMap["apple"]) // 100
println(readOnlyMap.containsKey("kiwi")) // true
println(readOnlyMap.keys) // [apple, kiwi]
println(readOnlyMap.values) // [100, 190]
```

## Conditionals

Kotlin has no `ternary operators`, and works with `if` and `when`. 

If

```Kotlin
if (check) { ... }
else { ... }

println(if (a > b) a else b) // if used as expression
```

When

```Kotlin
val obj = "Hello"

when (obj) {
    "Hello" -> println("hello")
    "hi" -> println("hi")
    else -> println("idk")
}

val temp = 18
val description = when {
    temp < 0 -> "cold"
    temp < 20 -> "warm"
    else -> "hot"
}
println(description) // "warm"
```

Ranges

```Kotlin
1..4 // 1,2,3,4
1..<4 // 1,2,3
4 downTo 1 // 4,3,2,1
1..5 step 2 // 1,3,5
'a'..'d' // a, b, c, d
```

Loops

```Kotlin
for (number in 1..5) { ... }
for (cake in cakes) { ... }
while (cakes < 3) { cakes++ }
do { cakes++ } while (cakes < 3)
```

## Functions

```Kotlin
fun hello() {
    return println("Hello")
}

fun main() {
    hello()
}
```

Named arguments

```Kotlin
fun sum(x: Int, y: Int): Int {
    return x + y
}

fun sum(x: Int, y: Int): Int -> x + y

fun printMsg(message: String, prefix: String = "Info: ") { ... }
```

Lambda expressions
- inside `{ }`

```Kotlin
println({ text: String -> text.uppercase() }("Hello")) // HELLO

val lmd = { text: String -> text.uppercase() }
println(lmd("Hello"))

val upperCaseString: (String) -> String = { text -> text.uppercase() }
val noParamLmd: () -> String = { "kokota" }

val numbers = listOf(-1, 1, 2)
val positives = numbers.filter { x -> x > 0 } // [1, 2]
val doubled = numebrs.map { x -> x*2 } // -2, 2, 4


// Return lambda expression from function
fun toSeconds(time: String): (Int) -> Int = when (time) {
    "minute" -> { value -> value * 60 }
    "second" -> { value -> value }
}

val totalTimeInSeconds = timesInMinutes.map(toSeconds("minute")).sum()
```

Inline functions

// TODO

Operator overloading

// TODO

Builders

// TODO

## OOP

Classes

```Kotlin
class Contact(val id: Int, var email: String = "example@gmail.com") {
    val category: String = "work"

    fun printId() {
        println("Id: ${id}")
    }
}

fun main() {
    val c = Contact(1, "bobika@gmail.com")
    println(c.email)
}
```

Data class
- classes for storing data
- predefined `.toString()`, `.equals()`, `==`, `.copy()`

```Kotlin
data class User(val name: String, val id: Int)
println(User("bobika", 5)) // User(name=Bobika, id=5)
```

Getters and Setters
- On properties

```Kotlin
class Rectangle(val width: Int, val height: Int) {
    val area: Int
        get() = this.width * this.height
}
```

Inheritance

// TODO

Interfaces

// TODO

Visibility 

// TODO

Extensions

// TODO

Sealed classes

// TODO

Generics

// TODO

Nested classes

// TODO

Enum

// TODO

Value classes

// TODO

Delegation

// TODO



## Null safety

Nullable types
- types are *not* nullable by default
  
```Kotlin
var nullableString: String? = null

fun describe(text: String?): String {
    if (text != null) {
        return text
    }
    return "nothing"
}

fun strLen(text: String?): Int? = text?.length

person.company?.address?.country // returns null if any is null

// Elvis operator ?: - default value if null
println(text?.length ?: 0)
```

## Parallel programming

### Asynchronous programming

Threading 

// TODO

Callbacks

// TODO

Futures and promises

// TODO

### Coroutines

// TODO

## Annotations

```Kotlin
annotation class Fancy
```

// TODO

## Reflection

// TODO