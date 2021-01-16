# About Next.js framework  

## Why need next.js

###### ⚠ Seach robots can't see (index, ranking) content of pages of single page app. For this used next.js. 
###### ⚠ in nex.js no have  entry point. 
###### ⚠ no have html.
###### ⚠ Ranking - it's special algorithms with which search robot determine place of a site. 

<hr>

##  1. Routeing we create throght *file system* 
  * How run next app ?
    * npm run dev
      <br>
        this command generate .next folder (here stored static files)

  ## 2. For create 1st page, we must create in root app  *pages*   folder (⚠ pages is rese rved word).

* For first we will create first page.
    
```
📁 pages
      index.js // in this file we will create react component
```
 
```javascript
//import React from 'react'☝❌
export defualt function Index() {
  return <h1>Hello Next.js</h1>
}
```

* Example 1 -  How work routing in next.js

```
📁 pages
    about.js //export default function K() {return <h2>Hello</h2>}
      routeing accurd with file name
      ⚠☝ localHost:3000/about
      
```  

<hr>

## 3. Routeing and Naviagtion

### Routing of next work based on file-system.

App whcih will show post of lists
  * posts - for this we create in pages folder posts.js file. 
  <br>
  ⚠ But how use dynamic parameter (id) - for open special post.
  *  *posts/223* - how open separate posts ? <- how create this url
  How implement routing with dynamic parameter.
 
  ```
⚠  pages/posts.js - server render react in give it us.
 
├── pages
├─── posts 👈 we must create posts folder
│     └── [id].js 👈 open post with dynamic paramter 
│   posts.js 👈 open all posts
  ```


  ####   from next/router
  ```js

  export default function Post() {
    const router = useRouter()
    console.log('router', router);
    console.log('router', router.query.id);//in here stored dynamic param (di === [id])
.jd
    return (
      <h2>
        Post with dynamic paramter
      </h2>
    )
  }
```

  ![what is useRouter](https://i.imgur.com/v1Tzn93.png.jpg)
  ![what is useRouter](https://i.imgur.com/efba38v.png )

  
  
  ```
⚠  pages/posts/index.js 
⚠  pages/posts/[id].js - squate brackets used for dynamic params.


 
├── pages
├─── posts 
│     └── posts.js //localHost:3000/about/about 👉 😯
│     └── index.js //localHost:3000/about 👉 😎 grouping rotues
  ```

<hr>

## 4.  When change page ocurd reload of page

####  We can dyncmaicly display content *(using Link component)*
#### how prevent realod of page

```js
export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <p><a href="/about">About</a></p>
      <p><a href="/posts">Posts</a></p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quidem corporis consequuntur accusamus ipsum deserunt at. Qui nesciunt quis saepe. </p>
    </div>
  )
}

```

![when click on some link occurd realod of page](https://i.imgur.com/kQ6aSR1.png)

For prevent realoding we can use special component of next

```js
import Link from "next/link";

// #

      <p><Link href="/about">Aout</Link></p>
      <p><Link href="/posts">Posts</Link></p> 
```

<hr>

## 5. Navigation with program

* Without Link component we can use *Router.push*

```js
import Router from 'next/router';

export default function About() {

  //Router is special object for navigate programmatically
  const handleGoBack = () => {
    Router.push('/');
  }
  return (
    <>
      <h1>About page</h1>

      <button onClick={handleGoBack}>Go back to home</button>
    </>
  )
}
```

<hr>

## 6. SEO + META (Head componetn of next)

### How dynamicly change of title with next ?

### For this used special next component Head

* pages/index.js - Content of this page added in body tag. 
  * We can use Head next component. 


```js

import Link from "next/link";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Home Hello</title>
      </Head>

      <div>
        <h1>Hello Next.js</h1>
        <p><Link href="/about">Aout</Link></p>
        <p><Link href="/posts">Posts</Link></p>
        <p>Lorem ipsum dolor sit</p>
      </div>
    </>
  )
}


```

![add title with next](https://i.imgur.com/MosDyfu.png)


* In Head component we can add meta tags


### Add meta tags for special page

```js
import { useRouter } from 'next/router'
import Head from "next/head";

export default function Post() {

  const router = useRouter()
  console.log('router', router);
  return (
    <>
      <Head>
        <title>Post page | id of post</title>
        {/** Define keywords for search engines: */}
        <meta name="keywords" content="post, postId" />
        <meta name="description" content="This page show special post"></meta>

      </Head>
      <h2>
        Post with dynamic paramter {router.query.id}
      </h2>
    </>
  )
}
```


#### 👉⚠☝ *For add universal meta tags for all pages we must use Layouts*. 



<hr>


## 7. Layouts

* ###  *Layout -  it's some structure that allows combine pages.*


* How create layouts in next ?
  * For this in the main level (root folder of app) we can createa new folder.
```
 For implement layots
  we cant create components/layouts (any name) folder
├── components
├─── posts 
│     └── MainLayout.js   
  ```



  <hr>


## 8. Styles, Modules, SASS

* How add fonts ?

* <span style="color: green;">By defalult next.js generate own structure for overide that strucrre we can use document.</span>
* Custom Document
  * *_document* - it's special component which allow give alter structure for ourselves 
    * To override the default `Document`, create the file `./pages/_document.js` and extend the `Document` class as shown below:




```
⚠  To override the default `Document`, create the file `./pages/_document.js` and extend the `Document` class as shown below:
 
├── pages
├─── _document.js  
  ```


```js
//# DEFAULT DOCUMENT
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main /> // in here stored our content (layouts, pages and etc)
          <NextScript /> //this allow to work next.js
        </body>
      </Html>
    )
  }
}

export default MyDocument
```


```js
//## CUSTOMIZED DOCUMENT
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  //## override document
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

```

## Custom `App`


### Now how add global styles.
#### For this we can use special global component which responsible for all our app.
* With this app component causing server-side-render.
```js
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

```
* with this app we can handle custom bugs using.
```js
    <InterceptorBoundary>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </InterceptorBoundary>
```
* We can add gloabal css.
  * variant 1 
```js
// Website global styles
import '../assets/styles/common/fonts.scss';
import '../assets/styles/common/reset.scss';
import '../assets/styles/common/ui.scss';
import '../assets/styles/main.scss';
```
  * varoamt 2

  ```js
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />

      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </>
  )
}

export default MyApp

  ```

```js
function MyApp({ Component, pageProps }) {
  /**This is wrapper for all pages
     * here come current component, in whcih url corresponding
     * When change route this component renderd
   */
  return <Component {...pageProps} />
}

export default MyApp


```

<hr>

## 9. Handle custom 404 error page

Next.js generate own 404 error page

![404 error of Next.js ](https://i.imgur.com/20LwvDh.png)

  ``` 
├── pages
├─── 404.js
  ```

