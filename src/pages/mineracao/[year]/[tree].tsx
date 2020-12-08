import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ReactD3TreeProps, ReactD3TreeItem } from 'react-d3-tree';

import Layout from '../../../layout/layout';
import TreeMenu from '../../../components/treeMenu/treeMenu';

import yearsData from '../../../utils/data/years';
import homeUseStyles from '../../../styles/pages/yearDashboard';

let Tree: React.ComponentClass<ReactD3TreeProps, any>;

type Props = {
    treeData: ReactD3TreeItem;
};

const Mining: React.FC<Props> = ({ treeData }) => {
    const homeClasses = homeUseStyles();
    const [didMount, setDidMount] = useState(false);
    const { query, isFallback } = useRouter();

    useEffect(() => {
        (async () => {
            const response = await import('react-d3-tree');
            Tree = response.Tree;
            setDidMount(true);
        })();
    }, []);

    if (isFallback) return <Typography>Carregando...</Typography>;

    return (
        <Layout>
            <Grid container style={{ padding: '2rem', paddingBottom: 0 }}>
                <Head>
                    <title>Painel do Enade</title>
                    <meta
                        name="description"
                        content="Mineração dos dados do dataset do Enade com exibição em formato de árvore"
                    />
                </Head>

                <Grid container style={{ marginBottom: '2rem' }}>
                    <Grid
                        container
                        item
                        xs={6}
                        component={Typography}
                        variant="h1"
                        className={homeClasses.title}
                    >
                        <Typography>Mineração</Typography>{' '}
                        <Typography>de Dados</Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={6}
                        justify="flex-end"
                        className={homeClasses.yearsMenuContainer}
                    >
                        <TreeMenu
                            year={Number(query.year)}
                            tree={Number(query.tree)}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    style={{ height: '61.3vh' }}
                    alignItems="center"
                    justify="center"
                >
                    {didMount && (
                        <Tree
                            data={treeData}
                            orientation="vertical"
                            pathFunc="step"
                            styles={{
                                nodes: {
                                    node: {
                                        circle: {
                                            fill: '#1DA584',
                                            stroke: '#158167',
                                            strokeWidth: 3,
                                        },
                                    },
                                },
                            }}
                        />
                    )}
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Mining;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [];

    for await (const year of [2018, 2017] /* yearsData */) {
        paths.push({ params: { year: year.toString(), tree: '1' } });
        paths.push({ params: { year: year.toString(), tree: '2' } });
    }

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { year, tree } = context.params;

    const response: any = await import(
        `../../../utils/data/trees/${year}/${tree}`
    );

    return {
        props: {
            treeData: response.default,
        },
        // revalidate: 10,
    };
    // } catch (error) {
    // toast de erro
    // console.log(error);
    // return {
    // notFound: true,
    // };
    // }
};
