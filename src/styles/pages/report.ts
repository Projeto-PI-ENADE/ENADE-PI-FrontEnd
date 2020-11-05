import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardsContainer: {
            marginTop: '1rem',

            [theme.breakpoints.down('md')]: {
                marginTop: '1rem',
            },
        },
    })
);

export default useStyles;
