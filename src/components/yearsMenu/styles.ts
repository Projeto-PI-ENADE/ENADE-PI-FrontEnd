import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            padding: '0 .7rem',
            color: '#505050',
            fontSize: '1.3rem',

            border: `1px solid ${theme.palette.primary.dark}`,
            borderRadius: '.7rem',
            boxShadow: theme.shadows[2],
            transition: 'background-color .2s',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.1rem',
            },

            '&:hover': {
                backgroundCOlor: 'gray',
            },

            '& svg': {
                marginLeft: 3,
            },
        },
    })
);

export default useStyles;
