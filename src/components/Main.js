import React from 'react';
import Card from './Card'
const Main = () => {

    return(
        <div className="flex flex-wrap justify-center mt-5">
            <Card main="56%" exp="Cupidatat ipsum duis magna ea anim culpa deserunt aliquip veniam non voluptate sit elit consectetur."/>
            <Card main="512 Weeks" exp="Duis magna ea anim culpa." />
            <Card main="10000 Hours" exp="Deserunt aliquip veniam non voluptate sit elit consectetur." />
        </div>
    )
}

export default Main;