import React from 'react'

import { Icon } from '@iconify/react';
import GroupCoaching from '../components/GroupCoaching';
import AppDownload from '../components/AppDownload';

import FindCoach from './FindCoach';


const LifeCoaches = () => {
    return (
        <div>
            <FindCoach />
            <div className='m-40'><AppDownload /></div>
            <GroupCoaching />
        </div>
    )
}

export default LifeCoaches