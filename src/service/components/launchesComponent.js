import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {Table} from 'antd';
import ReactPlayer from "react-player";
import {gql} from 'apollo-boost'
const { Column, ColumnGroup } = Table;


    const GET_LAUNCHES = gql`{
        launches(limit: 5) {
            launch_date_utc
            launch_success
            rocket {
                rocket_name
            }
            links {
                video_link
            }
            details
        }
    }`;

const LaunchesListView = () => {
    const {
        data,
        error,
        loading} = useQuery( GET_LAUNCHES, {
        fetchPolicy: 'network-only'
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    let element = data.launches.map(({launch_date_utc, launch_success, rocket, links, details}, index) =>
        <tr key={index}>
            <td>{launch_date_utc}</td>
            <td>{launch_success ? "Décollage réussi" : "c'est raté"}</td>
            <td>{rocket.rocket_name}</td>
            <td><ReactPlayer
                key={index}
                url={links.video_link}
            /></td>
            <td>{details ? details : "pas de détails"}</td>
        </tr>)




    return (
            <>
                {/*<Table dataSource={dataSource} columns={columns} />*/}
                {element}
            </>
            )
};

export default LaunchesListView;
