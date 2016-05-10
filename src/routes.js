import  React  from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import PostsRoute from './components/posts_index';

import PostsNew from './components/posts_new';

import PostsShow from './components/posts_show';




const Greet = function(){
	
	return (
	
	    <div>Hello World</div>
		
	 );
	   
	 

};

export default(
 
  <Route path="/" component={App} >
      
	 <IndexRoute component = {PostsRoute} />
     <Route path="posts/new" component={PostsNew} />
	 <Route path="posts/:id" component={PostsShow} />
	 
     
  
  </Route>
  
 );