### Project setup

#### Built on:

- node: v18.13.0
- yarn: 1.22.19
- npm: 9.3.1
- Docker: 20.10.23
- docker-compose: v2.15.1

#### Local development:

- `bash$ ~/smartimp: git clone https://github.com/Dinosauir/smartimp.git smartimp`
- `bash$ ~/smartimp: cd smartimp`
- `bash$ ~/smartimp: cp .env.example .env.local`
- change .env {BEARER_TOKEN} with your personal access token { Github -> Settings -> Developer Settings -> Personal Access Tokens}
- `bash$ ~/smartimp: yarn`
- **MAKE SURE NO CONTAINER IS RUNNING ON DEFAULT REDIS PORT 6379, if yes, change in .env or docker-compose accordingly.**
- `bash$ ~/smartimp: docker-compose up -d`
- `bash$ ~/smartimp: yarn build`
- `bash$ ~/smartimp: yarn start`

### Technical demands

#### What technical decisions have been taken?

The principal technical decision was choosing the right framework based on the customer request, thus choosing Next.js  
had major benefits in our situations some of them being:

- speed of development
- oob image optimization
- oob anchors optimization
- SEO ready
- ESLint ready
- dynamic routing
- lazy loading
- automatic code splitting
- internal api/SSR ( node )

#### What has been done ?

The first step was creating the correct routing for the user page, so that Next.js can help us with it's benefits ( SSR / SEO ).  
 After that, we created internal api-routes for fetching user/users gists and a particular gist. We used internal api + axios for that.  
 In our internal api we created logic to middleware through a caching system of our choice ( redis in this instance ), so every request  
 will be checked if it is already cached, and return from cache if so, improving page speed by a big margin. After that, we made sure  
 that we use Next.js <Image> and <Link> components. When we made sure we did that, we started splitting the User page into multiple components.  
 For the search, we used a global component, along with a context, so we can share the state of the search over the entire application.
In displaying gists, we also took advantage of the useState method, making it easy for us to filter the gists based on their languages.  
 To make sure our {user} param is always there, we used serverSideProps of the Next.js to pass the props to the UserPage. For styling we used Tailwind.

#### What optimizations have been done ?

Why axios ? for built in XSRF protection, automatic JSON transformation and stability across all browsers.
Why internal api and not directly external call? because in this way, we have more control over the data that  
we receive, for example, in this situation, we chose to cache every request for 2 hours so the speed of the refresh is really fast.
Here, we can also separate the data, sending and caching only the data that we need, not everything that comes from external call.
Another reason for using internal api is security, this way, we are sure that the end-user doesn't have access to the urls that we are  
fetching data to try to exploit that. We chose redis as our caching system for example, and we could easily cache the responses,  
and we don't want the end-user to have access to our sensitive data regarding saving to redis and fetching logic.  
The next thing was using next.js Image component everywhere we had images, letting the framework do it's magic optimizing the images.
The same thing was also done with Link component for anchors.
Also, we took advantage of the Next.js lazy-loading & automatic code splitting splitting the components as much as possible but not
overdoing it so the development experience will be untouched. In this way, Next.js isn't forced to render everything at a time  
and manage it's internal caching logic better.  
Why use Tailwind.css ? For speed, tailwind has an awesome garbage collector/purge feature, and it builds itself according to your code,  
so it keeps only the styling that you use in the templates in it's internal file.

#### What would be the next steps ?

Next step would be fetch the data and only keep the data that we use, in this way our caching will be smaller and faster over time.  
Another next step would be to use the useState hook only where the data will be changed, and a simple const where the data will not be.  
Another really important step will be applying image download, optimization and caching of images on the server-side also, which will  
lead to big performance improvement.
