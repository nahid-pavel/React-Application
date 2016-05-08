import React, { Component} from 'react';


export default function CreateForm(){
	
  return(
  
	  <form onSubmit={ handleSubmit(this.props.createPosts) } >
		<div className="form-group">
				   
				   <label> Title </label>
				   <input type="text" className="form-control" {...title} />
				 
		 </div>
		<div className="form-group">
				   
				   <label> Categories </label> 
				   <input type="text" className="form-control" {...categories}/>
				 .
		 </div>
				 
		<div className="form-group">
				   
				   <label> Description </label>
				   <textarea  className="form-control" {...content} />
				 
		</div>
				 
		<button type="submit" className="btn btn-primary"> Submit </button>
	</form>
		
	);
			
}