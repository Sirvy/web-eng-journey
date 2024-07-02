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

Packages
- `kotlin.*` etc are imported to every kotlin file by default

```Kotlin
package org.example

import org.test.Message as TestMessage
```

Variables

```Kotlin
const val TITLE = "Hello" // compile-time const
val readOnly = "mememe" // runtime const
var foo = "bar" // variable
var str: String = "pepe"

if (a == b) { ... } // structural equality, checks equals()
if (a === b) { ... } // referential equality, check if two references point to the same object
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

Properties

```Kotlin
class Rectangle(val width: Int, val height: Int) {
    val area: Int
        get() = this.width * this.height
        set(value: Int) {
            if (value > 0) field = value
        }
}

class Table {
    private var _table: Map<String, Int>? = null
    public val table: Map<String, Int>
        get() {
            if (_table == null) _table = HashMap()
            return _table ?: throw AssertionError("Set to null by another thread")
        }
}

public class Test {
    lateinit var subject: TestSubject // initializable later
    @SetUp fun setup() {
        subject = TestSubject()
    }
    fun test() {
        if (!subject.isInitialized) error
    }
}
```

Inheritance
- classes are `final` by default, use `open` to make them inheritable
- Base class initialization is done before derived class initialization (base class arguments evaluation is done before that)
  
```Kotlin
// Basic use
open class Base(p: Int)
class Derived(p: Int) : Base(p)

class MyView : View {
    constructor(ctx: Context) : super(ctx)
}

// Overriding methods
open class Shape {
    open fun draw() { ... }
    fun fill() { ... }
}
class Circle() : Shape() {
    override fun draw() { super.draw() }
}
open class Rectangle() : Shape() {
    final override fun draw() { ... } // No more overriding
}

// Overriding properties
open class Shape {
    open val vertexCount: Int = 0
}
class Rectangle : Shape() {
    override val vertexCount = 4
}

// Initialization order example
open class Base(val name: String) {
    init { println("base init") }
    open val size: Int = name.length.also { println("base size init: $it") }
}
class Derived(name: String, val lastName: String) : Base(name.also { println("Base argument initialization") } ) {
    init { println("Derived class initialization") }
    override val size: Int = (super.size + lastName.length).also { println("Derived size init: $it") }
}

// Inner class calling outer class method
class FilledRectangle : Rectangle() {
    override fun draw() { ... }
    inner class Filler {
        fun fill() {
            super@FilledRectangle.draw()
        }
    }
}
```

Interfaces
- methods can contain implementation
- interface can contain properties
- difference between interface and abstract class is that interface cant store state

```Kotlin
interface MyInterface {
    val prop: Int
    val propImp: String
        get() = "foo"

    fun bar()
    fun foo() { println(prop) }
}
class Child : MyInterface {
    override val prop: Int = 29
    override fun bar() { ... }
}

// interface inheritance
interface Named {
    val name: String
}
interface Person : Named {
    val firstName: String
    val lastName: String
    override val name: String
        get() = "$firstName $lastName"
}
data class Employee(
    override val firstName: String,
    override val lastName: String,
    val position: Position
) : Person

// multiple inheritance
interface A {
    fun foo() { ... }
    fun bar() { ... }
}
interface B {
    fun foo() { ... } 
    fun bar() { ... }
}
class Test : A {
    override fun bar() { ... }
}
class FinalTest : A, B {
    override fun foo() {
        super<A>.foo()
        super<B>.foo()
    }
    override fun bar() {
        super<B>.bar()
    }
}
```

Functional interface
- interface with only one abstract method
- can have multiple non-abstract members

```Kotlin
fun interface KRunnable {
    fun invoke()
}

fun interface IntPredicate {
    fun accept(i: Int): Boolean
}
val isEven = object : IntPredicate {
    override fun accept(i: Int): Boolean = i % 2 == 0
}
val isEven = IntPredicate { it % 2 == 0 } // SAM conversion

println("Is 7 even? - ${isEven.accept(7)}")

// Callable reference
fun interface Printer {
    fun print()
}
documentStorage.addPrinter(::Printer)

// type alias
typealias IntPredicate = (i: Int) -> Boolean
val isEven: IntPredicate = { it % 2 == 0 }
println("Is 7 even? - ${isEven(7}")
```

Visibility 
- package members - functions, properties, classes, objects and interfaces declared at top-level inside a package are
    - `public` by default
    - `private` - visible only inside the file
    - `internal` - visible in the same module
    - `protected` - not available for top-level declarations
 - class members
    - `private` - visible inside class
    - `protected` - visible in subclasses
    - `internal` - any client inside this module who sees the declaring class, sees internal members
    - `public` - any client who sees the declaring class, sees public members
  - outer class doesnt see `private` members of its inner classes
  - constructors are `public` by default, sealed classes have `protected` constructors by default

```Kotlin
class Test private constructor(a: Int) {} // hiding the primary constructor
```

Extensions
- to extend a class or interface with new functionality without having to inherit the class or use Decorator
- extensions can be called and treated like functions that had been there the whole time
- there are also extension properties
- extensions dont insert members into classes or modify the classes, they only define new callable function with dot notation on the variable type

```Kotlin
fun MutableList<Int>.swap(idx1: Int, idx2: Int) {
    val tmp = this[idx1]
    this[idx1] = this[idx2]
    this[idx2] = tmp
}
list.swap(0, 2)

