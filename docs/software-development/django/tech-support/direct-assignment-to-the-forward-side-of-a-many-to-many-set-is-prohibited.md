---
sidebar_label: "Direct assignment to the forward side of a many-to-many set is prohibited."
description: "Direct assignment to the forward side of a many-to-many set is prohibited.."
---

# Direct assignment to the forward side of a many-to-many set is prohibited.

```py
def handle(self, *args, **options):
        n_posts = options['number']
        # grab a user for each post
        users = User.objects.all().prefetch_related('subs')
        tags = Tag.objects.all()
        print(f" xxx: tags: {tags}")
        out = "Creating {} new posts".format(n_posts)
        self.stdout.write(out)

        for _ in range(n_posts):
            # make sure to grab a user that has subreddit memberships
            poster = random.choice(users)

            while not len(poster.subs.all()):
                poster = random.choice(users)
            # assume you can only post in subreddits you are a member of
            subreddit = random.choice(poster.subs.all())
            post = PostFactory.create(poster=poster, subreddit=subreddit)
            t = random.choice(tags)
            if t not in post.tags.all():
                post.tags.add(t)
            self.stdout.write("\t-- Title: {} ...".format(post.title[0:10]))

```
