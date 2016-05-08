import  React  from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import PostsRoute from './components/posts_index';

import PostsNew from './components/posts_new';




const Greet = function(){
	
	return (
	
	    <div>Hello World</div>
		
	 );
	   
	 

};

export default(
 
  <Route path="/" component={App} >
      
	 <IndexRoute component = {PostsRoute} />
     <Route path="greet"    component={Greet} />
	 <Route path="posts/new" component={PostsNew} />
	 <Route path="greet1"   component={Greet} />
	 <Route path="greet2"   component={Greet} />
	 <Route path="greet3"   component={Greet} />
	
     
  
  </Route>
  
 );