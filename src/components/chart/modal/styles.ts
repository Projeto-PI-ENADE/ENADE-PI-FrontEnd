import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) =>
    createStyles({
        paper: {
            width: '100%',
            maxWidth: '75vw',
            padding: '0 2rem 2rem',
            boxShadow: theme.shadows[5],

            position: 'fixed',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',

            '& #modal-close-button': {
                position: 'absolute',
                top: 25,
                right: 20,
            },

            [theme.breakpoints.down('md')]: {
                maxWidth: '91vw',
                padding: '.1rem 1rem 1rem',
            },
        },
    })
);

export default useStyles;
