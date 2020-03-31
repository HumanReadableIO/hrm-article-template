# Human Readable Magazine - Article Template

This repo contains a skeleton structure of the [Human Readable Magazine](https://humanreadablemag.com)'s article page.

A preview can be found here: <https://hrm-article.netlify.com>

Authors should clone this repo and edit the contents in `content/articles/article` and `content/authors/author`.

Optionally authors can build and run the site locally to preview their article.

## Prerequisites

You will need:

- [node](https://nodejs.org/)

## Instructions

1. Clone the repo

```
git clone git@github.com:HumanReadableIO/hrm-article-template.git
```

2. Install dependencies

```
npm install
```

3. Run website

```
npm run dev
```

4. Edit files

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

5. Refresh

Refresh the website after every change to preview them

## Submission

When you are done, you only need to send us the content folder

## Markdown

We use [markdown-it](https://github.com/markdown-it/markdown-it) with a bunch of plugins (included in this preview site) to render our Markdown. For anything specific to the magazine's format and style, read the [Format Guidelines](https://www.notion.so/humanreadableio/Format-ed4da744e8e54adea8f225126ce64857)

## Write for us

Interested in writing for Human Readable Magazine? Check out our [Writing Guidelines](https://www.notion.so/humanreadableio/Writing-Guidelines-ed8b2b41b39c434396cc2bdd8e398f06) to get an idea of what we are looking for, and if you have some pitches, [send them over to us](mailto:pek@humanreadablemag.com)!