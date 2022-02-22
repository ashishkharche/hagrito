---
sidebar_label: Stream API Chain and For Loop
description: Stream API Chain and For Loop.
---

# Stream API Chain and For Loop

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

## They Are The Same

### ScoreCollection.java

```java 
...
public int arithmeticMean() {
    int totalForLoop = 0;
    for (Scoreable score : scores) {
        int scoreable1Score = score.getScore();
        totalForLoop += scoreable1Score;
    }
    return totalForLoop / scores.size();
}
...
```