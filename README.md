# About Next.js framework  

## Why need next.js

###### ⚠ Seach robots can't see (index, ranking) content of pages of single page app. For this used next.js. 
###### ⚠ in nex.js no have  entry point. 
###### ⚠ no have html.
###### ⚠ Ranking - it's special algorithms with which search robot determine place of a site. 

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

## How dynamicly change of title with next ?

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