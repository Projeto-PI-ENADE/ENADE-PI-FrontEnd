import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filtersContainer: {
            paddingRight: '2rem',

            [theme.breakpoints.down('md')]: {
                marginTop: '1rem',
                paddingRight: '.5rem',
            },
        },
    })
);

export default useStyles;
