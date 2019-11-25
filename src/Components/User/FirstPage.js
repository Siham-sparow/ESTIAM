import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Grid, Divider } from 'semantic-ui-react';
const styleWrapper={
    width:'90%',
    
    margin: '6em auto'
};
// contain the first page component
const FirstPage = () => {
    return (
        <div >
            <div style={styleWrapper}>
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <h2>Bienvenue dans l'application de tchat!!!!!!</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={styleWrapper}>
                            <Grid columns={3} stackable verticalAlign='middle' textAlign='center'>
                               <Grid.Row verticalAlign='middle'>
                                    <Grid.Column>
                                        <SignUp/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        ou
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Login />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}

export default FirstPage;