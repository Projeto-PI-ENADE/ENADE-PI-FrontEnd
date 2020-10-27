import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '0 11px',
        },

        header: {
            margin: '2rem 0',
            display: 'inline-flex',

            '& span': {
                width: 8,
                height: 30,
                borderRadius: 40,
                backgroundColor: theme.palette.primary.main,
            },

            '& h5': {
                marginLeft: '1rem',

                '& p:first-child': {
                    fontSize: '2rem',
                    fontWeight: 600,
                },

                '& p:last-child': {
                    marginLeft: 10,
                    fontSize: '2rem',
                    fontWeight: 500,
                },
            },
        },
    })
);

export default useStyles;
