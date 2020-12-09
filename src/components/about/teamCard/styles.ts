import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: '2rem',

            '& #right-side': {
                height: '100%',
                paddingRight: '18rem',

                [theme.breakpoints.down('md')]: {
                    padding: '0 0 0 1rem',
                },

                '& h5': {
                    fontWeight: 600,
                },

                '& a': {
                    transition: 'all .2s',

                    '&:hover': {
                        color: theme.palette.primary.main,
                        textDecoration: 'underline',
                    },

                    '& svg': {
                        marginRight: 5,
                    },
                },
            },
        },

        avatar: {
            width: theme.spacing(16),
            height: theme.spacing(16),

            [theme.breakpoints.down('md')]: {
                marginRight: '1rem',
                width: theme.spacing(11),
                height: theme.spacing(11),
            },
        },

        spinAnimation: {
            animation: '$spin 4s linear infinite',
        },

        '@keyframes spin': {
            '100%': {
                transform: 'rotate(360deg)',
            },
        },
    })
);

export default useStyles;
