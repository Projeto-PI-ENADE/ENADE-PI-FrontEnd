import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '1rem 2rem',
            border: '1px solid gray',
            borderRadius: '.9rem',
            boxShadow: '3px 3px 6px #00000029',

            '& legend': {
                color: theme.palette.text.primary,
                fontSize: '1.4rem',
                fontWeight: 500,
            },

            '& button': {
                margin: theme.spacing(2, 0),
                justifyContent: 'flex-start',
                transition: 'all .2s',

                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        },
    })
);

export default useStyles;
