<template lang="pug">
  <div id="article">
    <div class="container">
      <div>
        <div class="justify-content-center">
        <div class="body">
          <span class="tag">{{ article.category }}</span>
          <h1 class="title">{{ article.title }}</h1>
          <span class="byline">By {{ authors.map(a => a.fullname).join(', ') }}</span>
          <div class="cover">
            <img :src="article.cover" v-if="article.cover != null">
            <small class="text-muted">Illustrated by {{ illustrators.map(a => a.fullname).join(', ') }}</small>
          </div>
          <div class="my-5"></div>
          <div class="article-content container" v-html="body" />
          </div>
        </div>
        <div class="m-lg-5 m-md-5 p-3 border border-light bg-light text-secondary" v-if="hasAccess">
          <h3 class="text-dark">Contributors</h3>
          <b-row class="contributor" v-for="author in contributors" :key="author.name">
            <b-col>
              <img :src="author.pic" width="124" v-if="author.pic != null">
            </b-col>
            <b-col cols="9">
              <h5 class="mt-0 mb-0"><a :href="author.website">{{ author.fullname }}</a></h5>
              <p class="mb-3">{{ author.contribution_type }}</p>
              <p v-html="author.bio" v-if="author.bio != null"/>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fm = require('front-matter');
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
})
    .use(require('markdown-it-highlightjs'))
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-imsize'))
    .use(require('markdown-it-katex'))
    .use(require('markdown-it-front-matter'));       
export default {
  layout: 'article',
  components: {
  },
  head() {
    return {
      title: `${this.article.title} - Human Readable Magazine`,
      meta: [
        { name: 'description', hid: 'description', content: 'A magazine for the everyday inquisitive programmer' },
        // Open Graph
        { property: 'og:title', hid: 'og:title', content: `${this.article.title} - Human Readable Magazine` },
        { property: 'og:site_name', hid: 'og:site_name', content: 'Human Readable Magazine' },
        { property: 'og:description', hid: 'og:description', content: 'A magazine for the everyday inquisitive programmer' },
        { property: 'og:type', hid: 'og:type', content: 'website' },
        // { property: 'og:url', hid: 'og:url', content: `${window.location.href}` },
        { property: 'og:image', itemprop: 'image', hid: 'og:image', content: this.article.cover.url },
        { property: 'og:image:secure_url', itemprop: 'image', hid: 'og:image:secure_url', content: this.article.cover.url },
        { property: 'og:image:height', hid: 'og:image:height', content: '512' },
        { property: 'og:image:width', hid: 'og:image:width', content: '512' },
        // Twitter Card
        { name: 'twitter:card', hid: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', hid: 'twitter:site', content: '@HumanReadableIO' },
        { name: 'twitter:title', hid: 'twitter:title', content: `${this.article.title} - Human Readable Magazine` },
        { name: 'twitter:description', hid: 'twitter:description', content: 'A magazine for the everyday inquisitive programmer' },
        { name: 'twitter:image', hid: 'twitter:image', content: this.article.cover.url },
        { name: 'twitter:image:alt', hid: 'twitter:image:alt', content: 'Human Readable Magazine' }
      ]
    }
  },
  data() {
    return {
      article: {
        title: "",
        cover: {
          url: ""
        }
      },
      issue: "",
      authors: [],
      isLoggedIn: true,
      hasAccess: true,
      illustrators: [],
      contributors: []
    }
  },
  async asyncData(ctx) {
    const articleMeta = await import(`!!raw-loader!~/content/articles/article/article.md`);
    const articleBody = await import('!!raw-loader!~/content/articles/article/bucket/hrm-content/article.md')
    const authorData = await import('!!raw-loader!~/content/authors/author/author.md')
    
    let authorFm = fm(authorData.default)
    const author = authorFm.attributes
    author.bio = md.render(authorFm.body)

    let json = {
      authors: [author]
    }

    return { 
      article: fm(articleMeta.default).attributes,
      body: md.render(articleBody.default),
      authors: json.authors.filter(author => author.contribution_type == "author"),
      illustrators: json.authors.filter(author => author.contribution_type == "illustrator"),
      contributors: json.authors
    }
  }
}
</script>

<style scoped lang="sass">
*
  font-family: Lora, Georgia, 'Times New Roman', Times, serif

h1
  font-size: 52px
  font-family: 'DM Serif Text', sans-serif;

.title
  margin-bottom: 0

.tag
  color: red
  font-weight: bold

.navbar a
  color: darkgray

.navbar a:hover
  color: black

.body
  margin-top: 50px

.cover
  margin-top: 24px
  
.article-content:nth-child(1)

.article-content
  /deep/ pre
    background-color: #322931

  /deep/ figure
    margin-left: auto
    margin-right: auto
    text-align: center

  /deep/ figcaption
    font-style: italic
    width: 900px
    margin-left: auto
    margin-right: auto

  /deep/ blockquote
    margin-left: 100px
    font-style: italic
    border-left: 2px solid lightgray
    padding-left: 20px
    padding-top: 10px
    padding-bottom: 10px

  /deep/ .text-caption
    font-style: italic
    margin-left: auto
    margin-right: auto
    word-break: break-word

  /deep/ p
    word-break: break-word
    font-size: 1.1em
  
  /deep/ p:first-of-type
    font-size: 1.25em
    font-weight: bold

  /deep/ h2
    font-family: 'Libre Baskerville', 'PT Serif', Georgia, 'Times New Roman', Times, serif
    font-weight: bold
    margin-top: 36px
    font-size: 28px;

  /deep/ h3
    font-family: 'Libre Baskerville', 'PT Serif', Georgia, 'Times New Roman', Times, serif
    margin-top: 36px
    font-size: 26px;

@media (min-width: 768px)
  .back-button
    position: relative
    float: left

.cover 
  margin-bottom: 24px

.cover img
  width: 100%
  height: 600px
  object-fit: cover

@media (min-width: 992px)
  .body
    padding-left: 48px
    padding-right: 48px

#feedback-link
  font-size: 32px
  font-family: 'DM Serif Text'
  padding: 30px
  padding-right: 120px
  padding-left: 120px
  margin: 30px
  
#feedback-link span
  display: block
  color: #99FF99
</style>
