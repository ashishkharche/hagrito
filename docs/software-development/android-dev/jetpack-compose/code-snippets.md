---
sidebar_label: "Short Code Snippets Jetpack Compose"
description: "Short Code Snippets Jetpack Compose."
---

# Short Code Snippets Jetpack Compose

### LazyColumn

```kotlin
// ...
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items

@Composable
fun Conversation(messages: List<Message>) {
    LazyColumn {
        items(messages) { message ->
            MessageCard(message)
        }
    }
}

@Preview
@Composable
fun PreviewConversation() {
    ComposeTutorialTheme {
        Conversation(SampleData.conversationSample)
    }
}

  
```

### Surface, Elevation, Padding, Shadow, Typography

```kotlin
// ...
import androidx.compose.material3.Surface

@Composable
fun MessageCard(msg: Message) {
   Row(modifier = Modifier.padding(all = 8.dp)) {
       Image(
           painter = painterResource(R.drawable.profile_picture),
           contentDescription = null,
           modifier = Modifier
               .size(40.dp)
               .clip(CircleShape)
               .border(1.5.dp, MaterialTheme.colorScheme.primary, CircleShape)
       )
       Spacer(modifier = Modifier.width(8.dp))

       Column {
           Text(
               text = msg.author,
               color = MaterialTheme.colorScheme.secondary,
               style = MaterialTheme.typography.titleSmall
           )

           Spacer(modifier = Modifier.height(4.dp))

           Surface(shape = MaterialTheme.shapes.medium, shadowElevation = 1.dp) {
               Text(
                   text = msg.body,
                   modifier = Modifier.padding(all = 4.dp),
                   style = MaterialTheme.typography.bodyMedium
               )
           }
       }
   }
}

  
```

* [Android Compose Tutorial  |  Android Developers](https://developer.android.com/jetpack/compose/tutorial)

## Spacing, padding, height, size

```kotlin
@Composable
fun MessageCard(msg: Message) {
    // Add padding around our message
    Row(modifier = Modifier.padding(all = 8.dp)) {
        Image(
            painter = painterResource(R.drawable.profile_picture),
            contentDescription = "Contact profile picture",
            modifier = Modifier
                // Set image size to 40 dp
                .size(40.dp)
                // Clip image to be shaped as a circle
                .clip(CircleShape)
        )

        // Add a horizontal space between the image and the column
        Spacer(modifier = Modifier.width(8.dp))

        Column {
            Text(text = msg.author)
            // Add a vertical space between the author and message texts
            Spacer(modifier = Modifier.height(4.dp))
            Text(text = msg.body)
        }
    }
}
```

* [Android Compose Tutorial  |  Android Developers](https://developer.android.com/jetpack/compose/tutorial)