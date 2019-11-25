import React from 'react';
import  SideComponent  from "./SideComponent";
import Content from "./Content";
import { Grid } from 'semantic-ui-react';
const MessagePage = () => {
    return (
        <div>
            <Grid stackable columns={2}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideComponent />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Content />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default MessagePage;