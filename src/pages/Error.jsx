import React from 'react';


function Error()
{    
    return(<>
    <div class="container my-4 py-4">
    <div class="row">
        <div class="col-sm-12">
            <div class="my-4 py-4">
                <h1 class="my-3 py-3">
                    Oops!</h1>
                <h2 class="my-2 py-2">
                    404 Not Found</h2>
                <div class="my-2 py-2">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="my-2 py-2">
                    <a href="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Take Me Home </a>                        
                </div>
            </div>
        </div>
    </div>
</div>
    </>);
}
export default Error;