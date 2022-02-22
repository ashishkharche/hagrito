---
sidebar_label: Supplier`<`String`>` messageSupplier vs String message
description: Supplier`<`String`>` messageSupplier vs String message.
---

# Supplier`<`String`>` messageSupplier vs String message

## Method Signature

```java
public static void assertNotNull(Object actual)

public static void assertNotNull(Object actual, String message)

public static void assertNotNull(Object actual, Supplier`<`String`>` messageSupplier)
  
```

## Explanation

*   `assertNotNull(Object actual)` - It assert whether actual value is **not null**.

*   `assertNotNull(Object actual, String message)` - It assert whether actual value is **not null**. In case, if the actual value is **null** then test case will fail with the provided message.

*   `assertNotNull(Object actual, Supplier`<`String`>` messageSupplier)` - It assert whether actual value is **not null**. In case, if the actual value is **null** then test case will fail with the provided message through Supplier function. The main advantage of using Supplier function is that it lazily evaluates to String only when the test case fails.

## Usage

```java 
package io.educative.junit5;

import static org.junit.jupiter.api.Assertions.*;

import java.util.function.Supplier;
import org.junit.jupiter.api.Test;

class StringUtilsTest2 {

	// ******** assertNotNull Example - Start **********
	@Test
	void givenNullString_whenReverseIsCalled_thenNullIsReturned() {
		String actual = StringUtils.reverse((null));
		String message = "Actual String should not be null !!! ";

		// assertNotNull with message
		assertNotNull(actual, message);
	}
	
	@Test
	void givenNullString_whenReverseIsCalled_thenNullIsReturned2() {
		String actual = StringUtils.reverse((null));
		Supplier`<`String`>` messageSupplier = () -`>` "Actual String should not be null !!! ";
		
		// assertNotNull with Java 8 MessageSupplier
		assertNotNull(actual, messageSupplier);
	}
	
	@Test
	void givenEmptyString_whenReverseIsCalled_thenEmptyStringIsReturned() {
		String actual = StringUtils.reverse((""));
		
		// assertNotNull without message
		assertNotNull(actual);
	}
	
	@Test
	void givenNonNullString_whenReverseIsCalled_thenReversedStringIsReturned() {
		String actual = StringUtils.reverse(("ABCD"));
		
		// assertNotNull without message
		assertNotNull(actual);
	}
	
	// ******** assertNotNull Example - End **********
}
```

[assertNotNull() method - Java Unit Testing with JUnit 5](https://www.educative.io/courses/java-unit-testing-with-junit-5/gx7wZzWn5Vj)