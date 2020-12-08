import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            padding: '0 1rem',
            color: '#505050',
            fontSize: '1.3rem',

            borderRadius: 50,
            boxShadow: theme.shadows[2],
            transition: 'background-color .2s',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.1rem',
            },

            '&:hover': {
                backgroundColor: '#dfdfdf',
            },

            '& svg': {
                marginLeft: 3,
            },
        },
    })
);

export default useStyles;
