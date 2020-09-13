![Test Image 1](Screenshot from 2020-09-13 18-05-04.png)

<table style="width:100%"> 
        <tr> 
            <th>Functionality</th> 
            <th>Path</th> 
            <th>HTTP</th> 
            <th>Expected Output</th> 
        </tr> 
        <tr> 
            <td>Index</td> 
            <td>/blogs</td> 
            <td>GET</td> 
            <td>List all blog posts</td>
        </tr> 
        <tr> 
            <td>New</td> 
            <td>/blogs/new</td> 
            <td>GET</td> 
            <td>Show a form to get blog info</td>
        </tr> 
        <tr> 
            <td>Create</td> 
            <td>/blogs</td> 
            <td>POST</td> 
            <td>Add blog to database and redirect to home page</td>
        </tr> 
         <tr> 
            <td>Show</td> 
            <td>/blogs/:id</td> 
            <td>GET</td> 
            <td>Show a blog having given id</td>
        </tr> 
        <tr> 
            <td>Edit</td> 
            <td>/blogs/:id/edit</td> 
            <td>GET</td> 
            <td>Show edit form for a blog</td>
        </tr> 
        <tr> 
            <td>Update</td> 
            <td>/blogs/:id</td> 
            <td>PUT</td> 
            <td>Update a particular blog and redirect to updated blog</td>
        </tr> 
        <tr> 
            <td>Destroy</td> 
            <td>/blogs/:id</td> 
            <td>DELETE</td> 
            <td>Delete a particular blog and redirect to home page</td>
        </tr> 
    </table> 
