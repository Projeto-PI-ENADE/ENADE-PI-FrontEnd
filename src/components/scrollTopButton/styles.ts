import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fabButtonContainer: {
            position: 'fixed',
            right: '2rem',
            bottom: '2rem',
            '& button': {
                color: 'white',
                backgroundColor: theme.palette.primary.main,
            },

            [theme.breakpoints.down('md')]: {
                right: '1rem',
                bottom: '1rem',
            },
        },

        fabButton: {
            width: 45,
            height: 'auto',
        },
    })
);

export default useStyles;
