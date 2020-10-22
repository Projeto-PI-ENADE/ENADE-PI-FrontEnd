import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginRight: '2rem',
            padding: '1rem 1.5rem',
            borderRadius: '.7rem',
            border: `1px solid ${theme.palette.primary.dark}`,
            boxShadow: theme.shadows[2],
            position: 'relative',

            '& h5': {
                color: theme.palette.primary.main,
                fontWeight: 600,
            },

            '& span': {
                width: 8,
                height: 30,
                borderRadius: 40,
                backgroundColor: theme.palette.primary.main,
                position: 'absolute',
                left: -4,
            },

            '& p': {
                color: '#232A2F',
                fontSize: '1.4rem',
                fontWeight: 'bold',
            },

            '& subtitle2': {
                color: '#7A848C',
            },

            '& .right-content': {
                paddingLeft: '2rem',
            },
        },
    })
);

export default useStyles;
