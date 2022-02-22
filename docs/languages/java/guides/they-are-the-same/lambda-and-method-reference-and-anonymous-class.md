---
sidebar_label: Lambda and Method Reference and Anonymous Class
description: Lambda and Method Reference and Anonymous Class - They Are The Same.
---

# Lambda and Method Reference and Anonymous Class

## Original

### Scoreable.java

```java
@FunctionalInterface
public interface Scoreable {
    int getScore();
}

```

### ScoreCollection.java

```java
import java.util.*;

public class ScoreCollection {
    private List<Scoreable> scores = new ArrayList<>();

    public void add(Scoreable scoreable) {
        scores.add(scoreable);
    }

    public int arithmeticMean() {
        int total = scores.stream().mapToInt(Scoreable::getScore).sum();
        return total / scores.size();
    }
}
```

### ScoreCollectionTest.java

```java
import org.junit.jupiter.api.Test;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class ScoreCollectionTest {
    @Test
    public void answersArithmeticMeanOfTwoNumbers() {
        // Arrange
        ScoreCollection collection = new ScoreCollection();
        collection.add(() -> 5);
        collection.add(() -> 7);
        collection.add(() -> 6);

        // Act
        int actualResult = collection.arithmeticMean();

        // Assert
        assertThat(actualResult, equalTo(6));
    }
}

```

## They are the same

### ScoreCollectionTest.java

```java
import org.junit.jupiter.api.Test;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class ScoreCollectionTest {
    // For Method Reference
    private static int getScoreMethodReference() {
        return 5;
    }

    @Test
    public void answersArithmeticMeanOfTwoNumbers() {
        // Arrange
        ScoreCollection collection = new ScoreCollection();
        // Method Reference
        collection.add(ScoreCollectionTest::getScoreMethodReference);
        // Anonymous Class
        collection.add(new Scoreable() {
            @Override
            public int getScore() {
                return 7;
            }
        });
        // Lambda
        collection.add(() -> 6);

        // Act
        int actualResult = collection.arithmeticMean();

        // Assert
        assertThat(actualResult, equalTo(6));
    }
}
```

### ScoreCollection.java

```java 
...
    public int arithmeticMean() {
        // Method Reference
        int total = scores.stream().mapToInt(Scoreable::getScore).sum();
        // Lambda
        int totalLambda = scores.stream().mapToInt(scoreable -> scoreable.getScore()).sum();
        // Anonymous Class
        int totalAnonymousClass = scores.stream().mapToInt(new ToIntFunction<Scoreable>() {
            @Override
            public int applyAsInt(Scoreable scoreable) {
                return scoreable.getScore();
            }
        }).sum();
        return total / scores.size();
    }
...
```

