import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '1rem',
            border: '1px solid gray',
            borderRadius: '1rem',
            boxShadow: '2px 3px 6px #00000029',
            [theme.breakpoints.down('md')]: {
                marginBottom: '1rem',
            },

            '& h6': {
                color: theme.palette.primary.dark,
            },

            '& button': {
                boxShadow: theme.shadows[2],
                color: theme.palette.primary.main,

                '& svg': {
                    [theme.breakpoints.down('md')]: {
                        width: 12,
                        height: 12,
                    },
                },
            },
        },
    })
);

export default useStyles;
