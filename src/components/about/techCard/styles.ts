import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100%',
            maxWidth: 150,
            padding: '1rem .5rem',
            boxShadow: '3px 3px 10px #00000029;',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '& img': {
                width: '60%',
                height: 'auto',
            },
        },
    })
);

export default useStyles;
