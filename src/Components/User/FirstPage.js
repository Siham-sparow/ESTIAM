import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Grid, Divider } from 'semantic-ui-react';

// contain the first page component
const FirstPage = () => {
    return (
        <div> 
            <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                
                
                <Grid.Row verticalAlign='middle'>
        <Grid.Column>
           
            <SignUp/>

          
        </Grid.Column>

        <Grid.Column>
       
                <Login />
        </Grid.Column>
      </Grid.Row>
            </Grid>
            
        </div>
    );
}

export default FirstPage;