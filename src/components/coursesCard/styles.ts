import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: '2rem',
            padding: '1rem 2rem',
            border: '1px solid gray',
            borderRadius: '.7rem',

            '& h5': {
                color: theme.palette.primary.dark,
                fontWeight: 'bold',
            },

            '& ul': {
                marginTop: '1rem',
                maxHeight: 390,
                columnCount: 2,
                columnWidth: 450,
            },

            '& li': {
                fontSize: '1.3rem',
                color: theme.palette.primary.dark,
            },

            '& li::before': {
                content: '"•"',
                width: '1em',
                marginBottom: 1,
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                display: 'inline-block',
            },

            '& svg': {
                width: '80%',
                height: 'auto',
            },
        },
    })
);

export default useStyles;
