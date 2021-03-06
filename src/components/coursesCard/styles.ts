import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: '2rem',
            padding: '1rem 2rem',
            border: '1px solid gray',
            borderRadius: '.7rem',
            backgroundColor: theme.palette.background.default,

            [theme.breakpoints.down('md')]: {
                padding: '1rem',
            },

            '& h5': {
                color: theme.palette.primary.dark,
                fontWeight: 'bold',

                [theme.breakpoints.down('md')]: {
                    fontSize: '1.2rem',
                },
            },

            '& ul': {
                marginTop: '1rem',
                maxHeight: 390,
                columnCount: 2,
                columnWidth: 450,
                zIndex: 0,
                overflow: 'auto',

                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                    width: '8px',
                    marginLeft: '12px',
                },
                /* Track */
                '&::-webkit-scrollbar-track': {
                    WebkitBorderRadius: '10px',
                    borderRadius: '10px',
                },
                /* Handle */
                '&::-webkit-scrollbar-thumb': {
                    WebkitBorderRadius: '10px',
                    borderRadius: '10px',
                    background: 'rgba(170,170,170,0.5)',
                },

                [theme.breakpoints.down('md')]: {
                    marginTop: '.3rem',
                    maxHeight: 380,
                    columnCount: 3,
                    columnWidth: 200,
                    overflowX: 'auto',
                },
            },

            '& li': {
                fontSize: '1.3rem',
                color: theme.palette.primary.dark,

                [theme.breakpoints.down('md')]: {
                    fontSize: '1rem',
                },

                '& p': {
                    fontSize: '1.2rem',
                    textTransform: 'lowercase',
                },

                '& p::first-letter': {
                    textTransform: 'uppercase',
                },
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
