## Add likes to stories

Stage 1:

- Stories => manyToMany => Users join table => "likes"
  generate model for like
  go to migration file of like add reference
  go to like model set up the associate:
  since it;s many to mant like belongs to user / like belongs to story
  set associate for user and story as well

- put some seeds in
  DONE
- make some queries to check everything.
  check you if you can get stories in a query.

Stage 2:

- Include Users in our stories queries. (adding to the endpoints we are already using)
  we will modify get/me end point so we can also return user id and name with the stories.
  we need to add these to every end point that get homepage
  test it with httpie
- Make sure we are getting the new information on the front-end.
- Show number of likes

Stage 3:

- A like button - DONE
- an action to do a request to like a post
- Set up an endpoint to like a story

Stage 4 (further details/challenges not in the live code):

- Show if I liked this post.
- Show usernames of people who liked the post.
- If i liked this post, change the icon to the full heart
- don't show like button to not logged in users (or disable it).
- Add logic to unlike to "/like" endpoint
