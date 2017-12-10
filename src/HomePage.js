import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import DraftsIcon from 'material-ui-icons/Drafts';
import AttachFile from 'material-ui-icons/AttachFile';
import OpenInNew from 'material-ui-icons/OpenInNew';
import portrait from './portrait.jpg';
import resume from './resume.pdf';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: '40vh',
    }
});

const HomePage = ({classes}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Welcome
                    </Typography>
                </Toolbar>
            </AppBar>

            <div style={{ marginTop: '0vh' }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={portrait}
                                title="Siwei"
                            />
                            <CardContent>
                                <Typography type="headline" component="h2">
                                    Siwei "Robert" Li
                                </Typography>
                                <Typography component="p">
                                    2nd Year <strong>B.S. Computer Science</strong> at <strong>Georgia Tech</strong> <br/>
                                    Undergraduate Research Assistant <br />
                                    Former Software Engineering Intern at <strong>Panasonic</strong><br/>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" href={resume}>
                                    Get Resume
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Card className={classes.card}>
                            <CardContent>
                                <List subheader={<ListSubheader>Links</ListSubheader>}>
                                    <ListItem button component="a" href={resume}>
                                        <ListItemIcon><AttachFile /></ListItemIcon>
                                        <ListItemText primary="Resume"/>
                                    </ListItem>
                                   
                                    <ListItem button component="a" href="mailto:robertsiweili@gatech.edu">
                                        <ListItemIcon><DraftsIcon /></ListItemIcon>
                                        <ListItemText primary="Email: robertsiweili@gatech.edu"/>
                                    </ListItem>
                                        
                                    <ListItem button component="a" href="https://www.linkedin.com/in/robertsiweili/" target="_blank">
                                        <ListItemIcon><OpenInNew /></ListItemIcon>
                                        <ListItemText primary="LinkedIn"/>
                                    </ListItem>

                                    <ListItem button component="a" href="https://github.com/RSLi" target="_blank">
                                        <ListItemIcon><OpenInNew /></ListItemIcon>
                                        <ListItemText primary="Github"/>
                                    </ListItem>

                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0} sm={3}></Grid>
                    <Grid item xs={0} sm={3}></Grid>
                </Grid>
            </div>
        </div>
    );
}

export default withStyles(styles)(HomePage);
