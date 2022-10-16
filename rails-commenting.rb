# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#BlogPostsController is inheriting attributes from the ApplicationController. The parent controller contains code that can be run in all other controllers that are inheritted from the ApplicationController. Inside the BlogPostsController which is a child of the ApplicationController, the index method is created which will house multiple things.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #The below code is rendering all things associated with the model by setting up the instance variable of @posts to be used. The index method is a GET HTTP verb. @posts has the value of BlogPost <-- which is the model + .all <-- which will grab all IDs of the BlogPost table.
    @posts = BlogPost.all
  end

  # ---3)
  #The show method represents the rendering of one specific thing from the index above. The show method is a GET HTTP verb. The variable instance of @post represents BlogPost <-- which is the model + .find <-- is used to use a specific primary key so (params[:id]) <-- is used to input a user parameter of the primary key.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #The new method represents the rendering of a new post template of a new thing. The new method is a GET HTTP verb. The variable @post represents BlogPost <-- which is the model + .new <-- is used to render a form template to take an input before the create method for the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #The create method represents the actions of the database using the instance variable @post to add to the model table. The create method is a POST HTTP verb. The variable @post represents BlogPost <-- which is the model + .create <-- is used to create a new record into the database with private params from the blog_post_params method. If the post is valid, the page will redirect the user to the newly created post page with a new generated primary key.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    #The edit method represents the rendering of one thing to be updated. The edit method is a GET HTTP verb. The variable @post represents BlogPost <-- which is the model + .find <-- is used to used to put in a param of primary key (params[:id]) <-- which is used to render a form for user input on the specific record of the primary key.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #The update method represents the actions of the database using the instance variable @post to update the record in the model table. The update method is a PATCH HTTP verb. The variable @post represents BlogPost <-- which is the model + .update <-- is used to update the specific record from teh database with private params from the blog_post_params method. If the post is valid, the page will redirect the user to the specific show method page of the primary key.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      #This portion of the code if the post is destroyed/deleted --> will redirect the user to the index method which will display all blogs. 
      redirect_to blog_posts_path
    end
  end

  # ---9)
  #Anything below the private declaration will make any method within it to have strict permissible attributes. For the params to be used, it will be very intentional which helps with control within scope for security, and reusability of params in other methods.
  private
  def blog_post_params
    # ---10)
    #The line below is considered setting up a strong param, which are requirements needed to move forward with any methods using the private method of blog_post_params as arguments.
    params.require(:blog_post).permit(:title, :content)
  end
end