class Shape
fun Shape.getName() = "Shape"

fun Any?.toString(): String {
    if (this == null) return null
    return this.toString()
}

val List<Int>.numbaFive: Int = 5 // Error, cant initialize because its not a member!
val <T> List<T>.lastIndex: Int
    get() = size - 1
```

Sealed classes
- All inherited classes are known in compile-time, no other subclass will appear
- use when limited class inheritance is desired, type-safe design is required or when working with closed PAI
- sealed class is always abstract class

```Kotlin
selaed interface Error
sealed class IOError(): Error
class FileError(): IOError
class DBError(): IOError

sealed class Error(val message: String) {
    class NetworkError : Error("Network error")
    class FileError : Error("File error")
    class UnknownError : Error("Unknown error")
}
val errors = listOf(Error.NetworkError(), Error.DatabaseError(), Error.UnknownError())
errors.forEach { println(it.message) }
fun log(e: Error) = when(e) {
    is Error.NetworkError -> println("Network error occured")
    is Error.FileError -> println("File error occured")
    is Error.UnknownError -> println("wht")
    // no else needed
}
```

Generics
- generic types in java are invariant (`List<String>` is not a subtype of `List<Object>`), that's why it needs wildcards (`<? extends E>`)
- contravariant, covariant, invariant
- Transformation: Consumer `in`, Producer `out`
- `Function<*, String>` = `Function<in Nothing, String>`
- `Function<Int, *>` = `Function<Int, out Any?>`
- `Function<*, *>` = `Function<in Nothing, out Any?>`
- default upper bound constraint is `Any?`

```Kotlin
class Box<T>(t: T) {
    var value = t
}
val box: Box<Int> = Box<Int>(1)
val box = Box(1) // if type can be inferred

interface Comparable<in T> {
    operator fun compareTo(other: T): Int
}
fun demo(x: Comparable<Number>) {
    x.compareTo(1.0) // 1.0 has type Double, which is a subtype of Number
    // Thus, you can assign x to a variable of type Comparable<Double>
    val y: Comparable<Double> = x // OK!
}

// Generic functions
fun <T> somethingList(item: T): List<T> { ... }
fun <T> T.basicFunction(): String { ... }
fun <T> MutableList<T>.swap(idx1: Int, idx2: Int) {
    val tmp = this[idx1]
    this[idx1] = this[idx2]
    this[idx2] = tmp
}

fun <T: Comparable<T>> sort(list: List<T>) { ... } // upper bound generic constraint

interface Game<T> {
    override fun save(x: T1 & Any): T1 & Any // Definitely not null, alternative to @NotNull annotation
}
```

Enum
- each enum constant is an object
  
```Kotlin
enum class Direction {
    NORTH, SOUTH, WEST, EAST
}

enum class Color(val rgb: Int) {
    RED(0xFF0000), GREED(0x00FF00), BLUE(0x0000FF)
}

enum class ProtocolState {
    WAITING { ... },
    TALKING { ... }
}

enum class IntArithmetics : BinaryOperator<Int>, IntBinaryOperator {
    PLUS { override fun apply(t: Int, u: Int): Int = t + u }
    TIMES { override fun apply(t: Int, u: Int): Int = t * u }
    override fun applyAsInt(t: Int, u: Int) = apply(t, u)
}

for (color in RGB.entries) println(color.toString())
println("First color is ${RGB.valueof("RED")}")
println(RGB.RED.name) // RED
println(RGB.RED.ordinal) // 0
```

Value classes
- wrapping a value in a class to create more domain-specific type
- inline value classes are optimized and dont introduce as much overhead as an actuall class wrapper would
- inline classes are always `final`

```Kotlin
@JvmInline // for JVM backends
value class Password(private val s: String)

val securePassword = Password("blabla")

@JvmInline
value class Person(private val fullName: String) {
    init { ... }
    constructor(firstName: String, lastName: String) : this("$firstName $lastName") { ... }
    val length: Int
        get() = fullName.length
    fun greet() {
        println("hello $fullName")
    }
}

val nam1 = Person("Kotlin", "Mascot")

interface Printable { ... }
@JvmInline
value class Name(val s: String) : Printable { ... }
```

Object expression
- anonymous objects, similar to JS objects

```Kotlin
val greeting = object {
    val hello = "Hello"
    val hi = "hi"
    override fun toString() = "$hello $hi"
}
println(greeting)

window.addMouseListener(object : MouseAdapter() { override fun mouseClicked(e: MouseEvent) { ... } })
```

Delegation
- composition pattern alternative to inheritance
- use to implement multiple interfaces using existing implementations or to enhance existing implementation

```Kotlin
interface Producer { fun produce(): String }
class ProducerImpl : Producer { override fun produce() = "ProducerImpl" }
class EnhancedProducer(private val d: Producer) : Producer by d {
    override fun produce() = "${delegate.produce()} and enhanced"
}

val producer = ProducerImpl()
println(EnhancedProducer(producer).produce())

class CompositeService : UserService by UserServiceImpl(), MessageService by MessageServiceImpl()
```

Delegated properties

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
