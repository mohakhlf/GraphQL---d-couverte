import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {Table} from 'antd';
import ReactPlayer from "react-player";
import {gql} from 'apollo-boost'
import moment from "moment";


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

    const element = data.launches.map(({launch_date_utc, launch_success, rocket, links, details}, index) => {
        const date = moment(launch_date_utc).format('LLLL')
        return (<div key={index}>
            <h2>The launch of {date} {launch_success ? "is a success" : "failed"} inside a {rocket.rocket_name}</h2>
            <ReactPlayer
                key={index}
                url={links.video_link}
            />
            <p>{details ? details : "No détails for this one"}</p>
        </div>)
    })




    return (
        <>
            {element}
        </>
    )
};

export default LaunchesListView;
