import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '5px 0 1rem',
            fontWeight: 'bold',
            boxShadow: theme.shadows[2],
            backgroundColor: 'white',
            alignItems: 'center',

            '& div:first-child': {
                paddingLeft: '2rem',
                '& img': {
                    marginTop: 20,
                    height: 40,
                },
            },

            '& div:last-child': {
                paddingRight: '1rem',
            },
        },
        tabs: {
            '& button': {
                fontWeight: 'bold',
            },
        },
    })
);

export default useStyles;
