1. Why did you reference Songs in the Playlist instead of embedding them?

I referenced songs in the Playlist instead of embedding them because songs are independent entities that can exist in multiple playlists.

If I embedded full song objects inside a playlist:

The same song data would be duplicated in many playlists

Updating a song (e.g., title or duration) would require updating it everywhere

Data would become inconsistent over time

By referencing songs using their ObjectIds:

A single song can belong to multiple playlists

Song data is stored only once

Playlists stay lightweight and efficient

Changes to a song automatically reflect everywhere it is used

This approach follows MongoDB’s best practice of referencing for reusable, shared data.

2. Why did you reference the Artist in the Song model?

I referenced the artist in the Song model because an artist is a shared entity across many songs.

Each song belongs to one artist, but an artist can have:

Multiple songs

Multiple albums

If artist data were embedded inside each song:

Artist information would be duplicated

Updating artist details (e.g., name or genre) would be difficult

Data consistency would be harder to maintain

By using a reference:

Artist data is centralized in one place

Songs stay smaller and cleaner

Relationships can be easily populated using Mongoose

This design reflects a one-to-many relationship and keeps the database normalized.