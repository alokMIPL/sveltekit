# Svelte

> Svelte is a tool for building fast web applications
> Similar to React or Vue, its primary goal is to make it easy to build interactive user interfaces.
> Unlike React or Vue which do the bulk of their work in the browser, Svelte converts your app into ideal JavaScript at build time.
> instead of using technique like virtual DOM diffing, Svelte writes code that cleverly updates the DOM when the state of your app changes.

# SvelteKit

> SvelteKit is a framework for bulding high-performance web apps using Svelte.
> Svelte is a component framework, SvelteKit is an app framework.

#### Sveltekit is an app framework

#### Svelte: 
> It's not quite ppossible to build a full features rich applcation ready to be deployed for production.
> Svelte is a components frmework for building user interfaces.
> You have to make decisions on other features of the app like routing, Server side rendering, Auth etc.

#### SvelteKit:
> It is a packages that uses Svelte for building user interfaces.
> Loading with a lot more features that enables you to build full fledged production ready application.
> Features exactly like routing, server side rendering, authentication, bundle optimization etc.
> There's no need to install additional packages.
> SvelteKit provides everythings for you.
> Opinions and conventions which need to be followed to implement the above said features.

## why SvelteKit?

> SvelteKit simplifies the process of buliding a web apllication for production
1. File based routing
2. Pre-rendering
3. API routes
4. Data fetching
5. optimized production build system

###### How to start project in Svelte 
``` npm cerate svelte@latest ``` and choose according to project requirment.


## Page Store

``` import {page} from '$app/store'; ```

1. $page.url
2. $page.params
3. $page.routes
4. $page.status
5. $page.error
6. $page.data
7. $page.form

## Groups
    
  src/routes/
    (app)/
    dashboard/
    item/
    +layout.svelte
    (website)/
    about/
    pricing/
    +layout.sevlte
    +page.svelte    