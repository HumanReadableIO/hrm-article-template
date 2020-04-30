# Human Readable Magazine - Article Template

This repo contains a skeleton structure of the [Human Readable Magazine](https://humanreadablemag.com)'s article page.

A preview can be found here: <https://hrm-article.netlify.com>

Authors should clone this repo locally (**DO NOT FORK IT**) and edit the contents in `content/articles/article` and `content/authors/author`. Further details about the process below.

Optionally authors can build and run the site locally to preview their article. Further instructions about this below.

We use [markdown-it](https://github.com/markdown-it/markdown-it) with a bunch of plugins (included in this preview site) to render our Markdown. For anything specific to the magazine's format and style, read the [Format Guidelines](https://www.notion.so/humanreadableio/Format-ed4da744e8e54adea8f225126ce64857)

Interested in writing for Human Readable Magazine? Check out our [Writing Guidelines](https://www.notion.so/humanreadableio/Writing-Guidelines-ed8b2b41b39c434396cc2bdd8e398f06) to get an idea of what we are looking for, and if you have some pitches, [send them over to us](mailto:pek@humanreadablemag.com)!

## Setup

1. Clone this repo locally (**DO NOT FORK IT**)
2. Create a private repo on GitHub. Do not initialize it with a README file
3. Change the `origin` remote to the new github private repo
4. Set `origin/master` as upstream and push
5. Invite pek@humanreadablemag.com as a collaborator to your repo (`Settings -> Manage Access -> Invite a collaborator`)

## Writing

The relevant files are as follows:

```
content
 - articles
  - article
   - article.md <-- This file contains the meta data of the article (title, category, etc)
   - bucket
    - hrm-content <-- Any additional files related to the article like images should be placed here
     - article.md   <-- This file contains the main body of the article
 - authors
  - author
   - author.md <-- This file contains the author's details
   - bucket
    - hrm-public
     - author.png <-- Profile picture of the author
```

1. Create a new "Edits" branch
2. Make your changes to the appropriate files
3. Create a pull request from Edits to Master
4. Assign pek@humanreadablemag.com as a reviewer to the pull request
5. Resolve any requested changes
6. Merge pull request and delete branch

## Previewing (Optional)

You will need [node](https://nodejs.org/)

1. Install dependencies `npm install`
2. Run website `npm run dev`
3. Edit files
4. Refresh to see changes
